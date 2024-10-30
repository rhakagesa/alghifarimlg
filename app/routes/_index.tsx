import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Hero from "~/components/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Masjid Abu Dzar Al - Ghifari Malang" },
    { name: "description", content: "Masjid Abu Dzar Al - Ghifari Malang" },
  ];
};

export default function Index() {
  return (
    <div className="container bg-white">
      <Header logoImg="./public/logo.svg" menuIcon="./public/menu-icon.svg" />
      <Hero fotoImg="./public/foto.png" />
    </div>
  );
}
