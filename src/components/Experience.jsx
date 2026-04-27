import { Stage, PresentationControls, OrbitControls } from "@react-three/drei";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useRef } from 'react';
import "./Experience.css";
import { ClipPlane } from "./ClipPlane.jsx";

const Experience = () => {
  const gltf = useLoader(GLTFLoader, "./Ile.glb");  
  const model = useRef();
  const eventHandler = (event) => 
  {
    model.current.material.color.set('hsl(${Math.random() * 360}, 100%, 75%)');
    console.log("Clicked on the model!");
    // You can add more actions here, such as navigating to a different page or displaying additional information.
  }

  return (     
    <div>
      <Canvas 
      style={{ height: "50vh" }}
      camera={{ position: [0, 2, 20], fov: 70 }}
      gl={{ localClippingEnabled: true }}
      >  
        <color attach="background" args={["#1f5797"]} />
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={true}/>
        <ClipPlane object={gltf.scene}>
          {/* <mesh onContextMenu={eventHandler} ref={model}>
            <primitive object={gltf.scene} scale={0.001} position-y={-1} position-x={0} position-z={0} />
          </mesh> */}
        </ClipPlane>
      </Canvas>
    </div> 
  );
};

export default Experience;

// style={{ height: "70vh", width: "25vw" }}