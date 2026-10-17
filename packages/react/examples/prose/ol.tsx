import source from "./ol.tsx?raw";
import { Prose } from "@pisagor/react";

export function Ol() {
  return (
    <Prose>
      <ol>
        <li>First, gather the ingredients.</li>
        <li>Then, mix them together.</li>
        <li>Finally, bake for 30 minutes.</li>
      </ol>
    </Prose>
  );
}

export { source as OlSource };
