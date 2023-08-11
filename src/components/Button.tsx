import React from "react";
import clsx from "clsx";

type Props = {
  variant?: "primary" | "danger";
  text?: string;
  icon?: React.ReactNode;
  outlined?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  outlined = false,
  variant = "primary",
  text,
  icon,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(
        "py-2 rounded-md flex gap-1 items-center active:scale-95 transition",
        icon && text && "pr-3 pl-2.5",
        icon && !text && "px-2.5",
        !icon && text && "px-3",
        variant === "primary" && "active:bg-blue-600",
        variant === "primary" &&
          (outlined
            ? "bg-white text-blue-50 border border-blue-500 hover:text-white hover:bg-blue-500"
            : "bg-blue-500 text-white"),
        variant === "danger" && "active:bg-red-600",
        variant === "danger" &&
          (outlined
            ? "bg-transparent text-red-500 border border-red-500 hover:text-white hover:bg-red-500"
            : "bg-red-500 text-white")
      )}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
      {...props}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
