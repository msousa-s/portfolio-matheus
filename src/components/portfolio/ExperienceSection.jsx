import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Escola Nossa Senhora das Graças',
    role: 'Analista de Desenvolvimento',
    period: 'Janeiro de 2023 — Atual',
    type: 'Presencial',
    current: true,
    tasks: [
      'Melhoria de queries com T-SQL',
      'Implementação de regras de negócio complexas para sistema de gestão educacional',
      'Integração com PostgreSQL e SQL Server',
      'Otimização de queries e procedures para melhoria de performance',
      'Implementação de autenticação e controle de acesso com Spring Security',
      'Melhorias contínuas na arquitetura e estrutura do sistema',
      'Desenvolvimento de Aplicações com Java, Kotlin e Spring Boot',
    ],
  },
  {
    company: 'TradeMap',
    role: 'Desenvolvedor Backend',
    period: 'Janeiro de 2022 — Novembro 2022',
    type: 'Híbrido',
    current: false,
    tasks: [
      'Desenvolvimento de APIs REST escaláveis com Java, Kotlin e Spring Boot',
      'Aplicação de padrões de projeto e boas práticas de arquitetura',
      'Integração com serviços externos e banco de dados',
      'Implementação de mensageria para processamento assíncrono',
      'Refatoração de código com foco em Clean Code',
      'Criação de projetos com Clean Architecture',
      'Atuação em ambiente ágil (Scrum, Jira)',
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// EXPERIÊNCIA</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Trajetória{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Profissional
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${exp.current ? 'bg-primary border-primary shadow-lg shadow-primary/50' : 'bg-card border-primary/50'}`} />

                <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {exp.current && (
                          <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                            ATUAL
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}