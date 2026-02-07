import { useState } from 'react';
import type { Perfume } from '../backend';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface PerfumeCardProps {
  perfume: Perfume;
  index: number;
}

export function PerfumeCard({ perfume, index }: PerfumeCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = perfume.image.getDirectURL();

  return (
    <>
      <Card 
        className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-luxury border-border/50 bg-card"
        onClick={() => setIsOpen(true)}
        style={{
          animationDelay: `${index * 100}ms`,
          animation: 'fade-in-up 0.6s ease-out forwards',
          opacity: 0
        }}
      >
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={perfume.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <CardHeader className="space-y-2">
          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
            {perfume.name}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {perfume.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {perfume.fragranceNotes.slice(0, 3).map((note, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {note}
              </Badge>
            ))}
            {perfume.fragranceNotes.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{perfume.fragranceNotes.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{perfume.name}</DialogTitle>
            <DialogDescription className="sr-only">
              Detailed information about {perfume.name}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={imageUrl}
                alt={perfume.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Description
                </h3>
                <p className="text-foreground leading-relaxed">
                  {perfume.description}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Fragrance Notes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {perfume.fragranceNotes.map((note, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm py-1 px-3">
                      {note}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

