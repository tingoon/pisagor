import { Steps } from "..";

export function Description() {
  const items = [
    { description: "Personal", title: "Info" },
    { description: "Company", title: "Docs" },
    { description: "Create", title: "Team" },
  ];
  return (
    <Steps count={items.length}>
      <Steps.List>
        {items.map((item, index) => (
          <Steps.Item index={index} key={item.title}>
            <Steps.Trigger>
              <Steps.Indicator>{index + 1}</Steps.Indicator>
              <div className="flex flex-col items-start gap-1">
                <Steps.Title>{item.title}</Steps.Title>
                <Steps.Description>{item.description}</Steps.Description>
              </div>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
    </Steps>
  );
}
