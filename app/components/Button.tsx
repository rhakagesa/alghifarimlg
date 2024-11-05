import { ReactEventHandler, ReactNode } from "react";

export default function Button({
  className,
  children,
  onClick,
}: {
  className: string;
  children: ReactNode;
  onClick?: ReactEventHandler;
}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
