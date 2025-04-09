import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footerContent">
        <p>
          © {new Date().getFullYear()} Arthur Gomes Rosa. {t("footer")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
