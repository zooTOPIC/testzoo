import React from "react";

function Developer({ name, tagline, image, description }) {
  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={image} alt={name} className="w-full" />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className="text-gray-600">{tagline}</p>
          <p className="text-gray-800 mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Developer;
