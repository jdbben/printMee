"use client";
import { usePicUrl } from "@/components/PictururlContext";
import ProductSelector from "@/components/ProductSelector";
import ResizeImg from "@/components/ResizeImg";
import { productSelectordata } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Shirt, Smartphone, Coffee } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Page = ({ onPicUrl }: { onPicUrl: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="flex flex-1 mt-[10vh] justify-center items-center border-dashed border-2 rounded-lg border-gray-300 overflow-hidden  ">
      <div
        ref={containerRef}
        className="h-[70vh] w-[100vh] bg-gray-200 rounded-l-lg border-r-4 border-gray-300 overflow-hidden"
      >
        <ResizeImg containerRef={containerRef} />
        <img src={imgsrc} alt="" className="absolute h-[70vh]" />
      </div>
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
  );
};

export default Page;
