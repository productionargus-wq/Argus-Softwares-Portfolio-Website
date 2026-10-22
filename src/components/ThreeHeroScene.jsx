import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeHeroScene() {
  const containerRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scene, camera, renderer, mainGroup, coreMesh, cageMesh, ring1, ring2, ring3, particles;
    const satellites = [];
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotation = { x: 0.15, y: -0.3 };
    let mouseParallax = { x: 0, y: 0 };
    let isVisible = true;
    let animationFrameId = null;

    const clock = new THREE.Clock();

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 500;

    // Scene & Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.2);

    // Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const lightRed = new THREE.DirectionalLight(0xe5252a, 3.2);
    lightRed.position.set(6, 6, 6);
    scene.add(lightRed);

    const lightBlue = new THREE.DirectionalLight(0x0a84ff, 2.8);
    lightBlue.position.set(-6, -4, 4);
    scene.add(lightBlue);

    const lightViolet = new THREE.DirectionalLight(0x7928ca, 2.2);
    lightViolet.position.set(0, 8, -4);
    scene.add(lightViolet);

    // Main Group
    mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Prism Monolith (Argus Red Gem)
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

    // Inner Obsidian Core
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

    // 2. High-Tech Wireframe Geodesic Cage
    const cageGeo = new THREE.IcosahedronGeometry(2.35, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x0a84ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    cageMesh = new THREE.Mesh(cageGeo, cageMat);
    mainGroup.add(cageMesh);

    // 3. Gyroscopic Orbital Rings
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

    const ring3Geo = new THREE.TorusGeometry(3.55, 0.02, 16, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x7928ca,
      transparent: true,
      opacity: 0.6
    });
    ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 3;
    mainGroup.add(ring3);

    // 4. Orbiting Satellites (Argus Capabilities)
    const satColors = [0xe5252a, 0x0a84ff, 0x10b981, 0xff6b00, 0x7928ca, 0x00c7be];
    satColors.forEach((color, index) => {
      const satGeo = new THREE.DodecahedronGeometry(0.24, 0);
      const satMat = new THREE.MeshPhysicalMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.8,
        clearcoat: 1
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      const angle = (index / satColors.length) * Math.PI * 2;
      const radius = 2.85 + (index % 2) * 0.45;

      satMesh.userData = {
        currentAngle: angle,
        speed: 0.012 + (index * 0.002),
        radius: radius,
        yPhase: index * 1.1
      };

      satMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 0.6, Math.sin(angle) * radius);
      mainGroup.add(satMesh);
      satellites.push(satMesh);
    });

    // 5. Ambient Micro-particles
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

    // Event Listeners
    const onPointerDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        targetRotation.y += deltaX * 0.008;
        targetRotation.x += deltaY * 0.008;
        targetRotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, targetRotation.x));
        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
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
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Resize Observer
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

    // IntersectionObserver to pause when offscreen
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
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

    function animate() {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      coreMesh.rotation.y += delta * 0.7;
      coreMesh.rotation.z += delta * 0.25;

      cageMesh.rotation.y -= delta * 0.3;
      cageMesh.rotation.x += delta * 0.2;

      ring1.rotation.z += delta * 0.8;
      ring2.rotation.z -= delta * 0.6;
      ring3.rotation.z += delta * 0.4;

      particles.rotation.y += delta * 0.12;

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

      if (!isDragging) {
        targetRotation.y += delta * 0.25;
      }

      const currentTargetX = targetRotation.x + mouseParallax.y;
      const currentTargetY = targetRotation.y + mouseParallax.x;

      mainGroup.rotation.x += (currentTargetX - mainGroup.rotation.x) * 0.06;
      mainGroup.rotation.y += (currentTargetY - mainGroup.rotation.y) * 0.06;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      ro.disconnect();
      if (io) io.disconnect();

      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-3xl bg-surface-elevated/75 backdrop-blur-xl shadow-[0_20px_50px_rgba(30,36,43,0.12)] p-2 border border-white/90 overflow-hidden">
      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className={`w-full h-[460px] sm:h-[500px] touch-none transition-cursor ${
          isInteracting ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        title="Interactive 3D Engine: Drag to rotate model"
      />

      {/* Floating Micro Badges */}
      <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-surface-elevated/95 backdrop-blur-md shadow-md border border-white/80 flex items-center gap-1.5 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-vivid-violet animate-ping"></span>
        <span className="font-label text-xs text-on-surface font-bold tracking-wider">3D ENGINE ACTIVE</span>
      </div>

      <div className="absolute bottom-5 right-5 px-3 py-1 rounded-full bg-surface-elevated/95 backdrop-blur-md shadow-md border border-white/80 flex items-center gap-1.5 pointer-events-none">
        <span className="material-symbols-outlined text-electric-blue text-[16px] animate-spin">sync</span>
        <span className="font-label text-xs text-on-surface font-semibold tracking-wider">DRAG TO ROTATE</span>
      </div>
    </div>
  );
}
