import source from "./default.tsx?raw";
import { Timeline } from "@pisagor/solid";

export function Default() {
  return (
    <Timeline
      items={[
        { description: "Order left warehouse", title: "Shipped" },
        { description: "Arrived at destination", title: "Delivered" },
      ]}
    />
  );
}

export { source as DefaultSource };
