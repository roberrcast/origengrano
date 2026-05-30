import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const PageWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.coffeeBackground};
    min-height: 100vh;
    padding-top: 128px;
    padding-bottom: 80px;
`;

export const Container = styled.div`
    ${mixins.container};
`;

export const Hero = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 48px;
`;

export const Badge = styled.div`
    padding: 6px 16px;
    background-color: ${({ theme }) => theme.colors.badge};
    color: ${({ theme }) => theme.colors.coffeePrimary};
    ${mixins.rounded.pill};
    margin-bottom: 16px;
    ${mixins.typography.labelUpper};
    text-transform: unset;
    font-size: 16px;
`;

export const MainTitle = styled.h1`
    ${mixins.typography.headlineXL};
    color: ${({ theme }) => theme.colors.coffeePrimary};
    max-width: 800px;
    margin-bottom: 24px;
    text-align: center;
`;

export const HeroImageWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    aspect-ratio: 21 / 9;
    ${mixins.rounded.xl};
    overflow: hidden;
    ${mixins.shadows.sm};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const BentoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
`;

export const BentoCard = styled.div<{ $span: number; $dark?: boolean }>`
    grid-column: span ${({ $span }) => $span};
    background-color: ${({ $dark, theme }) =>
        $dark ? theme.colors.coffeePrimary : theme.colors.white};
    color: ${({ $dark, theme }) => ($dark ? theme.colors.white : "inherit")};
    padding: 48px;
    ${mixins.rounded.xl};
    border: 1px solid ${({ theme }) => theme.colors.coffeeOutlineVariant}33;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.01);
    }
`;

export const IconContainer = styled.div`
    z-index: 1;
    margin-top: auto;
    position: relative;
`;

export const CardIcon = styled.span<{ $size?: string; $color?: string }>`
    font-size: ${({ $size }) => $size || "32px"} !important;
    color: ${({ $color, theme }) => $color || theme.colors.coffeePrimary};
    margin-bottom: 24px;
    display: block;
`;

export const CardTitle = styled.h2<{ $size?: string }>`
    font-size: ${({ $size }) => $size || "24px"};
    font-weight: 600;
    ${mixins.typography.headlineMD};
    margin-bottom: 12px;
`;

export const CardDescription = styled.p<{ $color?: string; $maxW?: string }>`
    ${mixins.typography.bodyLG};
    color: ${({ $color, theme }) =>
        $color || theme.colors.coffeeOnSurfaceVariant};
    max-width: ${({ $maxW }) => $maxW || "none"};
`;

export const LargeCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    .text-side {
        flex: 1;

        .tag-group {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
            ${mixins.typography.labelUpper};
            font-size: 12px;
            letter-spacing: 0.1em;
        }
    }
`;

export const StatBox = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryContainer};
    padding: 32px;
    ${mixins.rounded.xl};
    border: 1px solid ${({ theme }) => theme.colors.borderSusteinability};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    text-align: center;
    min-width: 280px;

    .stat-item {
        .value {
            ${mixins.typography.headlineMD};
            color: ${({ theme }) => theme.colors.secondaryFixed};
            display: block;
        }
        .label {
            ${mixins.typography.labelUpper};
            font-size: 10px;
            color: ${({ theme }) => theme.colors.onPrimaryContainer};
        }
    }
`;

export const CardBg = styled.img`
    ${mixins.overlay};
    object-fit: cover;
    opacity: 0.2;
    filter: grayscale(100%);
    transition: all 0.7s ease;

    ${BentoCard}:hover & {
        filter: grayscale(0%);
        opacity: 0.4;
    }
`;

export const QuoteSection = styled.section`
    padding: 48px 0;
    ${mixins.flexCenter};
    text-align: center;

    .quote-container {
        max-width: 700px;
    }

    blockQuote {
        ${mixins.typography.headlineMD};
        color: ${({ theme }) => theme.colors.onSurfaceVariant};
        font-style: italic;
        margin-bottom: 16px;
    }

    cite {
        ${mixins.typography.headlineMD};
        color: ${({ theme }) => theme.colors.coffeePrimary};
        font-style: normal;
    }
`;

export const QuoteIcon = styled.span`
    font-size: 48px !important;
    color: ${({ theme }) => theme.colors.outline};
    margin-bottom: 24px;
    display: block;
`;
