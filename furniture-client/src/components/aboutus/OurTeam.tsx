import React from "react";
import team_member1 from "@/assets/team-member-1.webp";
import team_member2 from "@/assets/team-member-2.webp";
import team_member3 from "@/assets/team-member-3.webp";
import team_member4 from "@/assets/team-member-4.webp";
import team_member5 from "@/assets/team-member-5.webp";
import team_member6 from "@/assets/team-member-6.webp";
import Image from "next/image";
const teamMemeber = [
  {
    id: 1,
    img: team_member1,
    name: "John Doe",
    position: "Seller",
  },
  {
    id: 2,
    img: team_member2,
    name: "Jane Doe",
    position: "Seller",
  },
  {
    id: 3,
    img: team_member3,
    name: "John Doe",
    position: "Seller",
  },
  {
    id: 4,
    img: team_member4,
    name: "Jane Doe",
    position: "CMO",
  },
  {
    id: 5,
    img: team_member5,
    name: "John Doe",
    position: "CEO",
  },
  {
    id: 6,
    img: team_member6,
    name: "Jane Doe",
    position: "CDO",
  },
];
function OurTeam() {
  return (
    <div className="my-10">
      <div className="space-y-5 flex justify-center items-center flex-col">
        <h1 className="font-bold text-2xl">Our Team</h1>
        <p className="max-w-2xl text-gray-600 text-center">
          Quam elementum pulvinar etiam non quam. Faucibus nisl tincidunt eget
          nullam non nisi elementum sagittis vitae et leo duis ut diam quam.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 text-gray-600">
        {teamMemeber.map((member) => (
          <div
            className="flex flex-col items-center space-y-5 relative"
            key={member.id}
          >
            <Image src={member.img} alt={member.name} className=" " />
            <div className="absolute bottom-5 left-5 bg-white  p-3 shadow-lg rounded-lg">
              <h3 className="font-bold text-black ">{member.name}</h3>
              <p className="text-sm font-medium">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
