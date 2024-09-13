"use client";
import { useEffect, useRef, useState } from "react";
import { usePicUrl } from "./PictururlContext";
interface MousePosition {
  x: number | null;
  y: number | null;
}
interface ResizeImgProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const ResizeImg: React.FC<ResizeImgProps> = ({ containerRef }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { picUrl } = usePicUrl();

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
    <div>
      <p
        ref={ref}
        style={{ left: `${mousemouve.x}px`, top: `${mousemouve.y}px` }}
        className="relative"
      >
        fuck you
      </p>
    </div>
  );
};

export default ResizeImg;
