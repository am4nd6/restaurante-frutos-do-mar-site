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
      { title: "Maréa · Maison de Frutos do Mar" },
      { name: "description", content: "Experiência gastronômica imersiva à beira-mar. Frutos do mar selvagens, técnica francesa contemporânea e brisa do Atlântico em cada prato." },
      { property: "og:title", content: "Maréa · Maison de Frutos do Mar" },
      { property: "og:description", content: "Restaurante premium especializado em frutos do mar. Reserve sua travessia." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Loader />
      <Navbar />
      <Hero />
      <Story />
      <Specialties />
      <Gallery />
      <Menu />
      <Testimonials />
      <Reserve />
      <Location />
      <Footer />
    </main>
  );
}
