import type { ButtonHTMLAttributes, ReactNode, ElementType } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: S.ButtonVariant;
    fullWidth?: boolean;
    icon?: string;
    as?: ElementType;
    to?: string;
    $highlighted?: boolean;
}

export const Button = ({
    children,
    variant = "primary",
    fullWidth = false,
    icon,
    ...props
}: ButtonProps) => {
    return (
        <S.StyledButton $variant={variant} $fullWidth={fullWidth} {...props}>
            {children}
            {icon && (
                <span className="material-symbols-outlined" aria-hidden="true">
                    {icon}
                </span>
            )}
        </S.StyledButton>
    );
};
