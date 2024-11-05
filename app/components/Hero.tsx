import { Link } from "@remix-run/react";

type HeroProps = {
  fotoImg: string;
};

export default function Hero({ fotoImg }: HeroProps) {
  return (
    <section className="rounded-b-3xl bg-gradient-to-l from-[#247EB0] to-[#134561] w-screen max-h-min pb-6">
      <div className="flex w-full h-full items-center pt-32 justify-between px-28 max-lg:flex-col max-lg:px-10 max-lg:pt-32">
        {/* Text Section */}
        <div className="w-1/2 max-lg:w-full max-lg:text-center">
          <h6 className="text-xl font-semibold text-white mb-4 max-lg:text-lg max-md:text-md">
            SELAMAT DATANG DI WEBSITE
          </h6>

          <h1 className="text-6xl font-bold text-white max-lg:text-5xl max-md:text-4xl">
            MASJID ABU DZAR
          </h1>
          <h1 className="text-6xl font-bold text-white mb-4 max-lg:text-5xl max-md:text-4xl">
            AL - GHIFARI
          </h1>

          <h6 className="text-lg text-white font-medium max-lg:text-md max-md:text-sm">
            Website ini merupakan sebuah ikhtiar kami untuk menjelaskan beberapa
            hal seputar yang ada di Masjid Abu Dzar Al-Ghifari.
          </h6>
        </div>

        {/* Img Section */}

        <img
          src={fotoImg}
          alt="foto"
          className="w-1/2 max-lg:w-2/3 max-lg:pt-10"
        />
      </div>

      <div className="flex mx-52 my-10 py-5 rounded-[60px] border-2 bg-slate-400 items-center justify-center max-xl:mx-14 max-xl:py-3 max-lg:flex-col max-lg:mx-36 max-lg:text-center max-lg:rounded-3xl max-md:mx-16 max-md:py-2">
        <p className="text-xl text-white font-semibold max-xl:text-lg max-lg:text-md max-md:text-sm">
          Mari investasi akhirat dengan cara donasi untuk program kegiatan
          masjid
        </p>

        <Link
          to="#"
          className="ml-4 px-8 py-3 text-xl rounded-[60px] bg-[#357BA2] text-white font-bold max-xl:text-lg max-lg:text-md max-lg:ml-0 max-lg:px-6 max-lg:py-2 max-lg:mt-2 max-md:text-sm max-md:px-4 max-md:py-1"
        >
          Donasi
        </Link>
      </div>
    </section>
    // Background
  );
}
