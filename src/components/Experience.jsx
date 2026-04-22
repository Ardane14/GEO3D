import { Stage, PresentationControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import ResizeHandler from "./ResizeHandler";
import { Canvas } from "@react-three/fiber";
import { useRef } from 'react';
import "./Experience.css";

const Experience = () => {
  const gltf = useLoader(GLTFLoader, "./Ile.glb");  
  const containerRef = useRef();

  const handleDoubleClick = () => {
    const el = containerRef.current;

    if (!document.fullscreenElement) {
      el.requestFullscreen().catch(err => {
        console.error("Error attempting fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (     
    <div
      className="canvas-container"
      ref={containerRef}
      onDoubleClick={handleDoubleClick}
    >
      <Canvas 
      resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
      style={{ height: "70vh", width: "25vw" }}>  
        <ResizeHandler />
        <color attach="background" args={["#1f5797"]} />
      
        <PresentationControls>
          <Stage environment="city" intensity={0.6}>
            {/* <primitive object={gltf.scene} scale={0.1} position-y={-1} position-x={-1} position-z={-1} /> */}
          </Stage>
        </PresentationControls>

      </Canvas>
    </div> 
  );
};

export default Experience;