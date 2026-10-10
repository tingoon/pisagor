import { Progress } from "@pisagor/react";
import { progressRecipe } from "@pisagor/recipes";
import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

const brandProgressRecipe = tv({
  extend: progressRecipe,
  slots: {
    range: "bg-emerald-600",
    track: "bg-emerald-500/20",
  },
  variants: {},
});

export function CustomRecipe() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress recipe={brandProgressRecipe} value={progress} />;
}
