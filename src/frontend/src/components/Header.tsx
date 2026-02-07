import { Sparkles } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/assets/generated/haya-logo-transparent.dim_300x100.png" 
            alt="Haya Attar and Perfume" 
            className="h-10 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('collection')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Collection
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
      </div>
    </header>
  );
}

