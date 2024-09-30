"use client";
import { cn } from "@/lib/utils";
import { Coffee, Shirt, Smartphone } from "lucide-react";
import { useState } from "react";
import Can from "./Canva";
import ProductSelector from "./ProductSelector";
import { CanMug } from "./CanMug";

export type Props = {
  img: string;
  dimensions?: {
    width?: number;
    heigth?: number;
  };
};

const ResizeImg: React.FC<Props> = ({ img, dimensions }) => {
  const [checked, setChecked] = useState<string | null>(null);
  const [paddingt, setPaddingt] = useState<string>("hidden");
  const getthechecked = (even: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(even.target.value);
  };
  const [color, setColor] = useState("black");
  const [mugColor, setMugColor] = useState("white");
  const [scale, setScale] = useState([
    Number(`0.${dimensions?.width}`),
    Number(`0.${dimensions?.heigth}`),
    1,
  ]);
  const [mugPosition, setMugPosition] = useState([0, 0, 0]);
  const [mugScale, setMugScale] = useState([
    Number(`${dimensions?.width}`) / 10,
    Number(`${dimensions?.heigth}`) / 10,
    10,
  ]);
  const [position, setPosition] = useState([0, 0, 0]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.id);
    setChecked(event.target.value);
  };
  return (
    <div className="flex flex-1 mt-[10vh]  border-dashed border-2 rounded-lg border-gray-300 overflow-hidden  ">
      <div className="h-full w-full bg-grey-200 rounded-l-lg border-r-4 border-gray-300 overflow-hidden justify-center items-center ">
        {checked === "tshirt" ? (
          <>
            <Can
              img={img}
              dimensions={dimensions}
              color={color}
              scale={scale}
              position={position}
            />
          </>
        ) : checked === "mug" ? (
          <>
            <CanMug
              img={img}
              color={mugColor}
              scale={mugScale}
              position={mugPosition}
            />
          </>
        ) : null}
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
              <div
                className="h-[12vh] w-[45vh] bg-white rounded-2xl border-2 border-gray-200 has-[:checked]:border-sky-600  p-1 lg:p-3 flex lg:flex-row "
                onClick={() => setChecked("tshirt")}
              >
                <div className="h-full w-[50%]  border-r-2 border-gray-300 gap-4 flex flex-row justify-center items-center">
                  <Shirt />
                  <p>T-shirt</p>
                </div>
                <div className="h-full w-[50%] gap-4 flex flex-row justify-center items-center">
                  <label
                    htmlFor="black"
                    className="h-9 w-9 bg-black border-2 border-white rounded-full cursor-pointer ring-1  has-[:checked]:border-sky-600  shadow-xl"
                  >
                    <input
                      type="radio"
                      name="phone"
                      id="black"
                      className="hidden"
                      value={"tshirt"}
                      onChange={handleColorChange}
                    />
                  </label>
                  <label
                    htmlFor="white"
                    className="h-9 w-9 bg-white border-2 border-white rounded-full cursor-pointer ring-1 has-[:checked]:border-sky-600 shadow-xl"
                  >
                    <input
                      type="radio"
                      name="phone"
                      id="white"
                      className="hidden"
                      value={"tshirt"}
                      onChange={handleColorChange}
                    />
                  </label>
                </div>
              </div>
              {checked === "tshirt" ? (
                <>
                  <div className="h-fit overflow-hidden w-[45vh] bg-white rounded-2xl transform duration-900 ease-out transition-all  ">
                    <form className="grid grid-cols-2 gap-2 ml-9 mr-9 ">
                      <p>size:</p>
                      <input
                        type="range"
                        id="size"
                        name="size"
                        min="0"
                        max="1"
                        step="0.001"
                        onChange={(event) => {
                          const newValue = Number(event.target.value);

                          setScale((prev) => [
                            newValue,
                            newValue *
                              (Number(`0.${dimensions?.heigth}`) /
                                Number(`0.${dimensions?.width}`)),
                            prev[2],
                          ]);
                        }}
                      />
                      <p>height:</p>
                      <input
                        type="range"
                        id="size"
                        name="size"
                        min="0"
                        max="1"
                        step="0.001"
                        value={scale[1]}
                        onChange={(event) => {
                          const newValue = Number(event.target.value);
                          setScale((prev) => [prev[0], newValue, prev[2]]);
                        }}
                      />
                      <p>Width:</p>
                      <input
                        type="range"
                        id="size"
                        name="size"
                        min="0"
                        max="1"
                        step="0.001"
                        value={scale[0]}
                        onChange={(event) => {
                          const newValue = Number(event.target.value);
                          setScale((prev) => [newValue, prev[1], prev[2]]);
                        }}
                      />
                      <p>Z:</p>
                      <input
                        type="range"
                        id="size"
                        name="size"
                        min="0"
                        max="1"
                        step="0.001"
                        value={scale[2]}
                        onChange={(event) => {
                          const newValue = Number(event.target.value);
                          setScale((prev) => [prev[0], prev[1], newValue]);
                        }}
                      />{" "}
                      <p>X:</p>
                      <input
                        type="range"
                        id="size"
                        name="size"
                        min="-1"
                        max="1"
                        step="0.0001"
                        onChange={(event) => {
                          const newValue = Number(event.target.value);
                          setPosition((prev) => [newValue, prev[1], prev[2]]);
                        }}
                      />{" "}
                      <p>Y:</p>
                      <input
                        type="range"
                        id="size"
                        name="size"
                        min="-1"
                        max="1"
                        step="0.0001"
                        onChange={(event) => {
                          const newValue = Number(event.target.value);
                          setPosition((prev) => [prev[0], newValue, prev[2]]);
                        }}
                      />
                    </form>
                  </div>
                </>
              ) : null}
            </div>
            <div className="grid grid-cols-1">
              <div
                className="h-[12vh] w-[45vh] bg-white rounded-2xl border-2 border-gray-200 has-[:checked]:border-sky-600  p-1 lg:p-3 flex lg:flex-row "
                onClick={() => setChecked("mug")}
              >
                <div className="h-full w-[50%]  border-r-2 border-gray-300 gap-4 flex flex-row justify-center items-center">
                  <Coffee />
                  <p>Mug</p>
                </div>
                <div className="h-full w-[50%] gap-4 flex flex-row justify-center items-center">
                  <label
                    htmlFor="mug-black"
                    className="h-9 w-9 bg-black border-2 border-white rounded-full cursor-pointer ring-1  has-[:checked]:border-sky-600  shadow-xl"
                  >
                    <input
                      type="radio"
                      name="phone"
                      id="mug-black"
                      className="hidden"
                      value={"mug"}
                      onChange={() => {
                        setChecked("mug");

                        setMugColor("black");
                      }}
                    />
                  </label>
                  <label
                    htmlFor="mug-white"
                    className="h-9 w-9 bg-white border-2 border-white rounded-full cursor-pointer ring-1 has-[:checked]:border-sky-600 shadow-xl"
                  >
                    <input
                      type="radio"
                      name="phone"
                      id="mug-white"
                      className="hidden"
                      value={"mug"}
                      onChange={() => {
                        setChecked("mug");

                        setMugColor("white");
                      }}
                    />
                  </label>
                </div>
              </div>
              {checked === "mug" ? (
                <>
                  <div className="h-fit overflow-hidden w-[45vh] bg-white rounded-2xl transform duration-900 ease-out transition-all  ">
                    <form className="grid grid-cols-2 gap-2 ml-9 mr-9 ">
                      <p>size:</p>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        step="0.1"
                        onChange={(event) => {
                          const newValue = Number(event.target.value);

                          setMugScale((prev) => [
                            newValue,
                            newValue *
                              (Number(`${dimensions?.heigth}`) /
                                Number(`${dimensions?.width}`)),
                            prev[2],
                          ]);
                        }}
                      />
                      <p>height:</p>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        step="0.1"
                        value={scale[1]}
                        onChange={(event) => {
                          const newValue = Number(event.target.value);
                          setMugScale((prev) => [prev[0], newValue, prev[2]]);
                        }}
                      />
                      <p>width:</p>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        step="0.1"
                        value={scale[0]}
                        onChange={(event) => {
                          const newValue = Number(event.target.value);
                          setMugScale((prev) => [newValue, prev[1], prev[2]]);
                        }}
                      />
                      <p>Z:</p>
                      <input
                        type="range"
                        min="-10"
                        max="2"
                        step="0.001"
                        onChange={(event) => {
                          const newValue = Number(event.target.value);
                          setMugPosition((prev) => [
                            prev[0],
                            prev[1],
                            newValue,
                          ]);
                        }}
                      />
                      <p>X:</p>
                      <input
                        type="range"
                        min="-10"
                        max="10"
                        step="0.001"
                        onChange={(event) => {
                          const newValue = Number(event.target.value);
                          setMugPosition((prev) => [
                            newValue,
                            prev[1],
                            prev[2],
                          ]);
                        }}
                      />
                      <p>Y:</p>
                      <input
                        type="range"
                        min="-10"
                        max="10"
                        step="0.001"
                        onChange={(event) => {
                          const newValue = Number(event.target.value);
                          setMugPosition((prev) => [
                            prev[0],
                            newValue,
                            prev[2],
                          ]);
                        }}
                      />
                    </form>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResizeImg;
