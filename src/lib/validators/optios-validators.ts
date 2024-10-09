// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900

import { Coffee, Shirt, Smartphone } from "lucide-react";

// bg-rose-950 border-rose-950
export const COLORS = [
  {
    label: "Black",
    value: "black",
    tw: "zinc-900",
  },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
] as const;

export const productSelectord = [
  {
    symbol: Smartphone,
    title: "Phone case",
    inputType: "color",
  },
  { symbol: Shirt, title: "Tshirt", inputType: "radio" },
  { symbol: Coffee, title: "Mug", inputType: "radio" },
];
export const inputRage = ["size", "Height", "width", "Z", "Y", "X"];
