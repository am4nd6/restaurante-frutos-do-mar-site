import { motion } from "framer-motion";
import interior from "@/assets/restaurant-interior.jpg";

export function Story() {
  return (
    <section id="historia" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={interior}
              alt="Interior do restaurante Maréa"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--abyss)] via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-8 glass rounded-2xl px-6 py-5 max-w-[240px] hidden md:block">
            <div className="font-display italic text-[var(--gold)] text-2xl leading-tight">
              "A maré
              <br /> manda no menu."
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[var(--ice)]/60">
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
            <span className="h-px w-12 bg-[var(--gold)]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
              Nossa Casa
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] text-[var(--ice)]">
            Um casarão <span className="italic text-gold-gradient">na Praia Grande</span> desde 1987.
          </h2>
          <div className="mt-10 space-y-6 text-[var(--ice)]/70 text-lg leading-relaxed max-w-xl">
            <p>
              A Maréa nasceu num sobrado azulejado do Centro Histórico de São Luís,
              tombado pela UNESCO, fundado por uma família de marisqueiras da Raposa.
              Aqui, a Baía de São Marcos chega cedo — caranguejos do mangue, peixe-pedra
              fresco e o jambu colhido na manhã.
            </p>
            <p>
              Sob o comando de Dona Lurdes e do filho Chef Caio Reis, traduzimos o
              tempero da Ilha em uma cozinha autoral: ancestral no sabor, contemporânea
              na técnica, generosa como o povo maranhense.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-10 border-t border-[var(--border)]">
            {[
              { k: "Pesca artesanal", v: "100%" },
              { k: "Comunidades parceiras", v: "14" },
              { k: "Cachaças do Norte", v: "180" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-4xl text-[var(--ice)]">{s.v}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[var(--ice)]/50">
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