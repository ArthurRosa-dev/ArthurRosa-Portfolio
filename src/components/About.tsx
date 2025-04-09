import Arthur from "../assets/images/Arthur.jpg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div id="AboutContainer">
      <div className="AboutDescription">
        <h1>Arthur Gomes Rosa</h1>
        <p>{t("about_paragraph")}</p>
      </div>
      <div className="AboutImage">
        <img src={Arthur} height={300} width={240}></img>
      </div>
    </div>
  );
}

export default About;
