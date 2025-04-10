import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  let email = "";
  if (window.innerWidth <= 768) {
    email = "mailto:arthurrosaofc@gmail.com";
  } else {
    email =
      "https://mail.google.com/mail/?view=cm&fs=1&to=arthurrosaofc@gmail.com";
  }

  return (
    <div id="ContactContainer">
      <h1 className="ContactTitle">{t("contact")}</h1>
      <p className="ContactList">
        <a href={email}>
          <img src="https://img.shields.io/badge/Arthur%20Rosa%20OFC-%23D14836.svg?&style=for-the-badge&logoColor=white&logo=gmail" />
        </a>
        <br />
        <a href="tel:+5527999684816">
          <img src="https://img.shields.io/badge/+55%20(27)%2099968%204816-25D366?&logoColor=white&style=for-the-badge&logo=whatsapp" />
        </a>
        <br />
        <a href="https://github.com/ArthurRosa-dev">
          <img src="https://img.shields.io/badge/Arthur%20Rosa-dev-181717?&style=for-the-badge&logo=github" />
        </a>
      </p>
    </div>
  );
}

export default Contact;
