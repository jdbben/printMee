import HeaderTitel from "@/components/HeaderTitel";
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Phone from "@/components/Phone";
import SlideShow from "@/components/SlideShow";
import TypeEffect from "@/components/TypeEffect";
import Users from "@/components/Users";
import { Check, Star } from "lucide-react";

export default function Home() {
  const text: string = "At PrintMee, we believe your memories are invaluable and deserve to be celebrated with elegance. Whether it’s a cherished photo, a meaningful quote, or a unique design, our custom products allow you to transform your special moments into personalized treasures. Celebrate your story with our beautifully crafted items and keep your most treasured memories close to your heart."
  const text2: string = "Create an account or log in with just a few simple steps! By doing so, you’ll be able to: Access Your Previous Purchases: Keep track of all your past orders conveniently in your account. Save Your Cart: Never lose your selections—your cart will be saved for future visits.Enjoy a seamless shopping experience and never miss out on your favorite items!"
  return (
    <div className="bg-slate-50 grainy-light">
      <MaxWidthWrapper>
        <section className="pt-[15vh]">
          <div className="relative  grid grid-cols-1 lg:grid-cols-2 gap-9 ">
            <div className=" left-0 w-full h-auto grid grid-cols-1 ">
              <h1 className="m-2 font-bold text-5xl whitespace-normal leading-relaxed ">Your Image on a</h1>
              <div>
                <div className="h-[5vh] w-fit rounded-lg ring-2 ring-sky-400 overflow-hidden flex flex-rows" >
                  <span className="bg-sky-400 text-white text-5xl font-bold">Custom</span>
                  <HeaderTitel />
                </div>
              </div>
              <br />
              <p className="text-lg  ">Preserve Your Cherished Moments with Custom Creations from PrintMee!</p>
              <TypeEffect classname="pt-5 font-bold font-poppins" text={text} />
              <p className=""></p>
              <ul className="space-y-2 pt-5 ">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />Premium Quality Materials
                </li><li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />Up to 5-Year Print Guarantee
                </li><li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />Eco friendly packaging materials
                </li>
                <div className="grid grid-cols items-center gap-6 pt-5  ">
                  <Users className="flex" />
                  <div className="flex flex-cols ">
                    <Star className="text-sky-400 fill-sky-400 h-5 w-5" />
                    <Star className="text-sky-400 fill-sky-400 h-5 w-5" />
                    <Star className="text-sky-400 fill-sky-400 h-5 w-5" />
                    <Star className="text-sky-400 fill-sky-400 h-5 w-5" />
                    <Star className="text-sky-400 fill-sky-400 h-5 w-5" />
                    <p className="pl-3">Over <span className="font-bold">1.500</span> happy customers</p>
                  </div>
                </div>
              </ul>

            </div>
            <div className="relative right-0 md:pt-5 ">
              <div className="relative h-[60vh] w-full bg-gradient-to-tr from-cyan-500 to-blue-500 shadow-2xl rounded-3xl">
                <div className="absolute inset-0 h-full w-full bg-white shadow-2xl opacity-50 rounded-3xl" />
                <div className="relative h-[60vh] w-full rounded-3xl overflow-hidden">
                  <SlideShow />
                </div>
              </div>
            </div>

          </div>
        </section>

      </MaxWidthWrapper>
      <div className="h-fit  mt-11 lg:mt-[20vh] mx-auto w-full bg-slate-100 ">
        <div className="mt-9 w-full h-fit ">
          <div className="h-fit w-fit mx-auto ">
            <h2 className="font-bold text-4xl lg:text-7xl pt-9">What out customers say</h2>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 mt-9 gap-9 ">
              <div className="relative mx-auto md:mx-auto h-fit w-[40vh] ">
                <div className="flex flex-row pb-5">
                  <Star className="text-sky-400 fill-sky-400" />
                  <Star className="text-sky-400 fill-sky-400" />
                  <Star className="text-sky-400 fill-sky-400" />
                  <Star className="text-sky-400 fill-sky-400" />
                  <Star className="text-sky-400 fill-sky-400" />
                </div>
                <p>"I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barly-noticeable scratch onthe corner,<span className="font-bold">looks brand new after about half a year</span>. dig it. "</p>
                <div className="flex flex-row items-center gap-3">
                  <img src="https://randomuser.me/api/portraits/men/71.jpg" width={60} className=" mt-5 rounded-full ring-2 ring-white " alt="" />
                  <div className="grid">
                    <p className="font-bold text-lg">Jonathan</p>
                    <div className="flex flex-row gap-1 ">
                      <Check className="text-sky-400" />
                      <p>Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-fit w-[40vh] right-0 mx-auto md:mx-auto">
                <div className="flex flex-row pb-5">
                  <Star className="text-sky-400 fill-sky-400" />
                  <Star className="text-sky-400 fill-sky-400" />
                  <Star className="text-sky-400 fill-sky-400" />
                  <Star className="text-sky-400 fill-sky-400" />
                  <Star className="text-sky-400 fill-sky-400" />
                </div>
                <p>"The shirt feels really <span className="font-bold">well-made</span>, and I even got a compliment on the design. I've had it for two and a half months now, and the print is still super clear. With the shirt I had before, the design started fading after a couple of weeks. Love it!"</p>
                <div className="flex flex-row items-center gap-3">
                  <img src="https://randomuser.me/api/portraits/women/81.jpg" width={60} className=" mt-5 rounded-full ring-2 ring-white " alt="" />
                  <div className="grid">
                    <p className="font-bold text-lg">Ali</p>
                    <div className="flex flex-row gap-1 ">
                      <Check className="text-sky-400" />
                      <p>Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-fit gap-5 mb-11 w-fit mx-auto rounded-[50px] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-2xl mt-[10vh] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
          <div className="relative  h-[500px] w-[350px] rounded-[30px] shadow-2xl bg-white/30 backdrop-blur-md ring-2 ring-white flex flex-col items-center justify-center m-10">
            <div className="bg-slate-100 h-fit w-fit rounded-lg shadow-lg p-2 mx-auto ">
              <p className="font-bold text-center"><span className="text-sky-400">Print</span>mee</p>
            </div>
            <p className="font-bold text-gray-200 text-xl text-center m-2">Log in to continue</p>
            <div className="w-full flex flex-col items-center mb-4">
              <input type="text" placeholder="Email Address" className="h-9 w-[80%] md:w-[25vh] bg-transparent focus:outline-none focus:ring focus:border-blue-500 rounded-lg ring-2 ring-white p-3 mb-4" />
              <input type="password" placeholder="Password" className="h-9 w-[80%] md:w-[25vh] bg-transparent focus:outline-none focus:ring focus:border-blue-500 rounded-lg ring-2 ring-white p-3" />
            </div>
            <p className="text-center mb-3 cursor-pointer">Forget Password?</p>
            <button className="w-[20vh] bg-blue-500 text-white rounded-lg py-2 mb-2">Continue</button>
            <p className="text-center mb-2">Don't have an account? <a href="#" className="text-blue-500">Sign up</a></p>
            <p className="text-center mb-2">or</p>
            <div className="w-full flex flex-col items-center gap-2">
              <button className="w-[20vh] bg-gray-800 text-white rounded-lg py-1 mb-1">Google</button>
              <button className="w-[20vh] bg-blue-800 text-white rounded-lg py-1 mb-1">Facebook</button>
              <button className="w-[20vh] bg-blue-700 text-white rounded-lg py-1">LinkedIn</button>
            </div>
          </div>
          <div className="h-full w-full m-5">
            <h2 className="text-white font-bold text-3xl  lg:text-4xl mt-[9vh] mr-8 " style={{ textShadow: "black 1px 2px 10px" }}>Login or Register Easily</h2>
            <div className="h-full w-[30vh]">
              <TypeEffect classname="pt-5 font-bold font-poppins text-white" text={text2} stylish={{ textShadow: "black 1px 2px 10px" }} />
            </div>

          </div>
        </div>

      </div>
      <div className="w-full h-[100vh]  ">

        <div className="mx-auto grid grid-cols-1 h-fit w-fit max-w-screen-xl px-2.5 md:px-20">
          <p className=" pt-[10vh] font-bold text-3xl lg:text-6xl lg:leading-relaxed">Upload Your Photos and get <span className="text-white bg-sky-400">your own product of choosing</span> now</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 h-fit w-fit justify-center items-center mt-9 lg:gap-0 mx-auto">
            <img src="/imgs/hors_img.png" alt="" width={400} height={400} className="rounded-lg relative lg:left-[10vh]" />
            <img className="mx-auto rotate-90 lg:rotate-0 m-[10vh]" src="/imgs/arrow.png" alt="" width={150} />
            <Phone imgsrc="/imgs/hors.png" className="w-60 lg:right-[10vh] mx-auto" />
          </div>
        </div>

      </div>
    </div>

  );
}
