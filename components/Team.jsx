import Image from "next/image";
import jessica from "../public/assets/Jessica.png";
import twitter from "../public/assets/twitter.svg";
import fbook from "../public/assets/fbook.svg";
import ig from "../public/assets/twitter.svg";
import ln from "../public/assets/In.svg";
import smith from "../public/assets/Smith.png";
import tyler from "../public/assets/tyler.png";
import { useMemo } from "react";
const TeamCard = ({ socials, img, title, role }) => {
  return (
    <div className="stack items-end">
      <div>
        <Image src={img} alt={title} />
      </div>
      <div className="bg-headingfont text-white font-medium pt-6 pb-5 pl-5 relative">
        <h3 className="text-xl">{title}</h3>
        <span className="text-base">{role}</span>
        <div className="line-gradient flex gap-4 text-center absolute -top-4 px-4 py-5 right-0">
          {socials.map((soc) => (
            <Image src={soc.img} key={soc.name} alt={soc.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
const Team = () => {
  const teams = useMemo(
    () => [
      {
        title: "Jessca Arow",
        role: "Designer",
        img: jessica,
        socials: [
          {
            img: twitter,
            name: "twitter",
          },
          {
            img: fbook,
            name: "Facebook",
          },
          {
            img: ig,
            name: "Instagram",
          },
        ],
      },
      {
        title: "Kathleen Smith",
        role: "Designer",
        img: smith,
        socials: [
          {
            img: ln,
            name: "LinkedIn",
          },
          {
            img: twitter,
            name: "twitter",
          },
          {
            img: fbook,
            name: "Facebook",
          },
          {
            img: ig,
            name: "Instagram",
          },
        ],
      },
      {
        title: "Rebecca Tylor",
        role: "Designer",
        img: tyler,
        socials: [
          {
            img: fbook,
            name: "Facebook",
          },
          {
            img: ig,
            name: "Instagram",
          },
        ],
      },
    ],
    []
  );
  return (
    <section className="my-5">
      <div className="flex bg-paleColor w-fit mx-auto">
        <div className="line-gradient px-2"></div>
        <span className="text-headingfont font-normal py-1 mx-2 text-sm ">
          The Transporters
        </span>
      </div>
      <h2 className="font-semibold text-4xl text-headingfont mt-3 text-center">
        Meet Expert Team
      </h2>
      <div className="flex justify-center gap-4 mt-6">
        {teams.map((tem) => (
          <TeamCard
            title={tem.title}
            socials={tem.socials}
            key={tem.title}
            role={tem.role}
            img={tem.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
