import React from "react";

import TrendingItems from "./TrendingItems";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

const TrendingSlider = () => {
  const slideLeft = () => {
    let Slider = document.getElementById("slider");
    Slider.scrollLeft = Slider.scrollLeft - 230;
  };

  const slideRight = () => {
    let Slider = document.getElementById("slider");
    Slider.scrollLeft = Slider.scrollLeft + 231;
  };

  return (
    <>
      <section className=" w-[90%] Lp-l:max-w-8lx my-16 mx-auto py-8">
        <div className="flex items-center justify-between">
          <h3 className=" py-8 text-h3 font-semibold">Trending Now</h3>
          <div className=" text-h3 font-semibold flex gap-8">
            <button
              title="scroll-left"
              className="text-blue-500  text-bh2"
              onClick={slideLeft}
            >
              <BsArrowLeftSquareFill />
            </button>
            <button
              title="scroll-right"
              className="text-blue-500 text-bh2"
              onClick={slideRight}
            >
              <BsArrowRightSquareFill />
            </button>
          </div>
        </div>
        <div
          className=" w-full h-auto Lp-l:h-[60vh] flex overflow-x-scroll overflow-y-hidden relative scroll-smooth whitespace-nowrap gap-9 scrollbarh"
          id="slider"
        >
          <TrendingItems />
        </div>
      </section>
    </>
  );
};

export default TrendingSlider;
