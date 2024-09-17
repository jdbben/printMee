import InputRadio from "@/components/InputRadio";
import UserImage from "@/components/UserImage";

const Page = () => {
  return (
    <div className="flex flex-1 mt-[10vh] justify-center items-center border-dashed border-2 rounded-lg border-gray-300 overflow-hidden  ">
      <div className="h-[70vh] w-[100vh] bg-gray-200 rounded-l-lg border-r-4 border-gray-300 overflow-hidden">
        <UserImage />
      </div>
      <div>
        <InputRadio />
      </div>
    </div>
  );
};

export default Page;
