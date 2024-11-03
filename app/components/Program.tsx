import ProgramCard, { ProgramCardProps } from "./CardComponents/ProgramCard";

const dummy: ProgramCardProps[] = [
  {
    id: 1,
    img: "/seputar-masjid-img.svg",
    title: "JUDUL KONTEN",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing !",
  },
  {
    id: 2,
    img: "/seputar-masjid-img.svg",
    title: "JUDUL KONTEN2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing !",
  },
  {
    id: 3,
    img: "/seputar-masjid-img.svg",
    title: "JUDUL KONTEN3",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing !",
  },
];

export default function Program() {
  return (
    <section className="w-screen h-screen my-52 max-xl:my-5 max-lg:bg-[#21536F] max-lg:h-[1200px]">
      <div className="relative flex justify-center items-center w-full h-full">
        <h1 className="w-full text-5xl absolute z-[3] font-bold left-16 top-0 text-white max-xl:top-36 max-xl:left-0 max-xl:text-center max-lg:top-52">
          PROGRAM MASJID
        </h1>
        <div className="absolute flex z-[3] w-full max-lg:flex-col max-lg:items-center justify-around max-xl:mt-10">
          {dummy.map((item) => (
            <ProgramCard
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <img
          src="/bg-1.svg"
          alt="bg-1"
          className="absolute w-[2016px] h-[967px] max-lg:hidden "
        />
        <img
          src="/bg-2.svg"
          alt="bg-2"
          className="absolute w-[1846px] h-[955px] max-lg:hidden"
        />
      </div>
    </section>
  );
}
