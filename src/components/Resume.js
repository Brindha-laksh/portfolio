import Resume from "../asset/Resume.PNG";

export default function Resumet() {
  const config = {
    link: "https://onedrive.live.com/edit.aspx?resid=DA0064CFB1715DAE!146&cid=da0064cfb1715dae&CT=1734851553507&OR=ItemsView",
  };

  return (
    <section className="py-16 px-6 text-indigo-700" id="resume">
      {/* Section Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Resume Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Resume}
            alt="Resume"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Resume Details */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-indigo-900 mb-6">Resume</h1>
          <p className="text-lg text-indigo-900 mb-6">
            You can view and download my resume using the link below. It
            highlights my skills, experience, and achievements as a Front-End
            Developer.
          </p>
          <a
            href={config.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-900 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
