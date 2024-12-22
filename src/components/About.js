import skillset from "../asset/skillset.PNG";

export default function About() {
  const about = {
    para1:
      "I am a passionate Front-End Developer with over 3 years of experience in building responsive and user-friendly web applications using HTML, CSS, JavaScript, and React.",
    para2: "I have experience optimizing website performance to ensure smooth functionality.",
    para3:" I am committed to understanding user needs and crafting seamless designs that enhance usability and performance."
  };

  return (
    <section className="flex flex-col md:flex-row items-center px-6 py-16 bg-gray-100" id="about">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center px-5">
        <img
          src={skillset}
          alt="Skillset"
          className="h-auto w-full md:max-w-md rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left px-5">
        <h1 className="text-4xl font-bold text-indigo-900">About Me</h1>
        <p className="text-indigo-900 text-lg leading-relaxed">{about.para1}</p>
        <p className="text-indigo-900 text-lg leading-relaxed">{about.para2}</p>
        <p className="text-indigo-900 text-lg leading-relaxed">{about.para3}</p>
        
      </div>
    </section>
  );
}
