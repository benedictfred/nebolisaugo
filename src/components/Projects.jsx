import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 min-h-screen">
      <div className="h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <p className="text-xl text-gray-600 mt-5">
          Here are some of my amazing works both personal and collaborations
        </p>
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
