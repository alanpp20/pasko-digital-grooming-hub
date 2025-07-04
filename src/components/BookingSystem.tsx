import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, Clock, User, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const barbers = [
  { id: 1, name: "João Silva", specialty: "Cortes Clássicos", rating: 4.9, avatar: "👨‍🦲" },
  { id: 2, name: "Pedro Santos", specialty: "Barbas Modernas", rating: 4.8, avatar: "👨‍🦱" },
  { id: 3, name: "Carlos Lima", specialty: "Estilos Jovens", rating: 4.9, avatar: "👨‍🦰" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

interface BookingSystemProps {
  selectedService?: string;
  servicePrice?: string;
}

export function BookingSystem({ selectedService = "", servicePrice = "" }: BookingSystemProps) {
  const [date, setDate] = useState<Date>();
  const [selectedBarber, setSelectedBarber] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleBooking = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Simulate booking confirmation
      toast({
        title: "Agendamento Confirmado!",
        description: `Seu agendamento para ${selectedService} foi confirmado para ${format(date!, "dd/MM/yyyy")} às ${selectedTime}.`,
      });
      setIsOpen(false);
      setStep(1);
      // Reset form
      setDate(undefined);
      setSelectedBarber("");
      setSelectedTime("");
      setCustomerName("");
      setCustomerPhone("");
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedService;
      case 2: return date;
      case 3: return selectedBarber && selectedTime;
      case 4: return customerName && customerPhone;
      default: return false;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="luxury" size="lg" className="w-full">
          Agendar Agora
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-foreground">
            Sistema de Agendamento Inteligente
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Siga os passos para agendar seu horário na Pasko Barbearia
          </DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-6">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                step >= num
                  ? "bg-gold text-deep-black"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step > num ? <CheckCircle className="h-5 w-5" /> : num}
            </div>
          ))}
        </div>

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Escolha seu Serviço</h3>
            <div className="space-y-2">
              <Label className="text-foreground">Serviço Selecionado</Label>
              <div className="p-4 bg-muted rounded-lg border-2 border-gold">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">{selectedService || "Nenhum serviço selecionado"}</span>
                  <span className="text-gold font-bold">{servicePrice}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Date Selection */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Escolha a Data</h3>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date() || date.getDay() === 0}
                className="rounded-md border border-border bg-card"
              />
            </div>
          </div>
        )}

        {/* Step 3: Barber and Time Selection */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Escolha o Barbeiro e Horário</h3>
            
            <div className="space-y-4">
              <Label className="text-foreground">Selecione o Barbeiro</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {barbers.map((barber) => (
                  <Card
                    key={barber.id}
                    className={`cursor-pointer transition-all ${
                      selectedBarber === barber.name
                        ? "border-gold shadow-gold"
                        : "border-border hover:border-gold"
                    }`}
                    onClick={() => setSelectedBarber(barber.name)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{barber.avatar}</div>
                      <h4 className="font-semibold text-foreground">{barber.name}</h4>
                      <p className="text-sm text-muted-foreground">{barber.specialty}</p>
                      <div className="flex items-center justify-center mt-2">
                        <span className="text-gold">★ {barber.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-foreground">Selecione o Horário</Label>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "luxury" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className="text-sm"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Customer Information */}
        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Seus Dados</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground">Nome Completo</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Digite seu nome"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground">Telefone/WhatsApp</Label>
                <Input
                  id="phone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="mt-1"
                />
              </div>
              
              {/* Booking Summary */}
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Resumo do Agendamento</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Serviço:</span>
                    <span className="text-foreground">{selectedService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data:</span>
                    <span className="text-foreground">{date && format(date, "dd/MM/yyyy")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Horário:</span>
                    <span className="text-foreground">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Barbeiro:</span>
                    <span className="text-foreground">{selectedBarber}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t border-border pt-2 mt-2">
                    <span className="text-foreground">Total:</span>
                    <span className="text-gold">{servicePrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
          >
            Voltar
          </Button>
          <Button
            variant="luxury"
            onClick={handleBooking}
            disabled={!canProceed()}
          >
            {step === 4 ? "Confirmar Agendamento" : "Próximo"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}