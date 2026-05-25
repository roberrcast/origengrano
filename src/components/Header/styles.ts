import styled from "styled-components";
import { blur, mixins } from "../../styles/mixins";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 5rem;
    z-index: 50;
    background-color: ${({ theme }) => theme.colors.transparent};
    ${blur("12px")};
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
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    white-space: nowrap;
`;

export const LinkList = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled.a<{ $active: boolean }>`
    ${mixins.typography.bodyMD};
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

    &:focus-visible: {
        outline: 2px solid ${({ theme }) => theme.colors.secondary};
        outline-offset: 4px;
        border-radius: 4px;
    }
`;

export const ActionGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const LoginButton = styled.button`
    ${mixins.typography.bodyMD};
    color: ${({ theme }) => theme.colors.onSurface};
    font-weight: 700;
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    transition: background 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryFixed}40;
    }

    &:focus-visible: {
        outline: 2px solid ${({ theme }) => theme.colors.secondary};
        outline-offset: 2px;
    }

    @media (max-width: 640px) {
        display: none;
    }
`;

export const PrimaryButton = styled.button`
    ${mixins.typography.bodyMD};
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.onSecondary};
    font-weight: 700;
    padding: 0.625rem 1.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transition: all 0.3s ease;

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
