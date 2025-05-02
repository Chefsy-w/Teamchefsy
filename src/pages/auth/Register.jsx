import React from "react";
import { apiRegister } from "../../services/auth";
import { useNavigate } from "react-router";

const Register = () => {

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const res = await apiRegister(formData);
      alert("this load was successfull");
      console.log(res);
      navigate("");
    } catch (error) {
      console.log(error);
      alert("failed")
    
    }
  };

  


  return (
    <div>
      <div>
        <div className="flex-col p-30 text-center text-3xl font-bold">
          <h1>Welcome to </h1>
          <p className="text-5xl text-orange-600 font-semibold italic">
            chef <span className="italic text-blue-300">sy </span>
          </p>
          <p>
            Thank You are Expressing Interest in Us. Register to Discover
            Amazing Experience
          </p>
        </div>

        <div className="min-h-screen text-black flex flex-col items-center bg-gray-100 justify-center p-10 ">
          <div className="bg-gray-300 p-8 rounded-lg w-full max-w-3xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">

              <div>
                 <label>Role</label>
                 <select className="w-full px-4 py-2 rounded text-black border-2">
                 <option value="client">Customer</option>
                 <option value="chef">Chef</option>
            </select>
          </div>
              <div>
                <label>username</label>
                <input
                  type="text"
                  name="username"
                  className="w-full px-4 py-2 rounded text-black border-2 "
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 rounded text-black border-2"
                />
              </div>

              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 rounded text-black border-2"
                />
              </div>
              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full px-4 py-2 rounded text-black border-2"
                />
                <div className="mt-6 text-center">
              <button
              type="submit" className="bg-gray-700 hover:bg-black px-6 py-2 rounded text-white font-semibold">
                Create Account
              </button>
            </div>
              </div>
            </form>

            

            <p className="mt-4 text-sm text-gray-400 text-center">
              Creating an account means you're okay with Chefsy Terms of
              Service, Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
