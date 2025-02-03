import { projects } from "../data/projects";

function ProjectCard() {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      {projects.map((project) => (
        <div
          className="flex justify-center items-center space-x-10 w-[80%] 2xl:w-[60%] mt-5 bg-white pr-4 rounded-md"
          key={project.id}
        >
          <div className="shrink-0 w-96 hover:scale-105 transition-all duration-300">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={project.projectImg}
                alt={`${project.projectName}-img`}
                className="w-full h-64 object-cover"
              />
            </a>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold">{project.projectName}</p>
            <p className="text-gray-600 font-medium">{project.projectType}</p>
            <p>{project.projectDesc}</p>
            <div className="flex space-x-4 mt-2">
              {project.projectTech.map((projectTech) => (
                <p
                  className="text-blue-800 bg-blue-100 px-3 py-1 rounded-full"
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
