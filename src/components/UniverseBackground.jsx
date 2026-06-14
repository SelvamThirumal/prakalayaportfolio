import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function Galaxy() {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.02;
      groupRef.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={100}
        depth={50}
        count={8000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
}

const UniverseBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <Galaxy />
      </Canvas>
    </div>
  );
};

export default UniverseBackground;