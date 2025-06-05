import React from "react";

const shots = [
  {
    title: "Love In Focus",
    image: "https://your-image-url-1.jpg"
  },
  {
    title: "Forever Captured",
    image: "https://your-image-url-2.jpg"
  },
  {
    title: "Timeless Romance",
    image: "https://your-image-url-3.jpg"
  }
];

const ShotOfTheDay = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f4c75] via-[#3282b8] to-[#d9caa6] py-16 px-4">
      <h2 className="text-white text-3xl md:text-4xl font-cursive text-center mb-12 drop-shadow-md">
        Shot Of The Day
      </h2>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {shots.map((shot, index) => (
          <div key={index} className="text-center">
            <img
              src={shot.image}
              alt={shot.title}
              className="rounded-2xl w-72 h-80 object-cover mx-auto shadow-lg"
            />
            <p className="mt-4 text-white text-lg md:text-xl font-cursive">
              {shot.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShotOfTheDay;
