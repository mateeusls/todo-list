import { cva, type VariantProps } from "class-variance-authority";

export const skeletonVariants = cva(
  "bg-gray-200 animate-pulse rounded pointer-events-none",
  {
    variants: {
      rounded: {
        sm: "rounded-sm",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      rounded: "lg",
    },
  }
);

export interface SkeletonProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof skeletonVariants> {}

export function Skeleton({ rounded, className, ...props }: SkeletonProps) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props} />
  );
}
