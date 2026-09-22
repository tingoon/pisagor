import { CircleNotchIcon } from "@phosphor-icons/react";
import { Steps } from "..";

export function Loading() {
  const items = [
    { id: "step-1", loading: true },
    { id: "step-2", loading: false },
    { id: "step-3", loading: false },
  ];
  return (
    <Steps count={items.length}>
      <Steps.List>
        {items.map((item, index) => (
          <Steps.Item index={index} key={item.id}>
            <Steps.Trigger disabled>
              <Steps.Indicator>
                {item.loading ? <CircleNotchIcon className="animate-spin" /> : index + 1}
              </Steps.Indicator>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
    </Steps>
  );
}
