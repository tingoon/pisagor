import { CreditCardIcon, HardDriveIcon, UserIcon } from "@phosphor-icons/react";
import { Steps } from "..";

export function Icon() {
  const items = [
    { icon: UserIcon, id: "user" },
    { icon: HardDriveIcon, id: "drive" },
    { icon: CreditCardIcon, id: "card" },
  ];
  return (
    <Steps count={items.length}>
      <Steps.List>
        {items.map((item, index) => (
          <Steps.Item index={index} key={item.id}>
            <Steps.Trigger>
              <Steps.Indicator>
                <item.icon />
              </Steps.Indicator>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
    </Steps>
  );
}
