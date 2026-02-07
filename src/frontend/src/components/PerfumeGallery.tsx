import { useGetAllPerfumes } from '../hooks/useQueries';
import { PerfumeCard } from './PerfumeCard';
import { Loader2, Sparkles } from 'lucide-react';

export function PerfumeGallery() {
  const { data: perfumes, isLoading, error } = useGetAllPerfumes();

  return (
    <section id="collection" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Our Collection
            </h2>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Each fragrance tells a unique story, carefully composed to evoke emotions and memories
          </p>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Unable to load perfumes at this time.</p>
          </div>
        )}

        {perfumes && perfumes.length === 0 && !isLoading && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No perfumes available yet. Check back soon!</p>
          </div>
        )}

        {perfumes && perfumes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perfumes.map((perfume, index) => (
              <PerfumeCard 
                key={perfume.id} 
                perfume={perfume}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

