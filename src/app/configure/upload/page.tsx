import { ImageUp } from 'lucide-react';
const page = () => {
    return (
        <div className="h-full w-full">
            <div className="mx-auto mt-10 h-[50vh] w-[120vh] bg-gray-200 rounded-xl hover:bg-gray-300 hover:text-gray-400 p-4">
                <div className="h-full w-full border-2 border-gray-600 border-dashed flex flex-col justify-center items-center rounded-xl ">
                    <ImageUp />
                    <p className="">Click to upload or drag and drop</p>
                    <p>PNG, JPG, JPEG</p>
                </div>

            </div>

        </div>
    )
}

export default page