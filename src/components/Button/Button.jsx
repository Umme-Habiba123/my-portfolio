import React from "react";
import clsx from "clsx";

export function Button({ children, className, variant = "default", ...props }) {
  const baseStyles =
    "px-4 py-2 rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-400 text-gray-200 hover:bg-gray-800",
    ghost: "text-gray-300 hover:bg-gray-700",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
