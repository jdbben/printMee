"use client";
import { useEffect, useState } from "react";
import { CanMug } from "./CanMug";
import { CanPhone } from "./CanPhone";
import Can from "./Canva";
export interface Userin {
  name?: string | null;
}
const PreviewUserIn: React.FC<Userin> = (name) => {
  const [data, setDAta] = useState<any>(null);

  const fetchData = async () => {
    if (typeof name.name === "string") {
      try {
        const response = await fetch(
          `/api/addPreview?name=${encodeURIComponent(name.name)}`
        );
        if (!response.ok) {
          throw new Error("cant get your data no response from api");
        }
        const result = await response.json();
        setDAta(result);
      } catch (err) {
        console.log("cant get data", err);
      }
    }
  };
  useEffect(() => {
    if (name) {
      fetchData();
    }
  }, [name]);
  return (
    <div className="flex  lg:flex-1 ">
      <div className="bg-red-300 h-[80vh] w-[50vh]">
        {data ? (
          <div>
            <>
              <Canvas data={data.data} />
            </>
          </div>
        ) : null}
      </div>
      <div className="bg-sky-300 h-[80vh] w-full"></div>
    </div>
  );
};
const Canvas = (data: any) => {
  if (data.data[0].product === "tshirt") {
    return (
      <div>
        <Can
          color={data.data[0].color}
          img={data.data[0].img}
          position={data.data[0].position}
          scale={data.data[0].scale}
        />
      </div>
    );
  } else if (data.data[0].product === "mug") {
    return (
      <CanMug
        color={data.data[0].color}
        img={data.data[0].img}
        position={data.data[0].position}
        scale={data.data[0].scale}
      />
    );
  } else if (data.data[0].product === "phonecase") {
    return (
      <CanPhone
        color={data.data[0].color}
        img={data.data[0].img}
        position={data.data[0].position}
        scale={data.data[0].scale}
      />
    );
  }
};

export default PreviewUserIn;
