import { motion } from "framer-motion";

export function Location() {
  return (
    <section id="contato" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Visite-nos</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-ice leading-[1.05]">
            No coração da <span className="italic text-gold-gradient">Praia Grande</span>.
          </h2>

          <dl className="mt-12 space-y-7">
            <div className="border-b border-border pb-6">
              <dt className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gold">Endereço</dt>
              <dd className="text-lg leading-relaxed text-ice">
                Rua da Estrela, 187
                <span className="block text-base text-(--ice)/60">
                  Praia Grande · Centro Histórico · São Luís — MA
                </span>
              </dd>
            </div>
            <div className="border-b border-border pb-6">
              <dt className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold">Reservas</dt>
              <dd className="grid gap-3 text-ice sm:grid-cols-2">
                <a
                  href="tel:+559832321987"
                  className="glass rounded-2xl px-4 py-3 transition-colors hover:text-gold"
                >
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-(--ice)/45">
                    Telefone
                  </span>
                  <span className="mt-1 block text-lg">+55 (98) 3232-1987</span>
                </a>
                <a
                  href="https://wa.me/5598988001987"
                  className="glass rounded-2xl px-4 py-3 transition-colors hover:text-gold"
                >
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-(--ice)/45">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-lg">(98) 98800-1987</span>
                </a>
              </dd>
            </div>
            <div className="border-b border-border pb-6">
              <dt className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold">Horário</dt>
              <dd className="space-y-2 text-lg leading-relaxed text-ice">
                <div>
                  <span className="text-ice">Terça a domingo</span>
                  <span className="block text-base text-(--ice)/65">
                    · Almoço: 12h às 16h 
                    <br /> 
                    · Jantar: 19h às 23h30
                  </span>
                </div>
                <div className="text-base text-(--ice)/55">
                  <span className="text-ice">Fechado:</span> Segundas-feiras
                </div>
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 relative min-h-105 overflow-hidden rounded-[2rem] shadow-luxe"
        >
          <iframe
            title="Mapa do Maréa na Praia Grande, São Luís"
            src="https://www.google.com/maps?q=Rua%20da%20Estrela%20187%2C%20Praia%20Grande%2C%20Centro%20Hist%C3%B3rico%2C%20S%C3%A3o%20Lu%C3%ADs%20MA&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
          <div className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Maréa</div>
            <div className="font-display text-xl text-ice mt-1">Rua da Estrela, 187</div>
            <div className="text-[10px] text-(--ice)/60 mt-1">
              Praia Grande · Centro Histórico · São Luís — MA
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
