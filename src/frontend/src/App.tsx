import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PerfumeGallery } from './components/PerfumeGallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PerfumeGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

