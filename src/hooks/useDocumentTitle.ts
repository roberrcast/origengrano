import { useEffect } from "react";

export function useDocumentTitle(title: string) {
    useEffect(() => {
        document.title = `${title} | Origen & Grano | Café de Especialidad Artesanal`;
    }, [title]);
}
