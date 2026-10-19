import { Steps } from "@pisagor/solid";

export function Title() {
  const items = ["Info", "Docs", "Team"];

  return (
    <Steps.Root count={items.length}>
      <Steps.List>
        {items.map((item, index) => (
          <Steps.Item index={index}>
            <Steps.Trigger>
              <Steps.Indicator>{index + 1}</Steps.Indicator>
              <Steps.Title>{item}</Steps.Title>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
    </Steps.Root>
  );
}
