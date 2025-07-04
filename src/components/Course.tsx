import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Users, Award } from "lucide-react";

const courseFeatures = [
  "Técnicas de corte masculino moderno",
  "Modelagem e design de barba",
  "Atendimento ao cliente premium",
  "Gestão de negócios para barbeiros",
  "Certificado profissional reconhecido",
  "Suporte pós-curso por 6 meses",
  "Networking com profissionais",
  "Kit completo de ferramentas"
];

const courseStats = [
  { icon: Clock, label: "Duração", value: "120 horas" },
  { icon: Users, label: "Turmas", value: "Máx. 8 alunos" },
  { icon: Award, label: "Certificação", value: "Profissional" }
];

export function Course() {
  return (
    <section id="course" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pasko Barbearia <span className="text-gold">Academy</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Torne-se um barbeiro profissional de elite com nosso curso completo. 
              Aprenda as técnicas mais modernas e inicie sua carreira no mercado 
              de alta qualidade.
            </p>
            
            <div className="flex items-center gap-8 mb-8">
              {courseStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-gold mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="font-semibold text-foreground">{stat.value}</div>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                O que você vai aprender:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxury" size="xl">
                Inscreva-se Agora
              </Button>
              <Button variant="premium" size="xl">
                Baixar Conteúdo Programático
              </Button>
            </div>
          </div>
          
          {/* Price Card */}
          <div className="flex justify-center">
            <Card className="bg-card border-2 border-gold shadow-gold max-w-md w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-foreground mb-2">
                  Curso Completo
                </CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gold">R$ 1.500</span>
                  <div className="text-muted-foreground">
                    ou 12x de R$ 125,00
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  Invista em sua carreira profissional e se torne um barbeiro de elite
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Início da próxima turma:</span>
                    <span className="font-semibold text-gold">15 de Janeiro</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Vagas disponíveis:</span>
                    <span className="font-semibold text-copper">3 vagas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Modalidade:</span>
                    <span className="font-semibold text-foreground">Presencial</span>
                  </div>
                </div>
                
                <Button variant="gold" size="lg" className="w-full mb-4">
                  Garantir Minha Vaga
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Satisfação garantida ou seu dinheiro de volta
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}