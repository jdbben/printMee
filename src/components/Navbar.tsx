import { DefaultUser, getServerSession, Session } from "next-auth"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { options } from "@/app/api/auth/[...nextauth]/options"
import Link from "next/link"


const Navbar = async () => {
  const session: Session | null = await getServerSession(options)
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-gray-200 bg-white/75 backdrop-blur-lg transisition-all shadow-lg ">
      <MaxWidthWrapper>

        <div className="flex flex-none items-center justify-between">
          <Link href="/" className="flex h-14 items-center justify-between  sm:text-2xl ">
            <span className="font-bold text-sky-500">Print</span>mee
          </Link>
          <div className="flex flex-row items-center justify-items-end gap-5">
            {
              session ? (<div className="grid grid-cols-2 gap-3"><p>{session.user?.name}</p>  <Link href={"/api/auth/signout"}>Sign out</Link></div>) : (<Link href={"/api/auth/signin?callbackUrl=/"}>Sign up</Link>)
            }
            <div className="h-12 w-fit p-3 bg-sky-500 rounded-2xl  hover:shadow-lg ">
              <Link href="/configure/upload" className=" text-white/75 hover:text-white ">Create Your art</Link>
            </div>

          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
export default Navbar