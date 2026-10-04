/** @jsxImportSource solid-js */
import { Timeline } from "@pisagor/solid/timeline";

export function Horizontal() {
  return (
    <Timeline
      items={[
        { title: "Planned" },
        { title: "In progress" },
        { title: "Shipped" },
      ]}
      orientation="horizontal"
    />
  );
}
