import source from "./default.tsx?raw";
import { Button, Tour } from "@pisagor/solid";

export function Default() {
  return (
    <Tour
      steps={[
        {
          actions: [{ action: "next", label: "Next" }],
          description: "This is the first step.",
          id: "step-1",
          title: "Welcome",
          type: "dialog",
        },
        {
          actions: [{ action: "dismiss", label: "Close" }],
          description: "Tour complete.",
          id: "step-2",
          title: "Done",
          type: "dialog",
        },
      ]}
    >
      <Tour.Trigger
        asChild={(props) => <Button {...props()}>Start tour</Button>}
      />
      <Tour.Content />
    </Tour>
  );
}

export { source as DefaultSource };
