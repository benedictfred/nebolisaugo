import SkillsCard from "./SkillsCard";
import {
  FaCode,
  FaGraduationCap,
  CiHeart,
  FiTarget,
  FiBriefcase,
  FiCoffee,
} from "../utils/icons";

function About() {
  return (
    <section id="about" className="min-h-screen px-4 md:px-16 py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 uppercase text-center">
            About Me
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p className="text-lg leading-relaxed">
              Hi there! 👋 {"I'm"} a skilled and versatile web developer with a
              knack for crafting user-friendly and visually appealing digital
              experiences. With a strong focus on frontend development, I
              specialize in creating responsive and interactive web applications
              using modern frontend tools.
            </p>
            <p className="text-lg leading-relaxed">
              When {"I'm"} not coding, {"you'll"} find me exploring innovative
              ideas, tackling challenges in hackathons, or sharing knowledge
              with the developer community. I thrive on learning new
              technologies and pushing boundaries to bring ideas to life. Come{" "}
              {"let's"} build something amazing together! 🚀
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaCode className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">What I Do</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Build responsive and performant web applications</li>
              <li>✓ Create intuitive user interfaces and experiences</li>
              <li>✓ Optimize applications for maximum speed</li>
              <li>✓ Implement modern frontend architectures</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiTarget className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">
                My Approach
              </h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ User-centered design thinking</li>
              <li>✓ Clean and maintainable code</li>
              <li>✓ Agile development methodology</li>
              <li>✓ Continuous learning and improvement</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <FiBriefcase className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              Professional Journey
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaGraduationCap className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-semibold mb-2">Education</h4>
              <p className="text-gray-600">
                Bachelor of Science in Computer Science
                <br />
                University Of Nigeria, Nsukka
                <br />
                2021 - present
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FiCoffee className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-semibold mb-2">Work Experience</h4>
              <p className="text-gray-600">
                [Current/Recent position]
                <br />
                [Company name]
                <br />
                [Duration]
              </p>
            </div>
          </div>
        </div>

        {/* Skills and Tools */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 uppercase text-center">
            Skills and Tools
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            With a strong foundation in frontend development, I specialize in
            building modern, responsive web applications using a variety of
            tools and technologies.
          </p>
          <SkillsCard />
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <CiHeart className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              When {"I'm"} Not Coding
            </h3>
          </div>
          <div className="text-center text-gray-600">
            <p className="text-lg">
              Beyond the world of code, {"I'm"} passionate about [Your
              interests, e.g., photography, hiking, reading tech blogs,
              contributing to open source]. These activities help me maintain a
              creative mindset and bring fresh perspectives to my development
              work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
