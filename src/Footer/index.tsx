import * as S from "./styles";

const FOOTER_LINKS = [
    { name: "Privacidad", path: "#" },
    { name: "Términos", path: "#" },
    { name: "Contacto", path: "#" },
    { name: "Envíos", path: "#" },
];

export const Footer = () => {
    return (
        <S.Footer>
            <S.Container>
                <S.BrandSection>
                    <h3>Origen & Grano</h3>
                    <p>
                        &copy; {new Date().getFullYear()} Origen & Grano. Café
                        de especialidad artesanal.
                    </p>
                </S.BrandSection>

                <S.NavLinks>
                    {FOOTER_LINKS.map((link) => (
                        <a key={link.name} href={link.path}>
                            {link.name}
                        </a>
                    ))}
                </S.NavLinks>

                <S.SocialGroup>
                    <S.SocialIcon href="#" aria-label="web pública">
                        <span className="material-symbols-outlined">
                            public
                        </span>
                    </S.SocialIcon>

                    <S.SocialIcon href="#" aria-label="correo">
                        <span className="material-symbols-outlined">mail</span>
                    </S.SocialIcon>
                </S.SocialGroup>
            </S.Container>
        </S.Footer>
    );
};
