import { Button } from "../../button";
import { Tour } from "../index";

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
      <Tour.Trigger asChild={(props) => <Button {...props()}>Start tour</Button>} />
      <Tour.Content />
    </Tour>
  );
}
