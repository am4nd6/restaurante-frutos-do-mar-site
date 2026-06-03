import { motion } from "framer-motion";
import { useState } from "react";

export function Reserve() {
  const [sent, setSent] = useState(false);
  return (
    <section id="reserva" className="relative py-32 md:py-48 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(0.78 0.09 85 / 0.08), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-[var(--gold)]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
              Reserva de Mesa
            </span>
            <span className="h-px w-12 bg-[var(--gold)]" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-[var(--ice)] leading-[1.05]">
            Sua <span className="italic text-gold-gradient">travessia</span> começa aqui.
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="glass rounded-[2rem] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {[
            { l: "Nome", t: "text", ph: "Como devemos chamá-lo" },
            { l: "E-mail", t: "email", ph: "voce@email.com" },
            { l: "Telefone", t: "tel", ph: "+55 (00) 00000-0000" },
            { l: "Pessoas", t: "number", ph: "2" },
            { l: "Data", t: "date" },
            { l: "Horário", t: "time" },
          ].map((f) => (
            <label key={f.l} className="block">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[var(--ice)]/60 mb-2">
                {f.l}
              </span>
              <input
                type={f.t}
                placeholder={f.ph}
                required
                className="w-full bg-transparent border-b border-[var(--ice)]/20 focus:border-[var(--gold)] outline-none py-3 text-[var(--ice)] placeholder:text-[var(--ice)]/30 transition-colors"
              />
            </label>
          ))}
          <label className="block md:col-span-2">
            <span className="block text-[10px] uppercase tracking-[0.3em] text-[var(--ice)]/60 mb-2">
              Ocasião especial
            </span>
            <textarea
              rows={3}
              placeholder="Aniversário, alergias, pedido especial..."
              className="w-full bg-transparent border-b border-[var(--ice)]/20 focus:border-[var(--gold)] outline-none py-3 text-[var(--ice)] placeholder:text-[var(--ice)]/30 resize-none transition-colors"
            />
          </label>
          <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-4">
            <p className="text-[11px] text-[var(--ice)]/50 max-w-sm">
              Confirmamos sua reserva em até 2 horas. Cancelamentos com 24h de antecedência.
            </p>
            <button
              type="submit"
              className="group relative inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-10 py-4 text-xs uppercase tracking-[0.3em] text-[var(--abyss)] font-semibold shadow-gold hover:scale-[1.02] transition-transform overflow-hidden"
            >
              <span className="relative">{sent ? "Recebido ✓" : "Confirmar Reserva"}</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}