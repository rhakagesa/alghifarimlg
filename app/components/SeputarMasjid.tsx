import { Link } from "@remix-run/react";
import Button from "./Button";

export default function SeputarMasjid() {
  return (
    <section className="w-full min-h-max bg-[url('/vector.svg')] bg-no-repeat bg-[length:578px_443px] bg-right-top max-md:h-min">
      {/* Content Section */}
      <div className="flex justify-center px-32 py-44 items-center max-md:flex-col max-md:text-center max-md:px-10 max-xl:gap-32 max-lg:gap-16 max-md:gap-10">
        {/* Img Section */}
        <div className="relative flex w-2/4 max-md:w-full justify-center">
          <div className="absolute z-10 hover:-translate-y-20 hover:translate-x-20 max-lg:hover:-translate-y-10 max-lg:hover:translate-x-10 transition-all duration-300 ease-in-out bg-[url('/seputar-masjid-img.svg')] bg-cover w-[311px] h-[396px] max-xl:w-[281px] max-xl:h-[346px] max-lg:w-[231px] max-lg:h-[296px] rounded-br-[80px] rounded-tl-[80px] max-lg:rounded-br-[40px] max-lg:rounded-tl-[40px] shadow-2xl shadow-black"></div>
          <div className="bg-gradient-to-b from-[#247EB1] to-[#21536F] bg-cover w-[311px] h-[396px] max-xl:w-[281px] max-xl:h-[346px] max-lg:w-[231px] max-lg:h-[296px] rounded-br-[80px] rounded-tl-[80px] max-lg:rounded-br-[40px] max-lg:rounded-tl-[40px]"></div>
        </div>

        {/* Text Section */}
        <div className="w-2/4 text-[#21536F] max-md:w-full">
          <h1 className="text-5xl font-bold max-xl:text-2xl max-lg:text-xl mb-5">
            SEPUTAR MASJID
          </h1>

          <p className="text-2xl max-xl:text-xl max-lg:text-sm mb-5">
            <b>Masjid Abu Dzar Al - Ghifari</b> merupakan masjid yang berlokasi
            di tengah pusat <b>Kota Malang</b>. Memiliki beberapa{" "}
            <b>program </b>
            diantaranya seperti <b>kajian rutin</b>, <b>buka puasa bersama</b>{" "}
            dan <b>banyak kegiatan</b> lainnya. Sehingga menjadikan masjid
            tempat untuk berkumpul <b>memperkokoh akidah</b> dan
            <b> merajut ukhuwah islamiyah</b>.
          </p>
          <Button className="text-lg font-medium max-lg:text-xs">
            <Link to="#">Selengkapnya →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
