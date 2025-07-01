import React from "react";

const profiles = [
  {
    id: 1,
    name: "Hansa Kumari",
    role: "Web Developer",
    quote: "Passionate about building accessible web experiences.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    color: "blue",
  },
  {
    id: 2,
    name: "John Doe",
    role: "UI/UX Designer",
    quote: "Design is not just what it looks like and feels like.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    color: "green",
  },
  {
    id: 3,
    name: "Aisha Khan",
    role: "Full Stack Engineer",
    quote: "Code is poetry and problem-solving.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    color: "purple",
  },
  {
    id: 4,
    name: "Ali Raza",
    role: "Data Analyst",
    quote: "Turning data into decisions.",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    color: "yellow",
  },
  {
    id: 5,
    name: "Sana Sheikh",
    role: "Graphic Designer",
    quote: "Designs that speak louder than words.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    color: "pink",
  },
  {
    id: 6,
    name: "Usman Tariq",
    role: "Cybersecurity Expert",
    quote: "Your data's best friend.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    color: "red",
  },
];

export default function ProfileGrid() {
  const colorClasses = {
    blue: {
      border: "border-blue-500",
      text: "text-blue-600",
      bg: "bg-blue-500",
      hoverBg: "hover:bg-blue-600",
      borderBtn: "border-blue-500",
      textBtn: "text-blue-500",
      hoverBgBtn: "hover:bg-blue-50",
    },
    green: {
      border: "border-green-500",
      text: "text-green-600",
      bg: "bg-green-500",
      hoverBg: "hover:bg-green-600",
      borderBtn: "border-green-500",
      textBtn: "text-green-500",
      hoverBgBtn: "hover:bg-green-50",
    },
    purple: {
      border: "border-purple-500",
      text: "text-purple-600",
      bg: "bg-purple-500",
      hoverBg: "hover:bg-purple-600",
      borderBtn: "border-purple-500",
      textBtn: "text-purple-500",
      hoverBgBtn: "hover:bg-purple-50",
    },
    yellow: {
      border: "border-yellow-500",
      text: "text-yellow-600",
      bg: "bg-yellow-500",
      hoverBg: "hover:bg-yellow-600",
      borderBtn: "border-yellow-500",
      textBtn: "text-yellow-500",
      hoverBgBtn: "hover:bg-yellow-50",
    },
    pink: {
      border: "border-pink-500",
      text: "text-pink-600",
      bg: "bg-pink-500",
      hoverBg: "hover:bg-pink-600",
      borderBtn: "border-pink-500",
      textBtn: "text-pink-500",
      hoverBgBtn: "hover:bg-pink-50",
    },
    red: {
      border: "border-red-500",
      text: "text-red-600",
      bg: "bg-red-500",
      hoverBg: "hover:bg-red-600",
      borderBtn: "border-red-500",
      textBtn: "text-red-500",
      hoverBgBtn: "hover:bg-red-50",
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => {
          const c = colorClasses[profile.color];
          return (
            <div
              key={profile.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className={`w-24 h-24 rounded-full border-4 mb-4 hover:scale-105 transition-transform duration-300 ${c.border}`}
                />
                <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
                <p className={`text-sm font-medium ${c.text}`}>{profile.role}</p>
                <p className="text-gray-600 mt-2 text-sm">"{profile.quote}"</p>
                <div className="mt-4 flex space-x-3">
                  <button
                    className={`text-white px-4 py-2 rounded-xl transition ${c.bg} ${c.hoverBg}`}
                  >
                    Follow
                  </button>
                  <button
                    className={`px-4 py-2 rounded-xl transition border ${c.borderBtn} ${c.textBtn} ${c.hoverBgBtn}`}
                  >
                    Message
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
