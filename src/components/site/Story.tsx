import { motion } from "framer-motion";
import interior from "@/assets/restaurant-interior.jpg";

export function Story() {
  return (
    <section id="historia" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="group relative aspect-3/4 overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={interior}
              alt="Interior do restaurante Maréa"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-linear-to-t from-abyss via-transparent to-transparent transition-opacity duration-700 group-hover:opacity-80" />
            <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-(--gold)/0 transition-all duration-700 group-hover:inset-6 group-hover:border-(--gold)/30" />
          </div>
          <div className="absolute -bottom-8 -right-8 glass rounded-2xl px-6 py-5 max-w-60 hidden md:block">
            <div className="font-display italic text-gold text-2xl leading-tight">
              "A maré
              <br /> manda no menu."
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-(--ice)/60">
              — Chef Dona Lurdes
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Nossa Casa</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] text-ice">
            Um casarão <span className="italic text-gold-gradient">na Praia Grande</span> desde 1987
          </h2>
          <div className="mt-10 space-y-6 text-(--ice)/70 text-lg leading-relaxed max-w-xl text-justify">
            <p>
              A Maréa nasceu num sobrado azulejado do Centro Histórico de São Luís, tombado pela
              UNESCO, fundado por uma família de marisqueiras da Raposa. Aqui, a Baía de São Marcos
              chega cedo — caranguejos do mangue, peixe-pedra fresco e o jambu colhido na manhã.
            </p>
            <p>
              Sob o comando de Dona Lurdes e do filho Chef Caio Reis, traduzimos o tempero da Ilha
              em uma cozinha autoral: ancestral no sabor, contemporânea na técnica, generosa como o
              povo maranhense.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-10 border-t border-border">
            {[
              { k: "Pesca artesanal", v: "100%" },
              { k: "Comunidades parceiras", v: "14" },
              { k: "Cachaças do Nordeste", v: "180" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-4xl text-ice">{s.v}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-(--ice)/50">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
