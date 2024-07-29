import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen z-50 absolute w-full flex items-center justify-center bg-green-500">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl text-center font-bold text-green-500 mb-4">
        Login
      </h2>
      <form action="#" method="POST">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700"
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
            className="block text-sm font-medium text-zinc-700"
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
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Login
        </button>
      </form>
      <a href="/" className="block text-sm text-green-500 mt-4 hover:underline">
        Go to Home
      </a>
    </div>
  </div>
  )
}

export default Login