"use client";

const Login = () => {
  return (
    <div>
      <div className="relative  h-[500px] w-[350px] rounded-[30px] shadow-2xl bg-white/30 backdrop-blur-md ring-2 ring-white flex flex-col items-center justify-center m-10">
        <div className="bg-slate-100 h-fit w-fit rounded-lg shadow-lg p-2 mx-auto ">
          <p className="font-bold text-center">
            <span className="text-sky-400">Print</span>mee
          </p>
        </div>
        <p className="font-bold text-gray-200 text-xl text-center m-2">
          Log in to continue
        </p>
        <div className="w-full flex flex-col items-center mb-4">
          <input
            type="text"
            disabled
            placeholder="Email Address"
            className="h-9 w-[80%] md:w-[25vh] bg-transparent focus:outline-none focus:ring focus:border-blue-500 rounded-lg ring-2 ring-white p-3 mb-4"
          />
          <input
            disabled
            type="password"
            placeholder="Password"
            className="h-9 w-[80%] md:w-[25vh] bg-transparent focus:outline-none focus:ring focus:border-blue-500 rounded-lg ring-2 ring-white p-3"
          />
        </div>
        <p className="text-center mb-3 cursor-pointer">Forget Password?</p>
        <button className="w-[20vh] bg-blue-500 text-white rounded-lg py-2 mb-2">
          Continue
        </button>
        <p className="text-center mb-2">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500">
            Sign up
          </a>
        </p>
        <p className="text-center mb-2">or</p>
        <div className="w-full flex flex-col items-center gap-2">
          {/* <button className="w-[20vh] bg-gray-800 text-white rounded-lg py-1 mb-1">
            Google
          </button>
          <button className="w-[20vh] bg-blue-800 text-white rounded-lg py-1 mb-1">
            Facebook
          </button>
          <button className="w-[20vh] bg-blue-700 text-white rounded-lg py-1">
            LinkedIn
          </button> */}
          {/* </form>
      {Object.values(providerMap).map((provider) => (
        <form
          action={async () => {
            "use server"
            try {
              await signIn(provider.id, {
                redirectTo: props.searchParams?.callbackUrl ?? "",
              })
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
              } */}

          {/* // Otherwise if a redirects happens Next.js can handle it
              // so you can just re-thrown the error and let Next.js handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error
            }
          }}
        > */}
          {/* <button type="submit">
            <span>Sign in with {provider.name}</span>
          </button>
        </form> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
