import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Footer } from "./Footer";
import { Home } from "./pages/Home";
import { ScrollToTop } from "./components/ScrollToTop";
import { Subscriptions } from "./pages/Subscriptions";
import { OurMix } from "./pages/OurMix";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/suscripciones" element={<Subscriptions />} />
                    <Route path="/nuestra-mezcla" element={<OurMix />} />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
