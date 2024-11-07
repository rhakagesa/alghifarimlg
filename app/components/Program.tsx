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
    <section className="w-full min-h-max">
      <div className="relative h-min flex">
        <div className="absolute w-full z-10 md:self-center max-md:self-center">
          <h1 className="text-5xl font-bold text-white mb-14 xl:ml-32 max-xl:text-center max-md:text-2xl">
            PROGRAM MASJID
          </h1>
          <div className="flex justify-around max-md:flex-col max-md:gap-5 max-md:items-center">
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
        </div>
        <div className="absolute top-5">
          <img src="/bg-blue-1.svg" alt="bg-blue-1" className="w-screen" />
          <div className="w-full bg-[#21536F] h-[450px] max-md:h-[1200px]"></div>
          <img
            src="/bg-blue-1.svg"
            alt="bg-blue-1"
            className="w-screen rotate-180"
          />
        </div>
        <div className="opacity-10">
          <img src="/bg-blue-1.svg" alt="bg-blue-1" className="w-screen" />
          <div className="w-full bg-[#21536F] h-[500px] max-md:h-[1250px]"></div>
          <img
            src="/bg-blue-1.svg"
            alt="bg-blue-1"
            className="w-screen rotate-180"
          />
        </div>
      </div>
    </section>
  );
}
