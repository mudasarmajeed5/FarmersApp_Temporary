import React from 'react'
import Footer from './assets/Footer'
const Login = () => {
  return (<>

    <div className="min-h-screen relative z-[0] w-full flex items-center justify-center bg-green-500">
      <img src="https://w0.peakpx.com/wallpaper/998/17/HD-wallpaper-green-theme-background-whatsapp.jpg" className='absolute z-[-10] w-screen h-screen object-cover object-center' alt="" />
      <div className="backdrop-filter backdrop:blur-md border w-4/5 relative p-8  rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl text-center font-semibold  text-green-500 mb-4">
          Login / SignUp
        </h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required=""
            />
          </div>
          <div className="flex justify-center flex-wrap items-center gap-4">
            <button
              type="submit"
              className="min-w-fit bg-green-500 text-white px-2 py-1 hover:bg-green-800 transition duration-300"
            >
              Login
            </button>
            <a href="/home" className="min-w-fit bg-green-500 text-white px-2 py-1 hover:bg-green-800 transition duration-300">
              SignIn as Guest
            </a>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  </>
  )
}

export default Login