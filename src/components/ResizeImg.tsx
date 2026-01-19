"use client";
import { productSelectord } from "@/lib/validators/optios-validators";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { CanMug } from "./CanMug";
import { CanPhone } from "./CanPhone";
import Can from "./Canva";
export type Props = {
  img: string;
  dimensions?: {
    width?: number;
    heigth?: number;
  };
  userName?: string | null | undefined;
};
const ResizeImg: React.FC<Props> = ({ img, dimensions, userName }) => {
  const router = useRouter();
  const [checked, setChecked] = useState<string | null>(null);
  const [color, setColor] = useState("black");
  const [scale, setScale] = useState([0, 0, 0]);
  const [position, setPosition] = useState([0, 0, 0]);

  const preview = (checked: string | null) => {
    const data = {
      img,
      checked,
      color,
      position,
      scale,
      userName,
    };
    
    const func = async () => {
      try {
        const response = await fetch("/api/addPreview", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        console.log("Response status:", response.status);
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error("faile to send data");
        }
        router.push(
          `/configure/preview?product=${checked}&userName=${userName}`
        );
      } catch (err) {
        console.log("func err", err);
      }
    };
  
    func()
  };

  useEffect(() => {
    const productData = [
      {
        product: "Tshirt",
        scale: [
          Number(`0.${dimensions?.width}`),
          Number(`0.${dimensions?.heigth}`),
          1,
        ],
        position: [0, 0, 0],
        color: "#000000",
      },
      {
        product: "Mug",
        scale: [
          Number(`${dimensions?.width}`),
          Number(`${dimensions?.heigth}`),
          10,
        ],
        position: [0, 0, 0],
        color: "#000000",
      },
      {
        product: "Phone case",
        scale: [0, 0, 0.5],
        position: [-0.01, 0, 0],
        color: "#000000",
      },
    ];
    const selectedProduct = productData.find(
      (prev) => prev.product === checked
    );
    if (selectedProduct) {
      setColor(selectedProduct.color);
      setPosition(selectedProduct.position);
      setScale(selectedProduct.scale);
    }

  }, [checked]);
useEffect(()=>{console.log(img)},[img])
  return (
    <div className="h-fit w-full mt-[5vh]  bg-white lg:h-[80vh] rounded-3xl flex flex-col lg:flex-row overflow-hidden shadow-2xl">
      <div className="h-[80vh] w-full lg:w-[90vh]  border-dashed border-2 border-gray-300 lg:rounded-l-3xl bg-gray-100 ">
        {/** here the 3D modele for the selected Product*/}
        {checked === "Tshirt" && (
          <Can img={img} color={color} scale={scale} position={position} />
        )}
        {checked === "Mug" && (
          <CanMug img={img} color={color} scale={scale} position={position} />
        )}
        {checked === "Phone case" && (
          <CanPhone img={img} color={color} scale={scale} position={position} />
        )}
          
        

      </div>
      <div className="h-full w-full lg:w-[50vh] mt-7 ml-5 mr-5 relative ">
        <h2 className="text-3xl pb-5 font-bold flex flex-col items-center ">
          Select your product
        </h2>
        <div className="w-full h-px bg-zinc-200 my-3"></div>
        <div className=" w-full h-fit mb-[15vh] lg:h-[calc(100%-10vh)]  flex flex-col items-center gap-7 ">
          {/** product selector here */}
          {productSelectord.map((prev, index) => (
            <div
              key={index}
              className="h-[9vh] w-[40vh] bg-white rounded-2xl border-2 border-gray-200 has-[:checked]:border-sky-600  p-1 lg:p-3 flex lg:flex-row hover:cursor-pointer shadow-xl  "
              onClick={() => setChecked(prev.title)}
            >
              <div
                key={prev.title}
                className=" h-full w-[50%] flex flex-1 border-r-2 gap-3 border-gray-300 items-center  justify-center "
              >
                <prev.symbol />{" "}
                <p className="font-bold text-xl">{prev.title}</p>
              </div>
              <div className="h-full  w-[50%] flex flex-1 items-center  justify-center">
                <label
                  htmlFor="black"
                  className="h-9 w-9 border-2 overflow-hidden border-white rounded-full cursor-pointer ring-1 has-[:checked]:border-sky-600  shadow-xl "
                >
                  <input
                    type="color"
                    name="phone"
                    id="colorselector"
                    className="rounded-full border-none h-[10vh] w-[10vh] relative right-6 bottom-3 "
                    value={color}
                    onChange={(event) => {
                      setColor(event.target.value);
                    }}
                  />
                </label>
              </div>
            </div>
          ))}
          <div className="w-[45vh] lg:w-[40vh] h-fit border-2 border-gray-300 shadow-sm rounded-2xl">
            {[
              {
                title: "size",
                step: "0.001",
                min: "0",
                max: "1",
                func: (event: ChangeEvent<HTMLInputElement>) => {
                  const newValue = Number(event.target.value);
                  setScale((prev) => [
                    newValue,
                    newValue *
                      (Number(`0.${dimensions?.heigth}`) /
                        Number(`0.${dimensions?.width}`)),
                    prev[2],
                  ]);
                },
              },
              {
                title: "Height",
                step: "0.001",
                min: "0",
                max: "1",
                func: (event: ChangeEvent<HTMLInputElement>) => {
                  const newValue = Number(event.target.value);
                  setScale((prev) => [prev[0], newValue, prev[2]]);
                },
              },
              {
                title: "width",
                step: "0.001",
                min: "0",
                max: "1",
                func: (event: ChangeEvent<HTMLInputElement>) => {
                  const newValue = Number(event.target.value);
                  setScale((prev) => [newValue, prev[1], prev[2]]);
                },
              },
              {
                title: "Z",
                step: "0.001",
                min: "0",
                max: "1",
                func: (event: ChangeEvent<HTMLInputElement>) => {
                  const newValue = Number(event.target.value);
                  setScale((prev) => [prev[0], prev[1], newValue]);
                },
              },
              {
                title: "X",
                step: "0.00001",
                min: "-1",
                max: "1",
                func: (event: ChangeEvent<HTMLInputElement>) => {
                  const newValue = Number(event.target.value);
                  setPosition((prev) => [newValue, prev[1], prev[2]]);
                },
              },
              {
                title: "Y",
                step: "0.0001",
                min: "-1",
                max: "1",
                func: (event: ChangeEvent<HTMLInputElement>) => {
                  const newValue = Number(event.target.value);
                  setPosition((prev) => [prev[0], newValue, prev[2]]);
                },
              },
            ].map((prev, index) => (
              <>
                <div key={index} className="flex flex-row justify-center gap-9">
                  <p className="left-0">{prev.title}:</p>
                  <input
                    type="range"
                    min={prev.min}
                    max={prev.max}
                    step={prev.step}
                    id="size"
                    onChange={prev.func}
                  />
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="h-[10vh] w-full bg-white absolute bottom-0 left-0 flex flex-1 justify-center items-center mb-3 gap-9 lg:pb-2 ">
          <p>total</p>
          <button
            className=" bg-sky-400 hover:bg-sky-500 hover:shadow-2xl rounded-lg text-white font-bold h-11 w-60 "
            disabled={!checked}
            onClick={() => preview(checked)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResizeImg;
