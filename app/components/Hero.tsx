type HeroProps = {
  fotoImg: string;
};

export function Hero({ fotoImg }: HeroProps) {
  return (
    // Background
    <div className="flex h-[602px] items-center">
      {/* Text Section */}
      <div className="inline-block">
        <h6 className="text-xl font-semibold text-white">
          SELAMAT DATANG DI WEBSITE
        </h6>
        <div className="inline-block w-[600px]">
          <h1 className="text-[60px] leading-[90px] font-bold text-white">
            MASJID ABU DZAR
          </h1>
          <h1 className="text-[60px] leading-[90px] font-bold text-white">
            AL-GHIFARI
          </h1>
        </div>
        <h6 className="text-lg text-white font-medium">
          Website ini merupakan sebuah ikhtiar kami untuk menjelaskan beberapa
          hal seputar yang ada di Masjid Abu Dzar Al-Ghifari.
        </h6>
      </div>

      {/* Img Section */}
      <img src={fotoImg} alt="foto" className="w-[900px]" />
    </div>
  );
}
