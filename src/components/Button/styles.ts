import styled, { css } from "styled-components";
import { blur, mixins } from "../../styles/mixins";

export type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonStylesProps {
    $variant: ButtonVariant;
    $fullWidth?: boolean;
}

const variants = {
    primary: css`
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.onSecondary};
        ${mixins.shadows.sm};
        border: none;

        &:hover {
            ${mixins.shadows.premium};
            filter: brightness(1.1);
        }
    `,

    outline: css`
        backround-color: ${({ theme }) => theme.colors.outlineBtnBg};
        color: ${({ theme }) => theme.colors.onSurface};
        border: 1px solid ${({ theme }) => theme.colors.outlineVariant};
        ${blur("4px")};

        &:hover {
            backround-color: ${({ theme }) => theme.colors.background};
            border-color: ${({ theme }) => theme.colors.outline};
        }
    `,

    ghost: css`
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.onSurface};

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondaryFixed}40;
        }
    `,
};

export const StyledButton = styled.button<ButtonStylesProps>`
    ${mixins.typography.bodyMD};
    ${mixins.rounded.lg};
    ${mixins.interactive.hoverGrow};

    font-weight: 700;
    padding: 12px 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

    // Aplicar la variante para el botón
    ${({ $variant }) => variants[$variant]}

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.secondary};
        outline-offset: 4px;
    }
`;
