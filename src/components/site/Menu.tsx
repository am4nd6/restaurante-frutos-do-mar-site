import { motion } from "framer-motion";
import oyster from "@/assets/spec-oyster.jpg";
import octopus from "@/assets/spec-octopus.jpg";
import fish from "@/assets/spec-fish.jpg";
import shrimp from "@/assets/spec-shrimp.jpg";

const dishes = [
  { name: "Caranguejada Reinado", img: oyster, ing: "Caranguejo-uçá · arroz de cuxá · vinagrete de pimenta-de-cheiro", price: "R$ 168" },
  { name: "Polvo na Folha", img: octopus, ing: "Polvo grelhado · folha de bananeira · azeite de dendê · jambu", price: "R$ 152" },
  { name: "Peixada do Cais", img: fish, ing: "Peixe-pedra · leite de coco · pirão de camarão · coentro", price: "R$ 138" },
  { name: "Camarão na Moranga", img: shrimp, ing: "Camarão da Raposa · catupiry artesanal · jerimum · farinha d'água", price: "R$ 144" },
];

export function Menu() {
  return (
    <section id="menu" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[var(--gold)]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
                Cardápio da Casa
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-[var(--ice)] leading-[1.05]">
              Sabores <span className="italic text-gold-gradient">ancestrais</span>.
            </h2>
          </div>
          <a
            href="#reserva"
            className="text-xs uppercase tracking-[0.3em] text-[var(--ice)]/80 hover:text-[var(--gold)] transition-colors"
          >
            Menu confraria completo →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dishes.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.1 }}
              className="group glass rounded-[1.75rem] p-3 flex gap-5 items-center hover:border-[var(--gold)]/40 transition-all duration-700 hover:-translate-y-1"
            >
              <div className="relative h-32 w-32 md:h-36 md:w-36 shrink-0 overflow-hidden rounded-2xl">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />
              </div>
              <div className="flex-1 pr-4 py-2">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl text-[var(--ice)] group-hover:text-[var(--gold)] transition-colors">
                    {d.name}
                  </h3>
                  <span className="font-display text-xl text-[var(--gold)]">{d.price}</span>
                </div>
                <p className="mt-2 text-sm text-[var(--ice)]/60 leading-relaxed">{d.ing}</p>
                <button className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[var(--ice)]/80 hover:text-[var(--gold)] transition-colors">
                  Adicionar à reserva →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}