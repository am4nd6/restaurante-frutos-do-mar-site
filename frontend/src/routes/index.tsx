import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/site/Loader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Story } from "@/components/site/Story";
import { Specialties } from "@/components/site/Specialties";
import { Gallery } from "@/components/site/Gallery";
import { Menu } from "@/components/site/Menu";
import { Testimonials } from "@/components/site/Testimonials";
import { Reserve } from "@/components/site/Reserve";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maréa" },
      { tagName: "meta", name: "theme-color", content: "#02181D" },
      {
        tagName: "meta",
        name: "theme-color",
        content: "#02181D",
        media: "(prefers-color-scheme: light)",
      },
      {
        tagName: "meta",
        name: "theme-color",
        content: "#02181D",
        media: "(prefers-color-scheme: dark)",
      },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      {
        name: "description",
        content:
          "Restaurante premium na Praia Grande, no Centro Histórico de São Luís. Caranguejo do mangue, peixada do cais e o tempero ancestral do Maranhão.",
      },
      { property: "og:title", content: "Maréa · Cozinha Maranhense · São Luís — MA" },
      {
        property: "og:description",
        content:
          "Sabores da Baía de São Marcos num casarão azulejado da Praia Grande. Reserve sua mesa.",
      },
    ],
    links: [{ tagName: "link", rel: "manifest", href: "/manifest.webmanifest" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-svh">
      <Loader />
      <Navbar />
      <Hero />
      <Story />
      <Specialties />
      <Gallery />
      <Menu />
      <Testimonials />
      <Location />
      <Reserve />
      <Footer />
    </main>
  );
}
