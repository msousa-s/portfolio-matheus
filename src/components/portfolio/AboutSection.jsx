import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Zap, Shield } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'APIs REST', desc: 'APIs escaláveis e performáticas' },
  { icon: Database, label: 'Bancos de Dados', desc: 'PostgreSQL, SQL Server' },
  { icon: Zap, label: 'Mensageria', desc: 'Kafka e RabbitMQ' },
  { icon: Shield, label: 'Segurança', desc: 'Spring Security' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// SOBRE MIM</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            Construindo software que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              faz a diferença
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Desenvolvedor Back-End com <span className="text-foreground font-medium">4 anos de experiência sólida</span> em Java e ecossistema Spring (Boot, Data, Security).
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Especialista em desenvolvimento de APIs REST performáticas, integração com bancos relacionais e não relacionais, mensageria (Kafka e RabbitMQ) e otimização de queries.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Experiência em ambientes corporativos com foco em <span className="text-foreground font-medium">escalabilidade, performance e qualidade de software</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}