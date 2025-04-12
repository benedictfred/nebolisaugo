import { skills } from "../data/skills";
function SkillsCard() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2 mt-3">
      {skills.map((skill) => (
        <div
          className="flex items-center justify-center space-x-1 bg-gray-200 w-fit px-2 py-1 rounded-md"
          key={skill.id}
        >
          <img
            src={skill.skillImg}
            alt={`${skill.skillName}-logo`}
            className="w-5 h-5"
          />
          <p className="text-lg font-medium">{skill.skillName}</p>
        </div>
      ))}
    </div>
  );
}

export default SkillsCard;
