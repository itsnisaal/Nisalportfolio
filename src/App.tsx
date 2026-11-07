import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import { profile } from '@/data/profile';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-100 antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#top" className="font-bold tracking-tight text-white">
            {profile.name}
          </a>
          <div className="flex items-center gap-6 text-sm text-neutral-300">
            <a href="#skills" className="transition hover:text-emerald-400">Skills</a>
            <a href="#about" className="transition hover:text-emerald-400">About</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <Skills />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-neutral-500">
        {profile.name} - {profile.title}
      </footer>
    </div>
  );
}

export default App;
