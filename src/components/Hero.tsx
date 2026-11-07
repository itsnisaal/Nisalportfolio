import { ArrowDown, Code2, GraduationCap } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:px-8">
        <div className="order-2 md:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
            <GraduationCap className="h-4 w-4" />
            {profile.title}
          </p>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
            Hi, I'm <span className="text-emerald-400">{profile.name.split(' ')[0]}</span>
          </h1>
          <p className="mt-6 flex items-center gap-2 text-lg text-neutral-300">
            <Code2 className="h-5 w-5 text-emerald-400" />
            {profile.focus}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400">{profile.intro}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              View my skills
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-xl border border-neutral-700 px-6 py-3 font-semibold text-neutral-200 transition hover:-translate-y-0.5 hover:border-emerald-400/60 hover:text-white"
            >
              About me
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <TiltCard className="w-full max-w-sm">
            <div className="animate-float relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/40 to-cyan-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 p-3 shadow-2xl [transform:translateZ(40px)]">
                <img
                  src={profile.photo}
                  alt={`Photo of ${profile.name}`}
                  className="aspect-square w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-neutral-900/90 px-5 py-3 shadow-xl backdrop-blur [transform:translateZ(70px)]">
                <p className="text-xs uppercase tracking-widest text-neutral-400">Studying</p>
                <p className="font-semibold text-white">Computer Science</p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
