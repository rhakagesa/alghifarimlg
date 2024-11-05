import { Link } from "@remix-run/react";

export type ProgramCardProps = {
  id: number;
  img: string;
  title: string;
  description: string;
};

export default function ProgramCard({
  img,
  title,
  description,
}: ProgramCardProps) {
  return (
    <div className="group bg-white w-[390px] h-[485px] max-xl:w-[290px] max-xl:h-[385px] border-2 border-[#237DB0] rounded-[20px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#3E9CD1] p-5">
      <div
        className={`w-[350px] h-[300px] max-xl:w-[250px] max-xl:h-[200px] bg-[url('${img}')] bg-cover transition-all duration-300 ease-in-out group-hover:opacity-90`}
      ></div>
      <div className="flex flex-col text-[#21536F] w-[350px] h-[96px] max-xl:w-[250px] transition-colors duration-300 ease-in-out group-hover:text-white">
        <h1 className="text-3 xl font-semibold my-3">{title}</h1>
        <p className="text-md mb-6">{description}</p>
        <Link to="#" className="self-end mt-auto">
          <button className="text-xs transition-colors duration-300 ease-in-out group-hover:text-white">
            Selengkapnya →
          </button>
        </Link>
      </div>
    </div>
  );
}
