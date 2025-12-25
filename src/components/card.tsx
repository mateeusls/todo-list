import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-lg border border-solid bg-white shadow-sm border-gray-200",
  {
    variants: {
      size: {
        none: "",
        md: "p-5",
      },
    },
    defaultVariants: {
      size: "none",
    },
  }
);

export interface CardProps
  extends VariantProps<typeof cardVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export function Card({
  as = "div",
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children
  );
}
