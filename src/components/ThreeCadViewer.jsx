import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeCadViewer() {
  const containerRef = useRef(null);
  const [mode, setMode] = useState('wireframe'); // 'wireframe' | 'shaded' | 'scan'
  const modeRef = useRef('wireframe');
  const groupRef = useRef(null);
  const scanPlaneRef = useRef(null);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scene, camera, renderer, cadMesh, wireMesh, scanPlane, particles;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotation = { x: 0.2, y: 0.4 };
    let isVisible = false;
    let animationFrameId = null;

    const clock = new THREE.Clock();

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

    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const dir1 = new THREE.DirectionalLight(0x0a84ff, 3.0);
    dir1.position.set(5, 5, 5);
    scene.add(dir1);

    const dir2 = new THREE.DirectionalLight(0x10b981, 2.5);
    dir2.position.set(-5, -5, 3);
    scene.add(dir2);

    const group = new THREE.Group();
    scene.add(group);
    groupRef.current = group;

    // Torus Knot CAD Geometry
    const geometry = new THREE.TorusKnotGeometry(1.4, 0.4, 100, 24);

    // Solid Shaded
    const shadedMat = new THREE.MeshPhysicalMaterial({
      color: 0x161c23,
      emissive: 0x0a84ff,
      emissiveIntensity: 0.25,
      roughness: 0.2,
      metalness: 0.9,
      clearcoat: 0.8
    });
    cadMesh = new THREE.Mesh(geometry, shadedMat);
    group.add(cadMesh);

    // Wireframe Overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00c7be,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    wireMesh = new THREE.Mesh(geometry, wireMat);
    group.add(wireMesh);

    // Laser Scanning Plane
    const scanGeo = new THREE.PlaneGeometry(5, 5);
    const scanMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    });
    scanPlane = new THREE.Mesh(scanGeo, scanMat);
    scanPlane.rotation.x = Math.PI / 2;
    group.add(scanPlane);
    scanPlaneRef.current = scanPlane;

    // Point Cloud Vertices
    const ptsGeo = new THREE.BufferGeometry();
    const posArr = geometry.attributes.position.array;
    ptsGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    const ptsMat = new THREE.PointsMaterial({
      color: 0xe5252a,
      size: 0.045,
      transparent: true,
      opacity: 0.7
    });
    particles = new THREE.Points(ptsGeo, ptsMat);
    group.add(particles);

    const onPointerDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        targetRotation.y += deltaX * 0.01;
        targetRotation.x += deltaY * 0.01;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

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
      }, { threshold: 0.1 });
      io.observe(container);
    } else {
      isVisible = true;
      animate();
    }

    function animate() {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Apply mode visibility
      const curMode = modeRef.current;
      if (curMode === 'wireframe') {
        cadMesh.visible = false;
        wireMesh.visible = true;
        scanPlane.visible = false;
        particles.visible = true;
      } else if (curMode === 'shaded') {
        cadMesh.visible = true;
        wireMesh.visible = false;
        scanPlane.visible = false;
        particles.visible = false;
      } else if (curMode === 'scan') {
        cadMesh.visible = true;
        wireMesh.visible = true;
        scanPlane.visible = true;
        particles.visible = true;
        scanPlane.position.y = Math.sin(elapsedTime * 2.8) * 1.8;
      }

      if (!isDragging) {
        targetRotation.y += delta * 0.45;
        targetRotation.x = Math.sin(elapsedTime * 0.5) * 0.25;
      }

      group.rotation.y += (targetRotation.y - group.rotation.y) * 0.08;
      group.rotation.x += (targetRotation.x - group.rotation.x) * 0.08;

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
      geometry.dispose();
      shadedMat.dispose();
      wireMat.dispose();
      scanGeo.dispose();
      scanMat.dispose();
      ptsGeo.dispose();
      ptsMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative rounded-3xl bg-surface-elevated/85 backdrop-blur-xl border border-white/80 p-5 shadow-[0_12px_36px_rgba(30,36,43,0.06)] flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between mb-3 z-10">
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-emerald-neon font-bold">
            Interactive CAD Engine
          </span>
          <h4 className="font-headline text-lg font-bold text-on-surface">Sub-Second Mesh Inspection</h4>
        </div>
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-container/70 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setMode('wireframe')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              mode === 'wireframe' ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Wireframe
          </button>
          <button
            type="button"
            onClick={() => setMode('shaded')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              mode === 'shaded' ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Solid CAD
          </button>
          <button
            type="button"
            onClick={() => setMode('scan')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              mode === 'scan' ? 'bg-emerald-neon text-white shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Laser Scan
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-full h-[280px] sm:h-[320px] touch-none cursor-grab active:cursor-grabbing"
        title="Interactive CAD Geometry: Drag to rotate"
      />

      <div className="flex items-center justify-between pt-3 border-t border-surface-container text-xs text-on-surface-variant z-10">
        <span className="inline-flex items-center gap-1 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-neon animate-pulse"></span>
          Direct STEP / DXF Parser Telemetry
        </span>
        <span className="font-semibold text-primary">0.08s Parsing Latency</span>
      </div>
    </div>
  );
}
