/** @jsxImportSource solid-js */
import { Prose } from "@pisagor/solid/prose";

export function Html() {
  return (
    <Prose
      html={`
          <h2>Trusted HTML</h2>
          <p>Content rendered through the <code>html</code> prop for CMS markup.</p>
        `}
    />
  );
}
