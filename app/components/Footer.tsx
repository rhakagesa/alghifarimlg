import TextLogo from "./FooterComponents/TextLogo";
import TextLogoContainer from "./FooterComponents/TextLogoContainer";

const imgIcon = {
  logoImg: "/logo-putih.svg",
  waIcon: "/wa-icon.svg",
  gmailIcon: "/gmail-icon.svg",
  igIcon: "/ig-icon.svg",
  fbIcon: "/fb-icon.svg",
  ytIcon: "/yt-icon.svg",
};

export default function Footer() {
  return (
    <footer className="w-screen min-h-fit bg-[#323232] flex items-center px-20 justify-between max-xl:py-10 max-lg:flex-col max-md:px-5">
      {/* Logo Img */}
      <div className="w-2/6 max-xl:w-1/4 max-lg:w-52">
        <img src={imgIcon.logoImg} alt="logoImg" />
      </div>

      <div className="flex gap-8 w-4/6 max-xl:w-3/4 max-lg:w-full max-md:flex-col max-md:text-center">
        {/* Alamat */}
        <div className="w-[30%] max-md:w-full">
          <h1 className="text-3xl text-white font-semibold mb-4 max-xl:text-xl">
            Alamat
          </h1>
          <p className="text-white text-lg font-medium max-xl:text-sm">
            Perumahan Griya Shanta, Jl. Candi Jolotundo I Blk. E No.219A,
            Mojolangu, Lowokwaru, Malang City, East Java 65142
          </p>
        </div>

        {/* Social */}
        <TextLogoContainer text="Sosial Media">
          <TextLogo imgIcon={imgIcon.igIcon} text="@alghifarimlg" />
          <TextLogo
            imgIcon={imgIcon.fbIcon}
            text="Masjid Abu Dzar Al-Ghifari"
          />
          <TextLogo imgIcon={imgIcon.ytIcon} text="Al-Ghifari Multimedia" />
        </TextLogoContainer>

        {/* Contact */}
        <TextLogoContainer text="Kontak">
          <TextLogo imgIcon={imgIcon.waIcon} text="081313-555-182" />
          <TextLogo
            imgIcon={imgIcon.gmailIcon}
            text="ldps.alghifari.malang@gmail.com"
          />
        </TextLogoContainer>
      </div>
    </footer>
  );
}
