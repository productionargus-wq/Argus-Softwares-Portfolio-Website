/**
 * Argus Softwares - Hero 3D Interactive WebGL Scene
 * Built with Three.js (r128+)
 * Features:
 * - 3D Geometric Brand Monolith & Orbiting Swoosh
 * - Gyroscopic Spectral Rings & Floating Capability Satellites
 * - Interactive Mouse Parallax & Orbit Drag Interaction
 * - Viewport Visibility IntersectionObserver (Pauses when offscreen)
 */

(function () {
  const container = document.getElementById('threejs-hero-container');
  if (!container) return;

  // Check WebGL availability
  if (!window.WebGLRenderingContext) {
    container.innerHTML = '<div class="flex items-center justify-center h-full text-sm text-gray-500">WebGL not supported</div>';
    return;
  }

  let scene, camera, renderer, mainGroup, coreMesh, cageMesh, ring1, ring2, ring3, particles;
  const satellites = [];
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let targetRotation = { x: 0.15, y: -0.3 };
  let mouseParallax = { x: 0, y: 0 };
  let isVisible = true;
  let animationFrameId = null;

  const clock = new THREE.Clock();

  function init() {
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 500;

    // 1. Scene & Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.2);

    // 2. Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Key Light - Argus Brand Red
    const lightRed = new THREE.DirectionalLight(0xe5252a, 3.2);
    lightRed.position.set(6, 6, 6);
    scene.add(lightRed);

    // Fill Light - Electric Blue
    const lightBlue = new THREE.DirectionalLight(0x0a84ff, 2.8);
    lightBlue.position.set(-6, -4, 4);
    scene.add(lightBlue);

    // Rim Light - Vivid Violet
    const lightViolet = new THREE.DirectionalLight(0x7928ca, 2.2);
    lightViolet.position.set(0, 8, -4);
    scene.add(lightViolet);

    // Soft Point Light at center
    const centerLight = new THREE.PointLight(0xffffff, 1.5, 12);
    centerLight.position.set(0, 0, 0);
    scene.add(centerLight);

    // 4. Main Group holding everything
    mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- A. Central Precision Monolith / Gem (Argus 'A' Core) ---
    // Double-cone / Bipyramid representing the triangular core
    const coreGeo = new THREE.CylinderGeometry(0, 1.6, 2.4, 3, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xbe0017,
      emissive: 0x440008,
      roughness: 0.25,
      metalness: 0.65,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      flatShading: true
    });
    coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.rotation.x = Math.PI;
    coreMesh.position.y = 0.2;
    mainGroup.add(coreMesh);

    // Secondary inverted prism for high-tech architectural feel
    const innerGeo = new THREE.OctahedronGeometry(1.2, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x161c23,
      emissive: 0x1a202c,
      roughness: 0.3,
      metalness: 0.9,
      flatShading: true
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // --- B. Floating Geometric Wireframe Shield ---
    const cageGeo = new THREE.IcosahedronGeometry(2.35, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x0a84ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    cageMesh = new THREE.Mesh(cageGeo, cageMat);
    mainGroup.add(cageMesh);

    // --- C. The Signature Argus Swoosh Arc (Curved Torus & Ribbon) ---
    // Ring 1: Primary Brand Red Angled Orbit
    const ring1Geo = new THREE.TorusGeometry(2.9, 0.05, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xe5252a,
      emissive: 0xbe0017,
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2
    });
    ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 8;
    mainGroup.add(ring1);

    // Ring 2: Electric Blue Gyroscope
    const ring2Geo = new THREE.TorusGeometry(3.2, 0.035, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x0a84ff,
      emissive: 0x0a84ff,
      emissiveIntensity: 0.3,
      metalness: 0.8,
      roughness: 0.2
    });
    ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    mainGroup.add(ring2);

    // Ring 3: Vivid Violet Outer Beacon
    const ring3Geo = new THREE.TorusGeometry(3.55, 0.02, 16, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x7928ca,
      transparent: true,
      opacity: 0.6
    });
    ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 3;
    mainGroup.add(ring3);

    // --- D. 6 Capability Satellite Nodes (Argus Product Suite) ---
    const satColors = [
      { color: 0xe5252a, name: 'Attendance' },
      { color: 0x0a84ff, name: 'Timeline CNC' },
      { color: 0x10b981, name: 'MetalCalc' },
      { color: 0xff6b00, name: 'Franchise OS' },
      { color: 0x7928ca, name: 'Cloud Runtimes' },
      { color: 0x00c7be, name: 'AI Vision' }
    ];

    satColors.forEach((item, index) => {
      const satGeo = new THREE.DodecahedronGeometry(0.24, 0);
      const satMat = new THREE.MeshPhysicalMaterial({
        color: item.color,
        emissive: item.color,
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.8,
        clearcoat: 1
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      
      const angle = (index / satColors.length) * Math.PI * 2;
      const radius = 2.85 + (index % 2) * 0.45;
      
      satMesh.userData = {
        baseAngle: angle,
        currentAngle: angle,
        speed: 0.012 + (index * 0.002),
        radius: radius,
        yPhase: index * 1.1,
        orbitTilt: (index % 2 === 0 ? 1 : -1) * 0.45
      };

      satMesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 0.6,
        Math.sin(angle) * radius
      );

      mainGroup.add(satMesh);
      satellites.push(satMesh);
    });

    // --- E. Ambient Micro-Particle Swarm ---
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0xe5252a),
      new THREE.Color(0x0a84ff),
      new THREE.Color(0x10b981),
      new THREE.Color(0x7928ca),
      new THREE.Color(0xff6b00)
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const rad = 2.2 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i3] = rad * Math.cos(phi) * Math.cos(theta);
      positions[i3 + 1] = rad * Math.sin(phi);
      positions[i3 + 2] = rad * Math.cos(phi) * Math.sin(theta);

      const col = palette[Math.floor(Math.random() * palette.length)];
      particleColors[i3] = col.r;
      particleColors[i3 + 1] = col.g;
      particleColors[i3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Initial group tilt
    mainGroup.rotation.x = targetRotation.x;
    mainGroup.rotation.y = targetRotation.y;

    // Attach Event Listeners
    setupEvents();

    // Start Animation Loop
    animate();
  }

  function setupEvents() {
    // 1. Mouse Drag to Rotate 3D Model
    container.addEventListener('pointerdown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointermove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotation.y += deltaX * 0.008;
        targetRotation.x += deltaY * 0.008;

        // Clamp vertical angle to avoid upside-down flip
        targetRotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, targetRotation.x));

        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        // Parallax when hovering near container
        const rect = container.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
          mouseParallax.x = normX * 0.45;
          mouseParallax.y = normY * 0.35;
        }
      }
    });

    window.addEventListener('pointerup', () => {
      isDragging = false;
    });

    // 2. Responsive Resize
    const resizeObserver = new ResizeObserver(() => {
      if (!renderer || !camera || !container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    // 3. Pause Animation when offscreen to preserve CPU/GPU
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            clock.start();
            animate();
          }
        });
      }, { threshold: 0.05 });
      io.observe(container);
    }
  }

  function animate() {
    if (!isVisible) {
      animationFrameId = null;
      return;
    }

    animationFrameId = requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    // Idle core spins
    coreMesh.rotation.y += delta * 0.7;
    coreMesh.rotation.z += delta * 0.25;

    cageMesh.rotation.y -= delta * 0.3;
    cageMesh.rotation.x += delta * 0.2;

    // Orbiting Rings
    ring1.rotation.z += delta * 0.8;
    ring2.rotation.z -= delta * 0.6;
    ring3.rotation.z += delta * 0.4;

    // Particle Swarm Breathing & Rotation
    particles.rotation.y += delta * 0.12;
    particles.rotation.x = Math.sin(elapsedTime * 0.4) * 0.1;

    // Satellite orbits
    satellites.forEach((sat) => {
      sat.userData.currentAngle += sat.userData.speed;
      const ang = sat.userData.currentAngle;
      const rad = sat.userData.radius;

      sat.position.x = Math.cos(ang) * rad;
      sat.position.z = Math.sin(ang) * rad;
      sat.position.y = Math.sin(ang * 2 + elapsedTime * 1.5 + sat.userData.yPhase) * 0.75;

      sat.rotation.x += delta * 1.5;
      sat.rotation.y += delta * 1.8;
    });

    // Smooth damping (lerp) towards target rotation + mouse parallax
    if (!isDragging) {
      // Auto continuous slow spin when not dragging
      targetRotation.y += delta * 0.25;
    }

    const currentTargetX = targetRotation.x + mouseParallax.y;
    const currentTargetY = targetRotation.y + mouseParallax.x;

    mainGroup.rotation.x += (currentTargetX - mainGroup.rotation.x) * 0.06;
    mainGroup.rotation.y += (currentTargetY - mainGroup.rotation.y) * 0.06;

    // Render
    renderer.render(scene, camera);
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
