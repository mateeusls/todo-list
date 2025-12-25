import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";

export const inputTextVariants = cva(
  "border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none",
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },
      disabled: {
        true: "pointer-events-none opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

export interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export function InputText({
  disabled,
  size,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(
        inputTextVariants({ disabled, size }),
        textVariants(),
        className
      )}
      {...props}
    />
  );
}
