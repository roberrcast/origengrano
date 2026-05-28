import styled from "styled-components";
import { mixins } from "../styles/mixins";

export const Footer = styled.footer`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sectionGapSM} 0;
    border-top: 1px solid ${({ theme }) => theme.colors.outlineVariant}33;
    background-color: ${({ theme }) => theme.colors.testimonialsBg};
`;

export const Container = styled.div`
    ${mixins.container};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`;

export const BrandSection = styled.div`
    text-align: center;

    @media (max-width: 768px) {
        text-align: left;
    }

    h3 {
        ${mixins.typography.headlineMD};
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 8px;
    }

    p {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.onSurfaceVariant};
        max-width: 300px;
    }
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;

    a {
        ${mixins.typography.bodyMD};
        color: ${({ theme }) => theme.colors.onSurfaceVariant};
        transition: color. 0.3s ease;

        &:hover {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;

export const SocialGroup = styled.div`
    display: flex;
    gap: 16px;
`;

export const SocialIcon = styled.a`
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.background};
    ${mixins.rounded.full};
    ${mixins.flexCenter};
    ${mixins.shadows.sm};
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryFixed};
        transform: translateY(-2px);
    }
`;
