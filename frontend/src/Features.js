import React from "react";
import featureimg from "./images/featureimg.jpg";

const Features = () => {
  return (
    <div className=" bg-[#e06377]  pb-16" id="features">
      <div className="text-black text-6xl  py-8 font-semibold flex justify-center">
        Features
      </div>
      <div className="mx-8  inline-block px-4 flex  justify-between">
        <div className=" w-1/2 justify-center ">
          <div className="wrapper inline-flex pt-16 text-white text-5xl font-semibold  ">
            <div className=" ">It's</div>
            <ul className="dynamic-txts text-black pl-4 ">
              <li className="">
                <span className="">Simple</span>
              </li>
              <li className="">
                <span className="">Cheap</span>
              </li>
              <li className="">
                <span className="">Secure</span>
              </li>
            </ul>
          </div>

          <div className=" break-words  text-sm font-semibold">
            An easy-to-use and secure service that prioritizes best customer
            experience. Store your images and get the cloud storage at the
            cheapest prices, without negotiating on security
          </div>
        </div>

        <div className="pl-8 w-1/2 h-full">
          <img
            className="  rounded-3xl border border-transparent"
            src={featureimg}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
