import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroDish from "@/assets/hero-dish.jpg";

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const on = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden"
    >
      {/* ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 40%, oklch(0.42 0.06 200 / 0.6), transparent 70%), radial-gradient(40% 40% at 20% 70%, oklch(0.78 0.09 85 / 0.18), transparent 70%)",
        }}
      />
      {/* bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-(--ice)/20 animate-bubble"
            style={{
              left: `${(i * 53) % 100}%`,
              width: `${3 + (i % 6)}px`,
              height: `${3 + (i % 6)}px`,
              animationDuration: `${8 + (i % 7)}s`,
              animationDelay: `${(i % 9) * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="site-container relative mx-auto max-w-7xl px-6 md:px-10 grid min-[1200px]:grid-cols-12 gap-10 items-center w-full">
        {/* text */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18, delayChildren: 2.4 } },
          }}
          className="min-[1200px]:col-span-7 relative z-10"
        >
          <div className="mx-auto max-w-xl px-2 min-[390px]:px-4 md:max-w-2xl md:px-0 min-[1200px]:mx-0 min-[1200px]:max-w-none">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.9 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
                São Luís · Maranhão · Desde 1987
              </span>
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-ice"
            >
              A maré
              <br />
              do <span className="italic text-gold-gradient">Maranhão</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.9 }}
              className="mt-8 max-w-xl text-(--ice)/70 text-lg leading-relaxed text-justify md:max-w-2xl min-[1200px]:max-w-xl"
            >
              No coração do centro histórico de São Luís, num casarão de azulejos portugueses,
              servimos o que a Baía de São Marcos oferece todo amanhecer — caranguejo do mangue,
              camarão da Raposa e o tempero ancestral do cuxá.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.9 }}
              className="mx-auto mt-12 flex max-w-md flex-col items-stretch gap-4 min-[600px]:max-w-none min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-center min-[1200px]:mx-0 min-[1200px]:justify-start"
            >
              <a
                href="#reserva"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-abyss shadow-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_-22px_var(--gold)]"
              >
                <span>Reservar Experiência</span>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
              <a
                href="#menu"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-(--ice)/15 bg-white/3 px-8 py-4 text-center text-xs uppercase tracking-[0.3em] text-(--ice)/80 backdrop-blur-sm transition-all duration-500 hover:border-(--gold)/60 hover:bg-(--gold)/10 hover:text-gold"
              >
                <span className="h-px w-8 bg-(--gold)/60 transition-all duration-500 group-hover:w-12" />
                <span>Explorar Menu</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 1.2 }}
            className="mx-auto mt-3 grid max-w-sm grid-cols-2 gap-5 border-t border-(--ice)/10 pt-3 text-center min-[560px]:max-w-md min-[560px]:grid-cols-3 min-[1200px]:mx-0"
          >
            {[
              { n: "37", l: "Anos na Praia Grande" },
              { n: "★★★★", l: "Venha Comer & Beber" },
              { n: "06h", l: "Chegada do peixe" },
            ].map((s) => (
              <div key={s.l} className="last:col-span-2 last:justify-self-center min-[560px]:last:col-span-1">
                <div className="font-display text-3xl text-gold">{s.n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-(--ice)/50">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* dish */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="min-[1200px]:col-span-5 relative mx-auto w-full max-w-[min(78vw,22rem)] sm:max-w-sm md:max-w-md min-[1200px]:max-w-none"
          style={{
            transform: `perspective(1200px) rotateY(${mouse.x * 4}deg) rotateX(${-mouse.y * 4}deg)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          <div className="relative aspect-square">
            {/* halo */}
            <div className="absolute -inset-10 rounded-full bg-(--gold)/10 blur-3xl animate-float-slow" />
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-(--ocean)/40 to-transparent blur-2xl" />

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <img
                src={heroDish}
                alt="Prato exclusivo Maréa com ostras, langostino e folhas de ouro"
                className="h-full w-full object-cover rounded-full shadow-luxe ring-1 ring-(--gold)/30"
                width={1024}
                height={1024}
              />
              {/* orbit gold ring */}
              <div className="pointer-events-none absolute -inset-3 rounded-full border border-(--gold)/20" />
              <div className="pointer-events-none absolute -inset-8 rounded-full border border-(--gold)/10" />
            </motion.div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                opacity: { delay: 3.4, duration: 0.8 },
                x: { delay: 3.4, duration: 0.8 },
              }}
              className="absolute -left-2 bottom-6 max-w-50 sm:-left-6 sm:bottom-12"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                className="rounded-2xl glass p-4 will-change-transform"
              >
                <div className="text-[9px] uppercase tracking-[0.3em] text-gold mb-1">
                  Assinatura do Chef
                </div>
                <div className="font-display text-lg text-ice">Pérolas do Maranhão</div>
                <div className="mt-1 text-[10px] text-(--ice)/60">
                  Ostras frescas · camarão selecionado · flores comestíveis · ouro 24k
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 4, duration: 1 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 h-10 w-px -translate-x-1/2 bg-linear-to-b from-gold to-transparent"
      />
    </section>
  );
}
