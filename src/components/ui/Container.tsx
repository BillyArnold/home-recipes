import { ReactNode } from "react";

interface ContainerProps {
    children?: ReactNode;
 }

export default function Container({ children }: ContainerProps) {
    return (
      <div className="max-w-3xl lg:max-w-5xl px-8 m-auto">{children}</div>
    )
}