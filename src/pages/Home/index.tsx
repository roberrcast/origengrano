import { Contact } from "../../components/Contact";
import { Features } from "../../components/Features";
import { Hero } from "../../components/Hero";
import { Testimonials } from "../../components/Testimonials";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useReveal } from "../../hooks/useReveal";

export const Home = () => {
    useDocumentTitle("Inicio");
    useReveal();

    return (
        <>
            <Hero />
            <Features />
            <Testimonials />
            <Contact />
        </>
    );
};
