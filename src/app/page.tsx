import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import TypeEffect from "@/components/TypeEffect";
import Users from "@/components/Users";
import { Check, Star } from "lucide-react";

export default function Home() {
  const text: string = "At PrintMee, we believe your memories are invaluable and deserve to be celebrated with elegance. Whether it’s a cherished photo, a meaningful quote, or a unique design, our custom products allow you to transform your special moments into personalized treasures. Celebrate your story with our beautifully crafted items and keep your most treasured memories close to your heart."

  return (
    <MaxWidthWrapper>
      <section className="pt-[15vh]">
        <div className="relative  grid grid-rows-2 md:grid-rows-2 lg:grid-cols-2 gap-9 ">
          <div className=" left-0 flex w-full h-[40vh] grid grid-cols-1 ">
            <h1 className="m-2 font-bold text-5xl whitespace-normal leading-relaxed ">Your Image on a <span className="bg-sky-400 justify-center items-center text-6xl text-wh">Custom</span> T-shirt</h1>
            <p className="text-lg  ">Preserve Your Cherished Moments with Custom Creations from PrintMee!</p>
            <TypeEffect classname="pt-5 font-bold font-poppins" text={text} />
            <p className=""></p>
            <ul className="space-y-2 pt-5">
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-green-600" />Premium Quality Materials
              </li><li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-green-600" />Up to 5-Year Print Guarantee
              </li><li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-green-600" />Eco friendly packaging materials
              </li>
            </ul>
            <div className="flex flex-cols items-center gap-6 mt-9">
              <Users className="flex flex-cols  " />
              <div className="flex flex-cols ">
                <Star className="text-sky-400 fill-sky-400 h-5 w-5" />
                <Star className="text-sky-400 fill-sky-400 h-5 w-5" />
                <Star className="text-sky-400 fill-sky-400 h-5 w-5" />
                <Star className="text-sky-400 fill-sky-400 h-5 w-5" />
                <Star className="text-sky-400 fill-sky-400 h-5 w-5" />
                <p className="pl-3">Over <span className="font-bold">1.500</span>happy customers</p>
              </div>

            </div>
          </div>
          <div className="relative right-0">
            <div className=" h-[60vh] w-100 bg-gradient-to-tr from-cyan-500 to-to-blue-500 shadow-2xl opacity-3  rounded-3xl">

              <div className=" h-[60vh] w-100 bg-white shadow-2xl opacity-50  rounded-3xl">

              </div>
            </div>
          </div>
        </div>

      </section>
    </MaxWidthWrapper>
  );
}
