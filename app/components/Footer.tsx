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
    <footer className="w-full min-h-max bg-[#323232]">
      <div className="flex items-center justify-between px-10 py-5 gap-8 max-md:flex-col">
        {/* Logo Img */}
        <div className="w-1/4 max-lg:w-52">
          <img src={imgIcon.logoImg} alt="logoImg" />
        </div>

        <div className="w-3/4 gap-8 justify-between flex max-lg:w-full max-md:flex-col max-md:justify-center max-md:items-center">
          <div className="flex flex-col gap-4 w-2/6 max-lg:w-3/6 max-md:w-full">
            {/* Social */}
            <TextLogoContainer text="Sosial Media" type="footer">
              <TextLogo
                imgIcon={imgIcon.igIcon}
                text="@alghifarimlg"
                type="footer"
              />
              <TextLogo
                imgIcon={imgIcon.fbIcon}
                text="Masjid Abu Dzar Al-Ghifari"
                type="footer"
              />
              <TextLogo
                imgIcon={imgIcon.ytIcon}
                text="Al-Ghifari Multimedia"
                type="footer"
              />
            </TextLogoContainer>

            {/* Contact */}
            <TextLogoContainer text="Kontak" type="footer">
              <TextLogo
                imgIcon={imgIcon.waIcon}
                text="081313-555-182"
                type="footer"
              />
              <TextLogo
                imgIcon={imgIcon.gmailIcon}
                text="ldps.alghifari.malang@gmail.com"
                type="footer"
              />
            </TextLogoContainer>
          </div>

          <div className="flex flex-col gap-4 w-4/6 max-xl:w-3/6 max-md:w-full">
            {/* Alamat */}
            <TextLogoContainer text="Alamat" type="footer">
              <p className="text-white text-lg font-medium max-xl:text-sm">
                Perumahan Griya Shanta, Jl. Candi Jolotundo I Blk. E No.219A,
                Mojolangu, Lowokwaru, Malang City, East Java 65142
              </p>
            </TextLogoContainer>
            <iframe
              title="masjidadg"
              id="mapmasjidadg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.554081451916!2d112.62161337500677!3d-7.941550692082618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629de1f44e915%3A0x8b691860f9947600!2sMasjid%20Abu%20Dzar%20Al-Ghifari!5e0!3m2!1sid!2sid!4v1730818332409!5m2!1sid!2sid"
              className="w-full h-full rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
