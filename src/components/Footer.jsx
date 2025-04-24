import React from 'react'

const Footer = () => {
  return (
    <footer className=" bg-gray-400 grid grid-cols-1 lg:grid-cols-3 gap-10 p-6">
   
    {/* Logo */}
    <div className="flex items-start justify-center lg:justify-start">
      <p className="text-4xl text-orange-600 font-semibold italic">
        chef <span className="italic text-blue-300">sy</span>
      </p>
    </div>
  
    {/* Contact Info */}
    <div className=" p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
      <div className="mb-4">
        <p className="font-medium">Telephone</p>
        <p>+233233233233</p>
      </div>
      <div className="mb-4">
        <p className="font-medium">Email</p>
        <p>chefsy@gmail.com</p>
      </div>
      <div className="mb-4">
        <p className="font-medium">Facebook</p>
        <p>Chefy.org</p>
      </div>
    </div>
  
    {/* Form */}
    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
        ></textarea>
        <button
          type="submit"
          className="bg-gray-400 hover:bg-gray-200 text-black px-6 py-2 rounded-md font-semibold"
        >
          Send
        </button>
      </form>
    </div>
    {/* <hr className='border-black'/>
    <p className='italic items-center'>copyright@ team chefsy(Fel, Gifty, Opare) 2025 . allrights reserved</p> */}
  </footer>
  )
}

export default Footer