import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const BackgroundCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles Geometry
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      scales[i] = Math.random() * 2 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Particle Shader / Material
    const material = new THREE.PointsMaterial({
      color: new THREE.Color('#FF5A1F'),
      size: 0.6,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Floating Geometric Wireframe Mesh (Torus Knot for futuristic dark luxury aesthetic)
    const torusGeometry = new THREE.TorusKnotGeometry(12, 3, 100, 16);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#FF5A1F'),
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.position.set(20, -10, -20);
    scene.add(torusMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate torus
      torusMesh.rotation.x = elapsedTime * 0.05;
      torusMesh.rotation.y = elapsedTime * 0.08;

      // Rotate particle field
      particles.rotation.y = elapsedTime * 0.02 + targetX * 0.1;
      particles.rotation.x = elapsedTime * 0.01 + targetY * 0.1;

      // Animate individual particles gently
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        array[i3 + 1] += Math.sin(elapsedTime + array[i3]) * 0.01;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Three.js Canvas container */}
      <div ref={mountRef} className="absolute inset-0 opacity-80" />

      {/* Aurora Ambient Gradient Blobs */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#FF5A1F]/10 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#FF5A1F]/08 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[40%] left-[-15%] w-[450px] h-[450px] bg-amber-600/05 rounded-full blur-[150px]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
    </div>
  );
};
