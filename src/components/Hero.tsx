import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-barbershop.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pasko Barbearia Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in">
          <span className="block text-gold animate-glow">Pasko</span>
          <span className="block text-foreground">Barbearia</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
          Onde o Estilo Encontra a Perfeição
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up">
          Experimente o mais alto padrão em cuidados masculinos. Nossa equipe de barbeiros especializados 
          oferece cortes modernos, tratamentos de barba exclusivos e uma experiência premium que redefine 
          o conceito de barbearia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            variant="hero" 
            size="xl"
            className="min-w-[200px]"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Agende Seu Horário
          </Button>
          <Button 
            variant="premium" 
            size="xl"
            className="min-w-[200px]"
            onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça Nossos Planos
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}