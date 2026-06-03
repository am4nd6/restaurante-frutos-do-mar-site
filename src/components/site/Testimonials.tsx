import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  {
    q: "A Maréa não serve um jantar — ela orquestra uma travessia. Cada prato é um capítulo, cada vinho um respiro do mar.",
    a: "Camille Dupont",
    r: "Guia Le Palmarès · Paris",
  },
  {
    q: "O equilíbrio entre técnica e respeito ao produto é raro. Saí com a sensação de ter visitado o oceano por dentro.",
    a: "Rafael Monteiro",
    r: "Crítico Gastronômico",
  },
  {
    q: "Atmosfera cinematográfica, serviço cirúrgico. Uma experiência que paira entre o teatro e a alta cozinha.",
    a: "Ana Lucia Vidal",
    r: "Editora · Vogue Living",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-32 md:py-44 bg-[var(--ocean-deep)]/40">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-12 bg-[var(--gold)]" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
            Vozes da Casa
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