'use client'
import { OurFileRouter } from '@/app/api/uploadthing/core';
import { UploadDropzone } from '@/utils/uploadthing';
import { redirect } from 'next/navigation';

const page = () => {


    return (

        <div className="h-full w-full">
            <div className="mx-auto mt-10 h-[50vh] w-[120vh] bg-gray-200 rounded-xl hover:bg-gray-300 hover:text-gray-400 p-4">
                <div className="h-full w-full border-2 border-gray-600 border-dashed flex flex-col justify-center items-center rounded-xl ">
                    <UploadDropzone<OurFileRouter>
                        endpoint="imageUploader"
                        url="http://localhost:3000"
                        onClientUploadComplete={(res) => {

                        }}
                        onUploadError={(error: Error) => {
                            console.log(`ERROR! ${error.message}`);
                        }}
                    />
                </div>

            </div>

        </div >
    )
}

export default page