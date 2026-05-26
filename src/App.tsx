import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { useReveal } from "./hooks/useReveal";

function App() {
    useReveal();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Hero />
        </ThemeProvider>
    );
}

export default App;
