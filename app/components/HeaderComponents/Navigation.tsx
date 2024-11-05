import { Link } from "@remix-run/react";
import Button from "../Button";

export default function Navigation({ active = false }: { active?: boolean }) {
  const fontSize =
    "text-lg font-medium hover:underline hover:font-semibold decoration-[#357BA2] decoration-[3px] text-[#464648]";

  if (active) {
    return (
      <ul className="flex flex-col items-center gap-3">
        <li className={fontSize}>
          <Link to="#">Home</Link>
        </li>
        <li className={fontSize}>
          <Link to="#">About</Link>
        </li>
        <li className={fontSize}>
          <Link to="#">Jadwal Kajian</Link>
        </li>
        <li>
          <Button className="rounded-[60px] bg-[#357BA2] text-lg text-white font-bold px-6 py-2 hover:text-black w-fit">
            <Link to="#">Donasi</Link>
          </Button>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="flex gap-9 items-center max-sm:hidden ">
        <li className={fontSize}>
          <Link to="#">Beranda</Link>
        </li>
        <li className={fontSize}>
          <Link to="#">Tentang</Link>
        </li>
        <li className={fontSize}>
          <Link to="#">Program</Link>
        </li>
        <li>
          <Button className="rounded-[60px] bg-[#357BA2] text-lg text-white font-bold px-6 py-2 hover:text-black">
            <Link to="#">Donasi</Link>
          </Button>
        </li>
      </ul>
    );
  }
}
