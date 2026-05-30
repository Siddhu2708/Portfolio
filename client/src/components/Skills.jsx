import { getSkillIcon } from '../utils/skillIcon';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading">Technical Arsenal</h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">Mastering the tools that shape the future of AI and data intelligence.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {skills.map((skill, i) => {
          const Icon = getSkillIcon(skill.icon);
          return (
            <div key={skill._id || skill.name} className="skill-card group" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="aspect-square glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all group-hover:translate-y-[-8px] group-hover:border-sky-400/50">
                <div className="w-12 h-12 mb-4 text-sky-400">
                  <Icon className="w-full h-full" />
                </div>
                <span className="font-semibold">{skill.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
