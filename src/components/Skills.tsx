import TiltCard from '@/components/TiltCard';
import { profile } from '@/data/profile';

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 md:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Skills</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">What I work with</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {profile.skills.map((skill) => (
          <TiltCard key={skill.name} maxTilt={6}>
            <div className="h-full rounded-2xl border border-white/10 bg-neutral-900/70 p-6 shadow-lg transition hover:border-emerald-400/50">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {skill.level}
                </span>
              </div>
              <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-neutral-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-1000"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
              <p className="mt-3 text-sm text-neutral-400">{skill.percent}% comfort level</p>
            </div>
          </TiltCard>
        ))}
      </div>

      <div id="about" className="mt-24 grid gap-6 sm:grid-cols-3">
        {profile.highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 text-center"
          >
            <p className="text-3xl font-bold text-emerald-400">{item.value}</p>
            <p className="mt-2 text-sm text-neutral-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
