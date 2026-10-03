import { Prose } from "@pisagor/react/prose";

export function Separator() {
  return (
    <Prose>
      <p>First section of content.</p>
      <hr />
      <p>Second section after the divider.</p>
    </Prose>
  );
}
