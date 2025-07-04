
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Instagram, User } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Localização",
    content: "Av Guilherme Maxwell n°570",
    subcontent: "Galeria Mix - Rio de Janeiro, RJ"
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    content: "Segunda a Sexta: 9h às 19h",
    subcontent: "Sábado: 8h às 17h"
  },
  {
    icon: Instagram,
    title: "Redes Sociais",
    content: "@paskobarbearia",
    subcontent: "Siga-nos para novidades"
  },
  {
    icon: User,
    title: "Contato",
    content: "WhatsApp",
    subcontent: "Clique para conversar"
  }
];

export function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/message/GUAHCVANABYKN1?autoload=1&app_absent=0', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/paskobarbearia/', '_blank');
  };

  const handleMapClick = () => {
    const address = "Av Guilherme Maxwell 570, Galeria Mix, Rio de Janeiro, RJ, 21042112";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Venha nos <span className="text-gold">Conhecer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para proporcionar a melhor experiência em cuidados masculinos
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`bg-card border-border hover:border-gold transition-all duration-300 ${
                  (info.title === "Redes Sociais" || info.title === "Contato") ? 'cursor-pointer' : ''
                }`}
                onClick={() => {
                  if (info.title === "Redes Sociais") handleInstagramClick();
                  if (info.title === "Contato") handleWhatsAppClick();
                }}
              >
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <info.icon className="h-6 w-6 text-gold mr-4" />
                  <CardTitle className="text-foreground">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-foreground">{info.content}</div>
                  <div className="text-muted-foreground">{info.subcontent}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
            <div className="h-full min-h-[400px] bg-gradient-dark flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Nossa Localização
                </h3>
                <p className="text-muted-foreground mb-6">
                  Galeria Mix - Rio de Janeiro, RJ
                </p>
                <Button variant="premium" size="lg" onClick={handleMapClick}>
                  Ver no Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Instagram Feed Placeholder */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              Acompanhe nosso <span className="text-gold">Instagram</span>
            </h3>
            <p className="text-muted-foreground">
              Veja os trabalhos mais recentes e fique por dentro das novidades
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div 
                key={item} 
                className="aspect-square bg-gradient-dark rounded-lg border-2 border-border hover:border-gold transition-all duration-300 flex items-center justify-center group cursor-pointer"
                onClick={handleInstagramClick}
              >
                <Instagram className="h-8 w-8 text-gold group-hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="premium" size="lg" onClick={handleInstagramClick}>
              Seguir @paskobarbearia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
