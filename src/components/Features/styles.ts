import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.sectionGapLG} 0;
    background: linear-gradient(
        to bottom,
        ${({ theme }) => theme.colors.background} 0%,
        #ffffff 160px
    );
`;

export const Container = styled.div`
    ${mixins.container};
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.sectionGapSM};
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
`;

export const Title = styled.h2`
    ${mixins.typography.headlineLG};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 16px;
`;

export const Subtitle = styled.p`
    ${mixins.typography.bodyMD};
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.div<{ $borderColor: string }>`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 40px;
    ${mixins.rounded.xl};
    ${mixins.shadows.sm};
    ${mixins.interactive.hoverGrow};

    border-bottom: 4px solid ${({ $borderColor }) => $borderColor};
    display: flex;
    flex-direction: column;
    height: 100%;

    &:hover {
        ${mixins.shadows.premium};
    }
`;

export const IconWrapper = styled.div<{ $bg: string }>`
    width: 56px;
    height: 56px;
    background-color: ${({ $bg }) => $bg};
    ${mixins.rounded.lg};
    ${mixins.flexCenter};
    margin-bottom: 24px;

    span {
        font-size: 1.75rem;
    }
`;

export const CardTitle = styled.h3`
    ${mixins.typography.headlineMD};
    font-size: 24px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const CardText = styled.p`
    ${mixins.typography.bodyMD};
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;
