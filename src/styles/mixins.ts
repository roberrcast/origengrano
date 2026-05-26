import { css } from "styled-components";

/* --- Inicio de "fluid" --- */

// Tipado interno
interface ParsedValue {
    val: number;
    unit: string;
}

//Funciones no exportadas para uso interno

// Función para separar números de unidades
const parseUnit = (value: string | number): ParsedValue => {
    const match = String(value).match(/(-?[\d.]+)([a-z%]*)/);
    if (!match) return { val: parseFloat(String(value)), unit: "" };
    return { val: parseFloat(match[1]), unit: match[2] };
};

//Función interna para convertir a pixeles
const convertToPx = (value: string | number, rootFontSize = 16) => {
    const { val, unit } = parseUnit(value);
    if (unit === "rem") {
        return val * rootFontSize;
    }

    return val;
};

// --Funciones y mixins exportados--

// una función auxiliar para generar un clamp() en CSS para fluidamente escalar valores
// @param {string} min - el valor mínimo (p.ej., '0.7rem').
// @param {string} pref - el valor preferido (p.ej., 1rem) .
// @param {string} max - el valor máximo (p.ej., 22rem).
// @returns {string} una función clamp() CSS.

export const fluid = (
    minSize: string | number,
    maxSize: string | number,
    minBreakpoint: string | number,
    maxBreakpoint: string | number,
) => {
    //Convertimos todos los inputs a pixeles para calcular correctamente
    const minSizePx = convertToPx(minSize);
    const maxSizePx = convertToPx(maxSize);
    const minBreakpointPx = convertToPx(minBreakpoint);
    const maxBreakpointPx = convertToPx(maxBreakpoint);

    const slope = (maxSizePx - minSizePx) / (maxBreakpointPx - minBreakpointPx);

    //El intercept ahora está calculado en pixeles
    const interceptPx = minSizePx - slope * minBreakpointPx;

    //La parte media de la función clamp(), usando el slope e intercept calculados
    const preferredValue = `${(slope * 100).toFixed(4)}vw + ${(interceptPx / 16).toFixed(4)}rem`;

    /* En caso de valores negativos por ejemplo '-3rem', '-6rem', '400px', '1500px' */
    const minValue = minSizePx < maxSizePx ? minSize : maxSize;
    const maxValue = minSizePx < maxSizePx ? maxSize : minSize;

    //Usamos los valores originales de min/max en el clamp() final para precisión
    return `clamp(${minValue}, ${preferredValue}, ${maxValue})`;
};

/* --- Final de "fluid" ---  */

export const mixins = {
    // Typography Mixins
    typography: {
        headlineXL: css`
            font-size: ${({ theme }) => theme.typography.headlineXL.size};
            font-weight: ${({ theme }) => theme.typography.headlineXL.weight};
            line-height: ${({ theme }) =>
                theme.typography.headlineXL.lineHeight};
            letter-spacing: ${({ theme }) =>
                theme.typography.headlineXL.letterSpacing};
        `,
        headlineLG: css`
            font-size: ${({ theme }) => theme.typography.headlineLG.size};
            font-weight: ${({ theme }) => theme.typography.headlineLG.weight};
            line-height: ${({ theme }) =>
                theme.typography.headlineLG.lineHeight};
        `,
        headlineMD: css`
            font-size: ${({ theme }) => theme.typography.headlineMD.size};
            font-weight: ${({ theme }) => theme.typography.headlineMD.weight};
            line-height: ${({ theme }) =>
                theme.typography.headlineMD.lineHeight};
        `,
        bodyLG: css`
            font-size: ${({ theme }) => theme.typography.bodyLG.size};
            font-weight: ${({ theme }) => theme.typography.bodyLG.weight};
            line-height: ${({ theme }) => theme.typography.bodyLG.lineHeight};
        `,
        bodyMD: css`
            font-size: ${({ theme }) => theme.typography.bodyMD.size};
            font-weight: ${({ theme }) => theme.typography.bodyMD.weight};
            line-height: ${({ theme }) => theme.typography.bodyMD.lineHeight};
        `,
        labelUpper: css`
            font-size: ${({ theme }) => theme.typography.labelUpper.size};
            font-weight: ${({ theme }) => theme.typography.labelUpper.weight};
            line-height: ${({ theme }) =>
                theme.typography.labelUpper.lineHeight};
            letter-spacing: ${({ theme }) =>
                theme.typography.labelUpper.letterSpacing};
            text-transform: uppercase;
        `,
    },

    rounded: {
        none: css`
            border-radius: ${({ theme }) => theme.borderRadius.none};
        `,
        sm: css`
            border-radius: ${({ theme }) => theme.borderRadius.sm};
        `,
        lg: css`
            border-radius: ${({ theme }) => theme.borderRadius.lg};
        `,
        xl: css`
            border-radius: ${({ theme }) => theme.borderRadius.xl};
        `,
        pill: css`
            border-radius: ${({ theme }) => theme.borderRadius.pill};
        `, // 12px
        full: css`
            border-radius: ${({ theme }) => theme.borderRadius.full};
        `,
        card: css`
            border-radius: ${({ theme }) => theme.borderRadius.card};
        `, // 24px
    },

    // Shadow Mixins
    shadows: {
        sm: css`
            box-shadow: ${({ theme }) => theme.shadows.sm};
        `,
        premium: css`
            box-shadow: ${({ theme }) => theme.shadows.premium};
        `,
    },

    // Layout Mixins
    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    container: css`
        width: 100%;
        max-width: ${({ theme }) => theme.spacing.containerMax};
        margin: 0 auto;
        padding: 0 ${({ theme }) => theme.spacing.gutter};

        @media (max-width: 768px) {
            padding: 0 ${({ theme }) => theme.spacing.marginMobile};
        }
    `,

    overlay: css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `,

    interactive: {
        hoverGrow: css`
            transition:
                transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.3s ease,
                filter 0.3s ease;

            &:hover {
                transform: translateY(-2px);
            }

            &:active {
                transform: translateY(0);
                filter: brightness(0.9);
            }
        `,
    },
};

export const blur = (value: number | string) => css`
    backdrop-filter: blur(${value}px);
    -webkit-backdrop-filter: blur(${value}px);
`;
