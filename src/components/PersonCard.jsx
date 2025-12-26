import React from "react";

export default function PersonCard({ name, role, img }) {
  return (
    <div
      className="
        bg-white rounded-lg shadow-md text-center
        p-3 sm:p-6                 /* smaller padding on mobile */
        h-full
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
      "
    >
      
      {/* Circular Image */}
      <div
        className="
          mx-auto
          w-24 h-24                 /* 📱 mobile */
          sm:w-40 sm:h-40           /* 💻 desktop */
          rounded-full overflow-hidden
          border-2 sm:border-4 border-green-600
          transition-all duration-300
        "
      >
        <img
          src={img}
          alt={name}
          className="
            w-full h-full object-cover
            transition-transform duration-300
            hover:scale-110
          "
        />
      </div>

      {/* Text */}
      <div className="mt-2 sm:mt-4">
        <h3
          className="
            text-sm sm:text-lg      /* smaller text on mobile */
            font-semibold
            transition-colors duration-300
            hover:text-green-700
          "
        >
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          {role}
        </p>
      </div>
    </div>
  );
}
