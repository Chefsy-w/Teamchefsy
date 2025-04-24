import React from 'react'
import chf2 from "../../assets/images/chf2.jpg";
import chf3 from "../../assets/images/chf3.jpg";
import chf4 from "../../assets/images/chf4.jpg";
import chf5 from '../../assets/images/chf5.jpg'
import chef7 from "../../assets/images/chef7.jpg";
import pastry2 from '../../assets/images/pastry2.jpg';
import chef6 from '../../assets/images/chef6.jpg';
import chef11 from '../../assets/images/chef11.jpg';
import chef12 from '../../assets/images/chef12.jpg';
import chef10 from '../../assets/images/chef10.jpg';
import somelier1 from '../../assets/images/somelier1.jpg';
import fd1 from '../../assets/images/fd1.jpg'
import { Link } from 'react-router';
// import  ChefCard  from '../../components/ChefCard';

const Chefs = () => {
  return (
    <div>

        <div className="p-6 rounded-lg shadow-lg max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
            <h2 className="text-3xl font-bold mb-4">Skilled professionals</h2>
            <p className="text-gray-700 mb-4">
            Our highly experienced and qualified chefs are ready to astound you:
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
            <img
            src={fd1}
            alt="Chef 1"
            className="rounded-lg w-full h-full object-cover"
            />

            <div className="flex flex-col gap-4">
            <img
                src={chf3}
                alt="Chef 2"
                className="rounded-lg w-full h-full object-cover"
            />
            <img
                src={chf4}
                alt="Chef 3"
                className="rounded-lg w-full h-full object-cover"
            />
            </div>

            <img
            src={chf5} alt="Chef 4" className="rounded-lg w-full h-full object-cover"
            />
        </div>
        </div>


        <div className="bg-white px-6 py-12">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Our Services
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Cooking Service */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Cooking
                    </h2>
                    <p className="text-gray-700 mb-2">
                    Order a chef to handle all your public events like birthdays,
                    weddings, anniversaries, seminars etc.
                    </p>
                    <p className="text-gray-700">
                    Hire a chef for your private cooking, for your family gathering,
                    or to stock up the house.
                    </p>
                </div>

                {/* Culinary Lessons */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Culinary Lessons
                    </h2>
                    <p className="text-gray-700 mb-2">
                    Want to take up some cooking lessons? Join our culinary school for
                    structured training.
                    </p>
                    <p className="text-gray-700">
                    Need a private tutor for your own culinary journey? Don’t hesitate
                    to reach out.
                    </p>
                </div>
                </div>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-4">
                {/* Card 1 */}
                <div className="min-w-[250px] bg-white rounded-3xl p-4 shadow">
                  <img src={chf2} alt="Chef Simon" className="rounded-xl mb-2  w-full h-[300px] object-cover" />
                  <h2 className="font-semibold">Chef Simon Simons</h2>
                  <p className="text-sm text-gray-600">Local & continental dishes</p>
                  {/* <p className="font-bold">Bio</p> */}
                  <p> 10 years experience</p>
                  {/* <p>cater for all guest sizes</p> */}
                  <Link to="/ChefCard/ChefSimonSimons">
                    <button className="font-bold border-2 rounded-3xl p-3 hover:bg-gray-400">
                    Details
                    </button>
                     </Link>
                 
                 
                </div>
        
                {/* Card 2 */}
                <div className="min-w-[250px] bg-white rounded-3xl p-4 shadow">
                  <img src={somelier1} alt="Chef Ewurabena" className="rounded-xl mb-2  w-full h-[300px] object-cover" />
                  <h2 className="font-semibold">Chef Ewurabena Smith-Arthur</h2>
                  <p className="text-sm text-gray-600">Sommelier & continental dishes</p>
                  {/* <p className="font-bold">Bio</p> */}
                  <p> 20 years experience </p>
                  {/* <p> handles home order and family size</p> */}
                  <Link to="/chefCard/ChefEwurabenaSmithArthur">
                    <button className="font-bold border-2 rounded-3xl p-3 hover:bg-gray-400">
                    Details
                    </button>
                   </Link>
                  
                  
                </div>
        
                {/* Card 3 */}
                <div className="min-w-[250px] bg-white rounded-3xl p-4 shadow">
                  <img src={chf4} alt="Chef Araba" className="rounded-xl mb-2  w-full h-[300px] object-cover" />
                  <h2 className="font-semibold">Chef Araba Forson</h2>
                  <p className="text-sm text-gray-600">Chef & culinary tutor</p>
                  {/* <p className="font-bold">Bio</p> */}
                  <p> 10 years experience</p>
                     {/* <p>cater for all guest sizes</p> */}
                     <Link to="/chefCard/ChefArabaForson">
                    <button className="font-bold border-2 rounded-3xl p-3 hover:bg-gray-400">
                    Details
                    </button>
                       </Link>
                 
                </div>
        
                {/* Card 4 */}
                <div className="min-w-[250px] bg-white rounded-3xl p-4 shadow">
                  <img src={pastry2} alt="Chef Fel" className="rounded-xl mb-2  w-full h-[300px] object-cover" />
                  <h2 className="font-semibold">Chef Fel Gifty Opare</h2>
                  <p className="text-sm text-gray-600">Pastry Chef</p>
                  {/* <p className="font-bold">Bio</p> */}
                  <p>5 years experience </p>
                  {/* <p>Tutor and handles all groups sizes</p> */}
                  <Link to="/chefCard/ChefFelGiftyOpare">
                    <button className="font-bold border-2 rounded-3xl p-3 hover:bg-gray-400">
                       Details
                    </button>
                    </Link>
                
                </div>
        
                {/* Card 5 */}
                <div className="min-w-[250px] bg-white rounded-3xl p-4 shadow">
                  <img src={chf3} alt="Chef Philip" className="rounded-xl mb-2  w-full h-[300px] object-cover" />
                  <h2 className="font-semibold">Chef Philip Coogan</h2>
                  <p className="text-sm text-gray-600">Local & Italian dishes</p>
                  {/* <p className="font-bold">Bio</p> */}
                  <p> 15 years experience</p>
                     {/* <p> cater for intimate groups less than 20</p> */}
                     <Link to="/chefCard/ChefPhilipCoogan">
                    <button className="font-bold border-2 rounded-3xl p-3 hover:bg-gray-400">
                    Details
                    </button>
                   </Link>
                 
                </div>
        
                {/* Card 6 */}
                <div className="min-w-[250px] bg-white rounded-3xl p-4 shadow">
                  <img src={chef7} alt="Chef Raymond" className="rounded-xl mb-2  w-full h-[300px] object-cover" />
                  <h2 className="font-semibold">Chef Raymond Red</h2>
                  <p className="text-sm text-gray-600">Sommelier & continental dishes</p>
                  {/* <p className="font-bold">Bio</p> */}
                  <p>5 years experience </p>
                  {/* <p>Tutor and handles all groups sizes</p> */}
                  <Link to="/chefCard/ChefRaymondRed">
                    <button className="font-bold border-2 rounded-3xl p-3 hover:bg-gray-400">
                    Details
                    </button>
                    </Link>
                
                </div>
        
                {/* Card 7 */}
                <div className="min-w-[250px] bg-white rounded-3xl p-4 shadow">
                  <img src={chef6} alt="Chef Akua" className="rounded-xl mb-2  w-full h-[300px] object-cover" />
                  <h2 className="font-semibold">Chef Akua Agyeman</h2>
                  <p className="text-sm text-gray-600">Pastry Chef</p>
                  {/* <p className="font-bold">Bio</p> */}
                  <p> 17 years experience</p>
                  {/* <p>cater for all guest sizes</p> */}
                  <Link to="/chefCard/ChefAkuaAgyeman">
                    <button className="font-bold border-2 rounded-3xl p-3 hover:bg-gray-400">
                    Details
                    </button>
                    </Link>
                
                </div>
        
                {/* Card 8 */}
                <div className="min-w-[250px] bg-white rounded-3xl p-4 shadow">
                  <img src={chef11} alt="Chef Jackie" className="rounded-xl mb-2  w-full h-[300px] object-cover" />
                  <h2 className="font-semibold">Chef Jackie Chan</h2>
                  <p className="text-sm text-gray-600">Asian dishes expert</p>
                  {/* <p className="font-bold">Bio</p> */}
                  <p> 15 years experience </p>
                  {/* <p>tutor, somelier and chef</p> */}
                  <Link to="/chefCard/ChefJackieChan">
                <button className="font-bold border-2 rounded-3xl p-3 hover:bg-gray-400">
                  Details
                </button>
                 </Link>
                
                </div>
        
                {/* Card 9 */}
                <div className="min-w-[250px] bg-white rounded-3xl p-4 shadow">
                  <img src={chef12} alt="Chef Hassan" className="rounded-xl mb-2  w-full h-[300px] object-cover" />
                  <h2 className="font-semibold">Chef Hassan Toufiq</h2>
                  <p className="text-sm text-gray-600">Arabian cuisine</p>
                  {/* <p className="font-bold">Bio</p> */}
                  <p>professional Chef with over 7 years experience </p>
                  {/* <p>consultant and tutor</p> */}
                  <Link to="/chefCard/ChefHassanToufiq">
                    <button className="font-bold border-2 rounded-3xl p-3 hover:bg-gray-400">
                    Details
                    </button>
                   </Link>
                
                </div>
        
                {/* Card 10 */}
                <div className="min-w-[250px] bg-white rounded-3xl p-4 shadow">
                  <img src={chef10} alt="Chef Eva" className="rounded-xl mb-2  w-full h-[300px] object-cover" />
                  <h2 className="font-semibold">Chef Eva Thompson</h2>
                  <p className="text-sm text-gray-600">Local & continental dishes</p>
                  {/* <p className="font-bold">Bio</p> */}
                  <p>10 years experience in various styles </p>
                  {/* <p>cater for all guest sizes</p> */}

                  <Link to="/chefCard/ChefEvaThompson">
                 <button className="font-bold border-2 rounded-3xl p-3 hover:bg-gray-400">
                  Details
                     </button>
                  </Link>
        
                </div>
              </div>

    </div>
  )
}

export default Chefs