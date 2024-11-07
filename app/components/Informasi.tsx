import InfoCard, { InfoCardProps } from "./CardComponents/InfoCard";

const dummy: InfoCardProps[] = [
  {
    id: 1,
    img: "/seputar-masjid-img.svg",
    title: "JUDUL KONTEN YAA",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing ! Consectetur voluptates perspiciatis voluptas consequuntur!",
  },
  {
    id: 2,
    img: "/seputar-masjid-img.svg",
    title: "JUDUL KONTEN YAA2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing ! Consectetur voluptates perspiciatis voluptas consequuntur!",
  },
  {
    id: 3,
    img: "/seputar-masjid-img.svg",
    title: "JUDUL KONTEN YAA3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing ! Consectetur voluptates perspiciatis voluptas consequuntur!",
  },
  {
    id: 4,
    img: "/seputar-masjid-img.svg",
    title: "JUDUL KONTEN YA4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing  quis soluta! Consectetur voluptates perspiciatis voluptas consequuntur!",
  },
];

export default function Informasi() {
  return (
    <section className="w-full min-h-fit">
      <div className="px-32 max-md:px-10">
        <hr className="mx-auto m-0 bg-slate-200 p-[0.5px]" />
        <div className="text-[#21536F] py-14 max-md:pt-0">
          <h1 className="text-5xl font-bold w-full my-14 max-xl:text-center max-xl:pl-0 ">
            INFORMASI TERBARU
          </h1>
          <div className="grid grid-cols-2 gap-5 max-xl:flex max-xl:flex-col max-xl:items-center">
            {dummy.map((item) => (
              <InfoCard
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
