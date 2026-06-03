import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export function Gallery() {
  return (
    <section id="galeria" className="relative py-32 md:py-48 bg-[var(--ocean-deep)]/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-[var(--gold)]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
              Experiência Gastronômica
            </span>
            <span className="h-px w-12 bg-[var(--gold)]" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-[var(--ice)] leading-[1.05]">
            Uma <span className="italic text-gold-gradient">imersão</span> sensorial.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {[
            { src: g2, cls: "col-span-12 md:col-span-7 aspect-[16/10]", alt: "Chef emplatando" },
            { src: g1, cls: "col-span-12 md:col-span-5 aspect-[4/5] md:aspect-auto", alt: "Pasta com vongole" },
            { src: g3, cls: "col-span-6 md:col-span-4 aspect-square", alt: "Champagne com ostras" },
            { src: g4, cls: "col-span-6 md:col-span-4 aspect-square", alt: "Vieiras seladas" },
            { src: g2, cls: "col-span-12 md:col-span-4 aspect-square", alt: "Detalhe gastronômico" },
          ].map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[1.5rem] ${it.cls}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--abyss)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}