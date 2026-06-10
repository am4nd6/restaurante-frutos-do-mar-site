import { motion } from "framer-motion";
import { useRef, useState } from "react";
import shrimp from "@/assets/spec-shrimp.jpg";
import crab from "@/assets/spec-crab.jpg";

const items = [
  { n: "01", t: "Caranguejo-uçá", img: crab, d: "Do mangue da Raposa, no leite de coco e cuxá." },
  {
    n: "02",
    t: "Camarão da Baía",
    img: shrimp,
    d: "Camarão-rosa de São Marcos, na moranga com jambu.",
  },
  {
    n: "03",
    t: "Sururu & Ostras",
    img: "/src/assets/sururu.png",
    d: "Mariscos do litoral, abertos sobre brasa de carvão.",
  },
  {
    n: "04",
    t: "Peixe-Pedra",
    img: "/src/assets/peixe.png",
    d: "Inteiro, escamado na brasa, com farofa d'água.",
  },
  {
    n: "05",
    t: "Polvo do Atol",
    img: "/src/assets/polvo.png",
    d: "Grelhado em folha de bananeira e azeite de dendê.",
  },
  {
    n: "06",
    t: "Lagosta de Tutoia",
    img: "/src/assets/lagosta.png",
    d: "Ao molho de pimenta-de-cheiro e manteiga de garrafa.",
  },
];

function Card({ item, i }: { item: (typeof items)[number]; i: number }) {
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
      className="group relative overflow-hidden rounded-[1.75rem] bg-linear-to-b from-ocean-deep/60 to-abyss/80 border border-gold/10 hover:border-gold/40 transition-colors duration-700"
    >
      <div className="aspect-4/5 overflow-hidden">
        <img
          src={item.img}
          alt={item.t}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-abyss via-abyss/30 to-transparent" />
      </div>
      {/* shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mx)_var(--my),oklch(0.78_0.09_85/0.18),transparent_50%)]" />

      <div className="absolute inset-x-0 bottom-0 p-7">
        <div className="text-[10px] tracking-[0.4em] text-gold">{item.n}</div>
        <h3 className="mt-2 font-display text-3xl text-ice">{item.t}</h3>
        <p className="mt-2 text-sm text-ice/60 max-w-[80%]">{item.d}</p>
      </div>
    </motion.div>
  );
}

export function Specialties() {
  return (
    <section id="especialidades" className="relative py-20 md:py-28">
      <div className="site-container mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-5xl text-center min-[1200px]:mx-0 min-[1200px]:text-left">
          <div className="grid gap-7 min-[1200px]:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.55fr)] min-[1200px]:items-end">
            <div>
              <div className="flex items-center justify-center gap-3 mb-6 min-[1200px]:justify-start">
                <span className="h-px w-12 bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
                  Do Mangue à Mesa
                </span>
              </div>
              <h2 className="mx-auto font-display text-5xl md:text-7xl text-ice max-w-3xl leading-[1.05] min-[1200px]:mx-0">
                Cozinha de maré, brasa e <span className="italic text-gold-gradient">mangue</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1200px]:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Card key={it.t} item={it} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
