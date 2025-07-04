import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Plano Básico",
    price: "R$ 79,90",
    period: "/mês",
    description: "Ideal para quem quer manter o visual sempre em dia",
    features: [
      "Cortes de cabelo ilimitados",
      "Desconto de 10% em produtos",
      "Desconto de 15% em outros serviços",
      "Agendamento prioritário",
      "Atendimento personalizado"
    ],
    popular: false
  },
  {
    name: "Plano Premium",
    price: "R$ 109,90",
    period: "/mês",
    description: "A experiência completa para o homem moderno",
    features: [
      "Cortes de cabelo ilimitados",
      "Barba ilimitada",
      "Sobrancelha ilimitada",
      "Desconto de 20% em produtos",
      "Desconto de 25% em outros serviços",
      "Agendamento VIP",
      "Atendimento exclusivo",
      "Tratamento capilar mensal grátis"
    ],
    popular: true
  }
];

export function Plans() {
  return (
    <section id="plans" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Planos <span className="text-gold">Mensais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para você e mantenha seu estilo sempre impecável
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-card border-2 transition-all duration-300 hover:shadow-elegant ${
                plan.popular 
                  ? 'border-gold shadow-gold scale-105' 
                  : 'border-border hover:border-gold'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "luxury" : "premium"} 
                  size="lg" 
                  className="w-full"
                >
                  Assinar {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Dúvidas sobre nossos planos? Entre em contato conosco!
          </p>
          <Button variant="outline" size="lg">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
}