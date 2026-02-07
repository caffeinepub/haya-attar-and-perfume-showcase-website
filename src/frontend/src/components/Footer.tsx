import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/generated/haya-logo-transparent.dim_300x100.png" 
              alt="Haya Attar and Perfume" 
              className="h-8 w-auto opacity-80"
            />
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025. Built with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>using</span>
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

