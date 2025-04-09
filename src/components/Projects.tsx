import { useTranslation } from "react-i18next";
import MiniWebPhoneImg from "../assets/images/mini-web-phone.png";

function Projects() {
  const projects = [
    {
      name: "Mini Web Phone",
      link: "https://arthurrosa-dev.github.io/Mini-Web-Phone",
      img: MiniWebPhoneImg,
      height: 200,
      width: 200,
    },
  ];

  const { t } = useTranslation();
  return (
    <div id="ProjectContainer">
      <h1 className="ProjectTitle">{t("projects")}</h1>
      <ul className="ProjectList">
        {projects.map((project) => (
          <li className="Project" key={project.name}>
            <a href={project.link}>
              <img
                src={project.img}
                alt={project.name}
                height={project.height}
                width={project.width}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
