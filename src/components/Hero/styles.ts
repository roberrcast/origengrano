import styled, { keyframes } from "styled-components";
import { mixins } from "../../styles/mixins";

const gradientAnimation = keyframes`
0%, {background-position: 0% 50%;}
50%, {background-position: 100% 50%;}
100%, {background-position: 0% 50%;}
`;

const meshMove = keyframes`
0%, { transform: scale(1) translate(0, 0);}
50%, { transform: scale(1.2) translate(5%, 5%);}
100%, { transform: scale(1) translate(-2%, 2%);}
`;

export const HeroSection = styled.section`
    position: relative;
    padding-top: 160px;
    padding-bottom: ${({ theme }) => theme.spacing.sectionGapLG};
    background-color: ${({ theme }) => theme.colors.background};
    overflow: hidden;
`;

export const StripeCanvas = styled.div`
    position: absolute;
    top: -25%;
    left: -50%;
    width: 200%;
    height: 150%;
    z-index: 0;
    background: linear-gradient(-45deg, #f7f9fb, #e1e0ff, #ffdcc4, #e3d5ca);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 15s ease infinite;
    opacity: 0.6;
    transform: skewY(-6deg);
    transform-origin: 0;

    will-change: background-position, transform;

    @media (max-width: 768px) {
        height: 120%;
        top: -10%;
        transform: skewY(-10deg);
    }
`;

export const MeshGradient = styled.div`
    ${mixins.overlay};
    z-index: 0;
    background: ${({ theme }) => theme.colors.background};
    background-image:
        radial-gradient(at 0% 0%, hsla(253, 16%, 7%, 1) 0, transparent 50%),
        radial-gradient(at 100% 0%, hsla(339, 49%, 30%, 1) 0, transparent 50%),
        radial-gradient(at 0% 100%, hsla(343, 100%, 76%, 1) 0, transparent 50%),
        radial-gradient(at 100% 100%, hsla(25, 100%, 67%, 1) 0, transparent 50%);
    filter: blur(80px); /* Slightly lower blur for better mobile performance */
    opacity: 0.12; /* Slightly lower opacity */
    animation: ${meshMove} 20s ease infinite alternate;

    /* Performance boost */
    will-change: transform;

    @media (max-width: 768px) {
        /* Optimización para dispositivos con menor desempeño */
        filter: blur(40px);
    }
`;

export const HeroTransition = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    /*  height: 200px; */
    height: 50%;
    background: linear-gradient(
        to bottom,
        transparent 0%,
        ${({ theme }) => theme.colors.background}99 40%,
        ${({ theme }) => theme.colors.background} 100%
    );
    z-index: 1;
    pointer-events: none;
`;

export const Container = styled.div`
    ${mixins.container};
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 48px;
    align-items: center;
    position: relative;
    z-index: 10;
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

export const Content = styled.div`
    max-width: 640px;

    @media (max-width: 1024px) {
        margin: 0 auto;
    }
`;

export const Badge = styled.span`
    ${mixins.typography.labelUpper};
    color: ${({ theme }) => theme.colors.secondary};
    display: block;
    margin-bottom: 24px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05));
`;

export const Title = styled.h1`
    ${mixins.typography.headlineXL};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 24px;

    @media (max-width: 768px) {
        font-size: 40px; /* headlineXL-mobile */
    }
`;

export const Description = styled.p`
    ${mixins.typography.bodyLG};
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    margin-bottom: 40px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 16px;
    @media (max-width: 1024px) {
        justify-content: center;
    }
    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: -48px;
        left: -48px;
        width: 256px;
        height: 256px;
        background-color: ${({ theme }) => theme.colors.secondaryFixed};
        opacity: 0.3;
        filter: blur(64px);
        border-radius: 50%;
    }
`;

export const HeroImage = styled.img`
    width: 100%;
    aspect-ratio: 1;
    object-cover: cover;
    ${mixins.rounded.card}; /* 24px */
    ${mixins.shadows.premium};
    position: relative;
    z-index: 10;
`;
