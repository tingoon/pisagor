/** @jsxImportSource solid-js */
import { CircleNotchIcon } from "@pisagor/solid/icons";
import { Steps } from "@pisagor/solid/steps";

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
          <Steps.Item index={index}>
            <Steps.Trigger disabled>
              <Steps.Indicator>
                {item.loading ? (
                  <CircleNotchIcon class="animate-spin" />
                ) : (
                  index + 1
                )}
              </Steps.Indicator>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
    </Steps>
  );
}
