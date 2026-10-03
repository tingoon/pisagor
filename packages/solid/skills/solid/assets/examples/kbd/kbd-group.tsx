/** @jsxImportSource solid-js */
import { Kbd } from "@pisagor/solid/kbd";

export function KbdGroup() {
  return (
    <div class="text-muted-foreground text-sm">
      Use{" "}
      <Kbd.Group>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
      </Kbd.Group>{" "}
      to open the command palette
    </div>
  );
}
