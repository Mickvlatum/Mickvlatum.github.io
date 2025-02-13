import React, { useEffect, useRef, createElement } from "react";
import * as THREE from "three";
export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0
  });
  const frameRef = useRef<number>();
  useEffect(() => {
    if (!containerRef.current) return;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    const geometry = new THREE.BufferGeometry();
    const count = 250;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const randomness = new Float32Array(count * 3);
    const baseColor = new THREE.Color("#9333ea");
    const altColor = new THREE.Color("#6366f1");
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 50;
      const randomAngle = Math.random() * Math.PI * 2;
      const randomRadius = radius * Math.pow(Math.random(), 0.5);
      positions[i3] = Math.cos(randomAngle) * randomRadius;
      positions[i3 + 1] = (Math.random() - 0.5) * radius;
      positions[i3 + 2] = Math.sin(randomAngle) * randomRadius;
      randomness[i3] = Math.random() * 2 - 1;
      randomness[i3 + 1] = Math.random() * 2 - 1;
      randomness[i3 + 2] = Math.random() * 2 - 1;
      const mixedColor = baseColor.clone().lerp(altColor, Math.random());
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
      scales[i] = Math.random() * 2;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));
    const material = new THREE.PointsMaterial({
      size: 0.7,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: texture
    });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;
    let time = 0;
    const animate = () => {
      time += 0.001;
      if (particles && scene && camera && renderer) {
        const positions = particles.geometry.attributes.position.array as Float32Array;
        const scales = particles.geometry.attributes.scale.array as Float32Array;
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          positions[i3] += Math.sin(time + positions[i3 + 1] * 0.1) * 0.1;
          positions[i3 + 1] += Math.cos(time + positions[i3] * 0.1) * 0.1;
          positions[i3 + 2] += Math.sin(time + positions[i3 + 1] * 0.1) * 0.1;
          const dx = (mouseRef.current.x - positions[i3]) * 0.00001;
          const dy = (mouseRef.current.y - positions[i3 + 1]) * 0.00001;
          positions[i3] += dx;
          positions[i3 + 1] += dy;
          scales[i] = Math.sin(time * 2 + i) * 0.5 + 1.5;
        }
        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.scale.needsUpdate = true;
        particles.rotation.y = time * 0.1;
        particles.rotation.x = Math.sin(time * 0.2) * 0.2;
        renderer.render(scene, camera);
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    const handleResize = () => {
      if (!camera || !renderer) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX - window.innerWidth / 2) * 2;
      mouseRef.current.y = -(event.clientY - window.innerHeight / 2) * 2;
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (texture) texture.dispose();
    };
  }, []);
  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }} />;
};