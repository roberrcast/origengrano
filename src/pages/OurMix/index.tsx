import * as S from "./styles";
import { Button } from "../../components/Button";
import { useReveal } from "../../hooks/useReveal";
import { dataSteps } from "./data";
import { mix, coffeeHero } from "../../assets";

export const OurMix = () => {
    useReveal();

    return (
        <S.PageWrapper>
            <S.Hero>
                <S.HeroBg src={coffeeHero} alt="Fondo con granos de café" />

                <S.HeroContent className="reveal">
                    <span>La excelencia del grano</span>
                    <h1>Nuestra Mezcla</h1>
                    <div className="divider" />
                </S.HeroContent>
            </S.Hero>

            <S.ProcessSection>
                <S.Container>
                    <S.ProcessGrid>
                        {dataSteps.map((step) => (
                            <S.StepCard key={step.id} className="reveal">
                                <div className="icon">
                                    <span className="material-symbols-outlined">
                                        {step.icon}
                                    </span>
                                </div>

                                <h3>{step.title}</h3>

                                <p>{step.text}</p>
                            </S.StepCard>
                        ))}
                    </S.ProcessGrid>
                </S.Container>
            </S.ProcessSection>

            <S.InsightSection>
                <S.Container>
                    <S.InsightFlex>
                        <div className="image-side reveal">
                            <img
                                src={mix}
                                alt="Imagen de manos sosteniendo granos de café"
                            />
                        </div>

                        <div className="text-side reveal">
                            <h2>El Ritual de la Perfección</h2>

                            <p>
                                Nuestra mezcla no es fruto de la casualidad,
                                sino de una disciplina obsesiva por el detalle.
                                Desde las montañas de Chiapas y Colombia hasta
                                tu prensa francesa.
                            </p>
                            <Button
                                variant="primary"
                                style={{
                                    backgroundColor: "#25160e",
                                    width: "fit-content",
                                }}
                            >
                                Explorar Orígenes
                            </Button>
                        </div>
                    </S.InsightFlex>
                </S.Container>
            </S.InsightSection>
        </S.PageWrapper>
    );
};
