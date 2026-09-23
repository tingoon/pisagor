import { Timeline } from "..";

export function Default() {
  return (
    <Timeline
      items={[
        {
          description: "Repository scaffolded with shared packages.",
          title: "Project created",
        },
        {
          description: "Primitives and form controls published.",
          title: "Design system shipped",
        },
        {
          description: "Apps consume the library in production.",
          title: "First release",
        },
      ]}
    />
  );
}
