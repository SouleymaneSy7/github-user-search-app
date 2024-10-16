import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonPropsType = {
  children: ReactNode;
  type: "button" | "submit";
} & ComponentPropsWithoutRef<"button">;

const Buttons = ({ children, type, ...delegatedProps }: ButtonPropsType) => {
  return (
    <button type={type} {...delegatedProps}>
      {children}
    </button>
  );
};

export default Buttons;
