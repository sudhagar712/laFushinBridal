import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import hair from "../assets/images/ban1.mp4"
import hair2 from "../assets/images/ban2.mp4";
import hair3 from "../assets/images/ban3.mp4";
import hair4 from "../assets/images/bride4.mp4";






const slides = [
  {
    title: "Stylish HairCut",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Duis at tellus at urna CALISTA's mattis. Viverra tellus in hac habitasse platea dictumst.",
    video: hair
  },

  {
    title: "Stylish HairCut",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Duis at tellus at urna CALISTA's mattis. Viverra tellus in hac habitasse platea dictumst.",
    video: hair2
  },
  {
    title: "Bridal MakeUp",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Duis at tellus at urna CALISTA's mattis. Viverra tellus in hac habitasse platea dictumst.",
    video: hair3
  },
  {
    title: "Bridal MakeUp",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Duis at tellus at urna CALISTA's mattis. Viverra tellus in hac habitasse platea dictumst.",
    video: hair4
  }
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { title, description, video } = slides[current];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Slide Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-7xl text-yellow-500 font-serif font-bold mb-6">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-10">
          {description}
        </p>
        <div className="flex gap-5">
          <button className="border mt-4 py-2 border-yellow-500 px-4 uppercase text-[10px] md:text-md hover:bg-yellow-500 hover:text-black transition">
            Call us
          </button>
          <button className="border mt-4 py-2 border-yellow-500 px-4 uppercase text-[10px] md:text-md w-fit">
            Msg on Whatapps
          </button>
        </div>
      </div>

      {/* Navigation Icons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 bottom-8 text-white z-20 text-2xl"
        aria-label="Previous Slide"
      >
        <FiArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 bottom-8 text-white z-20 text-2xl"
        aria-label="Next Slide"
      >
        <FiArrowRight />
      </button>
    </section>
  );
};

export default Banner;
