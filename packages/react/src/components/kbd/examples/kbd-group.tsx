import { Kbd } from "..";

export function KbdGroup() {
  return (
    <div className="text-muted-foreground text-sm">
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
