import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookingSystem } from "@/components/BookingSystem";

const services = [
  {
    title: "Corte Clássico",
    description: "Corte tradicional com técnicas modernas, adaptado ao seu estilo pessoal.",
    price: "R$ 45,00",
    duration: "45 min",
    image: "✂️"
  },
  {
    title: "Corte + Barba",
    description: "Experiência completa com corte de cabelo e modelagem de barba profissional.",
    price: "R$ 65,00",
    duration: "60 min",
    image: "🧔"
  },
  {
    title: "Barba Completa",
    description: "Aparar, modelar e finalizar com produtos premium para barba.",
    price: "R$ 35,00",
    duration: "30 min",
    image: "🪒"
  },
  {
    title: "Sobrancelha",
    description: "Design e modelagem de sobrancelhas masculinas com precisão.",
    price: "R$ 25,00",
    duration: "20 min",
    image: "👁️"
  },
  {
    title: "Tratamento Capilar",
    description: "Hidratação e tratamento especializado para cabelos masculinos.",
    price: "R$ 55,00",
    duration: "50 min",
    image: "💆"
  },
  {
    title: "Combo Premium",
    description: "Corte + Barba + Sobrancelha + Tratamento. A experiência completa.",
    price: "R$ 120,00",
    duration: "90 min",
    image: "👑"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-gold">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de alta qualidade para o homem moderno
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-gold transition-all duration-300 hover:shadow-gold group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-float">{service.image}</div>
                <CardTitle className="text-foreground group-hover:text-gold transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-gold">{service.price}</span>
                  <span className="text-muted-foreground">{service.duration}</span>
                </div>
                <BookingSystem selectedService={service.title} servicePrice={service.price} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}