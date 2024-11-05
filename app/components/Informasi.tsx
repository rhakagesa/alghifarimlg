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
    <section className="w-screen h-fit mb-10">
      <hr className="w-[88%] mx-auto m-0 bg-slate-100 mt-9" />
      <h1 className="text-5xl text-[#21536F] font-bold w-full pl-24 my-14 max-xl:text-center max-xl:pl-0 max-md:text-2xl">
        INFORMASI TERBARU
      </h1>
      <div className="grid grid-cols-2 gap-10 px-32 max-xl:flex max-xl:flex-col max-xl:items-center">
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
    </section>
  );
}
