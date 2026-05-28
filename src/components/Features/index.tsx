import * as S from "./styles";
import { theme } from "../../styles/theme";

const FEATURES = [
    {
        id: 1,
        icon: "eco",
        title: "Origen Ético",
        text: "Trabajamos directamente con agricultores de altura, asegurando salarios justos y prácticas regenerativas para el suelo.",
        color: theme.colors.secondary,
        iconBg: theme.colors.secondaryFixed,
    },
    {
        id: 2,
        icon: "local_fire_department",
        title: "Tueste Semanal",
        text: "Tostamos en pequeños lotes cada lunes para que el café llegue a tu taza en su pico máximo de sabor y fragancia.",
        color: theme.colors.tertiary,
        iconBg: theme.colors.latteAccent,
    },
    {
        id: 3,
        icon: "schedule",
        title: "Suscripción Flexible",
        text: "Pausa, modifica o cancela tu suscripción en cualquier momento. Tú controlas la frecuencia y la molienda.",
        color: theme.colors.primary,
        iconBg: theme.colors.secondaryFixed,
    },
];

export const Features = () => {
    return (
        <S.Section id="mezcla">
            <S.Container>
                <S.Header className="reveal">
                    <S.Title>La diferencia está en el detalle</S.Title>

                    <S.Subtitle>
                        Combinamos técnicas tradicionales de cultivo con
                        tecnología de tueste de última generaición para
                        garantizar la frescura absoluta.
                    </S.Subtitle>
                </S.Header>

                <S.Grid className="reveal">
                    {FEATURES.map((feature) => (
                        <S.Card key={feature.id} $borderColor={feature.color}>
                            <S.IconWrapper $bg={feature.iconBg}>
                                <span
                                    className="material-symbols-outlined"
                                    style={{ color: feature.color }}
                                >
                                    {feature.icon}
                                </span>
                            </S.IconWrapper>

                            <S.CardTitle>{feature.title}</S.CardTitle>

                            <S.CardText>{feature.text}</S.CardText>
                        </S.Card>
                    ))}
                </S.Grid>
            </S.Container>
        </S.Section>
    );
};
