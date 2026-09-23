import { InfoIcon } from "@phosphor-icons/react";
import { Button, Popover } from "@pisagor/react";
import { DataList } from "..";
export function InfoTip() {
  const data = [
    {
      info: "Total new user signups this month",
      label: "New users",
      value: "234",
    },
    { info: "Revenue from product sales", label: "Sales", value: "£12,340" },
    {
      info: "Total revenue in the last quarter",
      label: "Revenue",
      value: "3,450",
    },
  ];
  return (
    <DataList.Root>
      {data.map((item) => (
        <DataList.Item
          classNames={{ label: "inline-flex items-center gap-1.5" }}
          key={item.label}
          value={item.value}
        >
          {item.label}
          <Popover modal={false} positioning={{ placement: "top" }}>
            <Popover.Trigger asChild>
              <Button aria-label={`Info about ${item.label}`} size="icon-sm" variant="ghost">
                <InfoIcon />
              </Button>
            </Popover.Trigger>
            <Popover.Content className="w-max text-sm">{item.info}</Popover.Content>
          </Popover>
        </DataList.Item>
      ))}
    </DataList.Root>
  );
}
