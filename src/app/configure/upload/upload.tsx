"use client";
import { UploadDropzone } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";

const Upload = ({ name }: { name: string | null }) => {
  const router = useRouter();
  const routing = () => {
    router.push("/configure/design/");
  };

  const fetchdata = async () => {
    if (name) {
      try {
        const res = await fetch(
          `/api/addPreview?name=${encodeURIComponent(name)}&type=upload`
        );
        const da = await res.json();
        const data = da.data;

        if (res.ok && typeof data === "string") {
          routing();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  fetchdata();
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
export default Upload;
