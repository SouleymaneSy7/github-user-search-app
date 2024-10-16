import { type ComponentPropsWithoutRef } from "react";

type InputsProps = {
  id?: string;
  type: "text" | "email" | "search";
} & ComponentPropsWithoutRef<"input">;

const Inputs = ({ id, type, ...delegatedProps }: InputsProps) => {
  return <input id={id} type={type} {...delegatedProps} />;
};

export default Inputs;
