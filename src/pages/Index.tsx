import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Plans } from "@/components/Plans";
import { Course } from "@/components/Course";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <Services />
        <Plans />
        <Course />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-deep-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-display font-bold text-2xl text-foreground mb-4 md:mb-0">
              <span className="text-gold">Pasko</span> Barbearia
            </div>
            
            <div className="flex space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-gold transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                WhatsApp
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Facebook
              </a>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Pasko Barbearia. Todos os direitos reservados.</p>
            <p className="mt-2">Onde o estilo encontra a perfeição.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;