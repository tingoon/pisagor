import { SignaturePad } from "@pisagor/react/signature-pad";
import { useState } from "react";

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
