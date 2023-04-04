import Image from "next/image";
import plane from "../public/assets/landing-plane.png";
import map from "../public/assets/map.png";
import carton from "../public/assets/carton.svg";
import clock from "../public/assets/clock.svg";
import cent from "../public/assets/cent.svg";
import headphone from "../public/assets/headphone.svg";
import world from "../public/assets/world.svg";
import ship from "../public/assets/ship.svg";
import { useMemo } from "react";
const Features = ({ img, title }) => {
  return (
    <div className="flex items-center gap-4">
      <Image src={img} alt="Delivery on time" />
      <span>{title}</span>
    </div>
  );
};

const Whychooseus = () => {
  const features = useMemo(
    () => [
      {
        id: "img1",
        img: carton,
        title: "Safe Package",
      },
      {
        id: "img2",
        img: ship,
        title: "Ship Everyware",
      },
      {
        id: "img3",
        img: ship,
        title: "Global Tracking",
      },
      {
        id: "img4",
        img: headphone,
        title: "24/7 Support",
      },
      {
        id: "img5",
        img: clock,
        title: "In Time Delivery",
      },
      {
        id: "img6",
        img: cent,
        title: "Transparant Pricing",
      },
    ],
    []
  );

  return (
    <section className="flex gap-7 mb-6 bg-secondary1">
      <div>
        <Image src={plane} alt="Landing plane " />
      </div>
      <section className="stack">
        <div>
          <Image src={map} alt="map" />
        </div>
        <div className="self-center">
          <div className="flex bg-paleColor w-fit">
            <div className="line-gradient px-2"></div>
            <span className="text-headingfont font-normal py-1 mx-2 text-sm ">
              Why Choose
            </span>
          </div>
          <h2 className="font-semibold text-4xl text-headingfont mt-3 max-w-[25ch]">
            We create opportunity to reach potential
          </h2>
          <p className=" text-paragraphfont font-krub font-medium text-base  max-w-[45ch] mt-3">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="grid grid-cols-2 gap-y-5 mt-20">
            {features.map((ft) => (
              <Features img={ft.img} key={ft.id} title={ft.title} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Whychooseus;
