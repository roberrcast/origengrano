import { render, screen, fireEvent, act } from "@testing-library/react";
import { Contact } from "../../components/Contact";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { validateEmail } from "../../components/Contact";
import { vi } from "vitest";

describe("Contact component validation", () => {
    const setup = () => {
        render(
            <ThemeProvider theme={theme}>
                <Contact />
            </ThemeProvider>,
        );

        return {
            nameInput: screen.getByLabelText(/nombre completo/i),
            emailInput: screen.getByLabelText(/correo electrónico/i),
            message: screen.getByLabelText(/cómo podemos ayudarte/i),
            submitButton: screen.getByRole("button", {
                name: /enviar mensaje/i,
            }),
        };
    };

    it("should show an error if the name field is empty on submit", () => {
        const { nameInput, emailInput, message, submitButton } = setup();

        fireEvent.change(nameInput, { target: { value: " " } });
        fireEvent.change(emailInput, { target: { value: "mail@mail.com" } });
        fireEvent.change(message, { target: { value: "Hello." } });
        fireEvent.click(submitButton);

        const errorMsg = screen.getByText(/este campo es obligatorio/i);
        expect(errorMsg).toBeInTheDocument();
    });

    it("should show an error if the email field is empty on submit", () => {
        const { nameInput, emailInput, message, submitButton } = setup();

        fireEvent.change(nameInput, { target: { value: "Rob" } });
        fireEvent.change(emailInput, { target: { value: " " } });
        fireEvent.change(message, { target: { value: "Hello." } });
        fireEvent.click(submitButton);

        const errorMsg = screen.getByText(/introduce un correo válido/i);
        expect(errorMsg).toBeInTheDocument();
    });

    it("should render an error message if an email is not valid", () => {
        const { nameInput, emailInput, message, submitButton } = setup();

        fireEvent.change(nameInput, { target: { value: "Rob" } });
        fireEvent.change(emailInput, { target: { value: "mail1mail.com" } });
        fireEvent.change(message, { target: { value: "Hi" } });
        fireEvent.click(submitButton);

        const errorMsg = screen.getByText(/introduce un correo válido/i);
        expect(errorMsg).toBeInTheDocument();
    });

    it("should show an error if the message field is empty on submit", () => {
        const { nameInput, emailInput, message, submitButton } = setup();

        fireEvent.change(nameInput, { target: { value: "Rob" } });
        fireEvent.change(emailInput, { target: { value: "mail@mail.com" } });
        fireEvent.change(message, { target: { value: " " } });
        fireEvent.click(submitButton);

        const errorMsg = screen.getByText(/cuéntanos algo/i);
        expect(errorMsg).toBeInTheDocument();
    });

    it("should clear the form and show success state on successful submit", () => {
        vi.useFakeTimers();

        const { nameInput, emailInput, message, submitButton } = setup();

        fireEvent.change(nameInput, { target: { value: "Rob" } });
        fireEvent.change(emailInput, { target: { value: "mail@mail.com" } });
        fireEvent.change(message, { target: { value: "Hola, me interesa." } });

        fireEvent.click(submitButton);

        expect(screen.getByText(/enviando\.\.\./i)).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(1500);
        });

        expect(screen.getByText(/¡mensaje enviado!/i)).toBeInTheDocument();

        expect(nameInput).toHaveValue("");
        expect(emailInput).toHaveValue("");
        expect(message).toHaveValue("");

        vi.useRealTimers();
    });
});

describe("validateEmail regex", () => {
    it("should return true for valid emails", () => {
        expect(validateEmail("test@example.com")).toBeTruthy();
        expect(
            validateEmail("user.name+rtag-abcde1234455@mail.co.mx"),
        ).toBeTruthy();
    });

    it("should return null (falsy) for invalid emails", () => {
        expect(validateEmail("non-adress")).toBeFalsy();
        expect(validateEmail("@domain.com")).toBeFalsy();
        expect(validateEmail("username@.com")).toBeFalsy();
    });
});
