import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const slides = [
  {
    title: "WELLNESS CENTER",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Duis at tellus at urna CALISTA's mattis. Viverra tellus in hac habitasse platea dictumst.",
    video:
      "https://videos.pexels.com/video-files/3998263/3998263-uhd_2732_1440_25fps.mp4"
  },
  {
    title: "SPA TREATMENT",
    description:
      "Relax and rejuvenate with our luxury spa experiences. Your wellness is our priority.",
    video:
      "https://videos.pexels.com/video-files/3998266/3998266-uhd_2732_1440_25fps.mp4"
  },
  {
    title: "Bridal Makeup",
    description:
      "Feel the serenity and leave your stress behind with our holistic therapies.",
    video:
      "https://videos.pexels.com/video-files/32315931/13783020_1920_1080_50fps.mp4"
  },
  {
    title: "MIND & BODY HEALING",
    description:
      "Connect with your inner peace in a calming environment with expert therapists.",
    video:
      "https://videos.pexels.com/video-files/32315939/13782955_640_360_50fps.mp4"
  },
  {
    title: "REFRESH YOURSELF",
    description:
      "Explore rejuvenating wellness packages specially tailored for you.",
    video:
      "https://videos.pexels.com/video-files/3181733/3181733-uhd_2560_1440_25fps.mp4"
  }
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);

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
          <button className="border mt-4 py-2 border-yellow-500 px-4 uppercase text-[10px] md:text-md w-fit">
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
