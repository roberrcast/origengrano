import { useState } from "react";
import * as S from "./styles";

//

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [shake, setShake] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success">(
        "idle",
    );

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors = {
            name: !formData.name.trim(),
            email: !validateEmail(formData.email),
            message: !formData.message.trim(),
        };

        setErrors(newErrors);

        // Disparar animación 'shake' para campos con errores
        if (newErrors.name || newErrors.email || newErrors.message) {
            setShake(newErrors);
            setTimeout(
                () => setShake({ name: false, email: false, message: false }),
                400,
            );
            return;
        }

        // Si es válido simulamos el envío
        setStatus("sending");
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <S.Section id="Contacto">
            <S.Container>
                <S.Grid>
                    <S.InfoSide className="reveal">
                        <h2>¿Tienes alguna duda sobre nuestras mezclas?</h2>

                        <p>
                            Nuestro equipo de baristas expertos está listo para
                            asesorarte en tu colección o resolver cualquier
                            incidencia con tu pedido.
                        </p>

                        <S.ContactItem>
                            <div className="icon-circle">
                                <span className="material-symbols-outlined">
                                    mail
                                </span>
                            </div>
                            <span>hola@origenygrano.com</span>
                        </S.ContactItem>

                        <S.ContactItem>
                            <div className="icon-circle">
                                <span className="material-symbols-outlined">
                                    location_on
                                </span>
                            </div>
                            <span>Calle Artesanos 12, Mexicali, B.C.</span>
                        </S.ContactItem>
                    </S.InfoSide>

                    <S.FormCard className="reveal">
                        <S.Form onSubmit={handleSubmit} noValidate>
                            {/* -- Campo para nombre -- */}
                            <S.InputGroup
                                $hasError={errors.name}
                                $shouldShake={shake.name}
                            >
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                />

                                <label htmlFor="name">Nombre completo</label>
                                {errors.name && (
                                    <S.ErrorMsg>
                                        Este campo es obligatorio
                                    </S.ErrorMsg>
                                )}
                            </S.InputGroup>
                            {/* -- Campo para email -- */}
                            <S.InputGroup
                                $hasError={errors.email}
                                $shouldShake={shake.email}
                            >
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                />

                                <label htmlFor="email">
                                    Correo electrónico
                                </label>
                                {errors.email && (
                                    <S.ErrorMsg>
                                        Introduce un correo válido
                                    </S.ErrorMsg>
                                )}
                            </S.InputGroup>
                            {/* -- Campo para mensaje -- */}
                            <S.InputGroup
                                $hasError={errors.message}
                                $shouldShake={shake.message}
                            >
                                <textarea
                                    id="message"
                                    placeholder=" "
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                />

                                <label htmlFor="message">
                                    ¿Cómo podemos ayudarte?
                                </label>
                                {errors.message && (
                                    <S.ErrorMsg>Cuéntanos algo</S.ErrorMsg>
                                )}
                            </S.InputGroup>

                            {/* -- Boton para enviar --*/}
                            <S.SubmitButton
                                type="submit"
                                $status={status}
                                disabled={status === "sending"}
                            >
                                {status === "idle" && (
                                    <>
                                        Enviar mensaje{" "}
                                        <span className="material-symbols-outlined">
                                            send
                                        </span>
                                    </>
                                )}

                                {status === "sending" && (
                                    <>
                                        <span className="material-symbols-outlined animate-spin">
                                            sync
                                        </span>
                                        Enviando...
                                    </>
                                )}

                                {status === "success" && (
                                    <>
                                        <span className="material-symbols-outlined">
                                            check_circle
                                        </span>
                                        ¡Mensaje enviado!
                                    </>
                                )}
                            </S.SubmitButton>
                        </S.Form>
                    </S.FormCard>
                </S.Grid>
            </S.Container>
        </S.Section>
    );
};
