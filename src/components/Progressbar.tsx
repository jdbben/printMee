"use client";
import { progressbar } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Progressbar = () => {
  const [step, setStep] = useState<number>();
  useEffect(() => {
    if (window.location.href.includes("upload")) {
      setStep(1);
    } else if (window.location.href.includes("design")) {
      setStep(2);
    } else if (window.location.href.includes("preview")) {
      setStep(3);
    }
  }, []);

  let style: string;

  return (
    <div className="w-full h-fit  flex flex-col lg:flex-row ">
      {progressbar.map((progres, index) => {
        if (step === progres.step) {
          style = "border-sky-500";
        } else if (step != progres.step) {
          style = "";
        }
        return (
          <div
            className={cn(
              `lg:w-1/3 lg:h-[100px] w-full h-[10vh]  bg-white flex  mx-auto items-center lg:border-l-2 lg:border-r-2 pl-3 lg:border-b-4 border-l-4 lg:border-t-0  border-t-2 border-b-2`,
              style
            )}
            key={index}
          >
            <div className="h-11 w-11">
              {<progres.sticker className="text-4xl h-full w-full" />}
            </div>
            <div className="pl-5">
              <p>
                Step {progres.step}: {progres.title}
              </p>
              <p>{progres.disc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Progressbar;
