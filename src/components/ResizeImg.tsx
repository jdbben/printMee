"use client";
import { useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number | null;
  y: number | null;
}
type Props = {
  img: string;
};
const ResizeImg: React.FC<Props> = ({ img }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const imgref = useRef<HTMLImageElement>(null);
  const [mouseMouve, setMouseMouve] = useState<MousePosition>({
    x: null,
    y: null,
  });
  const getMouseMouve = () => {
    const updateMousePosition = (ev: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      const imgp = imgref.current?.getBoundingClientRect();
      if (rect && imgp) {
        console.log();
        const relativeX = ev.clientX - rect.left - imgp.left;
        const relativeY = ev.clientY - rect.top - imgp.top;
        setMouseMouve({
          x: relativeX,
          y: relativeY,
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
    return mouseMouve;
  };
  const mousemouve = getMouseMouve();

  return (
    <div className="h-[70vh] w-[65vh]" ref={containerRef}>
      <div
        ref={ref}
        style={{ left: `${mousemouve.x}px`, top: `${mousemouve.y}px` }}
        className="relative h-fit w-fit"
      >
        <img
          ref={imgref}
          className="select-none pointer-events-none"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default ResizeImg;
