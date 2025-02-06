import { ThemeContext } from "@contexts/ThemeProvider";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import styles from "./ThemeButton.module.css";

const ThemeButton = () => {
  const { IsDark, toggleDark } = useContext(ThemeContext);

  return (
    <button className={styles.themeButton} onClick={toggleDark}>
      <FontAwesomeIcon icon={IsDark ? faSun : faMoon} />
    </button>
  );
};

export default ThemeButton;
