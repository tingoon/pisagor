import { Timeline } from "../index";

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
