import { useState } from "react";
import Navigation from "./HeaderComponents/Navigation";
import Button from "./Button";

type HeaderProps = {
  logoImg: string;
  menuIcon: string;
};

export default function Header({ logoImg, menuIcon }: HeaderProps) {
  const [active, setActive] = useState(false);

  return (
    <header
      className={`bg-white w-screen shadow-md shadow-slate-400 fixed z-50`}
    >
      <div className="flex justify-between items-center px-5">
        <img src={logoImg} alt="logo" className="w-48" />
        <Button
          onClick={() => setActive(!active)}
          className="w-6 cursor-pointer max-sm:block hidden"
        >
          <img src={menuIcon} alt="menuicon" />
        </Button>

        {!active && <Navigation />}
      </div>

      {active && (
        <div className="absolute">
          <Navigation active={active} />
        </div>
      )}
    </header>
  );
}
