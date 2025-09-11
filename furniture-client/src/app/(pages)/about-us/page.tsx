import aboutUs from "@/assets/about-us-hero-image.webp";
import CTAAbout from "@/components/aboutus/CTAAbout";
import DescriptionAboutUs from "@/components/aboutus/DescriptionAboutUs";
import OurTeam from "@/components/aboutus/OurTeam";
import VideoAboutUs from "@/components/aboutus/ViedoAboutUs";
import Image from "next/image";
const AboutUs = () => {
  return (
    <>
      <div className="w-full max-w-[1400px] mx-auto relative">
        <Image src={aboutUs} alt="shop" className="w-full  rounded-3xl" />
        <div className="absolute inset-0 rounded-3xl bg-black/50" />
        <div className="absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-gray-300">
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
      </div>
      <div className="custom-container flex-col ">
        <DescriptionAboutUs />
        <VideoAboutUs />
        <OurTeam />
        <CTAAbout />
      </div>
    </>
  );
};
export default AboutUs;
