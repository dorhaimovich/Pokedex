import { twMerge } from "tailwind-merge";
import { PokemonType } from "../schemas";

export interface TypeBadgeProps {
  type: PokemonType;
  size?: "small" | "medium" | "large";
  className?: string;
}

const sizeMap = {
  small: "w-10 text-[11px] h-4 rounded-sm",
  medium: "w-20 h-6 rounded-md text-sm",
  large: "w-40 h-8 rounded-md text-lg",
} satisfies Record<string, string>;

export const TypeBadge = ({
  type,
  className,
  size = "medium",
}: TypeBadgeProps) => (
  <div
    className={twMerge(
      "flex justify-center items-center shadow-md",
      `background-color-${type}`,
      sizeMap[size],
      className
    )}
  >
    <p>{type}</p>
  </div>
);
