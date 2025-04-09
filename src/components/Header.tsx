import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar" ref={navRef}>
          <div className="brandlanguage">
            <div className="brand">Arthur Gomes Rosa</div>
            <div className="language">
              <button className="pt" onClick={() => changeLanguage("pt")}>
                PT
              </button>
              <button className="en" onClick={() => changeLanguage("en")}>
                EN
              </button>
            </div>
          </div>

          <button className="toggler" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                {t("about")}
              </a>
            </li>
            <li>
              <a href="#ProjectContainer" onClick={() => setIsOpen(false)}>
                {t("projects")}
              </a>
            </li>
            <li>
              <a href="#SkillContainer" onClick={() => setIsOpen(false)}>
                {t("skills")}
              </a>
            </li>
            <li>
              <a href="#ContactContainer" onClick={() => setIsOpen(false)}>
                {t("contact")}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
