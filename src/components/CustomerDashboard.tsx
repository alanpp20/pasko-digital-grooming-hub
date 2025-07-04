import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, User, Star, Award, Gift, History } from "lucide-react";

// Mock user data
const userData = {
  name: "João Silva",
  email: "joao@email.com",
  phone: "(11) 99999-9999",
  memberSince: "Janeiro 2024",
  plan: "Premium",
  loyaltyPoints: 350,
  nextReward: 500,
  avatar: "/placeholder.svg?height=100&width=100"
};

const upcomingAppointments = [
  {
    id: 1,
    service: "Corte + Barba",
    date: "2024-01-15",
    time: "14:30",
    barber: "Pedro Santos",
    status: "confirmed"
  },
  {
    id: 2,
    service: "Tratamento Capilar",
    date: "2024-01-22",
    time: "16:00",
    barber: "João Silva",
    status: "confirmed"
  }
];

const serviceHistory = [
  {
    id: 1,
    service: "Corte Clássico",
    date: "2024-01-05",
    barber: "Carlos Lima",
    rating: 5,
    cost: "Incluso no plano"
  },
  {
    id: 2,
    service: "Barba Completa",
    date: "2023-12-20",
    barber: "Pedro Santos",
    rating: 5,
    cost: "Incluso no plano"
  },
  {
    id: 3,
    service: "Sobrancelha",
    date: "2023-12-15",
    barber: "João Silva",
    rating: 4,
    cost: "Incluso no plano"
  }
];

const achievements = [
  { name: "Cliente VIP", description: "10+ serviços realizados", unlocked: true, icon: "👑" },
  { name: "Fiel da Balança", description: "6 meses de plano ativo", unlocked: true, icon: "⚖️" },
  { name: "Mestre da Barba", description: "5+ serviços de barba", unlocked: true, icon: "🧔" },
  { name: "Trendsetter", description: "Experimentou 3+ estilos", unlocked: false, icon: "✨" }
];

export function CustomerDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const loyaltyProgress = (userData.loyaltyPoints / userData.nextReward) * 100;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <Avatar className="h-24 w-24 border-2 border-gold">
          <AvatarImage src={userData.avatar} alt={userData.name} />
          <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
            {userData.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h1 className="text-3xl font-display font-bold text-foreground">
            Bem-vindo, <span className="text-gold">{userData.name}</span>
          </h1>
          <p className="text-muted-foreground mb-2">
            Cliente desde {userData.memberSince} • Plano {userData.plan}
          </p>
          <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
            ⭐ Status VIP
          </Badge>
        </div>
      </div>

      {/* Loyalty Points Card */}
      <Card className="bg-gradient-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Programa de Fidelidade
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-2">
            <span>Pontos atuais: {userData.loyaltyPoints}</span>
            <span>Próxima recompensa: {userData.nextReward}</span>
          </div>
          <Progress value={loyaltyProgress} className="mb-2 bg-primary-foreground/20" />
          <p className="text-sm opacity-90">
            Faltam {userData.nextReward - userData.loyaltyPoints} pontos para sua próxima recompensa!
          </p>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="appointments">Agendamentos</TabsTrigger>
          <TabsTrigger value="history">Histórico</TabsTrigger>
          <TabsTrigger value="achievements">Conquistas</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Próximo Agendamento</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">15 Jan</div>
                <p className="text-xs text-muted-foreground">Corte + Barba às 14:30</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Serviços Este Mês</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">3</div>
                <p className="text-xs text-muted-foreground">+2 vs mês anterior</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Economia Total</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gold">R$ 240</div>
                <p className="text-xs text-muted-foreground">Com o plano Premium</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Appointments Tab */}
        <TabsContent value="appointments" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-foreground">Próximos Agendamentos</h3>
            <Button variant="luxury">Novo Agendamento</Button>
          </div>
          
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-subtle transition-all">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{appointment.service}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(appointment.date).toLocaleDateString('pt-BR')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {appointment.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {appointment.barber}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Reagendar</Button>
                      <Button variant="destructive" size="sm">Cancelar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Histórico de Serviços</h3>
          
          <div className="space-y-4">
            {serviceHistory.map((service) => (
              <Card key={service.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{service.service}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{new Date(service.date).toLocaleDateString('pt-BR')}</span>
                        <span>com {service.barber}</span>
                        <span>{service.cost}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < service.rating ? 'text-gold fill-current' : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Suas Conquistas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className={`transition-all ${
                  achievement.unlocked 
                    ? 'border-gold shadow-gold bg-gold/5' 
                    : 'border-border opacity-60'
                }`}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <h4 className="font-semibold text-foreground mb-1">{achievement.name}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  {achievement.unlocked && (
                    <Badge className="mt-2 bg-gold text-deep-black">Desbloqueado!</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}