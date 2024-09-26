"use client";
import { cn } from "@/lib/utils";
import { Coffee, Shirt, Smartphone } from "lucide-react";
import { useState } from "react";
import Can from "./Canva";
import ProductSelector from "./ProductSelector";

type Props = {
  img: string;
  width: number | undefined;
};

const ResizeImg: React.FC<Props> = ({ img }, width: number | undefined) => {
  const [checked, setChecked] = useState<string | null>(null);
  const [paddingt, setPaddingt] = useState<string>("hidden");

  const [imgsrc, setimgsrc] = useState<string>("");
  const getthechecked = (even: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(even.target.value);
  };
  console.log(width);
  return (
    <div className="flex flex-1 mt-[10vh]  border-dashed border-2 rounded-lg border-gray-300 overflow-hidden  ">
      <div className="h-full w-full bg-grey-200 rounded-l-lg border-r-4 border-gray-300 overflow-hidden justify-center items-center ">
        <Can img={img} />
      </div>
      <div>
        <div className="h-full w-[50vh] bg-gray-100 rounded-r-lg justify-center items-center">
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
