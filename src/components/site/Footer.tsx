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
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
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

        <nav className="flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase tracking-[0.3em] text-(--ice)/60">
          {footerLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
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
      </div>
      <div className="mt-10 text-center text-[10px] uppercase tracking-[0.3em] text-(--ice)/30">
        © {new Date().getFullYear()} Maréa · Todos os direitos reservados
      </div>
    </footer>
  );
}
