type TextLogoProps = {
  imgIcon: string;
  text: string;
};

export default function TextLogo({ imgIcon, text }: TextLogoProps) {
  return (
    <div className="flex items-center mb-2">
      <img
        src={imgIcon}
        alt="wa-icon"
        className="w-8 h-8 max-xl:w-6 max-xl:h-6"
      />
      <p className="text-white text-lg font-medium ml-2 max-xl:text-sm">
        {text}
      </p>
    </div>
  );
}
