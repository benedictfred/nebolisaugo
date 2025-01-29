import SkillsCard from "./SkillsCard";

function About() {
  return (
    <section className="flex flex-col items-center justify-center h-screen px-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl text-gray-600 uppercase">About Me</p>
        <p className="text-lg text-center">
          Hi there! 👋 {"I'm"} a skilled and versatile web developer with a
          knack for crafting user-friendly and visually appealing digital
          experiences. With a strong focus on frontend development, I specialize
          in creating responsive and interactive web applications using modern
          frontend tools. When I’m not coding, you’ll find me exploring
          innovative ideas, tackling challenges in hackathons, or sharing
          knowledge with the developer community. I thrive on learning new
          technologies and pushing boundaries to bring ideas to life. Come let’s
          build something amazing together! 🚀
        </p>
      </div>
      <div className="mt-5">
        <p className="text-2xl text-gray-600 text-center uppercase">
          Skills and Tools
        </p>
        <p className="text-lg">
          With a strong foundation in frontend development, I specialize in
          building modern, responsive web applications using a variety of tools
          and technologies.
        </p>
        <SkillsCard />
      </div>
    </section>
  );
}

export default About;
