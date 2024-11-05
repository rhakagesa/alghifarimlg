type TextLogoProps = {
  imgIcon: string;
  text: string;
};

export default function TextLogo({ imgIcon, text }: TextLogoProps) {
  return (
    <div className="flex items-center mb-2">
      <img src={imgIcon} alt="wa-icon" className="w-6 h-6" />
      <p className="text-white text-lg font-medium ml-2 max-xl:text-sm">
        {text}
      </p>
    </div>
  );
}
