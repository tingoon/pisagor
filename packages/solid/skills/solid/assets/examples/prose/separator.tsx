/** @jsxImportSource solid-js */
import { Prose } from "@pisagor/solid/prose";

export function Separator() {
  return (
    <Prose>
      <p>First section of content.</p>
      <hr />
      <p>Second section after the divider.</p>
    </Prose>
  );
}
