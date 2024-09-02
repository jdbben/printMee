import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import TypeEffect from "@/components/TypeEffect";
import { Check } from "lucide-react";

export default function Home() {

  return (
    <MaxWidthWrapper>
      <section className="pt-[15vh]">
        <div className="relative  grid grid-rows-2 md:grid-rows-2 lg:grid-cols-2 ">
          <div className=" left-0 flex w-full h-[40vh] grid grid-cols-1 ">
            <h1 className="m-2 font-bold text-5xl whitespace-normal leading-relaxed ">Your Image on a <span className="bg-sky-400 justify-center items-center text-6xl text-wh">Custom</span> T-shirt</h1>
            <p>Preserve Your Cherished Moments with Custom Creations from PrintMee!</p>
            <p className="pt-8"></p>
            <TypeEffect />
            <ul className="space-y-2 pt-5">
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-green-600" />Premium Quality Materials
              </li><li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-green-600" />Up to 5-Year Print Guarantee
              </li><li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-green-600" />Eco friendly packaging materials
              </li>
            </ul>

          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
