import { SignaturePad } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const [paths, setPaths] = createSignal<string[]>([]);

  return (
    <SignaturePad
      onDraw={(details) => setPaths(details.paths)}
      onDrawEnd={(details) => setPaths(details.paths)}
      paths={paths()}
    />
  );
}
