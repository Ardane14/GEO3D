import React, { useRef, useEffect } from "react";
import léaA1 from "../assets/LeaA1.webm";
import "./Page4.css";

export default function Page4({ isFlipped }) {
  const videoRef = useRef(null);
  
    useEffect(() => {
      if (isFlipped && videoRef.current) {
        videoRef.current.play();
      }
    }, [isFlipped]);

  return (
    <div className="page4">
      <video
              ref={videoRef}
              className="lea-animation-1"
              src={léaA1}
              muted
              playsInline
            />
    </div>
  );
}