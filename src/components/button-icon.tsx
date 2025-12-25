import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "./icon";
import { Skeleton } from "./skeleton";

export const buttonIconVariants = cva(
  "inline-flex items-center justify-center cursor-pointer transition group",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-gray-200 hover:bg-pink-dark",
        tertiary: "bg-transparent hover:bg-gray-200",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

export const buttonIconSvgVariants = cva("transition", {
  variants: {
    variant: {
      none: "",
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },
    size: {
      sm: "w-4 h-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export interface ButtonIconProps
  extends VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
}

export function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon: IconComponent,
  loading,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({ variant: "none", size, className })}
      />
    );
  }

  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon
        svg={IconComponent}
        className={buttonIconSvgVariants({ variant, size })}
      />
    </button>
  );
}
