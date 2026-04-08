import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    institution: 'FIAP',
    fullName: 'Faculdade de Informática e Administração Paulista',
    degree: 'Pós-Graduação',
    course: 'Arquitetura e Desenvolvimento em JAVA',
    period: 'Outubro de 2025 — Atual',
    current: true,
  },
  {
    institution: 'SPTECH',
    fullName: 'São Paulo Tech School',
    degree: 'Graduação',
    course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    period: 'Agosto de 2021 — Dezembro de 2023',
    current: false,
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// FORMAÇÃO</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Educação{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Acadêmica
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap size={22} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold">{edu.institution}</h3>
                    {edu.current && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                        EM CURSO
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.fullName}</p>
                </div>
              </div>

              <div className="space-y-3 pl-16">
                <div>
                  <p className="text-xs text-primary font-mono uppercase tracking-wider mb-1">{edu.degree}</p>
                  <p className="text-foreground font-medium">{edu.course}</p>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar size={13} />
                  {edu.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}