import { theme } from "../../styles/theme";

export interface Users {
    id: number;
    stars: number;
    quote: string;
    author: string;
    location: string;
    avatarColor: string;
    isDark: boolean;
    starColor: string;
}

export const userData: Users[] = [
    {
        id: 1,
        stars: 5,
        quote: '"Llevo meses suscrita y cada envío es una sorpresa deliciosa. Las notas de cata que incluyen me han ayudado a educar mi paladar."',
        author: "Elena Martínez",
        location: "Suscripción Mensual - Monterrey",
        avatarColor: theme.colors.latteAccent,
        isDark: false,
        starColor: theme.colors.secondary,
    },
    {
        id: 2,
        stars: 5,
        quote: '"El tueste es simplemente impecable. Se nota la pasión por el detalle en cada grano. El mejor servicio de café en España."',
        author: "Carlos Ruiz",
        location: "Suscripción Pro - CDMX",
        avatarColor: "#858383",
        isDark: true,
        starColor: theme.colors.latteAccent,
    },
];
