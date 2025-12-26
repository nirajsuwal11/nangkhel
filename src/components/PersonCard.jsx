import React from "react";

export default function PersonCard({ name, role, img }) {
  return (
    <div className="bg-white rounded-xl shadow-md text-center p-6 h-full
                    transition-all duration-300
                    hover:-translate-y-2 hover:shadow-xl">
      
      {/* Circular Image */}
      <div className="mx-auto w-40 h-40 rounded-full overflow-hidden
                      border-4 border-green-600
                      transition-all duration-300
                      hover:shadow-green-400/50 hover:shadow-lg">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover
                     transition-transform duration-300
                     hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold
                       transition-colors duration-300
                       hover:text-green-700">
          {name}
        </h3>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  );
}
