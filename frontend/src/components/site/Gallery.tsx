import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export function Gallery() {
  return (
    <section id="galeria" className="relative py-20 md:py-28 bg-(--ocean-deep)/40">
      <div className="site-container mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Experiência Maranhense
            </span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-ice leading-[1.05]">
            A ilha que se <span className="italic text-gold-gradient">come</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 min-[390px]:grid-cols-2 md:gap-6">
          {[
            {
              src: g2,
              alt: "Chef emplatando",
            },
            {
              src: g1,
              alt: "Pasta com vongole",
            },
            {
              src: g3,
              alt: "Champagne com ostras",
            },
            {
              src: g4,
              alt: "Vieiras seladas",
            },
          ].map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem]"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--abyss)/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
