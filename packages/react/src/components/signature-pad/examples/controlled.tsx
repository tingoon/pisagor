import { useState } from "react";
import { SignaturePad } from "..";

export function Controlled() {
  const [paths, setPaths] = useState<string[]>([]);

  return (
    <SignaturePad
      onDraw={(details) => setPaths(details.paths)}
      onDrawEnd={(details) => setPaths(details.paths)}
      paths={paths}
    />
  );
}
