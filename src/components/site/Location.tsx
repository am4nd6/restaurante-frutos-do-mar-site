import { motion } from "framer-motion";

export function Location() {
  return (
    <section id="contato" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[var(--gold)]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">Visite-nos</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-[var(--ice)] leading-[1.05]">
            No coração da <span className="italic text-gold-gradient">Praia Grande</span>.
          </h2>

          <dl className="mt-12 space-y-8">
            {[
              { t: "Endereço", v: "Rua da Estrela, 187 · Praia Grande · Centro Histórico · São Luís — MA" },
              { t: "Reservas", v: "+55 (98) 3232·1987 · WhatsApp (98) 98800·1987" },
              { t: "Horário", v: "Ter — Dom · 12h às 16h · 19h às 23h30 · Fechado às segundas" },
            ].map((c) => (
              <div key={c.t} className="border-b border-[var(--border)] pb-6">
                <dt className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] mb-2">
                  {c.t}
                </dt>
                <dd className="text-[var(--ice)] text-lg leading-relaxed">{c.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 relative rounded-[2rem] overflow-hidden min-h-[420px] shadow-luxe"
        >
          {/* Stylized map */}
          <div className="absolute inset-0 bg-[var(--ocean-deep)]">
            <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full opacity-60">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(0.78 0.09 85 / 0.15)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="800" height="600" fill="url(#grid)" />
              <path
                d="M0,300 Q200,250 400,320 T800,290 L800,600 L0,600 Z"
                fill="oklch(0.42 0.05 200 / 0.4)"
              />
              <path
                d="M0,320 Q200,280 400,340 T800,310"
                fill="none"
                stroke="oklch(0.78 0.09 85 / 0.4)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <circle cx="500" cy="280" r="8" fill="oklch(0.78 0.09 85)" />
              <circle cx="500" cy="280" r="20" fill="oklch(0.78 0.09 85 / 0.2)">
                <animate attributeName="r" values="20;40;20" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <div className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">Maréa</div>
            <div className="font-display text-xl text-[var(--ice)] mt-1">Praia Grande · São Luís</div>
            <div className="text-[10px] text-[var(--ice)]/60 mt-1">Baía de São Marcos</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}