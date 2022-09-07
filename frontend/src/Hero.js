import React, { useState } from "react";
import img1 from "./images/img1.jpg";
import HeroImages from "./HeroImages";
import { Link } from "react-router-dom";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current < 1 ? length - 1 : current - 1);
  };

  return (
    <>
      <div className="w-full ">
        {HeroImages.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? "opacity-100 transition duration-1000"
                  : "opacity-0 transition duration-1000 ease-in-out"
              }
              key={index}
            >
              {index === current && (
                <div>
                  <img className="h-screen w-full opacity-70" alt="" src={slide.image} />
                  <div className="absolute  top-1/3 flex text-center mx-40 text-6xl font-bold">
                    {slide.title}
                  </div>
                  <div className="absolute  top-2/4 mx-28 pt-8 flex text-center  text-lg font-semibold">
                    {slide.desc}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div className="absolute  top-2/3 flex left-1/3 right-1/3  pt-12 text-center justify-center  text-base font-semibold">
          <Link to="/accounts/signin">
            <button className=" animate-bounce px-6 mx-1   rounded-md  py-3  hover:bg-[#c83349] bg-[#e06377]">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-1  rounded-full  absolute top-1/2 flex text-4xl font-bold text-black justify-start px-3 py-2 m-2 hover:bg-[#e06377] bg-transparent"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-1 flex justify-end  text-4xl font-bold text-black  rounded-full px-3 py-2 m-2 hover:bg-[#e06377] bg-transparent"
      >
        &gt;
      </button>
    </>
  );
};

export default Hero;
