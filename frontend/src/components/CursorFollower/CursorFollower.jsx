
import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    let animationFrameId;

    const speed = 0.12; // lower = smoother

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${currentX - 20}px, ${currentY - 20}px, 0)
        `;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Glow */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
      >
        {/* Outer Glow */}
        <div
          className="relative w-10 h-10 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,128,113,0.35) 0%, rgba(0,128,113,0.12) 40%, transparent 75%)",
            filter: "blur(2px)",
          }}
        >
          {/* Inner Core */}
          <div
            className="absolute inset-1 rounded-full border border-[#00bfa6]/40 backdrop-blur-md"
            style={{
              background:
                "radial-gradient(circle, rgba(0,191,166,0.35) 0%, rgba(0,128,113,0.15) 60%, transparent 100%)",
              boxShadow:
                "0 0 20px rgba(0,191,166,0.35), 0 0 60px rgba(0,128,113,0.15)",
            }}
          />

          {/* Center Dot */}
          <div
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-[#d2fff9]"
            style={{
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 10px rgba(210,255,249,0.9)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CursorFollower;