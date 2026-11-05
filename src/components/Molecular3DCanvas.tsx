import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Molecular3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 16);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'low-power',
      });
    } catch {
      return; // Graceful fallback
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // transparent
    container.appendChild(renderer.domElement);

    // 2. Lighting (Blender 3-point rim & key lighting)
    const ambientLight = new THREE.AmbientLight(0x0f2744, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 3.2); // laser cyan
    keyLight.position.set(5, 6, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xa855f7, 2.5); // violet rim
    rimLight.position.set(-6, -4, -6);
    scene.add(rimLight);

    const pointLight = new THREE.PointLight(0x22d3ee, 4, 15);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // 3. Biomolecular 3D Assembly (Blender-like structure)
    const molecularGroup = new THREE.Group();
    scene.add(molecularGroup);

    // A. Alpha-Helix Ribbon 1 (Curved Ribbon)
    class HelixCurve extends THREE.Curve<THREE.Vector3> {
      scale: number;
      constructor(scale = 1) {
        super();
        this.scale = scale;
      }
      getPoint(t: number): THREE.Vector3 {
        const angle = t * Math.PI * 6;
        const x = Math.sin(angle) * 2.2;
        const y = (t - 0.5) * 8.5;
        const z = Math.cos(angle) * 2.2;
        return new THREE.Vector3(x, y, z).multiplyScalar(this.scale);
      }
    }

    const path1 = new HelixCurve(1);
    const tubeGeometry1 = new THREE.TubeGeometry(path1, 100, 0.28, 12, false);
    const helixMaterial1 = new THREE.MeshStandardMaterial({
      color: 0x06b6d4, // cyan
      roughness: 0.25,
      metalness: 0.4,
      wireframe: false,
    });
    const helixMesh1 = new THREE.Mesh(tubeGeometry1, helixMaterial1);
    helixMesh1.rotation.z = Math.PI / 4;
    molecularGroup.add(helixMesh1);

    // B. Alpha-Helix Ribbon 2 (Opposing Helix)
    class HelixCurve2 extends THREE.Curve<THREE.Vector3> {
      scale: number;
      constructor(scale = 1) {
        super();
        this.scale = scale;
      }
      getPoint(t: number): THREE.Vector3 {
        const angle = t * Math.PI * 5 + Math.PI;
        const x = Math.sin(angle) * 2.8 + 1.2;
        const y = (t - 0.5) * 7.5;
        const z = Math.cos(angle) * 2.0 - 1.0;
        return new THREE.Vector3(x, y, z).multiplyScalar(this.scale);
      }
    }

    const path2 = new HelixCurve2(1);
    const tubeGeometry2 = new THREE.TubeGeometry(path2, 90, 0.24, 12, false);
    const helixMaterial2 = new THREE.MeshStandardMaterial({
      color: 0xd946ef, // magenta / pink
      roughness: 0.25,
      metalness: 0.4,
    });
    const helixMesh2 = new THREE.Mesh(tubeGeometry2, helixMaterial2);
    helixMesh2.rotation.x = -Math.PI / 6;
    helixMesh2.rotation.y = Math.PI / 3;
    molecularGroup.add(helixMesh2);

    // C. Central Small Molecule / Ligand Structure (Heteroatoms + Bonds)
    const ligandGroup = new THREE.Group();
    const atomMaterialCarbon = new THREE.MeshStandardMaterial({
      color: 0x10b981, // green C
      roughness: 0.2,
      metalness: 0.2,
    });
    const atomMaterialOxygen = new THREE.MeshStandardMaterial({
      color: 0xef4444, // red O
      roughness: 0.2,
      metalness: 0.2,
    });
    const atomMaterialNitrogen = new THREE.MeshStandardMaterial({
      color: 0x3b82f6, // blue N
      roughness: 0.2,
      metalness: 0.2,
    });

    const sphereGeo = new THREE.SphereGeometry(0.32, 24, 24);
    const sphereSmallGeo = new THREE.SphereGeometry(0.24, 20, 20);

    // Ring of 6 atoms (Aromatic benzene scaffold)
    const ringRadius = 1.2;
    const ringPositions: THREE.Vector3[] = [];
    for (let i = 0; i < 6; i++) {
      const theta = (i / 6) * Math.PI * 2;
      const pos = new THREE.Vector3(Math.cos(theta) * ringRadius, Math.sin(theta) * ringRadius, 0);
      ringPositions.push(pos);
      const atom = new THREE.Mesh(
        sphereGeo,
        i === 2 ? atomMaterialNitrogen : i === 4 ? atomMaterialOxygen : atomMaterialCarbon
      );
      atom.position.copy(pos);
      ligandGroup.add(atom);
    }

    // Connect ring bonds
    const bondMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.4,
      metalness: 0.6,
    });

    for (let i = 0; i < 6; i++) {
      const p1 = ringPositions[i];
      const p2 = ringPositions[(i + 1) % 6];
      const distance = p1.distanceTo(p2);
      const bondGeo = new THREE.CylinderGeometry(0.08, 0.08, distance, 12);
      const bond = new THREE.Mesh(bondGeo, bondMaterial);
      bond.position.copy(p1).add(p2).multiplyScalar(0.5);
      bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p2.clone().sub(p1).normalize());
      ligandGroup.add(bond);
    }

    // Tail substituent chain
    const tailPos1 = new THREE.Vector3(1.8, 1.4, 0.4);
    const tailAtom1 = new THREE.Mesh(sphereSmallGeo, atomMaterialNitrogen);
    tailAtom1.position.copy(tailPos1);
    ligandGroup.add(tailAtom1);

    const tailPos2 = new THREE.Vector3(2.5, 2.1, -0.2);
    const tailAtom2 = new THREE.Mesh(sphereSmallGeo, atomMaterialOxygen);
    tailAtom2.position.copy(tailPos2);
    ligandGroup.add(tailAtom2);

    molecularGroup.add(ligandGroup);

    // D. Surrounding Solvent & Interaction Dots (Floating dust / particles)
    const particleCount = 140;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 12;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.12,
      transparent: true,
      opacity: 0.6,
    });
    const particleCloud = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleCloud);

    // 4. Subtle Interactive Parallax & Animation Loop
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.4;
      mouseY = y * 0.4;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Blender-like gentle continuous rotation
      molecularGroup.rotation.y = elapsedTime * 0.28 + mouseX;
      molecularGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2 + mouseY;
      molecularGroup.position.y = Math.sin(elapsedTime * 0.6) * 0.25;

      // Pulse ligand slightly
      ligandGroup.rotation.z = Math.sin(elapsedTime * 0.4) * 0.15;

      // Rotate particle cloud slowly
      particleCloud.rotation.y = -elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 5. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};
