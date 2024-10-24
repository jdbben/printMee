import { ImageUp, ShoppingBasket, Sun } from "lucide-react";
import { title } from "process";

export const imageAssets = [
  "https://i.pinimg.com/736x/00/7e/a1/007ea19314a79f49de32460f96951210.jpg",
  "https://i.pinimg.com/736x/4e/9e/a0/4e9ea0f51b994c6e7bdef086212c8eaa.jpg",
  "https://ih1.redbubble.net/image.5641093204.6697/icr,samsung_galaxy_s24_soft,side,a,x1000-bg,f8f8f8.webp",
  "https://ih1.redbubble.net/image.1013125150.9502/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp",
  "https://stuff.ma/wp-content/uploads/2021/04/Hcadf65d2803e4730b8c96d789cdf3afdK.jpg",
];

export const headertitels = [
  "T-shirt",
  "Phone Case",
  "Stickers",
  "Pictures",
  "T-shirt",
];

export const productSelectordata = [
  {
    title: "Phone case",
    modele: ["Iphone 12", "Iphone 13", "Iphone 14", "Iphome 15"],
  },
  {
    title: "T-shirt",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    color: ["white", "black"],
  },
  {
    title: "Mug",
    size: ["S", "M", "L"],
    color: ["white", "black"],
  },
];

export const previewdesc = [
  {
    product: "Tshirt",
    highlights: [
      "Eco-Conscious Dye Process",
      "Colors derived from natural sources for sustainability.",
      "Pre-Shrunk Fabric",
      "Maintains shape and size after washing.",
      "30-Day Return Policy",
      "Hassle-free returns for complete peace of mind.",
    ],
    Materials: [
      "100% Organic Cotton",
      "Soft, breathable fabric for all-day comfort.",
    ],
    price: "30.00",
  },
  {
    product: "Phone case",
    highlights: [
      "Wireless charging copatible",
      "TPU shock absorption",
      "Packaging made from recycled materials",
      "5 year print warranty",
    ],
    Materials: [
      "High-quality, durable material",
      "Scratch and fingerprint resistant coating",
    ],
    price: "15.00",
  },
  {
    product: "Mug",
    highlights: [
      "Microwave and Dishwasher Safe",
      "Safe for everyday use with convenient cleaning.",

      "Double-Walled Insulation",
      "Keeps beverages hot or cold for longer periods.",
    ],
    Materials: [
      "Eco-Friendly Printing",
      "Designs printed using sustainable inks.",
    ],
    price: "20.00",
  },
];

export const progressbar = [
  {
    step: 1,
    title: "Add image",
    disc: "Choose an image for your product",
    sticker: ImageUp,
  },
  {
    step: 2,
    title: "Customize design",
    disc: "Make the product yours",
    sticker: ShoppingBasket,
  },
  { step: 3, title: "Summary", disc: "Review your final design", sticker: Sun },
];
