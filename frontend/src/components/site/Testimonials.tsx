import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTapHover } from "@/lib/use-tap-hover";

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
  const next = () => setI((x) => (x + 1) % items.length);
  const { hovered, handleTap } = useTapHover();

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 3000);
    return () => clearInterval(t);
  }, [i]);

  return (
    <section className="relative py-20 md:py-28 bg-ocean-deep/40">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-12 bg-gold" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Vozes da Ilha</span>
          <span className="h-px w-12 bg-gold" />
        </div>

        <div className="relative min-h-65 md:min-h-55">
          <AnimatePresence mode="wait">
            <motion.button
              key={i}
              type="button"
              aria-label="Avançar depoimento"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className={`glass w-full cursor-pointer rounded-[2rem] p-10 text-center transition-colors hover:border-gold/30 md:p-14 ${hovered ? "border-gold/30" : ""}`}
              onClick={() => { next(); handleTap(); }}
            >
              <blockquote className="font-display text-2xl md:text-4xl italic text-ice leading-[1.3]">
                "{items[i].q}"
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-8 bg-gold" />
                <div>
                  <div className="text-sm text-ice">{items[i].a}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ice/50 mt-1">
                    {items[i].r}
                  </div>
                </div>
                <div className="h-px w-8 bg-gold" />
              </div>
            </motion.button>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === i ? "w-10 bg-gold" : "w-2 bg-ice/20"
              }`}
              aria-label={`Depoimento ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
