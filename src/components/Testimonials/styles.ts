import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.sectionGapLG} 0;
    background-color: ${({ theme }) => theme.colors.testimonialsBg};
    overflow: hidden;
`;

export const Container = styled.div`
    ${mixins.container};
`;

export const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 48px;
    gap: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Title = styled.h2`
    ${mixins.typography.headlineLG};
    max-width: 600px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const NavButtons = styled.div`
    display: flex;
    gap: 8px;
`;

export const NavButton = styled.button`
    width: 48px;
    height: 48px;
    ${mixins.rounded.full};
    border: 1px solid ${({ theme }) => theme.colors.outlineVariant};
    background-color: ${({ theme }) => theme.colors.navButtonBg};
    ${mixins.flexCenter};
    transition: al 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        ${mixins.shadows.sm};
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.div<{ $dark?: boolean }>`
    padding: 48px;
    ${mixins.rounded.card};
    ${mixins.shadows.premium};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.testimonialCardBorder};
    background-color: ${({ $dark }) => ($dark ? "#1c1b1b" : "#ffffff")};
    color: ${({ $dark }) => ($dark ? "#ffffff" : "inherit")};

    @media (max-width: 640px) {
        padding: 32px;
    }
`;

export const Stars = styled.div<{ $color: string }>`
    display: flex;
    gap: 4px;
    margin-bottom: 24px;
    color: ${({ $color }) => $color};

    span {
        font-variation-settings: "FILL" 1;
    }
`;

export const Quote = styled.p`
    ${mixins.typography.bodyLG};
    font-style: italic;
    margin-bottom: 32px;
`;

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const Avatar = styled.div<{ $bg: string }>`
    width: 48px;
    height: 48px;
    ${mixins.rounded.full};
    background-color: ${({ $bg }) => $bg};
`;

export const AuthorDetails = styled.div<{ $dark?: boolean }>`
    p:first-child {
        font-weight: 700;
        color: ${({ $dark }) => ($dark ? "#ffffff" : "inherit")};
    }
    p:last-child {
        font-size: 14px;
        color: ${({ $dark, theme }) =>
            $dark ? "#858383" : theme.colors.onSurfaceVariant};
    }
`;
