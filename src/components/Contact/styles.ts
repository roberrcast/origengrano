import styled, { keyframes, css } from "styled-components";
import { mixins } from "../../styles/mixins";

const shake = keyframes`
0%, 100% { transform: translateX(0); }
25%, { transform: translateX(-5px); }
75%, { transform: translateX(5px); }
`;

const spin = keyframes`
from { transform: rotate(0deg);}
to { transform: rotate(360deg)}
`;

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.sectionGapLG} 0;
    background-color: ${({ theme }) => theme.colors.surface};
    position: relative;
`;

export const Container = styled.div`
    ${mixins.container};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 48px;
    }
`;

export const InfoSide = styled.div`
    h2 {
        ${mixins.typography.headlineLG};
    }

    p {
        ${mixins.typography.bodyLG};
        color: ${({ theme }) => theme.colors.onSurfaceVariant};
        margin-bottom: 32px;
    }
`;

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;

    .icon-circle {
        width: 48px;
        height: 48px;
        background-color: ${({ theme }) => theme.colors.secondaryFixed};
        color: ${({ theme }) => theme.colors.secondary};
        ${mixins.rounded.full};
        ${mixins.flexCenter};
    }

    span:last-child {
        font-weight: 700;
    }
`;

export const FormCard = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 48px;
    ${mixins.rounded.card};
    ${mixins.shadows.premium};
    border: 1px solid ${({ theme }) => theme.colors.outlineVariant}33;

    @media (max-width: 640px) {
        padding: 32px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const InputGroup = styled.div<{
    $hasError?: boolean;
    $shouldShake?: boolean;
}>`
    position: relative;
    width: 100%;
    animation: ${({ $shouldShake }) =>
        $shouldShake
            ? css`
                  ${shake} 0.2s ease-in-out 0s 2
              `
            : "none"};

    label {
        position: absolute;
        left: 16px;
        top: 18px;
        color: ${({ theme, $hasError }) =>
            $hasError ? theme.colors.error : theme.colors.onSurfaceVariant};
        transition: all 0.2s ease;
        pointer-events: none;
        ${mixins.typography.bodyMD};
        z-index: 10;
    }

    input,
    textarea {
        width: 100%;
        padding: 16px;
        font-family: inherit;
        ${mixins.rounded.pill};
        border: 1px solid
            ${({ theme, $hasError }) =>
                $hasError ? theme.colors.error : theme.colors.outline};
        background: transparent;
        outline: none;
        ${mixins.typography.bodyMD};
        transition: border-color 0.2s ease;

        &:focus {
            border-color: ${({ theme, $hasError }) =>
                $hasError ? theme.colors.error : theme.colors.secondary};
        }

        // Label flotante
        &:focus ~ label,
        &:not(:placeholder-shown) ~ label {
            transform: translateY(-35px) scale(0.85);
            background-color: ${({ theme }) => theme.colors.background};
            padding: 0 4px;
            color: ${({ theme, $hasError }) =>
                $hasError ? theme.colors.error : theme.colors.secondary};
        }
    }
`;

export const ErrorMsg = styled.span`
    color: ${({ theme }) => theme.colors.error};
    font-size: 0.75rem;
    margin-top: 4px;
    display: block;
`;

export const SubmitButton = styled.button<{
    $status?: "idle" | "sending" | "success";
}>`
    width: 100%;
    padding: 16px;
    ${mixins.rounded.pill};
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;

    background-color: ${({ theme, $status }) =>
        $status === "success" ? theme.colors.success : theme.colors.secondary};
    color: ${({ theme }) => theme.colors.background};

    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        cursor: not-allowed;
    }

    .animate-spin {
        animation: ${spin} 1s linear infinite;
    }
`;
