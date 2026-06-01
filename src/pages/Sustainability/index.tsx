import * as S from "./styles";
import { Button } from "../../components/Button";
import { useReveal } from "../../hooks/useReveal";
import { coffeeBolt, plantation } from "../../assets";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Sustainability = () => {
    useDocumentTitle("Sostenibilidad");
    useReveal();

    return (
        <S.PageWrapper>
            <S.Container>
                <S.Hero className="reveal">
                    <S.Badge>Compromiso {new Date().getFullYear()}</S.Badge>

                    <S.MainTitle>Sostenibilidad de origen a Taza</S.MainTitle>

                    <S.HeroImageWrapper>
                        <img
                            src={plantation}
                            alt="Imagen de un cultivo de café"
                        />
                    </S.HeroImageWrapper>
                </S.Hero>

                <S.BentoGrid>
                    {/* -- Card 1: Ético -- */}
                    <S.BentoCard $span={7} className="reveal">
                        <div>
                            <S.CardIcon
                                className="material-symbols-outlined"
                                $size="40px"
                            >
                                handshake
                            </S.CardIcon>

                            <S.CardTitle $size={"32px"}>
                                Origen Ético
                            </S.CardTitle>

                            <S.CardDescription $maxW={"400px"}>
                                Trabajamos directamente con agricultores,
                                asegurando precios justos y prácticas de cultivo
                                regenerativo.
                            </S.CardDescription>
                        </div>
                        <Button
                            variant="outline"
                            style={{ width: "fit-content" }}
                        >
                            Conoce a los productores
                        </Button>
                    </S.BentoCard>

                    {/* -- Card 2: Tueste -- */}
                    <S.BentoCard $span={5} className="reveal">
                        <S.CardBg
                            src={coffeeBolt}
                            alt="Imagen de planta de tostado"
                        />

                        <S.IconContainer>
                            <S.CardIcon className="material-symbols-outlined">
                                bolt
                            </S.CardIcon>

                            <S.CardTitle>Tueste Responsable</S.CardTitle>
                        </S.IconContainer>

                        <S.CardDescription>
                            Nuestras instalaciones utilizan energía 100%
                            renovable para procesar cada lote.
                        </S.CardDescription>
                    </S.BentoCard>

                    {/* -- Card 3: Circular -- */}
                    <S.BentoCard $span={12} $dark className="reveal">
                        <S.LargeCardContent>
                            <div className="text-side">
                                <div className="tag-group">
                                    <span className="material-symbols-outlined">
                                        cycle
                                    </span>
                                    <span>Ecosistema Circular</span>
                                </div>
                                <S.CardTitle $size={"32px"}>
                                    Compromiso Circular
                                </S.CardTitle>
                                <S.CardDescription
                                    $color={"#aa9084"}
                                    $maxW="600px"
                                >
                                    Empaques compostables y reducción activa de
                                    huella de cabono. El único rastro que
                                    dejamos es el aroma.
                                </S.CardDescription>
                            </div>

                            <S.StatBox>
                                <div className="stat-item">
                                    <span className="value">100%</span>
                                    <span className="label">Compostable</span>
                                </div>
                                <div className="stat-item">
                                    <span className="value">0%</span>
                                    <span className="label">Plásticos</span>
                                </div>
                            </S.StatBox>
                        </S.LargeCardContent>
                    </S.BentoCard>
                </S.BentoGrid>

                <S.QuoteSection className="reveal">
                    <div className="quote-container">
                        <S.QuoteIcon className="material-symbols-outlined">
                            format_quote
                        </S.QuoteIcon>

                        <blockquote>
                            "La verdadera calidad no reside solo en el sabor,
                            sino en la integridad de la historia detrás de cada
                            grano."
                        </blockquote>
                        <cite>— Fundadores de Origen & Grano </cite>
                    </div>
                </S.QuoteSection>
            </S.Container>
        </S.PageWrapper>
    );
};
