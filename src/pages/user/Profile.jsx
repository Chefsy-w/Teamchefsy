import React from 'react';
import { Link } from 'react-router';
import user1 from '../../assets/images/user1.jpg';

const Profile = () => {
  const client = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "(555) 123-4567",
    location: "New York, NY",
    profileImage: "/api/placeholder/400/400",
    bio: "Marketing executive with a passion for culinary experiences. Looking for skilled chefs to cater regular corporate events and occasional private dinner parties.",
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-indigo-600 p-6 md:p-8">
        <p className=" ml-25 text-2xl text-orange-600 font-semibold italic">
          chef <span className="text-blue-300 italic">sy</span>
        </p>
          <h1 className="ml-15 text-3xl md:text-4xl font-bold text-white">Client Profile</h1>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img 
                src={user1} 
                alt={client.name} 
                className="rounded-xl w-full h-64 object-cover"
              />
              <div className="mt-6 bg-gray-50 rounded-xl p-4 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
                <div className="mt-3 space-y-3 text-lg">
                  <p className="flex items-center">
                    <span className="w-8 text-indigo-600">📧</span> 
                    <span>sarah.johnson@example.com</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-8 text-indigo-600">📱</span> 
                    <span>(555) 123-4567</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-8 text-indigo-600">📍</span> 
                    <span>New York NY</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sarah Johnson</h2>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-100 pb-2">About</h3>
                <p className="mt-4 text-xl text-gray-700 leading-relaxed">Marketing executive with a passion for culinary experiences. Looking for skilled chefs to cater regular corporate events and occasional private dinner parties.</p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-100 pb-2">Dietry Preferences</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-lg font-medium">Italian Cuisine</span>
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-lg font-medium">Farm-to-Table</span>
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-lg font-medium">Seafood</span>
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-lg font-medium">Wine Pairing</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-100 pb-2">Upcoming Events</h3>
                <div className="mt-4 space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xl font-medium text-indigo-800">Corporate Dinner</p>
                        <p className="text-lg text-gray-700">Date: May 15, 2025</p>
                        <p className="text-lg text-gray-700">Guests: 25</p>
                      </div>
                      <Link to="/booking-details" className="text-indigo-600 font-bold text-lg hover:text-indigo-800">Details →</Link>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xl font-medium text-indigo-800">Private Party</p>
                        <p className="text-lg text-gray-700">Date: June 3, 2025</p>
                        <p className="text-lg text-gray-700">Guests: 12</p>
                      </div>
                      <Link to="/booking-details" className="text-indigo-600 font-bold text-lg hover:text-indigo-800">Details →</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-100 pb-2">Previous Bookings</h3>
                <div className="mt-4 divide-y divide-gray-200">
                  <div className="py-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xl font-medium">Birthday Celebration</p>
                        <p className="text-lg text-gray-600">Chef Philip Coogan</p>
                        <p className="text-lg text-gray-500">March 10, 2025</p>
                      </div>
                      <Link to="/booking-history" className="text-indigo-600 font-bold text-lg hover:text-indigo-800">View</Link>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xl font-medium">Wine Tasting Dinner</p>
                        <p className="text-lg text-gray-600">Chef Ewurabena Smith-Arthur</p>
                        <p className="text-lg text-gray-500">January 22, 2025</p>
                      </div>
                      <Link to="/booking-history" className="text-indigo-600 font-bold text-lg hover:text-indigo-800">View</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/edit-profile" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold py-3 px-8 rounded-full text-center">
              Edit Profile
            </Link>
            <Link to="/find-chefs" className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xl font-bold py-3 px-8 rounded-full text-center">
              Find Chefs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

