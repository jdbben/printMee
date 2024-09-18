"use client";
import { productSelectordata } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Coffee, Shirt, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ProductSelector from "./ProductSelector";

interface MousePosition {
  x: number | null;
  y: number | null;
}

type Props = {
  img: string;
};

const ResizeImg: React.FC<Props> = ({ img }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgPosition, setImgPosition] = useState<MousePosition>({
    x: null,
    y: null,
  });
  const [offset, setOffset] = useState<MousePosition>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [checked, setChecked] = useState<string | null>(null);
  const [paddingt, setPaddingt] = useState<string>("hidden");
  const [paddingT, setPaddingT] = useState<string>("hidden");
  const [paddingY, setPaddingY] = useState<string>("hidden");
  const [imgsrc, setimgsrc] = useState<string>("");
  const phone = productSelectordata[0].modele;
  const getthechecked = (even: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(even.target.value);
  };
  useEffect(() => {
    if (checked === "phonecase") {
      setPaddingt("");
      setPaddingT("hidden");
      setPaddingY("hidden");
      setimgsrc("/imgs/phone.png");
    } else if (checked === "tshirt") {
      setPaddingt("hidden");
      setPaddingT("");
      setPaddingY("hidden");
      setimgsrc("/imgs/tshirt.png");
    } else if (checked === "mug") {
      setPaddingt("hidden");
      setPaddingT("hidden");
      setPaddingY("");
      setimgsrc(
        "https://png.pngtree.com/png-vector/20240202/ourmid/pngtree-mug-mockup-cutout-png-file-png-image_11588217.png"
      );
    }
  }, [checked]);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      setOffset({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateImgPosition = (event: MouseEvent) => {
    if (
      !isDragging ||
      !imgRef.current ||
      !containerRef.current ||
      !offset.x ||
      !offset.y
    )
      return;

    const container = containerRef.current.getBoundingClientRect();
    const imgX = event.clientX - container.left - offset.x;
    const imgY = event.clientY - container.top - offset.y;

    setImgPosition({
      x: imgX,
      y: imgY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateImgPosition);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateImgPosition);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  return (
    <div className="flex flex-1 mt-[10vh] justify-center items-center border-dashed border-2 rounded-lg border-gray-300 overflow-hidden  ">
      <div className="h-[70vh] w-[100vh] bg-gray-200 rounded-l-lg border-r-4 border-gray-300 overflow-hidden">
        <div
          className="h-[70vh] w-[65vh] overflow-hidden relative"
          ref={containerRef}
        >
          <img
            ref={imgRef}
            draggable="false"
            className="absolute cursor-pointer select-none"
            src={img}
            alt=""
            style={{
              left: imgPosition.x !== null ? `${imgPosition.x}px` : "0",
              top: imgPosition.y !== null ? `${imgPosition.y}px` : "0",
            }}
            onMouseDown={handleMouseDown}
          />
        </div>
      </div>
      <div>
        <div className="h-[70vh] w-[50vh] bg-gray-100 rounded-r-lg">
          <div className="flex flex-col mx-auto items-center gap-4 h-full pt-8 overflow-y-auto ">
            <h3 className="text-xl pb-8 ">Select your product</h3>
            <div className="grid grid-cols-1">
              <label className="h-[12vh] w-[45vh] bg-white rounded-2xl border-2 border-gray-200 has-[:checked]:border-sky-600 p-1 lg:p-3">
                <div className="flex flex-1">
                  <Smartphone />
                  <p>Phone Case</p>
                </div>
                <input
                  type="radio"
                  name="phone"
                  className="hidden"
                  value="phonecase"
                  checked={checked === "phonecase"}
                  onChange={getthechecked}
                />
              </label>
              <div className={cn("pl-3 pt-2 duration-600", paddingt)}>
                <ProductSelector />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <label className="h-[12vh] w-[45vh] bg-white rounded-2xl border-2 border-gray-200 has-[:checked]:border-sky-600  p-1 lg:p-3">
                <div className="flex flex-1">
                  <Shirt />
                  <p>T-shirt</p>
                </div>
                <input
                  type="radio"
                  name="phone"
                  className="hidden"
                  value="tshirt"
                  checked={checked === "tshirt"}
                  onChange={getthechecked}
                />
              </label>
            </div>
            <div className="grid grid-cols-1">
              <label className="h-[12vh] w-[45vh] bg-white rounded-2xl border-2 border-gray-200 has-[:checked]:border-sky-600  p-1 lg:p-3">
                <div className="flex flex-1">
                  <Coffee />
                  <p>Mug</p>
                </div>
                <input
                  type="radio"
                  name="phone"
                  className="hidden"
                  value="mug"
                  checked={checked === "mug"}
                  onChange={getthechecked}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResizeImg;
