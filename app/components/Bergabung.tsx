import { Link } from "@remix-run/react";
import Button from "./Button";
import TextLogo from "./FooterComponents/TextLogo";
import TextLogoContainer from "./FooterComponents/TextLogoContainer";

export default function Bergabung() {
  return (
    <section className="w-full min-h-max">
      <div className="flex justify-center items-center px-32 pb-20 max-md:px-10 max-md:flex-col max-md:gap-10">
        <div className="w-2/4 max-md:w-full max-md:text-center">
          <h1 className="text-5xl max-xl:text-3xl max-lg:text-2xl font-bold text-[#21536F] mb-5">
            IKUTI INFORMASI TERBARU KITA DENGAN BERGABUNG GRUP WHATSAPP
          </h1>
          <Button className="rounded-[60px] max-lg:text-sm bg-[#357BA2] text-lg text-white font-bold px-6 py-2 hover:text-black w-fit">
            <Link to="#">Bergabung</Link>
          </Button>
        </div>
        <div className="w-2/4 max-md:w-full bg-[#21536F] rounded-3xl lg:p-10 p-4">
          <TextLogoContainer
            text="INFORMASI YANG BISA ANDA DAPATKAN :"
            type="bergabung"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-y-10">
              <TextLogo
                imgIcon="/checklist.svg"
                text="Info Kajian Masjid"
                type="bergabung"
              />
              <TextLogo
                imgIcon="/checklist.svg"
                text="Info Update Seputar Masjid"
                type="bergabung"
              />
              <TextLogo
                imgIcon="/checklist.svg"
                text="Info Kajian Spesial"
                type="bergabung"
              />
              <TextLogo
                imgIcon="/checklist.svg"
                text="Info Donasi Program"
                type="bergabung"
              />
            </div>
          </TextLogoContainer>
        </div>
      </div>
    </section>
  );
}
