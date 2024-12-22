
import LoginRegistration from "../asset/LoginRegistration.PNG";
import qrcode from "../asset/qrcode.PNG"
import foodeapp from "../asset/foodapp.png"


export default function Projects() {
  const config = {
    projects: [
      {
        img: qrcode,
        description: "QR Generator",
        link: "https://github.com/Brindha-laksh/qrgenerator",
      },
      {
        img: LoginRegistration,
        description: "Login Registration",
        link: "https://github.com/Brindha-laksh/Login",
      },
      {
        img: foodeapp,
        description: "Food Blog page",
        link: "https://github.com/Brindha-laksh/food-eat/tree/footeat_local/foodeat/my-project",
      },
    ],
  };

  return (
    <section className="py-16 px-6 bg-indigo-900 text-white" id="projects">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg">
          These are projects I have built using React. Feel free to explore them!
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center px-12">
        {config.projects.map((project, index) => (
          <div
            key={index}
            className="relative w-[275px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.description}
              className="w-full h-64 object-cover rounded-t-lg"
            />

            {/* Project Details */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-indigo-900 mb-3">
                {project.description}
              </h2>

              {/* View Project Button Below the Image */}
              <a
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r bg-indigo-900 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
