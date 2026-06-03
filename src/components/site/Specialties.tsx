import { motion } from "framer-motion";
import { useRef, useState } from "react";
import shrimp from "@/assets/spec-shrimp.jpg";
import lobster from "@/assets/spec-lobster.jpg";
import crab from "@/assets/spec-crab.jpg";
import oyster from "@/assets/spec-oyster.jpg";
import octopus from "@/assets/spec-octopus.jpg";
import fish from "@/assets/spec-fish.jpg";

const items = [
  { n: "01", t: "Camarões", img: shrimp, d: "Tigre selvagem, flambados em conhaque." },
  { n: "02", t: "Lagostas", img: lobster, d: "Bretãs, ao molho beurre noisette." },
  { n: "03", t: "Caranguejos", img: crab, d: "Real do Alasca, manteiga de algas." },
  { n: "04", t: "Ostras", img: oyster, d: "Belon, mignonette de champanhe." },
  { n: "05", t: "Polvos", img: octopus, d: "Galego, brasa de carvalho." },
  { n: "06", t: "Peixes Nobres", img: fish, d: "Linguado e robalo do dia." },
];

function Card({ item, i }: { item: typeof items[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: (i % 3) * 0.12 }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setTilt({
          x: ((e.clientX - r.left) / r.width - 0.5) * 10,
          y: ((e.clientY - r.top) / r.height - 0.5) * -10,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.5s ease-out",
      }}
      className="group relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-[var(--ocean-deep)]/60 to-[var(--abyss)]/80 border border-[var(--gold)]/10 hover:border-[var(--gold)]/40 transition-colors duration-700"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={item.img}
          alt={item.t}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--abyss)] via-[var(--abyss)]/30 to-transparent" />
      </div>
      {/* shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mx)_var(--my),oklch(0.78_0.09_85/0.18),transparent_50%)]" />

      <div className="absolute inset-x-0 bottom-0 p-7">
        <div className="text-[10px] tracking-[0.4em] text-[var(--gold)]">{item.n}</div>
        <h3 className="mt-2 font-display text-3xl text-[var(--ice)]">{item.t}</h3>
        <p className="mt-2 text-sm text-[var(--ice)]/60 max-w-[80%]">{item.d}</p>
      </div>
    </motion.div>
  );
}

export function Specialties() {
  return (
    <section id="especialidades" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[var(--gold)]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
                Especialidades
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-[var(--ice)] max-w-2xl leading-[1.05]">
              Do mar profundo <span className="italic text-gold-gradient">à sua mesa</span>.
            </h2>
          </div>
          <p className="text-[var(--ice)]/60 max-w-md">
            Seis universos do oceano, cada um interpretado com a precisão e a generosidade
            que definem a Maréa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Card key={it.t} item={it} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}