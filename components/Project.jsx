import Image from "next/image";
import React, { useMemo } from "react";
import truck from "../public/assets/card-1.png";
import solution from "../public/assets/card-2.png";
import logistics from "../public/assets/card-3.png";
import warehouse from "../public/assets/card-4.png";
import transport from "../public/assets/card-5.png";

const Cards = ({ img, title, subtitle }) => {
  return (
    <div className="stack items-end ">
      <div>
        <Image src={img} alt={title} />
      </div>
      <div className="px-3 py-4">
        <p className="font-rubik font-medium text-xl text-white flex flex-col ">
          {title}
          <span className="font-krub font-medium text-base text-primary1">
            {subtitle}
          </span>
        </p>
      </div>
    </div>
  );
};
const Project = () => {
  const projects = useMemo(
    () => [
      {
        id: "card1",
        title: "Liquid Transportation",
        img: truck,
        subtitle: "Premium Tankers",
      },
      {
        id: "card2",
        img: solution,
        title: "Packaging Solutions",
        subtitle: "Warehouse Management",
      },
      {
        id: "card3",
        img: logistics,
        title: "Contract Logistics",
        subtitle: "Road Transportation",
      },
      {
        id: "card4",
        img: warehouse,
        title: "Warehouse & Distribution",
        subtitle: "Large Warehouse",
      },
      {
        id: "card5",
        img: transport,
        title: "Specialized Transport",
        subtitle: "Ocean Transports",
      },
    ],
    []
  );
  return (
    <section className="mb-5">
      <h2 className="font-rubik font-semibold text-4xl text-center text-headingfont mb-8">
        Transporting Across The World
      </h2>
      <section className="">
        <div className="flex flex-col items-center -mb-56 gap-20">
          <div className="flex max-w-[1672px] mx-auto gap-5 px-3 z-50">
            {projects.map((proj) => (
              <Cards
                key={proj.id}
                title={proj.title}
                img={proj.img}
                subtitle={proj.subtitle}
              />
            ))}
          </div>
          <button className="btns ">More Work</button>
        </div>
        <div className="line-gradient min-h-[400px]"></div>
      </section>
    </section>
  );
};

export default Project;
