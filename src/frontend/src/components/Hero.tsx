export function Hero() {
  const scrollToCollection = () => {
    const element = document.getElementById('collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1200x600.jpg"
          alt="Luxury perfume background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Discover the Art of
            <span className="block text-primary mt-2">Exquisite Fragrance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Haya Attar and Perfume brings you a curated collection of luxury fragrances, 
            crafted with the finest ingredients to create unforgettable scent experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={scrollToCollection}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-luxury hover:bg-primary/90 transition-all hover:shadow-luxury-lg"
            >
              Explore Collection
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

