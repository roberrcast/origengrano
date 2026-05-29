import * as S from "./styles";
import { dataPlans, queries } from "./data";
import { useReveal } from "../../hooks/useReveal";

export const Subscriptions = () => {
    useReveal();

    return (
        <S.PageWrapper>
            <S.Hero className="reveal">
                <h1>Suscripciones</h1>
                <p>
                    Café de especialidad recién tostado, directo desde nuestra
                    tostadería artesanal hasta tu puerta cada mes.
                </p>
            </S.Hero>

            <S.PlanSection>
                <S.Grid className="reveal">
                    {dataPlans.map((plan) => (
                        <S.PlanCard
                            key={plan.id}
                            $highlighted={plan.highlighted}
                        >
                            {plan.highlighted && <S.Badge>más popular</S.Badge>}
                            <div>
                                <S.CardHeader>
                                    <span>{plan.name}</span>
                                    <h3>{plan.quantity}</h3>
                                </S.CardHeader>

                                <S.PlanImage
                                    src={plan.image}
                                    alt={plan.name}
                                    role="image"
                                />

                                <S.FeatureList>
                                    {plan.features.map((f, i) => (
                                        <li key={i}>
                                            <span
                                                className="material-symbols-outlined"
                                                style={{
                                                    fontSize: "18px",
                                                    color: "#7d562d",
                                                }}
                                            >
                                                check_circle
                                            </span>
                                            {f}
                                        </li>
                                    ))}
                                </S.FeatureList>
                            </div>

                            <S.Pricing>
                                <S.PriceWrapper>
                                    <S.PriceAmount>
                                        ${plan.price} MXN
                                    </S.PriceAmount>
                                    <S.PricePeriod>/mes</S.PricePeriod>
                                </S.PriceWrapper>

                                <S.SubscribeButton
                                    $highlighted={plan.highlighted}
                                    variant={
                                        plan.highlighted ? "primary" : "outline"
                                    }
                                    fullWidth
                                >
                                    Suscribirse
                                </S.SubscribeButton>
                            </S.Pricing>
                        </S.PlanCard>
                    ))}
                </S.Grid>
            </S.PlanSection>

            <S.FAQSection>
                <S.FAQContainer>
                    <h2 className="reveal">Preguntas Frecuentes</h2>
                    {queries.map((faq, i) => (
                        <S.FAQItem key={i} className="reveal">
                            <h4>{faq.q}</h4>
                            <p>{faq.a}</p>
                        </S.FAQItem>
                    ))}
                </S.FAQContainer>
            </S.FAQSection>
        </S.PageWrapper>
    );
};
