import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-display font-bold text-2xl text-foreground">
            <span className="text-gold">Pasko</span> Barbearia
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('plans')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection('course')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Curso
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Contato
            </button>
            <Button variant="luxury" size="sm">
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-gold transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-gold transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('plans')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-gold transition-colors"
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection('course')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-gold transition-colors"
              >
                Curso
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-gold transition-colors"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button variant="luxury" size="sm" className="w-full">
                  Agendar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}