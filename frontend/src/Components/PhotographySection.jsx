import React from "react";
import coupleImage from "../assets/images/angel.webp"; 

const PhotographySection = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="overflow-hidden w-full absolute top-20 left-0 z-0 pointer-events-none">
        <h2 className="whitespace-nowrap animate-marquee text-[10vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-200 uppercase">
          Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
          Moments Showcased
        </h2>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Rotated Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={coupleImage}
            alt="Couple"
            className="w-full max-w-md rounded shadow-xl transform rotate-[-3deg]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3
            className="text-6xl text-yellow-300 font-[Great Vibes] mb-2"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
             Bride Makeup
          </h3>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4 tracking-wide">
            Best Team
          </h4>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            we pride ourselves in offering the best in pre-wedding photoshoot
            services, wedding photography, and video coverage. It is implemented
            through our professional staff that guarantees every stage to be
            memorable. portrayed with a lens of unerring accuracy and flair. We
            also provide professional photo editing, and wonderful customized
            albums, guaranteeing your precious moments in life. as stunning as
            only Con Luxury & Fashion can offer. Let me transform your memorable
            occasion into one of the most memorable in your life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
