import Image from "next/image";
import React from "react";
import container from "../public/assets/orange-containers.png";
import plane from "../public/assets/plane-woman.png";
import carton from "../public/assets/carton.svg";
import money from "../public/assets/money.svg";
const About = () => {
  return (
    <section className="flex flex-col">
      <div>
        <Image src={container} alt="Orange Containers" className="w-full" />
      </div>
      <section className="max-w-[1200px] mx-auto pt-20 -translate-y-28 bg-white z-50 font-rubik grid grid-cols-2 lg:px-20 md:px-32 px-5">
        <div>
          <div className="flex bg-paleColor w-fit">
            <div className="line-gradient px-2"></div>
            <span className="text-headingfont font-normal py-1 mx-2 text-sm ">
              Why Us
            </span>
          </div>
          <h2 className="font-semibold text-4xl text-headingfont mt-3">
            We provide full range global logistics solution
          </h2>
          <p className="flex flex-col text-paragraphfont font-krub font-medium text-base gap-4 max-w-[45ch] mt-3">
            <span>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </span>
            <span>
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </span>
          </p>
          <div className="font-rubik font-normal text-2xl flex flex-col gap-6 mt-6">
            <div className="flex items-center gap-4">
              <Image src={carton} alt="Delivery on time" />
              <span>Delivery on Time</span>
            </div>
            <div className="flex items-center gap-4">
              <Image src={money} alt="Optimized Travel Cost" />
              <span> Optimized Travel Cost</span>
            </div>
          </div>
        </div>
        <div>
          <Image src={plane} alt="Plane and a woman" />
        </div>
      </section>
    </section>
  );
};

export default About;
