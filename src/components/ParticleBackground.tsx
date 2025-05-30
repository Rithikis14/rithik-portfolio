
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Base rotation
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // Mouse influence
      const mouseInfluenceX = (mousePosition.x - 0.5) * 0.0005;
      const mouseInfluenceY = (mousePosition.y - 0.5) * 0.0005;
      
      ref.current.rotation.x += mouseInfluenceY;
      ref.current.rotation.y += mouseInfluenceX;
      
      // Add some dynamic movement based on mouse
      ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * (mousePosition.x - 0.5) * 2;
      ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.1) * (mousePosition.y - 0.5) * 2;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

const ParticleBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ParticleField mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
