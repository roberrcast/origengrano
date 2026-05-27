import * as S from "./styles";
import { userData } from "./data";

export const Testimonials = () => {
    return (
        <S.Section>
            <S.Container>
                <S.Header className="reveal">
                    <S.Title>Lo que dicen nuestros suscriptores.</S.Title>

                    <S.NavButtons>
                        <S.NavButton arial-label="Anterior">
                            <span className="material-symbols-outlined">
                                chevron_left
                            </span>
                        </S.NavButton>

                        <S.NavButton arial-label="Siguiente">
                            <span className="material-symbols-outlined">
                                chevron_right
                            </span>
                        </S.NavButton>
                    </S.NavButtons>
                </S.Header>

                <S.Grid className="reveal">
                    {userData.map((item) => (
                        <S.Card key={item.id} $dark={item.isDark}>
                            <div>
                                <S.Stars $color={item.starColor}>
                                    {[...Array(item.stars)].map((_, i) => (
                                        <span
                                            key={i}
                                            className="material-symbols-outlined"
                                        >
                                            star
                                        </span>
                                    ))}
                                </S.Stars>
                                <S.Quote>{item.quote}</S.Quote>
                            </div>

                            <S.AuthorInfo>
                                <S.Avatar $bg={item.avatarColor} />

                                <S.AuthorDetails>
                                    <p
                                        style={{
                                            color: item.isDark
                                                ? "#fff"
                                                : "inherit",
                                        }}
                                    >
                                        {item.author}
                                    </p>

                                    <p
                                        style={{
                                            color: item.isDark
                                                ? "#858383"
                                                : "inherit",
                                        }}
                                    >
                                        {item.location}
                                    </p>
                                </S.AuthorDetails>
                            </S.AuthorInfo>
                        </S.Card>
                    ))}
                </S.Grid>
            </S.Container>
        </S.Section>
    );
};
