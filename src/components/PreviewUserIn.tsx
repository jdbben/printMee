"use client";
import { useEffect, useState } from "react";
import { CanMug } from "./CanMug";
import { CanPhone } from "./CanPhone";
import Can from "./Canva";
import { Check } from "lucide-react";
import { previewdesc } from "@/lib/constants";
import { creatCheckoutSession } from "@/app/configure/preview/actions";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
export interface Userin {
  name?: string | null;
}
const PreviewUserIn: React.FC<Userin> = ({ name }) => {
  const router = useRouter();
  const [data, setDAta] = useState<any>(null);
  const fetchData = async () => {
    if (typeof name === "string") {
      try {
        const response = await fetch(
          `/api/addPreview?name=${encodeURIComponent(name)}&type=Preview`
        );
        if (!response.ok) {
          throw new Error("cant get your data no response from api");
        }
        const result = await response.json();

        setDAta(result.data[result.data.length - 1]);
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

  const func = () => {
    const selectedProduct = previewdesc.find(
      (prev) => prev.product === data?.product
    );

    let highlights, material, price;

    if (selectedProduct) {
      highlights = selectedProduct.highlights;

      material = selectedProduct.Materials;
      price = selectedProduct.price;
    }

    const { mutate: createPaymentSession } = useMutation({
      mutationKey: ["get-checkout-session"],
      mutationFn: creatCheckoutSession,
      onSuccess: (data) => {
        if (data && data.url) {
          router.push(data.url);
        } else {
          throw new Error("Unable to retrieve payment URL.");
        }
      },
      onError: (error: any) => {
          console.error("Payment session creation error:", error);
        alert("There was an error with the payment. Please try again later.");
      },
    });
    return (
      <div>
        <div className="flex flex-row">
          <div>
            <p className="font-bold text-xl pb-4">Highlights</p>
            <ul>
              {highlights?.map((h, index) => (
                <li key={index} className="list-disc">
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-xl pb-4">Material</p>
            <ul>
              {material?.map((h, index) => (
                <li key={index + 1} className="list-disc">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="my-2 h-px bg-gray-200 mt-11"></div>
        <div className="flex items-center justify-between pt-9 ">
          <p>Base price</p>
          <p className="order-last">${price}</p>
        </div>
        <div className="my-2 h-px bg-gray-200"></div>
        <div className="flex items-center justify-between font-bold pt-7">
          <p>order total</p>
          <p className="order-last font-bold">${price}</p>
        </div>
        <div className="h-fit w-full flex justify-end">
          <button
            onClick={() => createPaymentSession()}
            className="mt-[10vh] bg-sky-500 rounded-lg pt-2 pb-2 pl-11 pr-11 text-white hover:text-gray-200 shadow-lg  "
          >
            Check out
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row pb-[11vh] ">
      <div className=" h-[80vh] w-full md:w-full lg:w-[55vh] overflow-hidden">
        {/** here the 3D modele for the selected Product*/}
        {data?.product === "Tshirt" && (
          <Can
            img={data.img}
            color={data.color}
            scale={data.scale}
            position={data.position}
            debug={false}
          />
        )}
        {data?.product === "Mug" && (
          <CanMug
            img={data.img}
            color={data.color}
            scale={data.scale}
            debug={false}
          />
        )}
        {data?.product === "Phone case" && (
          <CanPhone
            img={data.img}
            color={data.color}
            scale={data.scale}
            debug={false}
          />
        )}
      </div>
      <div className=" h-[80vh] w-full pt-[15vh] pl-9 ">
        <h1 className="text-3xl font-bold pb-5 ">Your {data?.product}</h1>
        <div className="flex flex-cols items-center pb-8">
          <Check className="text-sky-400" />
          <p>In stock and ready to ship</p>
        </div>
        {func()}
      </div>
    </div>
  );
};

export default PreviewUserIn;
