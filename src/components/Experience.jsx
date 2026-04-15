import { Stage, PresentationControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";


const Experience = () => {
  const gltf = useLoader(GLTFLoader, "./Ile.glb");

  return (      
  <Canvas style={{ height: "70vh", width: "25vw" }}>  
    <color attach="background" args={["#1f5797"]} />

    <PresentationControls>
      <Stage environment="city" intensity={0.6}>
        <primitive object={gltf.scene} scale={0.1} position-y={-1} position-x={-1} position-z={-1} />
      </Stage>
    </PresentationControls>

  </Canvas>
  );
};

export default Experience;