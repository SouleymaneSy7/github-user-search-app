import React, { type FC, type HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLElement> {
  level: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ level, children, ...delegatedProps }) => {
  const Heading: FC<HTMLAttributes<HTMLElement>> = ({ ...delegatedProps }) => {
    return React.createElement(level, delegatedProps, children);
  };

  return <Heading {...delegatedProps}>{children}</Heading>;
};

export default Title;
