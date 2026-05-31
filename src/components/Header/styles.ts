import styled from "styled-components";
import { blur, fluid, mixins } from "../../styles/mixins";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 5rem;
    z-index: 50;
    background-color: ${({ theme }) => theme.colors.transparent};
    ${blur(12)};
    border-bottom: 1px solid ${({ theme }) => theme.colors.outlineVariant}20;
    ${mixins.flexCenter};
`;

export const Container = styled.div`
    ${mixins.container};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const Logo = styled.div`
    ${mixins.typography.headlineMD};
    font-size: ${fluid("1.75rem", "2rem", "500px", "1500px")};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    white-space: nowrap;
`;

export const LinkList = styled.ul`
    display: flex;
    align-items: center;
    gap: ${fluid("1rem", "2rem", "1200px", "1500px")};
    list-style: none;

    @media (max-width: 1040px) {
        display: none;
    }
`;

export const NavLink = styled.a<{ $active: boolean }>`
    ${mixins.typography.bodyMD};
    font-size: ${fluid(".85rem", "1rem", "1200px", "1500px")};
    font-weight: ${({ $active }) => ($active ? "700" : "400")};
    color: ${({ theme, $active }) =>
        $active ? theme.colors.secondary : theme.colors.onSurfaceVariant};
    border-bottom: 2px solid
        ${({ theme, $active }) =>
            $active ? theme.colors.secondary : "transparent"};
    transition: all 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.secondary};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.secondary};
        outline-offset: 4px;
        border-radius: 4px;
    }
`;

export const ActionGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 1040px) {
        display: none;
    }
`;

export const LoginButton = styled.button`
    ${mixins.typography.bodyMD};
    color: ${({ theme }) => theme.colors.onSurface};
    font-size: ${fluid(".85rem", "1rem", "1200px", "1500px")};
    font-weight: 700;
    padding: 0.5rem ${fluid(".75rem", "1rem", "1200px", "1500px")};
    background: none;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    transition: background 0.3s ease;

    width: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryFixed}40;
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.secondary};
        outline-offset: 2px;
    }
`;

export const PrimaryButton = styled.button<{ $fullWidth?: boolean }>`
    ${mixins.typography.bodyMD};
    font-size: ${fluid(".85rem", "1rem", "1200px", "1500px")};
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.onSecondary};
    font-weight: 700;
    padding: 0.625rem ${fluid("0.625rem", "1.5rem", "1200px", "1500px")};
    ${mixins.rounded.full};
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transition: all 0.3s ease;

    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
    display: ${({ $fullWidth }) => ($fullWidth ? "flex" : "inline-flex")};

    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.secondary};
        outline-offset: 4px;
    }
`;

// -- Mobile menu --
export const MenuButton = styled.button`
    display: none; // Hidden on desktop
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.onSurface};
    cursor: pointer;

    span {
        font-size: 32px;
    }

    @media (max-width: 1040px) {
        display: block;
        ${mixins.flexCenter};
    }
`;

export const MobileOverlay = styled.div<{ $isOpen: boolean }>`
    display: none;

    @media (max-width: 1040px) {
        display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

        position: fixed;
        top: 5rem;
        left: 0;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.white};
        flex-direction: column;
        align-items: center;

        padding: 24px 24px 80px;
        gap: 24px;
        border-top: 1px solid ${({ theme }) => theme.colors.outlineVariant}33;
        box-shadow: ${({ theme }) => theme.shadows.premium};
        z-index: 40;

        max-height: calc(100vh - 5rem);
        max-height: calc(100dvh - 5rem);

        overflow-y: auto;
        -webkit-overflow-scrolling: touch;

        animation: slideIn 0.3s ease-out;

        hr {
            border: none;
            border-top: 1px solid
                ${({ theme }) => theme.colors.outlineVariant}33;
            width: 100%;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
`;
