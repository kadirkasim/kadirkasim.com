import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
};

export function Container({ children, className = "", as: Tag = "div" }: Props) {
  return (
    <Tag className={`mx-auto w-full min-w-0 max-w-[1180px] px-5 sm:px-8 ${className}`}>{children}</Tag>
  );
}
