import { Facebook, Instagram, Twitter } from "lucide-react";
import { FishIcon } from "./FishIcon";

const footerLinks = [
  { label: "Início", href: "#top" },
  { label: "Nossa Casa", href: "#historia" },
  { label: "Do Mangue", href: "#especialidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Cardápio", href: "#menu" },
  { label: "Visite", href: "#contato" },
  { label: "Reservar", href: "#reserva" },
];

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Twitter", href: "#", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-14 mt-10">
      <div className="mx-auto max-w-7xl px-4 min-[400px]:px-6 md:px-10">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-gold to-[oklch(0.66_0.08_84)] text-abyss shadow-gold ring-1 ring-(--gold)/30">
              <FishIcon className="h-6 w-6" />
            </span>
            <div>
              <div className="font-display text-lg tracking-[0.2em] text-ice">MARÉA</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-(--ice)/40">
                Cozinha Maranhense · São Luís — MA
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 w-full">
          <div className="flex flex-col items-center gap-y-1 md:flex-row md:justify-center md:gap-x-6">
            <div className="flex justify-center gap-x-6 md:contents">
              {footerLinks.slice(0, 4).map((l) => (
                <a key={l.href} href={l.href} className="hover:text-gold transition-colors text-[10px] uppercase tracking-[0.3em] text-(--ice)/60">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex justify-center gap-x-6 md:contents">
              {footerLinks.slice(4, 6).map((l) => (
                <a key={l.href} href={l.href} className="hover:text-gold transition-colors text-[10px] uppercase tracking-[0.3em] text-(--ice)/60">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex justify-center gap-x-6 md:contents">
              {footerLinks.slice(6).map((l) => (
                <a key={l.href} href={l.href} className="hover:text-gold transition-colors text-[10px] uppercase tracking-[0.3em] text-(--ice)/60">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-(--ice)/20 text-(--ice)/70 transition-colors hover:border-gold hover:text-gold"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="mt-10 text-center text-[10px] uppercase tracking-[0.3em] text-(--ice)/30">
          © {new Date().getFullYear()} Maréa · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
