import { Link } from "@remix-run/react";
import { useState } from "react";

type HeaderProps = {
  logoImg: string;
  menuIcon: string;
};

export default function Header({ logoImg, menuIcon }: HeaderProps) {
  const [active, setActive] = useState(false);

  return (
    <header className="flex bg-white w-screen h-[82px] justify-between items-center shadow-sm shadow-black px-4 fixed z-10">
      <img src={logoImg} alt="logo" className="w-36" />
      <button
        onClick={() => setActive(!active)}
        className="w-6 cursor-pointer max-sm:block hidden"
      >
        <img src={menuIcon} alt="menuicon" />
      </button>

      <NavUl active={active} />
    </header>
  );
}

function NavUl({ active }: { active: boolean }) {
  const fontSize =
    "text-lg font-medium hover:underline decoration-[#357BA2] decoration-[3px] text-[#464648]";
  if (active) {
    return (
      <ul className="flex flex-col absolute top-0 left-0 right-0 h-screen -z-10 bg-white justify-center items-center w-screen gap-3">
        <li className={fontSize}>
          <Link to="#">Home</Link>
        </li>
        <li className={fontSize}>
          <Link to="#">About</Link>
        </li>
        <li className={fontSize}>
          <Link to="#">Jadwal Kajian</Link>
        </li>
        <li className="px-8 py-3 text-xl border rounded-[60px] bg-[#357BA2] text-white font-bold w-fit">
          <Link to="#">Donasi</Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="flex gap-9 items-center max-sm:hidden">
        <li className={fontSize}>
          <Link to="#">Home</Link>
        </li>
        <li className={fontSize}>
          <Link to="#">About</Link>
        </li>
        <li className={fontSize}>
          <Link to="#">Jadwal Kajian</Link>
        </li>
        <li className="px-8 py-3 text-xl border rounded-[60px] bg-[#357BA2] text-white font-bold">
          <Link to="#">Donasi</Link>
        </li>
      </ul>
    );
  }
}
