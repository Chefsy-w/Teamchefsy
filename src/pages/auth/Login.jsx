import React from 'react'

const Login = () => {
  return (
    <div>
         <div>
        <div className="min-h-screen text-black flex flex-col items-center bg-gray-100 justify-center px-4">
    <div className="bg-gray-300 p-8 rounded-lg w-full max-w-3xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>



      {/* Form Fields */}
      <form className="grid grid-cols-1 gap-4">
      

        <div>
          <label>email</label>
          <input type="text" className="w-full px-4 py-2 rounded text-black border-2 " />
        </div>
        
        
        
        <div>
          <label>Password</label>
          <input type="password" className="w-full px-4 py-2 rounded text-black border-2" />
        </div>
        
      </form>

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <button className="bg-gray-700 hover:bg-green-600 px-6 py-2 rounded text-white font-semibold">
          Login
        </button>
      </div>

      {/* Footer Text */}
      <p className="mt-4 text-sm text-gray-400 text-center">
        Login in means you're okay with Chefsy Terms of Service, Privacy Policy
      </p>
    </div>
  </div>   

    </div>

    </div>
  )
}

export default Login