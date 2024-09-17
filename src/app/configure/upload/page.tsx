"use client";
import { addNewpic } from "@/db/find";
import { UploadDropzone } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const routing = () => {
    router.push("/configure/design/");
  };

  return (
    <div className="h-full w-full">
      <div className="mx-auto mt-10 h-[50vh] w-[120vh] bg-gray-200 rounded-xl hover:bg-gray-300 hover:text-gray-400 p-4">
        <div className="h-full w-full border-2 border-gray-600 border-dashed flex flex-col justify-center items-center rounded-xl ">
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              routing();
            }}
            onUploadError={(error: Error) => {
              console.log(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
