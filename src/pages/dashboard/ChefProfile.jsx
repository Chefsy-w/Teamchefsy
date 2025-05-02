// import React from 'react';
// import somelier1 from '../../assets/images/somelier1.jpg'

// const ChefProfile = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
//       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-8">

//         {/* Header with Profile Image */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
//           <div className="flex items-center space-x-4">
//             <img
//               src={somelier1}
//               alt="Chef Profile"
//               className="w-20 h-20 rounded-full object-cover border-2 border-emerald-500"
//             />
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800">Welcome, Chef Ewurabena Smith-Arthur</h2>
//               <p className="text-gray-500 text-sm">Manage your profile and bookings here.</p>
//             </div>
//           </div>
//           <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700 transition">
//             Edit Profile
//           </button>
//         </div>

//         {/* Personal Info */}
//         <section>
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <p className="text-sm text-gray-500">Full Name</p>
//               <p className="font-medium text-gray-800">Queen Zee</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Email</p>
//               <p className="font-medium text-gray-800">chefzee@example.com</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Phone</p>
//               <p className="font-medium text-gray-800">+233 123 456 789</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Location</p>
//               <p className="font-medium text-gray-800">Accra, Ghana</p>
//             </div>
//           </div>
//         </section>

//         {/* Bio */}
//         <section>
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">About Me</h3>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             Passionate about Afro-vegan cuisine, I’ve been cooking for 10+ years with a focus on healthy and flavorful meals.
//             I love curating personalized food experiences that celebrate culture and wellness.
//           </p>
//         </section>

//         {/* Bookings */}
//         <section>
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">My Bookings</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//             {/* Past Booking */}
//             <div className="border rounded-lg p-4 bg-gray-50">
//               <h4 className="font-semibold text-gray-800">Private Dinner – April 2</h4>
//               <p className="text-sm text-gray-500">Status: Completed</p>
//               <p className="text-sm text-gray-500">Client: Nana K.</p>
//             </div>

//             {/* Pending Booking */}
//             <div className="border rounded-lg p-4 bg-yellow-50">
//               <h4 className="font-semibold text-gray-800">Event Catering – April 28</h4>
//               <p className="text-sm text-yellow-600">Status: Pending</p>
//               <p className="text-sm text-gray-500">Client: Kofi A.</p>
//             </div>

//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ChefProfile;

import React from 'react';
import { Link } from 'react-router';
import user2 from '../../assets/images/user2.jpg'

export default function ChefProfile() {
  return (
    <div className="bg-gray-200 min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-black p-6 md:p-8">
          <p className="ml-25 text-2xl text-orange-400 font-semibold italic">
            chef <span className="text-blue-300 italic">sy</span>
          </p>
          <h1 className="ml-15 text-3xl md:text-4xl font-bold text-white">Chef Dashboard</h1>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img 
                src={user2} 
                alt="Chef Name" 
                className="rounded-xl w-full h-64 object-cover"
              />
              <div className="mt-6 bg-gray-100 rounded-xl p-4 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800">Specialization</h3>
                <ul className="mt-3 text-lg space-y-2 list-disc list-inside text-gray-700">
                  <li>French Cuisine</li>
                  <li>Gourmet Desserts</li>
                  <li>Farm-to-Table</li>
                  <li>Vegan Meals</li>
                </ul>
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Chef Fel Gifty Opare</h2>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-100 pb-2">Booking Management</h3>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-indigo-700">Pending Bookings</h4>
                  <div className="mt-2 space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <p className="text-lg text-gray-800">Corporate Brunch - May 20, 2025</p>
                      <p className="text-sm text-gray-600">Client: Sarah Johnson | Guests: 20</p>
                      <div className="flex gap-3 mt-3">
                        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg font-bold">Approve</button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold">Reject</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-indigo-700">Previous Bookings</h4>
                  <div className="mt-2 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-lg text-gray-800">Birthday Dinner - April 2, 2025</p>
                      <p className="text-sm text-gray-600">Client: Michael Green | Guests: 10</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-lg text-gray-800">Wine Pairing Night - March 18, 2025</p>
                      <p className="text-sm text-gray-600">Client: Lisa Kim | Guests: 15</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/edit-chef-profile" className="bg-indigo-700 hover:bg-indigo-800 text-white text-xl font-bold py-3 px-8 rounded-full text-center">
              Edit Profile
            </Link>
            <Link to="/view-bookings" className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xl font-bold py-3 px-8 rounded-full text-center">
              View All Bookings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}





