import type { ReactNode } from "react";
import { SectionContainerElement } from "./SectionContainer.elements";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export const SectionContainer = ({
  children,
  className,
}: SectionContainerProps) => {
  return (
    <SectionContainerElement className={className}>
      {children}
    </SectionContainerElement>
  );
};
