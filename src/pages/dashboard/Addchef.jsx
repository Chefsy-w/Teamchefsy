import React from 'react'

const Addchef = () => {
  return (
    <div>
    <div className="min-h-screen text-black flex flex-col items-center bg-gray-100 justify-center p-10 ">
<div className="bg-gray-300 p-8 rounded-lg w-full max-w-3xl shadow-md">
<h2 className="text-2xl font-bold mb-6 text-center">EDIT FORM</h2>



{/* Form Fields */}
<form className="grid grid-cols-1 gap-4">
<div>

       <div>
   <label htmlFor="profilePic" className="block mb-1 font-medium">
   Upload Profile Picture
   </label>
   <input
   type="file"
   id="profilePic"
   accept="image/*"
   className="w-full px-4 py-2 rounded text-black border-2 bg-white"
   />
</div>


   <label>Specialty</label>
   <input type="text" className="w-full px-4 py-2 rounded text-black border-2 " />
   </div>

   <div>
       <label>Description/Bio</label>
       <textarea name="description" id="text" className='w-full px-4 py-2 rounded text-black border-2 '></textarea>
   </div>

   <div>
   <label>Full name</label>
   <input type="text" className="w-full px-4 py-2 rounded text-black border-2 " />
   </div>
  
   <div>
   <label>Email</label>
   <input type="email" className="w-full px-4 py-2 rounded text-black border-2" />
   </div>
   
   
</form>


<div className="mt-6 text-center">
   <button className="bg-gray-700 hover:bg-green-600 px-6 py-2 rounded text-white font-semibold">
   Add
   </button>
</div>



</div>
</div>

</div>
  )
}

export default Addchef