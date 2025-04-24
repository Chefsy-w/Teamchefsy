import React from 'react'
import chf2 from '../../assets/images/chf2.jpg'
import chf3 from "../../assets/images/chf3.jpg";
import chf4 from "../../assets/images/chf4.jpg";
// import chf5 from '../../assets/images/chf5.jpg'
import chef7 from "../../assets/images/chef7.jpg";
import pastry2 from '../../assets/images/pastry2.jpg';
import chef6 from '../../assets/images/chef6.jpg';
import chef11 from '../../assets/images/chef11.jpg';
import chef12 from '../../assets/images/chef12.jpg';
import chef10 from '../../assets/images/chef10.jpg';
import somelier1 from '../../assets/images/somelier1.jpg';
import { Link } from 'react-router';

const Allchefs = () => {
  return (
   

    <div className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-4 shadow">
          <img src={chf2} alt="Chef Simon" className="rounded-xl mb-2 w-full h-[300px] object-cover" />
          <h2 className="font-semibold">Chef Simon Simons</h2>
          <p className="text-sm text-gray-600">Local & continental dishes</p>
          <p className="font-bold mt-2">Bio</p>
          <p>10 years experience</p>
          <p>Cater for all guest sizes</p>
          <div className="flex gap-2 mt-4">
            <Link to="/dashboard/editForm">
              <button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Edit</button>
            </Link>
            <Link to="/delete-chef/1">
              <button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Delete</button>
            </Link>
          </div>
        </div>
    
        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-4 shadow">
          <img src={somelier1} alt="Chef Ewurabena" className="rounded-xl mb-2 w-full h-[300px] object-cover" />
          <h2 className="font-semibold">Chef Ewurabena Smith-Arthur</h2>
          <p className="text-sm text-gray-600">Sommelier & continental dishes</p>
          <p className="font-bold mt-2">Bio</p>
          <p>20 years experience</p>
          <p>Handles home orders and family size</p>
          <div className="flex gap-2 mt-4">
            <Link to="/edit-chef/2"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Edit</button></Link>
            <Link to="/delete-chef/2"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Delete</button></Link>
          </div>
        </div>
    
        {/* Card 3 */}
        <div className="bg-white rounded-3xl p-4 shadow">
          <img src={chf4} alt="Chef Araba" className="rounded-xl mb-2 w-full h-[300px] object-cover" />
          <h2 className="font-semibold">Chef Araba Forson</h2>
          <p className="text-sm text-gray-600">Chef & culinary tutor</p>
          <p className="font-bold mt-2">Bio</p>
          <p>10 years experience</p>
          <p>Cater for all guest sizes</p>
          <div className="flex gap-2 mt-4">
            <Link to="/edit-chef/3"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Edit</button></Link>
            <Link to="/delete-chef/3"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Delete</button></Link>
          </div>
        </div>
    
        {/* Card 4 */}
        <div className="bg-white rounded-3xl p-4 shadow">
          <img src={pastry2} alt="Chef Fel" className="rounded-xl mb-2 w-full h-[300px] object-cover" />
          <h2 className="font-semibold">Chef Fel Gifty Opare</h2>
          <p className="text-sm text-gray-600">Pastry Chef</p>
          <p className="font-bold mt-2">Bio</p>
          <p>5 years experience</p>
          <p>Tutor and handles all group sizes</p>
          <div className="flex gap-2 mt-4">
            <Link to="/edit-chef/4"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Edit</button></Link>
            <Link to="/delete-chef/4"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Delete</button></Link>
          </div>
        </div>
    
        {/* Card 5 */}
        <div className="bg-white rounded-3xl p-4 shadow">
          <img src={chf3} alt="Chef Philipa" className="rounded-xl mb-2 w-full h-[300px] object-cover" />
          <h2 className="font-semibold">Chef Philipa Coogan</h2>
          <p className="text-sm text-gray-600">Local & Italian dishes</p>
          <p className="font-bold mt-2">Bio</p>
          <p>15 years experience</p>
          <p>Cater for intimate groups less than 20</p>
          <div className="flex gap-2 mt-4">
            <Link to="/edit-chef/5"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Edit</button></Link>
            <Link to="/delete-chef/5"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Delete</button></Link>
          </div>
        </div>
    
        {/* Card 6 */}
        <div className="bg-white rounded-3xl p-4 shadow">
          <img src={chef7} alt="Chef Raymona" className="rounded-xl mb-2 w-full h-[300px] object-cover" />
          <h2 className="font-semibold">Chef Raymona Red</h2>
          <p className="text-sm text-gray-600">Sommelier & continental dishes</p>
          <p className="font-bold mt-2">Bio</p>
          <p>5 years experience</p>
          <p>Tutor and handles all group sizes</p>
          <div className="flex gap-2 mt-4">
            <Link to="/edit-chef/6"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Edit</button></Link>
            <Link to="/delete-chef/6"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Delete</button></Link>
          </div>
        </div>
    
        {/* Card 7 */}
        <div className="bg-white rounded-3xl p-4 shadow">
          <img src={chef6} alt="Chef Akua" className="rounded-xl mb-2 w-full h-[300px] object-cover" />
          <h2 className="font-semibold">Chef Akua Agyeman</h2>
          <p className="text-sm text-gray-600">Pastry Chef</p>
          <p className="font-bold mt-2">Bio</p>
          <p>17 years experience</p>
          <p>Cater for all guest sizes</p>
          <div className="flex gap-2 mt-4">
            <Link to="/edit-chef/7"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Edit</button></Link>
            <Link to="/delete-chef/7"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Delete</button></Link>
          </div>
        </div>
    
        {/* Card 8 */}
        <div className="bg-white rounded-3xl p-4 shadow">
          <img src={chef11} alt="Chef Jackie" className="rounded-xl mb-2 w-full h-[300px] object-cover" />
          <h2 className="font-semibold">Chef Jackie Chan</h2>
          <p className="text-sm text-gray-600">Asian dishes expert</p>
          <p className="font-bold mt-2">Bio</p>
          <p>15 years experience</p>
          <p>Tutor, sommelier and chef</p>
          <div className="flex gap-2 mt-4">
            <Link to="/edit-chef/8"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Edit</button></Link>
            <Link to="/delete-chef/8"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Delete</button></Link>
          </div>
        </div>
    
        {/* Card 9 */}
        <div className="bg-white rounded-3xl p-4 shadow">
          <img src={chef12} alt="Chef Hassan" className="rounded-xl mb-2 w-full h-[300px] object-cover" />
          <h2 className="font-semibold">Chef Hassan Toufiq</h2>
          <p className="text-sm text-gray-600">Arabian cuisine</p>
          <p className="font-bold mt-2">Bio</p>
          <p>7 years experience</p>
          <p>Consultant and tutor</p>
          <div className="flex gap-2 mt-4">
            <Link to="/edit-chef/9"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Edit</button></Link>
            <Link to="/delete-chef/9"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Delete</button></Link>
          </div>
        </div>
    
        {/* Card 10 */}
        <div className="bg-white rounded-3xl p-4 shadow">
          <img src={chef10} alt="Chef Ivan" className="rounded-xl mb-2 w-full h-[300px] object-cover" />
          <h2 className="font-semibold">Chef Ivan Thompson</h2>
          <p className="text-sm text-gray-600">Local & continental dishes</p>
          <p className="font-bold mt-2">Bio</p>
          <p>10 years experience in various styles</p>
          <p>Cater for all guest sizes</p>
          <div className="flex gap-2 mt-4">
            <Link to="/edit-chef/10"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Edit</button></Link>
            <Link to="/delete-chef/10"><button className="font-bold border-2 rounded-2xl px-4 py-2 hover:bg-gray-400">Delete</button></Link>
          </div>
        </div>
      </div>
    </div>
       
  )
}

export default Allchefs