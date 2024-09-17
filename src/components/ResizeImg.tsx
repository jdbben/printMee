"use client";
import { useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number | null;
  y: number | null;
}

const ResizeImg: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLImageElement>(null);
  const getMouseMouve = () => {
    const [mousemouve, setMouseMouve] = useState<MousePosition>({
      x: null,
      y: null,
    });

    const updateMousePosition = (ev: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMouseMouve({
          x: ev.clientX - rect.left,
          y: ev.clientY - rect.top,
        });
      }
    };

    useEffect(() => {
      const container = containerRef.current;
      const theref = ref.current;
      if (container && theref) {
        theref.addEventListener("mousedown", () => {
          container.addEventListener("mousemove", updateMousePosition);
        });
        theref.addEventListener("mouseup", () => {
          container.removeEventListener("mousemove", updateMousePosition);
          return () => {
            container.removeEventListener("mousemove", updateMousePosition);
          };
        });
      }
    }, []);
    return mousemouve;
  };
  const mousemouve = getMouseMouve();

  return (
    <div className="h-full w-full" ref={containerRef}>
      <div
        ref={ref}
        style={{ left: `${mousemouve.x}px`, top: `${mousemouve.y}px` }}
        className="relative bg-red-300 h-fit w-fit"
      >
        <p>hello</p>
      </div>
    </div>
  );
};

export default ResizeImg;
