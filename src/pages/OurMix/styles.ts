import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const PageWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.coffeeBackground};
    ming-height: 100vh;
    padding-top: 80px;
`;

export const Hero = styled.section`
    position: relative;
    height: 614px;
    ${mixins.flexCenter};
    flex-direction: column;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.surfaceContainerLowest};
`;

export const HeroBg = styled.img`
    ${mixins.overlay};
    object-fit: cover;
    opacity: 0.1;
    z-index: 0;
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    text-align: center;

    span {
        ${mixins.typography.labelUpper};
        letter-spacing: 0.2em;
        color: ${({ theme }) => theme.colors.coffeeSecondary};
        margin-bottom: 16px;
        display: block;
    }

    h1 {
        ${mixins.typography.headlineXL};
        color: ${({ theme }) => theme.colors.coffeePrimary};
        margin-bottom: 24px;
    }

    .divider {
        width: 4rem;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.coffeePrimary};
        margin: 0 auto;
    }
`;

export const ProcessSection = styled.section`
    padding: 48px 0;
`;

export const Container = styled.div`
    ${mixins.container};
`;

export const ProcessGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const StepCard = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 24px;
    ${mixins.rounded.pill};
    border: 1px solid ${({ theme }) => theme.colors.coffeeOutlineVariant}33;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${mixins.shadows.sm};
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-4px);
    }

    .icon {
        color: ${({ theme }) => theme.colors.coffeeSecondary};
        margin-bottom: 16px;
        span {
            font-size: 32px;
        }
    }

    h3 {
        ${mixins.typography.bodyMD};
        font-size: 24px;
        color: ${({ theme }) => theme.colors.coffeePrimary};
        margin-bottom: 8px;
    }

    p {
        ${mixins.typography.headlineMD};
        color: ${({ theme }) => theme.colors.coffeeOnSurfaceVariant};
    }
`;

export const InsightSection = styled.section`
    padding: 48px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.coffeeOutlineVariant};
`;

export const InsightFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    .image-side {
        flex: 1;
        width: 100%;
        img {
            width: 100%;
            aspect-ratio: 1;
            object-fit: cover;
            ${mixins.rounded.pill};
            box-shadow: ${({ theme }) => theme.shadows.sm};
        }
    }

    .text-side {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    h2 {
        ${mixins.typography.headlineLG};
        color: ${({ theme }) => theme.colors.coffeePrimary};
    }

    p {
        ${mixins.typography.bodyLG};
        color: ${({ theme }) => theme.colors.coffeeOnSurfaceVariant};
    }
`;
