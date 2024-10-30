import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Masjid Abu Dzar Al - Ghifari Malang" },
    { name: "description", content: "Masjid Abu Dzar Al - Ghifari Malang" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <Header logoImg="./public/logo.svg" menuIcon="./public/menu-icon.svg" />
      {/* <Hero fotoImg="./public/foto.svg" /> */}
    </div>
  );
}
