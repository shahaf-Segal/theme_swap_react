import PropTypes from "prop-types";
import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [IsDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "light" ? false : true;
  });
  const toggleDark = () => {
    setIsDark(!IsDark);
    localStorage.setItem("theme", IsDark ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ IsDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProvider };
