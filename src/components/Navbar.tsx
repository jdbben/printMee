import MaxWidthWrapper from "./MaxWidthWrapper"

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-gray-200 bg-white/75 backdrop-blur-lg transisition-all shadow-lg ">
      <MaxWidthWrapper>
        <div className="flex flex-none items-center justify-between">
          <div className="flex h-14 items-center justify-between  sm:text-2xl ">
            <span className="font-bold text-sky-500">Print</span>mee
          </div>
          <div className="flex flex-row items-center justify-items-end gap-5">
            <p>Sign up</p>
            <p>Login</p>
            <button className="rounded-lg bg-sky-500 h-10 w-40 text-white/75 hover:text-white hover:shadow-lg ">Create Your art</button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar