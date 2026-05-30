export interface Steps {
    id: number;
    icon: string;
    title: string;
    text: string;
}

export const dataSteps: Steps[] = [
    {
        id: 1,
        icon: "eco",
        title: "Selección",
        text: "Escogemos sólo los granos que cumplen con nuestros rigurosos estándares de altitud y madurez.",
    },
    {
        id: 2,
        icon: "local_fire_department",
        title: "Tueste Artesanal",
        text: "Tostamos en lotes pequeños para controlar cada segundo de la caramelización",
    },
    {
        id: 3,
        icon: "verified",
        title: "Control de Calidad",
        text: "Cada lote es catado por nuestros expertos para garantizar un perfil de sabor perfecto.",
    },
    {
        id: 4,
        icon: "inventory_2",
        title: "Empaquetado",
        text: "Sellamos la frescura al instante en bolsas con válvulas de degasificación.",
    },
];
