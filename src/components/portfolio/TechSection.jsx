import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  { name: 'Java', level: 95, category: 'Linguagem' },
  { name: 'Kotlin', level: 80, category: 'Linguagem' },
  { name: 'Spring Boot', level: 92, category: 'Framework' },
  { name: 'Spring Security', level: 85, category: 'Framework' },
  { name: 'Spring Data', level: 88, category: 'Framework' },
  { name: 'PostgreSQL', level: 90, category: 'Banco de Dados' },
  { name: 'SQL Server', level: 85, category: 'Banco de Dados' },
  { name: 'T-SQL', level: 80, category: 'Banco de Dados' },
  { name: 'Kafka', level: 78, category: 'Mensageria' },
  { name: 'RabbitMQ', level: 78, category: 'Mensageria' },
  { name: 'REST APIs', level: 95, category: 'Arquitetura' },
  { name: 'Clean Architecture', level: 85, category: 'Arquitetura' },
];

export default function TechSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tech" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// STACK TÉCNICA</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tecnologias &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Ferramentas
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-sm">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{tech.category}</p>
                </div>
                <span className="text-xs font-mono text-primary">{tech.level}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${tech.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.06, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}