import { ThemeContext } from "@contexts/ThemeProvider.jsx";
import { useContext } from "react";
import "./App.css";
import ThemeButton from "./components/Atoms/ThemeButton/ThemeButton";

function App() {
  const { IsDark } = useContext(ThemeContext);

  return (
    <main id="App" data-theme={IsDark ? "dark" : "light"}>
      <h1>Theme Swapper Demo</h1>
      <div className="color-box primary">Primary Color</div>
      <div className="color-box secondary">Secondary Color</div>
      <div className="color-box highlight">Highlight Color</div>
      <div className="color-box text">Text Color</div>
      <ThemeButton />
    </main>
  );
}

export default App;
