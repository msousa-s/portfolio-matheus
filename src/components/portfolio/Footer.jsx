export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-primary font-semibold text-sm">{'<MS />'}</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Matheus Sousa Santos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}