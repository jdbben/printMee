"use client";
import { productSelectordata } from "@/lib/constants";

const ProductSelector = () => {
  const phone = productSelectordata[0].modele;

  return (
    <div>
      <label htmlFor="iphonemodels">shoos your iphone model </label>
      <select
        name="phone"
        id="phone"
        className="rounded-md ring-1 ring-sky-500"
      >
        {phone?.map((p, index) => (
          <option key={index} value={p}>
            {p}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductSelector;
