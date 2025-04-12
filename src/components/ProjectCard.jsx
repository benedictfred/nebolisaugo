import { projects } from "../data/projects";

function ProjectCard() {
  return (
    <div className="flex flex-col justify-center items-center mb-10 px-4 sm:px-6 lg:px-8">
      {projects.map((project) => (
        <div
          className="flex flex-col md:flex-row justify-center items-center md:space-x-10 w-full lg:w-[80%] 2xl:w-[60%] mt-5 bg-white p-4 rounded-md shadow-sm"
          key={project.id}
        >
          <div className="w-full md:w-96 shrink-0 mb-6 md:mb-0 hover:scale-105 transition-all duration-300">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="block overflow-hidden rounded-lg"
            >
              <img
                src={project.projectImg}
                alt={`${project.projectName}-img`}
                className="w-full h-48 sm:h-64 object-cover"
              />
            </a>
          </div>
          <div className="space-y-3 w-full md:w-auto">
            <p className="text-xl sm:text-2xl font-semibold text-center md:text-left">
              {project.projectName}
            </p>
            <p className="text-gray-600 font-medium text-center md:text-left">
              {project.projectType}
            </p>
            <p className="text-sm sm:text-base text-center md:text-left">
              {project.projectDesc}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
              {project.projectTech.map((projectTech) => (
                <p
                  className="text-blue-800 bg-blue-100 px-3 py-1 rounded-full text-sm"
                  key={projectTech}
                >
                  {projectTech}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
