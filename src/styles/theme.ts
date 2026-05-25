export const theme = {
    colors: {
        background: "#f7f9fb",
        surface: "#ffffff",
        primary: "#1a1a1a",
        secondary: "#6366f1",
        tertiary: "#ad8b73",
        text: {
            main: "#191c1e",
            muted: "#444748",
            inverse: "#ffffff",
        },
        outline: "#e0e3e5",
    },
    typography: {
        fontFamily: "'Google Sans', sans-serif",
        h1: {
            size: "4rem",
            weight: "700",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
        },
        body: {
            size: "1.25rem",
            weight: "400",
            lineHeight: "1.6",
        },
    },
    spacing: {
        unit: 8,
        container: "1200px",
        sectionGap: "160px",
    },
    boderRadius: {
        pill: "12px",
        large: "32px",
    },
    shadows: {
        premium:
            "0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px  -30px rgba(0, 0, 0, 0.3)",
    },
};

export type ThemeType = typeof theme;
