import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { Button } from "../../components/Button";

export const PageWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.coffeeBackground};
    min-height: 100vh;
    padding-top: 80px;
`;

export const Hero = styled.section`
    padding: 48px 16px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 48px 64px;
    }

    h1 {
        ${mixins.typography.headlineXL};
        color: ${({ theme }) => theme.colors.coffeePrimary};
        margin-top: 24px;
    }

    p {
        ${mixins.typography.bodyLG};
        color: ${({ theme }) => theme.colors.coffeeOnSurfaceVariant};
        max-width: 48rem;
        margin: 16px auto 0;
    }
`;

export const PlanSection = styled.section`
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 16px 48px;

    @media (max-width: 768px) {
        padding: 0 64px 48px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    margin-top: 48px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }
`;

export const Badge = styled.div`
    position: absolute;
    text-transform: uppercase;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.coffeePrimary};
    color: ${({ theme }) => theme.colors.background};
    padding: 4px 16px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
`;

export const PlanCard = styled.div<{ $highlighted?: boolean }>`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 24px;
    ${mixins.rounded.pill};
    border: 1px solid
        ${({ theme, $highlighted }) =>
            $highlighted
                ? theme.colors.coffeePrimaryFixedDim
                : theme.colors.coffeeOutlineVariant};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;
    position: relative;

    ${({ $highlighted }) =>
        $highlighted ? mixins.shadows.premium : mixins.shadows.sm};

    ${({ $highlighted }) =>
        $highlighted &&
        `
        @media (min-width: 768px) {
            transform: translateY(-16px) scale(1.05);
            z-index: 10;
        }
`}

    &:hover {
        ${mixins.shadows.premium};
    }
`;

export const CardHeader = styled.div`
    span {
        ${mixins.typography.labelUpper};
        color: ${({ theme }) => theme.colors.coffeeSecondary};
    }

    h3 {
        ${mixins.typography.headlineMD};
        color: ${({ theme }) => theme.colors.coffeePrimary};
        margin-top: 4px;
    }
`;

export const PlanImage = styled.img`
    aspect-ratio: 3 / 5;
    width: 100%;
    max-width: 280px;
    max-height: 400px;

    display: block;
    margin: 24px auto;

    border-radius: 8px;
    transition: transform 0.5s ease;
    object-fit: cover;
    object-position: center;

    ${PlanCard}:hover & {
        transform: scale(1.02);
    }
`;

export const FeatureList = styled.ul`
    list-style: none;
    margin-top: 16px;

    li {
        display: flex;
        align-items: center;
        gap: 8px;
        ${mixins.typography.bodyMD};
        color: ${({ theme }) => theme.colors.coffeeOnSurfaceVariant};
        margin-bottom: 8px;
    }
`;

export const Pricing = styled.div`
    margin-top: 48px;
    padding-top: 48px;
    border-top: 1px solid ${({ theme }) => theme.colors.coffeeOutlineVariant};

    .price {
        ${mixins.typography.headlineMD};
        color: ${({ theme }) => theme.colors.coffeePrimary};
    }
    .period {
        ${mixins.typography.labelUpper};
        color: ${({ theme }) => theme.colors.coffeeOnSurfaceVariant};
        text-transform: lowercase;
    }
`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: baseline;
    gap: 4px;
    margin-bottom: 16px;
`;

export const PriceAmount = styled.span`
    ${mixins.typography.headlineMD};
    color: ${({ theme }) => theme.colors.coffeePrimary};
`;

export const PricePeriod = styled.span`
    ${mixins.typography.labelUpper};
    color: ${({ theme }) => theme.colors.coffeeOnSurfaceVariant};
    text-transform: lowercase;
`;

export const SubscribeButton = styled(Button)`
    margin-top: 16px;

    ${({ $highlighted, theme }) =>
        !$highlighted &&
        `
     border-color: ${theme.colors.coffeePrimary};
     color: ${theme.colors.coffeePrimary};

     &:hover {
       background-color: ${theme.colors.coffeePrimary};
       color: ${theme.colors.background};
     }
   `}

    ${({ $highlighted, theme }) =>
        $highlighted &&
        `
     background-color: ${theme.colors.coffeePrimary};
   `}
`;

export const FAQSection = styled.section`
    background-color: ${({ theme }) => theme.colors.coffeeSurfaceContainer};
    padding: 48px 0;

    h2 {
        ${mixins.typography.headlineMD};
        color: ${({ theme }) => theme.colors.coffeePrimary};
        text-align: center;
        margin-bottom: 48px;
    }
`;

export const FAQContainer = styled.div`
    max-width: 48rem;
    margin: 0 auto;
    padding: 0 16px;
`;

export const FAQItem = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 24px;
    border-radius: 12px;
    ${mixins.shadows.sm};
    margin-bottom: 24px;

    h4 {
        ${mixins.typography.bodyMD};
        font-weight: 600;
        color: ${({ theme }) => theme.colors.coffeePrimary};
        margin-bottom: 8px;
    }

    p {
        ${mixins.typography.bodyMD};
        color: ${({ theme }) => theme.colors.coffeeOnSurfaceVariant};
    }
`;
