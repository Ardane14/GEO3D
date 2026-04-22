import React, { useRef, useEffect } from "react";
import "./Page2.css";
import lettreVideo from "../assets/Enveloppe.webm";

export default function Page2({ isFlipped }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isFlipped && videoRef.current) {
      videoRef.current.play();
    }
  }, [isFlipped]);

  return (
    <div className="page2">
      <video
        ref={videoRef}
        className="letter-animation"
        src={lettreVideo}
        muted
        playsInline
      />
    </div>
  );
}