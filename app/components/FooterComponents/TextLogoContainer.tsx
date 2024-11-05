import { ReactNode } from "react";

type TextLogoContainerProps = {
  children: ReactNode;
  text: string;
};

export default function TextLogoContainer({
  children,
  text,
}: TextLogoContainerProps) {
  return (
    <div className="w-full max-md:w-full max-md:flex max-md:flex-col max-md:items-center">
      <h1 className="text-2xl text-white font-semibold mb-4 max-xl:text-xl">
        {text}
      </h1>
      {children}
    </div>
  );
}
