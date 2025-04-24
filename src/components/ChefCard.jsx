import React from "react";
import { useParams, useNavigate } from "react-router";

// Your chef images and chef list
import chf2 from '../assets/images/chf2.jpg'
import somelier1 from "../assets/images/somelier1.jpg";
import chf4 from "../assets/images/chf4.jpg";
import pastry2 from "../assets/images/pastry2.jpg";
import chf3 from "../assets/images/chf3.jpg";
import chef7 from "../assets/images/chef7.jpg";
import chef6 from "../assets/images/chef6.jpg";
import chef11 from "../assets/images/chef11.jpg";
import chef12 from "../assets/images/chef12.jpg";
import chef10 from "../assets/images/chef10.jpg";

const chefs = [
  {
    name: "Chef Simon Simons",
    path: "ChefSimonSimons",
    specialty: "Local & Continental Dishes",
    experience: "10 years",
    bio: "Chef Simon has dedicated over a decade...",
    image: chf2,
  },
  {
    name: "Chef Ewurabena Smith-Arthur",
    path: "ChefEwurabenaSmithArthur",
    specialty: "Sommelier & Continental Dishes",
    experience: "20 years",
    bio: "Ewurabena is a distinguished sommelier...",
    image: somelier1,
  },
  {
    name: "Chef Araba Forson",
    path: "ChefArabaForson",
    specialty: "Chef & Culinary Tutor",
    experience: "10 years",
    bio: "Chef Araba blends practical chef work...",
    image: chf4,
  },
  {
    name: "Chef Fel Gifty Opare",
    path: "ChefFelGiftyOpare",
    specialty: "Pastry Chef",
    experience: "5 years",
    bio: "Fel specializes in delicious pastries...",
    image: pastry2,
  },
  {
    name: "Chef Philip Coogan",
    path: "ChefPhilipCoogan",
    specialty: "Local & Italian Dishes",
    experience: "15 years",
    bio: "Chef Philip is renowned for his elegant fusion...",
    image: chf3,
  },
  {
    name: "Chef Raymond Red",
    path: "ChefRaymondRed",
    specialty: "Sommelier & Continental Dishes",
    experience: "5 years",
    bio: "Raymond offers delightful pairings...",
    image: chef7,
  },
  {
    name: "Chef Akua Agyeman",
    path: "ChefAkuaAgyeman",
    specialty: "Pastry Chef",
    experience: "17 years",
    bio: "Akua's pastries are crafted with heart...",
    image: chef6,
  },
  {
    name: "Chef Jackie Chan",
    path: "ChefJackieChan",
    specialty: "Asian Dishes Expert",
    experience: "15 years",
    bio: "Chef Jackie brings authentic Asian cuisine...",
    image: chef11,
  },
  {
    name: "Chef Hassan Toufiq",
    path: "ChefHassanToufiq",
    specialty: "Arabian Cuisine",
    experience: "7 years",
    bio: "Hassan is a master of Arabian spices...",
    image: chef12,
  },
  {
    name: "Chef Eva Thompson",
    path: "ChefEvaThompson",
    specialty: "Local & Continental Dishes",
    experience: "10 years",
    bio: "Chef Eva blends local flavor and international trends...",
    image: chef10,
  },
];

const ChefCard = () => {
  const { chefName } = useParams(); // get the chef path from URL
  const navigate = useNavigate();

  const chef = chefs.find((c) => c.path === chefName); // match path to chef

  if (!chef) return <p className="text-center mt-20">Chef not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={chef.image}
        alt={chef.name}
        className="w-full h-[400px] object-cover rounded-xl mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{chef.name}</h1>
      <p className="text-gray-600 mb-1">Specialty: {chef.specialty}</p>
      <p className="mb-4">Experience: {chef.experience}</p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Bio</h2>
        <p>{chef.bio}</p>
      </div>
      <button
        onClick={() => navigate("/bookingForm")}
        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Contact / Hire Chef
      </button>
    </div>
  );
};

export default ChefCard;
