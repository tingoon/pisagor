import { CircularProgress } from "@pisagor/react";
import { circularProgressRecipe } from "@pisagor/recipes";
import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

const brandCircularProgressRecipe = tv({
  extend: circularProgressRecipe,
  slots: { range: "stroke-emerald-600" },
  variants: {},
});

export function CustomRecipe() {
  const [progress, setProgress] = useState(24);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(72), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CircularProgress recipe={brandCircularProgressRecipe} value={progress} />
  );
}
