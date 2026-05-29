import { useLocation, Link } from "react-router-dom";
import * as S from "./styles";

const NAV_LINKS = [
    { id: 1, name: "Suscripciones", path: "/suscripciones" },
    { id: 2, name: "Nuestra Mezcla", path: "#mezcla" },
    { id: 3, name: "Sostenibilidad", path: "#sostenibilidad" },
];

export const Header = () => {
    const location = useLocation();

    return (
        <S.Nav aria-label="Navegación principal">
            <S.Container>
                <S.Logo
                    role="img"
                    aria-label="Origen y Grano"
                    as={Link}
                    to={"/"}
                >
                    Origen & Grano
                </S.Logo>

                <S.LinkList>
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <S.NavLink
                                as={Link}
                                to={link.path}
                                $active={location.pathname === link.path}
                                aria-current={
                                    link.id === 1 ? "page" : undefined
                                }
                            >
                                {link.name}
                            </S.NavLink>
                        </li>
                    ))}
                </S.LinkList>

                <S.ActionGroup>
                    <S.LoginButton aria-label="Iniciar sesión en tu cuenta">
                        Iniciar sesión
                    </S.LoginButton>

                    <S.PrimaryButton>Empezar Ahora</S.PrimaryButton>
                </S.ActionGroup>
            </S.Container>
        </S.Nav>
    );
};
