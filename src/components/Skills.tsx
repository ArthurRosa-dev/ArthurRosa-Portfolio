import { useTranslation } from "react-i18next";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "React",
    "TypeScript",
    "JavaScript",
    "Git",
  ];
  const { t } = useTranslation();
  return (
    <div id="SkillContainer">
      <h1 className="SkillTitle">{t("skills")}</h1>
      <ul className="SkillList">
        {skills.map((skill) => (
          <li className="Skill">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
