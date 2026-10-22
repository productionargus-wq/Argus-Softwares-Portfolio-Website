/**
 * Argus Softwares - Scroll-Reactive Ambient 3D Background
 * Built with Three.js (r128+)
 * 
 * Features:
 * - Fluid Cybernetic Grid & Constellation Cloud
 * - Scroll-position camera lerp (Moves and tilts as page scrolls)
 * - Dynamic color palette shifting matching sections
 * - Auto-pauses when tab is inactive to preserve battery and performance
 */

(function () {
  const canvas = document.getElementById('threejs-bg-canvas');
  if (!canvas) return;

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let scene, camera, renderer, particles, gridLines;
  let scrollProgress = 0;
  let targetScrollProgress = 0;
  let isTabActive = true;
  let animationFrameId = null;

  const clock = new THREE.Clock();

  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 45);

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: false, // Performance friendly for ambient background
      powerPreference: 'low-power'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);

    // --- 1. Ambient Floating Star / Data Constellation ---
    const count = 420;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const palette = [
      new THREE.Color(0xe5252a), // Primary Red
      new THREE.Color(0x0a84ff), // Electric Blue
      new THREE.Color(0x7928ca), // Vivid Violet
      new THREE.Color(0x10b981), // Emerald Neon
      new THREE.Color(0xff6b00)  // Sunburst Orange
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 120;
      positions[i3 + 1] = (Math.random() - 0.5) * 120;
      positions[i3 + 2] = (Math.random() - 0.5) * 80;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // --- 2. Geometric Cybernetic Waving Grid Horizon ---
    const gridGeo = new THREE.PlaneGeometry(160, 160, 24, 24);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x0a84ff,
      wireframe: true,
      transparent: true,
      opacity: 0.05
    });

    gridLines = new THREE.Mesh(gridGeo, gridMat);
    gridLines.rotation.x = -Math.PI / 2.3;
    gridLines.position.y = -22;
    gridLines.position.z = -10;
    scene.add(gridLines);

    // Events
    window.addEventListener('resize', onWindowResize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', () => {
      isTabActive = !document.hidden;
      if (isTabActive && !animationFrameId) {
        clock.start();
        animate();
      }
    });

    // Compute initial scroll
    onScroll();

    // Start loop
    animate();
  }

  function onWindowResize() {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onScroll() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      targetScrollProgress = Math.min(Math.max(window.scrollY / docHeight, 0), 1);
    }
  }

  function animate() {
    if (!isTabActive) {
      animationFrameId = null;
      return;
    }

    animationFrameId = requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    if (!prefersReducedMotion) {
      // Smooth interpolation for scroll progress
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.05;

      // Camera transitions based on scroll position
      camera.position.y = (0.5 - scrollProgress) * 35;
      camera.position.z = 45 - Math.sin(scrollProgress * Math.PI) * 12;
      camera.rotation.z = Math.sin(scrollProgress * Math.PI * 2) * 0.08;

      // Gentle continuous ambient drift
      particles.rotation.y = elapsedTime * 0.04 + scrollProgress * 1.5;
      particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.06;

      // Subtle ground wave
      gridLines.position.z = -10 + scrollProgress * 15;
      gridLines.rotation.z = elapsedTime * 0.02 + scrollProgress * 0.3;
    }

    renderer.render(scene, camera);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
