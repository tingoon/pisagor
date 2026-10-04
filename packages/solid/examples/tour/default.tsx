/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";
import { Tour } from "@pisagor/solid/tour";

export function Default() {
  return (
    <Tour
      steps={[
        {
          actions: [{ action: "next", label: "Next" }],
          description: "This is the first step.",
          id: "step-1",
          title: "Welcome",
        },
        {
          actions: [{ action: "dismiss", label: "Close" }],
          description: "Tour complete.",
          id: "step-2",
          title: "Done",
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
