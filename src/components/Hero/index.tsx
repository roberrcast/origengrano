import * as S from "./styles";
import heroImg from "../../assets/screen.png";
import { Button } from "../Button";

export const Hero = () => {
    return (
        <S.HeroSection className="reveal">
            <S.StripeCanvas />
            <S.MeshGradient />
            <S.HeroTransition />

            <S.Container>
                <S.Content>
                    <S.Badge>PREMIUM & ARTESANAL</S.Badge>

                    <S.Title>El café que transforma tus mañanas.</S.Title>

                    <S.Description>
                        Descubre granos seleccionados de fincas sostenibles,
                        tostados al punto exacto para liberar notas complejas y
                        un aroma inigualable. Directo a tu puerta.
                    </S.Description>

                    <S.ButtonGroup>
                        <Button variant="primary" icon="arrow_forward">
                            Explorar suscripciones
                        </Button>

                        <Button variant="outline">Nuestra historia</Button>
                    </S.ButtonGroup>
                </S.Content>

                <S.ImageContainer>
                    <S.HeroImage
                        src={heroImg}
                        alt="Imagen de persona vertiendo agua en cafetera."
                    />
                </S.ImageContainer>
            </S.Container>
        </S.HeroSection>
    );
};
