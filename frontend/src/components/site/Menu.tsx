import { motion } from "framer-motion";
import { useTapHover } from "@/lib/use-tap-hover";
import g5 from "@/assets/polvo-lagareiro.png";
import g6 from "@/assets/ostras-gratinadas.png";
import g7 from "@/assets/casquinhas-de-siri.png";
import g8 from "@/assets/lulas-empanadas.png";

const dishes = [
  {
    name: "Polvo à Lagareiro",
    img: g5,
    ing: "Polvo · azeite extra-virgem · alho · batatas ao murro · coentro fresco",
    price: "R$ 96",
  },
  {
    name: "Ostras Gratinadas com Espinafre",
    img: g6,
    ing: "Ostras · espinafre · queijo parmesão · molho branco · farinha de rosca",
    price: "R$ 72",
  },
  {
    name: "Casquinha de Siri",
    img: g7,
    ing: "Siri · pimenta-do-reino · farinha de rosca · queijo parmesão · cheiro-verde",
    price: "R$ 46",
  },
  {
    name: "Lulas Empanadas com Molho Tártaro",
    img: g8,
    ing: "Lula · farinha de rosca · limão · alface americana · molho tártaro",
    price: "R$ 58",
  },
];

export function DishCard({ d, i }: { d: (typeof dishes)[number]; i: number }) {
  const { hovered, handleTap } = useTapHover();
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: (i % 2) * 0.1 }}
      className={`group relative glass rounded-[1.75rem] p-3 flex flex-col gap-4 items-stretch hover:border-gold/40 transition-all duration-700 hover:-translate-y-1 min-[390px]:flex-row min-[390px]:items-center min-[390px]:gap-5 ${hovered ? "border-gold/40 -translate-y-1" : ""}`}
      onClick={handleTap}
    >
      <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl min-[390px]:h-32 min-[390px]:w-32 md:h-36 md:w-36">
        <img
          src={d.img}
          alt={d.name}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110 ${hovered ? "scale-110" : ""}`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-abyss/60 via-transparent to-transparent" />
      </div>
      <div className="flex-1 py-2 min-[390px]:pr-4">
        <div className="flex flex-col gap-1 min-[560px]:flex-row min-[560px]:items-baseline min-[560px]:justify-between min-[560px]:gap-3">
          <h3 className={`min-w-0 font-display text-2xl text-ice group-hover:text-gold transition-colors ${hovered ? "text-gold" : ""}`}>
            {d.name}
          </h3>
          <span className="shrink-0 whitespace-nowrap font-display text-xl text-gold">
            {d.price}
          </span>
        </div>
        <p className="mt-2 text-sm text-ice/60 leading-relaxed">{d.ing}</p>
        <button className={`mt-4 inline-flex items-center gap-2 whitespace-nowrap text-[10px] uppercase tracking-[0.24em] text-ice/80 transition-colors hover:text-gold min-[390px]:tracking-[0.3em] ${hovered ? "text-gold" : ""}`}>
          <span>Adicionar à reserva</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </motion.article>
  );
}

function MenuLink() {
  const { hovered, handleTap } = useTapHover();
  return (
    <a
      href="#reserva"
      onClick={handleTap}
      className={`group mx-auto inline-flex w-fit max-w-full items-center justify-center gap-3 rounded-full border border-gold/30 px-6 py-3 text-center text-xs uppercase tracking-[0.24em] text-ice/80 transition-all duration-500 hover:border-gold hover:bg-gold/10 hover:text-gold min-[390px]:px-7 min-[390px]:tracking-[0.3em] ${hovered ? "border-gold bg-gold/10 text-gold" : ""}`}
    >
      <span className="whitespace-nowrap">Menu completo</span>
      <span className={`transition-transform duration-500 group-hover:translate-x-1 ${hovered ? "translate-x-1" : ""}`}>→</span>
    </a>
  );
}

export function Menu() {
  return (
    <section id="menu" className="relative py-20 md:py-28">
      <div className="site-container mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 text-center min-[960px]:text-left">
          <div>
            <div className="flex items-center justify-center gap-3 mb-6 min-[960px]:justify-start">
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
            <DishCard key={d.name} d={d} i={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <MenuLink />
        </div>
      </div>
    </section>
  );
}
