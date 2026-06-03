export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] py-14 mt-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--ocean-deep)] grid place-items-center text-[var(--abyss)] font-display text-lg">
            M
          </span>
          <div>
            <div className="font-display text-lg tracking-[0.2em] text-[var(--ice)]">MARÉA</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--ice)]/40">
              Cozinha Maranhense · São Luís — MA
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase tracking-[0.3em] text-[var(--ice)]/60">
          {["Nossa Casa", "Cardápio", "Reservar", "Imprensa", "Trabalhe Conosco"].map((l) => (
            <a key={l} href="#" className="hover:text-[var(--gold)] transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {["IG", "FB", "TT"].map((s) => (
            <a
              key={s}
              href="#"
              className="h-9 w-9 rounded-full border border-[var(--ice)]/20 grid place-items-center text-[10px] tracking-[0.2em] text-[var(--ice)]/70 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center text-[10px] uppercase tracking-[0.3em] text-[var(--ice)]/30">
        © {new Date().getFullYear()} Maréa · Todos os direitos reservados
      </div>
    </footer>
  );
}