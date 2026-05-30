import { theme } from "../../styles/theme";

export interface Features {
    id: number;
    icon: string;
    title: string;
    text: string;
    color: string;
    iconBg: string;
}

export const dataFeatures: Features[] = [
    {
        id: 1,
        icon: "eco",
        title: "Origen Ético",
        text: "Trabajamos directamente con agricultores de altura, asegurando salarios justos y prácticas regenerativas para el suelo.",
        color: theme.colors.secondary,
        iconBg: theme.colors.secondaryFixed,
    },
    {
        id: 2,
        icon: "local_fire_department",
        title: "Tueste Semanal",
        text: "Tostamos en pequeños lotes cada lunes para que el café llegue a tu taza en su pico máximo de sabor y fragancia.",
        color: theme.colors.tertiary,
        iconBg: theme.colors.latteAccent,
    },
    {
        id: 3,
        icon: "schedule",
        title: "Suscripción Flexible",
        text: "Pausa, modifica o cancela tu suscripción en cualquier momento. Tú controlas la frecuencia y la molienda.",
        color: theme.colors.primary,
        iconBg: theme.colors.secondaryFixed,
    },
];
