type TextLogoProps = {
  imgIcon: string;
  text: string;
  type: string;
};

export default function TextLogo({ imgIcon, text, type }: TextLogoProps) {
  if (type === "footer")
    return (
      <div className="flex items-center mb-2">
        <img src={imgIcon} alt="wa-icon" className="w-6 h-6" />
        <p className="text-white text-lg font-medium ml-2 max-xl:text-sm">
          {text}
        </p>
      </div>
    );

  if (type === "bergabung")
    return (
      <div className="flex items-center mb-2">
        <img src={imgIcon} alt="wa-icon" className="w-8 h-8" />
        <p className="text-white text-xl font-medium ml-2 max-xl:text-sm">
          {text}
        </p>
      </div>
    );
}
