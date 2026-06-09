import { motion } from "framer-motion";
import crab from "@/assets/spec-crab.jpg";
import shrimp from "@/assets/spec-shrimp.jpg";

const dishes = [
  {
    name: "Caranguejada Reinado",
    img: crab,
    ing: "Caranguejo-uçá · arroz de cuxá · vinagrete de pimenta-de-cheiro",
    price: "R$ 168",
  },
  {
    name: "Polvo na Folha",
    img: "/src/assets/polvo.png",
    ing: "Polvo grelhado · folha de bananeira · azeite de dendê · jambu",
    price: "R$ 152",
  },
  {
    name: "Peixada do Cais",
    img: "/src/assets/peixe.png",
    ing: "Peixe-pedra · leite de coco · pirão de camarão · coentro",
    price: "R$ 138",
  },
  {
    name: "Camarão na Moranga",
    img: shrimp,
    ing: "Camarão da Raposa · catupiry artesanal · jerimum · farinha d'água",
    price: "R$ 144",
  },
];

export function Menu() {
  return (
    <section id="menu" className="relative py-20 md:py-28">
      <div className="site-container mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
                Cardápio da Casa
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-ice leading-[1.05]">
              Sabores <span className="italic text-gold-gradient">ancestrais</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 min-[960px]:grid-cols-2 gap-6">
          {dishes.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.1 }}
              className="group glass rounded-[1.75rem] p-3 flex flex-col gap-4 items-stretch hover:border-(--gold)/40 transition-all duration-700 hover:-translate-y-1 min-[390px]:flex-row min-[390px]:items-center min-[390px]:gap-5"
            >
              <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl min-[390px]:h-32 min-[390px]:w-32 md:h-36 md:w-36">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />
              </div>
              <div className="flex-1 py-2 min-[390px]:pr-4">
                <div className="flex flex-col gap-1 min-[390px]:flex-row min-[390px]:items-baseline min-[390px]:justify-between min-[390px]:gap-3">
                  <h3 className="font-display text-2xl text-ice group-hover:text-gold transition-colors">
                    {d.name}
                  </h3>
                  <span className="font-display text-xl text-gold">{d.price}</span>
                </div>
                <p className="mt-2 text-sm text-(--ice)/60 leading-relaxed">{d.ing}</p>
                <button className="mt-4 text-[10px] uppercase tracking-[0.3em] text-(--ice)/80 hover:text-gold transition-colors">
                  Adicionar à reserva →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#reserva"
            className="group inline-flex items-center gap-3 rounded-full border border-(--gold)/30 px-7 py-3 text-xs uppercase tracking-[0.3em] text-(--ice)/80 transition-all duration-500 hover:border-gold hover:bg-(--gold)/10 hover:text-gold"
          >
            <span>Menu completo</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
