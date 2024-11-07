import { Link } from "@remix-run/react";

export type InfoCardProps = {
  id: number;
  img: string;
  title: string;
  description: string;
};

export default function InfoCard({ img, title, description }: InfoCardProps) {
  return (
    <div className="min-w-fit max-md:w-[200px] border-2 border-[#21536F] rounded-xl p-5 flex gap-6 hover:shadow-xl hover:shadow-slate-400 transition-all duration-300 ease-in-out max-md:flex max-md:flex-col max-md:items-center ">
      <img
        src={img}
        alt="gambar"
        className="w-[200px] max-xl:w-[150px] max-lg:w-[100px] max-md:w-[200px] max-md:h-[150px]"
      />
      <div className="flex flex-col text-[#21536F] max-md:w-[200px]">
        <h1 className="text-3xl font-bold mb-5 max-lg:mb-2 max-lg:text-xl max-md:text-lg max-md:mb-1">
          {title}
        </h1>
        <p className="text-xl max-lg:text-lg max-md:text-sm">{description}</p>
        <Link to="#" className="self-end mt-auto">
          <button className="text-lg font-medium max-lg:text-md max-md:text-xs">
            Selengkapnya →
          </button>
        </Link>
      </div>
    </div>
  );
}
