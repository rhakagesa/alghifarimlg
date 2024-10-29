import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import { Hero } from "~/components/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Header logoImg="./public/logo.svg" />
      <div className="rounded-b-3xl bg-gradient-to-r from-[#247EB0] to-[#134561] h-[868px] gap-8 pt-20 px-[120px] pb-12">
        <Hero fotoImg="./public/foto.svg" />
      </div>
    </div>
  );
}
