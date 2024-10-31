import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import SeputarMasjid from "~/components/SeputarMasjid";

export const meta: MetaFunction = () => {
  return [
    { title: "Masjid Abu Dzar Al - Ghifari Malang" },
    { name: "description", content: "Masjid Abu Dzar Al - Ghifari Malang" },
  ];
};

export default function Index() {
  return (
    <>
      <Hero fotoImg="/foto.png" />
      <SeputarMasjid />
    </>
  );
}
