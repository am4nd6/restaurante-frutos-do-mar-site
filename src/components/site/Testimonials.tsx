import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  {
    q: "É São Luís servida num prato. O caranguejo é poesia do mangue, e o arroz de cuxá tem o gosto da minha infância.",
    a: "Joãozinho Ribeiro",
    r: "Cronista · O Imparcial",
  },
  {
    q: "Atmosfera de casarão colonial, brisa da baía e uma cozinha que respeita o Maranhão de verdade. Saí transformado.",
    a: "Bel Coelho",
    r: "Chef · Guia Comer & Beber",
  },
  {
    q: "Da farinha d'água ao jambu, cada detalhe é manejado com técnica e devoção. Uma das melhores mesas do Nordeste.",
    a: "Carla Pernambuco",
    r: "Crítica Gastronômica · Folha",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-[var(--ocean-deep)]/40">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-12 bg-[var(--gold)]" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
            Vozes da Ilha
          </span>
          <span className="h-px w-12 bg-[var(--gold)]" />
        </div>

        <div className="relative min-h-[260px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="glass rounded-[2rem] p-10 md:p-14"
            >
              <div className="font-display text-2xl md:text-4xl italic text-[var(--ice)] leading-[1.3]">
                "{items[i].q}"
              </div>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-8 bg-[var(--gold)]" />
                <div>
                  <div className="text-sm text-[var(--ice)]">{items[i].a}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--ice)]/50 mt-1">
                    {items[i].r}
                  </div>
                </div>
                <div className="h-px w-8 bg-[var(--gold)]" />
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === i ? "w-10 bg-[var(--gold)]" : "w-2 bg-[var(--ice)]/20"
              }`}
              aria-label={`Depoimento ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
