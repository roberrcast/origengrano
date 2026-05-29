import { coffee1, coffee2, coffee3 } from "../../assets/index";

export interface Plan {
    id: number;
    name: string;
    quantity: string;
    price: number;
    features: string[];
    image: string;
    highlighted?: boolean;
}

export interface Faq {
    q: string;
    a: string;
}

export const dataPlans: Plan[] = [
    {
        id: 1,
        name: "Esencial",
        quantity: "1 bolsa/mes",
        price: 250,
        features: [
            "250g de café selecccionado",
            "Tostado bajo demanda",
            "Envío estándar incluido",
        ],
        image: coffee1,
    },
    {
        id: 2,
        name: "Explorador",
        quantity: "2 bolsas/mes",
        price: 600,
        features: [
            "500g (2 variedades distintas)",
            "Notas de cata exclusiva",
            "Envío prioritario incluido",
        ],
        image: coffee2,
        highlighted: true,
    },
    {
        id: 3,
        name: "Maestro",
        quantity: "4 bolsas/mes",
        price: 1000,
        features: [
            "1kg de selección gourmet",
            "Accesso a lotes limitados",
            "Taller de cata virtual trimestral",
        ],
        image: coffee3,
    },
];

export const queries: Faq[] = [
    {
        q: "¿Puedo cancelar en cualquier momento?",
        a: "Sí, no hay compromisos a largo plazo. Puedes pausar o cancelar tu suscripción en cualquier momento.",
    },
    {
        q: "¿Cómo funciona el envío?",
        a: "Tostamos y enviamos todos los pedidos el primer martes de cada mes para asegurar la máxima frescura.",
    },
    {
        q: "¿Qué tipo de molienda ofrecen?",
        a: "Ofrecemos grano entero, pero podemos enviarlo  molido específicamente para tu cafetera favorita.",
    },
];
