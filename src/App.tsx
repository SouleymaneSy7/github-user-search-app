import Header from "./components/Header";
import Main from "./components/Main";
import { UserContextProvider } from "./contexts/UserContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Forms from "./components/Forms";
import Attribution from "./components/Attribution";

const App = () => {
  const selectedTheme = localStorage.getItem("theme");

  if (selectedTheme) {
    document.querySelector("body")?.setAttribute("data-theme", selectedTheme);
  }

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Header />
        <Forms />
        <Main />
        <Attribution />
      </ThemeContextProvider>
    </UserContextProvider>
  );
};

export default App;
