type HeroProps = {
  fotoImg: string;
};

export default function Hero({ fotoImg }: HeroProps) {
  return (
    <section className="w-full min-h-max rounded-b-3xl bg-gradient-to-l from-[#247EB0] to-[#134561]">
      {/* Content Section */}
      <div className="flex flex-col items-center px-32 pt-32 pb-10 max-md:px-10">
        {/* Hero Section */}
        <div className="flex justify-between items-center mb-10 max-md:flex-col max-md:text-center">
          {/* Text Section */}
          <div className="w-1/2 max-xl:w-3/5 max-md:w-full">
            <h6 className="text-3xl font-semibold text-white mb-4 max-xl:text-xl max-md:text-md">
              SELAMAT DATANG DI WEBSITE
            </h6>

            <div className="text-6xl font-bold text-white max-xl:text-5xl max-lg:text-3xl">
              <h1>MASJID ABU DZAR</h1>
              <h1>AL - GHIFARI</h1>
            </div>

            <h6 className="text-2xl text-white max-xl:text-xl max-lg:text-sm">
              Website ini merupakan sebuah ikhtiar kami untuk menjelaskan
              beberapa hal seputar yang ada di{" "}
              <span className="font-bold">Masjid Abu Dzar Al-Ghifari</span>.
            </h6>
          </div>

          {/* Img Section */}

          <img
            src={fotoImg}
            alt="foto"
            className="w-1/2 max-xl:w-2/5 max-md:w-full max-md:mt-5"
          />
        </div>

        <div className="flex p-8 max-xl:p-6 max-md:p-2 rounded-[60px] border-2 bg-gradient-to-r from-slate-500 to-slate-400 items-center justify-between max-lg:rounded-2xl ">
          <div className="text-xl text-white group-hover:text-slate-900 font-bold max-xl:text-sm max-lg:text-center max-md:text-center max-md:text-xs max-md:font-medium">
            <p>
              Mari investasi akhirat dengan cara donasi untuk program kegiatan
              masjid
              <span className="ml-4 rounded-[60px] bg-[#357BA2] px-6 py-2 max-lg:px-4 max-lg:py-1 max-lg:hidden">
                Donasi
              </span>
            </p>
            <span className="hidden max-lg:block rounded-[60px] bg-[#357BA2] max-lg:px-2 max-lg:mt-2 max-lg:py-1 max-lg:ml-2 max-lg:rounded-lg ">
              Donasi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
