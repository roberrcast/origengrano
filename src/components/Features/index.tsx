import * as S from "./styles";
import { dataFeatures } from "./data";

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
                    {dataFeatures.map((feature) => (
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
