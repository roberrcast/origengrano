import { Contact } from "../../components/Contact";
import { Features } from "../../components/Features";
import { Hero } from "../../components/Hero";
import { Testimonials } from "../../components/Testimonials";
import { useReveal } from "../../hooks/useReveal";

export const Home = () => {
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
