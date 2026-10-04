import { Timeline } from "@pisagor/react";

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
