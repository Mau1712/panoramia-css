import { GlobalContainerElement } from "./GlobalContainer.elements";

interface GlobalContainerProps {
  children: React.ReactNode;
  bg?: string;
  bgImage?: string;
  fullWidth?: boolean;
}

export const GlobalContainer = ({
  children,
  bg,
  bgImage,
  fullWidth,
}: GlobalContainerProps) => {
  return (
    <GlobalContainerElement $bg={bg} $bgImage={bgImage} $fullWidth={fullWidth}>
      {children}
    </GlobalContainerElement>
  );
};
