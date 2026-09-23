import { useState } from "react";
import { Rating } from "..";

export function Controlled() {
  const [value, setValue] = useState(0);

  const isCorrectRating = value === 5;

  return (
    <div className="flex flex-col gap-2 text-center text-sm">
      <p>Select the rating 5</p>
      <Rating onValueChange={(value) => setValue(value ?? 0)} value={value} />
      <p className="text-center">{isCorrectRating ? "✅" : "❌"}</p>
    </div>
  );
}
