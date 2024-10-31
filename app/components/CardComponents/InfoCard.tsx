import { Link } from "@remix-run/react";

export type InfoCardProps = {
  id: number;
  img: string;
  title: string;
  description: string;
};

export default function InfoCard({ img, title, description }: InfoCardProps) {
  return (
    <div className="w-[572px] h-[362px] max-md:w-[350px] max-md:h-[250px] border-2 border-[#21536F] rounded-xl p-5 flex gap-6">
      <img src={img} alt="gambar" className="max-md:w-[150px] " />
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold text-[#21536F] mt-10 mb-5 max-md:text-xl max-md:mt-3 max-md:mb-2 ">
          {title}
        </h1>
        <p className="text-md max-md:text-sm overflow-hidden text-[#21536F] max-md:mb-4">
          {description}
        </p>
        <Link to="#" className="self-end mt-auto">
          <button className="text-[#21536F] text-md font-medium max-md:text-xs">
            Selengkapnya →
          </button>
        </Link>
      </div>
    </div>
  );
}