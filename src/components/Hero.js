import HeroSection from "../asset/HeroSection.jpeg";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

export default function Hero() {
  const content = {
    para: "I am a Front-End Developer with a passion for creating beautiful and functional user interfaces.",
    Social: {
      gmail: "brindhalaksh22@gmail.com",
      phone: "9080304392",
      linkedin: "https://www.linkedin.com/in/brindha-l-53201727b/",
    },
  };

  return (
    <section className="flex flex-col md:flex-row items-center px-6 py-20 bg-gradient-to-r bg-indigo-900" id="hero">
      {/* Text Section */}
      <div className="flex flex-col md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white">
          Hi,<br />
          I am <span className="text-indigo-300">Brindha</span>
        </h1>
        <p className="text-lg text-white md:w-3/4">{content.para}</p>
        <div className="flex justify-center md:justify-start space-x-6 py-6">
          <a
            href={content.Social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-950 transition duration-300"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href={`mailto:${content.Social.gmail}`}
            className="text-white hover:text-indigo-950 transition duration-300"
          >
            <TbMailFilled size={40} />
          </a>
          <a
            href={`tel:${content.Social.phone}`}
            className="text-white hover:text-indigo-950 transition duration-300"
          >
            <FaPhone size={40} />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          src={HeroSection}
          alt="Hero"
          width="300"
          height="300"
        />
      </div>
    </section>
  );
}
