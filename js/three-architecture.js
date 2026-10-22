/**
 * Argus Softwares - About Section 3D CAD & Precision Architecture Visualizer
 * Built with Three.js (r128+)
 * 
 * Features:
 * - Dynamic 3D CAD Parametric Mesh with Sub-second geometry preview
 * - Mode Switching: Wireframe CAD, Shaded Surface, Scanning Laser
 * - Interactive pointer drag rotation
 * - Resource optimization with IntersectionObserver
 */

(function () {
  const container = document.getElementById('threejs-architecture-container');
  if (!container) return;

  let scene, camera, renderer, cadMesh, wireMesh, scanPlane, particles;
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let targetRotation = { x: 0.2, y: 0.4 };
  let currentMode = 'wireframe'; // 'wireframe' | 'shaded' | 'scan'
  let isVisible = false;
  let animationFrameId = null;

  const clock = new THREE.Clock();

  function init() {
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 350;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const dir1 = new THREE.DirectionalLight(0x0a84ff, 3.0);
    dir1.position.set(5, 5, 5);
    scene.add(dir1);

    const dir2 = new THREE.DirectionalLight(0x10b981, 2.5);
    dir2.position.set(-5, -5, 3);
    scene.add(dir2);

    // Group
    const group = new THREE.Group();
    scene.add(group);
    window.archGroup = group;

    // 1. Torus Knot CAD Geometry (Represents complex parametric CNC & sheet metal bending geometry)
    const geometry = new THREE.TorusKnotGeometry(1.5, 0.42, 100, 24);

    // Solid Shaded Material
    const shadedMat = new THREE.MeshPhysicalMaterial({
      color: 0x161c23,
      emissive: 0x0a84ff,
      emissiveIntensity: 0.25,
      roughness: 0.2,
      metalness: 0.9,
      clearcoat: 0.8,
      wireframe: false
    });
    cadMesh = new THREE.Mesh(geometry, shadedMat);
    group.add(cadMesh);

    // Wireframe Overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00c7be,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    wireMesh = new THREE.Mesh(geometry, wireMat);
    group.add(wireMesh);

    // 2. Laser Scanning Plane
    const scanGeo = new THREE.PlaneGeometry(5, 5);
    const scanMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide
    });
    scanPlane = new THREE.Mesh(scanGeo, scanMat);
    scanPlane.rotation.x = Math.PI / 2;
    scanPlane.visible = false;
    group.add(scanPlane);

    // 3. Orbiting Data Vertices (Point Cloud)
    const ptsGeo = new THREE.BufferGeometry();
    const posArr = geometry.attributes.position.array;
    ptsGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    const ptsMat = new THREE.PointsMaterial({
      color: 0xe5252a,
      size: 0.05,
      transparent: true,
      opacity: 0.6
    });
    particles = new THREE.Points(ptsGeo, ptsMat);
    group.add(particles);

    // Setup interactive mode buttons
    setupControls();
    setupEvents();
    updateMode('wireframe');

    // Observer
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            clock.start();
            animate();
          }
        });
      }, { threshold: 0.1 });
      io.observe(container);
    } else {
      isVisible = true;
      animate();
    }
  }

  function updateMode(mode) {
    currentMode = mode;
    if (mode === 'wireframe') {
      cadMesh.visible = false;
      wireMesh.visible = true;
      scanPlane.visible = false;
      particles.visible = true;
    } else if (mode === 'shaded') {
      cadMesh.visible = true;
      wireMesh.visible = false;
      scanPlane.visible = false;
      particles.visible = false;
    } else if (mode === 'scan') {
      cadMesh.visible = true;
      wireMesh.visible = true;
      scanPlane.visible = true;
      particles.visible = true;
    }

    // Update button states in UI
    const btns = document.querySelectorAll('.cad-mode-btn');
    btns.forEach((btn) => {
      const active = btn.getAttribute('data-mode') === mode;
      btn.classList.toggle('bg-primary', active);
      btn.classList.toggle('text-white', active);
      btn.classList.toggle('bg-surface-container', !active);
      btn.classList.toggle('text-on-surface-variant', !active);
    });
  }

  function setupControls() {
    const btns = document.querySelectorAll('.cad-mode-btn');
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const mode = btn.getAttribute('data-mode');
        if (mode) updateMode(mode);
      });
    });
  }

  function setupEvents() {
    container.addEventListener('pointerdown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointermove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotation.y += deltaX * 0.01;
        targetRotation.x += deltaY * 0.01;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    });

    window.addEventListener('pointerup', () => {
      isDragging = false;
    });

    const ro = new ResizeObserver(() => {
      if (!renderer || !camera || !container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    ro.observe(container);
  }

  function animate() {
    if (!isVisible) {
      animationFrameId = null;
      return;
    }

    animationFrameId = requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    if (!isDragging) {
      targetRotation.y += delta * 0.4;
      targetRotation.x = Math.sin(elapsedTime * 0.5) * 0.3;
    }

    if (window.archGroup) {
      window.archGroup.rotation.y += (targetRotation.y - window.archGroup.rotation.y) * 0.08;
      window.archGroup.rotation.x += (targetRotation.x - window.archGroup.rotation.x) * 0.08;
    }

    // Animate scan plane if in scan mode
    if (currentMode === 'scan' && scanPlane) {
      scanPlane.position.y = Math.sin(elapsedTime * 2.5) * 1.8;
    }

    renderer.render(scene, camera);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
