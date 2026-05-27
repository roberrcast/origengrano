import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { useReveal } from "./hooks/useReveal";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";

function App() {
    useReveal();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Hero />
            <Features />
            <Testimonials />
            <Contact />
        </ThemeProvider>
    );
}

export default App;
