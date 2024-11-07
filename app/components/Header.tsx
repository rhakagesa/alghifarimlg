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
    <header className="bg-white w-full top-0 inset-x-0 shadow-md shadow-slate-400 fixed z-50">
      <div className="flex justify-between items-center px-5">
        <img src={logoImg} alt="logo" className="w-48 max-md:w-32" />

        <div
          className={
            active
              ? "bg-white absolute -top-6 inset-0 h-screen mt-20 pt-60 transition duration-300 ease-in-out"
              : ""
          }
        >
          <Navigation active={active} />
        </div>

        <Button
          onClick={() => setActive(!active)}
          className="w-6 cursor-pointer max-sm:block hidden"
        >
          <img
            src={menuIcon}
            alt="menuicon"
            className={
              active
                ? "rotate-90 transition-all duration-300 ease-in-out"
                : "rotate-0 transition-all duration-300 ease-in-out"
            }
          />
        </Button>
      </div>
    </header>
  );
}
