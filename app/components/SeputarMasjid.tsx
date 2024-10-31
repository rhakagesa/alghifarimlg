import { Link } from "@remix-run/react";

export default function SeputarMasjid() {
  return (
    <section className="w-screen h-[558px] bg-[url('/vector.svg')] bg-no-repeat bg-[length:578px_443px] bg-right-top mt-5 max-md:h-min">
      <div className="flex w-full h-min px-44 pt-32 items-center max-xl:px-24 max-md:px-14 max-md:flex-col max-md:text-center">
        <div className="relative w-2/5 h-[300px] max-md:w-full">
          <div className="absolute z-10 -top-[82px] left-[85px] bg-[url('/seputar-masjid-img.svg')] bg-cover w-[311px] h-[396px] max-lg:w-[211px] max-lg:h-[296px] rounded-br-[80px] rounded-tl-[80px] shadow-2xl shadow-black"></div>
          <div className="absolute bg-gradient-to-b from-[#247EB1] to-[#21536F] bg-cover w-[311px] h-[396px] max-lg:w-[211px] max-lg:h-[296px] rounded-br-[80px] rounded-tl-[80px]"></div>
        </div>
        <div className="w-3/5 max-xl:pl-24 max-md:w-full max-md:mt-8 max-md:p-0 ">
          <h1 className="text-5xl max-xl:text-4xl max-lg:text-2xl font-bold text-[#21536F] mb-5">
            SEPUTAR MASJID
          </h1>
          <p className="text-md max-xl:text-sm max-lg:text-xs mb-5">
            Masjid Abu Dzar Al-Ghifari berlokasi di : Perumahan Griya Shanta,
            Jl. Candi Jolotundo I Blk. E No.219A, Mojolangu, Lowokwaru, Malang.
            Memiliki beberapa program yang berfokus kepada para pemuda, sehingga
            menjadikan masjid tempat untuk berkumpul dan mempererat ukhuwah
            islamiyah.
          </p>
          <Link to="#">
            <button className="text-[#21536F] text-sm max-lg:text-xs">
              Selengkapnya →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
