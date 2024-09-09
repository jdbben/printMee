import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {

    return (
        <div className="h-[10vh] w-full bg-slate-100 border-t-[1px] border-slate-200 relative">
            <MaxWidthWrapper>
                <div className="grid grid-cols-2 ">
                    <div className="mt-7">
                        <p className="text-slate-500" > &copy; {new Date().getFullYear()} All rights reserved</p>
                    </div>
                    <ul className="mt-7 grid grid-cols-3 ">
                        <li className="text-slate-500 hover:text-slate-600 w-fit cursor-pointer">Terms</li>
                        <li className="text-slate-500 hover:text-slate-600  w-fit cursor-pointer">Privacy Policy</li>
                        <li className="text-slate-500 hover:text-slate-600  w-fit cursor-pointer">Cookie Policy</li>
                    </ul>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default Footer