import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Phone, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'matheusss@myyahoo.com',
    href: 'mailto:matheusss@myyahoo.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'matheussousa-dev',
    href: 'https://linkedin.com/in/matheussousa-dev',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(11) 96390-5055',
    href: 'tel:+5511963905055',
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// CONTATO</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Vamos trabalhar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              juntos?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Estou disponível para novos desafios e oportunidades. Entre em contato!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactLinks.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={22} className="text-primary" />
              </div>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-1">
                {item.value}
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}