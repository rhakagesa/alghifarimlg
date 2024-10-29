import { Link } from "@remix-run/react";

type HeaderProps = {
  logoImg: string;
};

const fontSize =
  "text-lg font-medium hover:underline decoration-[#357BA2] decoration-[3px] text-[#464648]";

export default function Header({ logoImg }: HeaderProps) {
  return (
    <header className="flex bg-white h-[82px] justify-between items-center shadow-sm">
      <img src={logoImg} alt="logo" className="w-[142px] h-[61px]" />
      <ul className="mr-4 w-[481px] h-[56px] px-6 flex gap-9 items-center">
        <li className={fontSize}>
          <Link to="#">Home</Link>
        </li>
        <li className={fontSize}>
          <Link to="#">About</Link>
        </li>
        <li className={fontSize}>
          <Link to="#">Program</Link>
        </li>
        <li className="gap-2 px-8 py-3 text-xl border rounded-[60px] bg-[#357BA2] text-white font-bold">
          <Link to="#">Donasi</Link>
        </li>
      </ul>
    </header>
  );
}
