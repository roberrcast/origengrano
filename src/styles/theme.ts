export const theme = {
    colors: {
        background: "#f7f9fb",
        primary: "#1a1a1a",
        secondary: "#4648d4",
        surface: "#ffffff",
        surfaceContainerLowest: "#ffffff",
        onSurface: "#191c1e",
        onSurfaceVariant: "#4447748",
        onSecondary: "#ffffff",
        outline: "#747878",
        outlineVariant: "#c4c7c7",
        latteAccent: "#e3d5ca",
        secondaryFixed: "#e1e0ff",
        tertiary: "#ad8b73",
        error: "#ba1a1a",
        success: "#10b981",
        transparent: "rgba(255, 255, 255, 0.6)",
        outlineBtnBg: "rgba(255, 255, 255, 0.8)",
        navButtonBg: "rgba(255, 255, 255, 0.5)",
        testimonialCardBorder: "rgba(255, 255, 255, 0.4)",
        white: "#ffffff",
        testimonialsBg: "#f2f4f6",
        footerBg: "#e2e2e2",
        text: {
            main: "#191c1e",
            muted: "#444748",
            inverse: "#ffffff",
        },
    },
    typography: {
        fontFamily: "'Google Sans', sans-serif",
        headlineXL: {
            size: "4rem",
            weight: "700",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
        },
        headlineLG: {
            size: "3rem",
            weight: "600",
            lineHeight: "1.2",
        },
        headlineMD: {
            size: "2rem",
            weight: "400",
            lineHeight: "1.3",
        },
        bodyLG: {
            size: "1.25rem",
            weight: "400",
            lineHeight: "1.6",
        },
        bodyMD: {
            size: "1rem",
            weight: "400",
            lineHeight: "1.6",
        },
        labelUpper: {
            size: "0.875rem",
            weight: "700",
            lineHeight: "1",
            letterSpacing: "0.05em",
        },
    },
    spacing: {
        containerMax: "1500px",
        marginMobile: "20px",
        gutter: "24px",
        sectionGapLG: "160px",
        sectionGapSM: "80px",
    },
    borderRadius: {
        none: "0",
        sm: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
        card: "1.5rem",
        pill: "12px",
    },
    shadows: {
        sm: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.03)",
        premium:
            "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
    },
};

export type ThemeType = typeof theme;
