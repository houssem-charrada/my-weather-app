import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sidney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Berlin",
    },
    {
      id: 5,
      title: "Toronto",
    },
    {
      id: 6,
      title: "Paris",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 gap-6 md:mt-0 md:flex md:items-center md:justify-around py-6 flex-col border-b-2 md:flex-row">
      {cities.map((city) => (
        <button
          key={city.id}
          className=" text-white text-lg font-medium duration-200 hover:scale-110"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
