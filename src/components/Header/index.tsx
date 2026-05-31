import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import * as S from "./styles";

const NAV_LINKS = [
    { id: 1, name: "Suscripciones", path: "/suscripciones" },
    { id: 2, name: "Nuestra Mezcla", path: "/nuestra-mezcla" },
    { id: 3, name: "Sostenibilidad", path: "/sostenibilidad" },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

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

                {/* -- Icono menu móvil -- */}
                <S.MenuButton
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Abrir menú"
                >
                    <span className="material-symbols-outlined">
                        {isMenuOpen ? "close" : "menu"}
                    </span>
                </S.MenuButton>
            </S.Container>

            {/* -- mobile overlay (renderizado condicional) -- */}
            <S.MobileOverlay $isOpen={isMenuOpen}>
                {NAV_LINKS.map((link) => (
                    <S.NavLink
                        as={Link}
                        key={link.id}
                        to={link.path}
                        $active={location.pathname === link.path}
                    >
                        {link.name}
                    </S.NavLink>
                ))}
                <hr />
                <S.PrimaryButton>Empezar ahora</S.PrimaryButton>
                <S.LoginButton>Iniciar sesión</S.LoginButton>
            </S.MobileOverlay>
        </S.Nav>
    );
};
