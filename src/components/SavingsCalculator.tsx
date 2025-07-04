import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const services = {
  "Corte Clássico": 45,
  "Barba Completa": 35,
  "Sobrancelha": 25,
  "Tratamento Capilar": 55
};

export function SavingsCalculator() {
  const [monthlyVisits, setMonthlyVisits] = useState([2]);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Corte Clássico"]);

  const calculateMonthlyCost = () => {
    return selectedServices.reduce((total, service) => {
      return total + (services[service as keyof typeof services] || 0);
    }, 0) * monthlyVisits[0];
  };

  const basicPlanCost = 79.90;
  const premiumPlanCost = 109.90;
  const monthlyCost = calculateMonthlyCost();

  const basicSavings = monthlyCost - basicPlanCost;
  const premiumSavings = monthlyCost - premiumPlanCost;

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <Card className="bg-card border-2 border-gold shadow-gold">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-display text-foreground">
          Calculadora de <span className="text-gold">Economia</span>
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Descubra quanto você pode economizar com nossos planos mensais
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Visit Frequency */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-foreground font-medium">Visitas por mês:</label>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {monthlyVisits[0]}x
            </Badge>
          </div>
          <Slider
            value={monthlyVisits}
            onValueChange={setMonthlyVisits}
            max={8}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* Service Selection */}
        <div className="space-y-4">
          <label className="text-foreground font-medium">Serviços que você usa:</label>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(services).map(([service, price]) => (
              <Button
                key={service}
                variant={selectedServices.includes(service) ? "luxury" : "outline"}
                size="sm"
                onClick={() => toggleService(service)}
                className="text-xs p-2 h-auto flex flex-col"
              >
                <span className="font-medium">{service}</span>
                <span className="text-xs opacity-75">R$ {price}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4 pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Custo mensal sem plano:</div>
            <div className="text-2xl font-bold text-foreground">
              R$ {monthlyCost.toFixed(2)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Basic Plan Savings */}
            <div className={`p-4 rounded-lg border-2 ${basicSavings > 0 ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Plano Básico</div>
                <div className="text-lg font-bold text-foreground">R$ 79,90</div>
                <div className={`text-sm font-semibold ${basicSavings > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {basicSavings > 0 ? `Economia: R$ ${basicSavings.toFixed(2)}` : `Diferença: R$ ${Math.abs(basicSavings).toFixed(2)}`}
                </div>
              </div>
            </div>

            {/* Premium Plan Savings */}
            <div className={`p-4 rounded-lg border-2 ${premiumSavings > 0 ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Plano Premium</div>
                <div className="text-lg font-bold text-foreground">R$ 109,90</div>
                <div className={`text-sm font-semibold ${premiumSavings > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {premiumSavings > 0 ? `Economia: R$ ${premiumSavings.toFixed(2)}` : `Diferença: R$ ${Math.abs(premiumSavings).toFixed(2)}`}
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="text-center p-4 bg-gradient-primary rounded-lg">
            <div className="text-deep-black font-semibold">
              {basicSavings > premiumSavings && basicSavings > 0 
                ? "💡 Recomendamos o Plano Básico para você!"
                : premiumSavings > 0
                ? "💡 Recomendamos o Plano Premium para você!"
                : "💡 Com mais visitas mensais, nossos planos se tornam mais vantajosos!"
              }
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}