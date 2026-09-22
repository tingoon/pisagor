import { Kbd } from "..";

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Kbd variant="default">K</Kbd>
      <Kbd.Group>
        <Kbd variant="outline">K</Kbd>
        <Kbd variant="outline">⌘</Kbd>
        <Kbd variant="outline">⌃</Kbd>
      </Kbd.Group>
    </div>
  );
}
