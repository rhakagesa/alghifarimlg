import { Link } from "@remix-run/react";
import Button from "./Button";

export default function SeputarMasjid() {
  return (
    <section className="w-full min-h-max bg-[url('/vector.svg')] bg-no-repeat bg-[length:578px_443px] bg-right-top max-md:h-min">
      <div className="flex justify-center items-center max-md:flex-col max-md:text-center">
        <div className="relative flex w-2/5 max-md:w-full justify-center">
          <div className="absolute z-10 hover:-translate-y-20 hover:translate-x-20 transition-all duration-300 ease-in-out bg-[url('/seputar-masjid-img.svg')] bg-cover w-[311px] h-[396px] max-lg:w-[211px] max-lg:h-[296px] rounded-br-[80px] rounded-tl-[80px] shadow-2xl shadow-black"></div>
          <div className="bg-gradient-to-b from-[#247EB1] to-[#21536F] bg-cover w-[311px] h-[396px] max-lg:w-[211px] max-lg:h-[296px] rounded-br-[80px] rounded-tl-[80px]"></div>
        </div>
        <div className="w-2/5 max-xl:pl-24 max-md:w-full max-md:mt-8 max-md:p-0 text-[#21536F]">
          <h1 className="text-5xl max-xl:text-4xl max-lg:text-2xl font-bold mb-5">
            SEPUTAR MASJID
          </h1>
          <p className="text-md max-xl:text-sm max-lg:text-xs mb-5">
            Masjid Abu Dzar Al-Ghifari berlokasi di Perumahan Griya Shanta, Jl.
            Candi Jolotundo I Blk. E No.219A, Mojolangu, Lowokwaru, Malang.
            Memiliki beberapa program yang berfokus kepada para pemuda, sehingga
            menjadikan masjid tempat untuk berkumpul dan mempererat ukhuwah
            islamiyah.
          </p>
          <Button className="text-md font-medium max-lg:text-xs">
            <Link to="#">Selengkapnya →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
