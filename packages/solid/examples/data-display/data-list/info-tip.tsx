import { Portal } from "solid-js/web";
import { InfoIcon } from "@squidlab/phosphor-solid/icons";
import { Button, DataList, Popover } from "@pisagor/solid";

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
          value={item.value}
        >
          {item.label}
          <Popover.Root modal={false} positioning={{ placement: "top" }}>
            <Popover.Trigger
              asChild={(props) => (
                <Button
                  {...props()}
                  aria-label={`Info about ${item.label}`}
                  size="icon-sm"
                  variant="ghost"
                >
                  <InfoIcon />
                </Button>
              )}
            />
            <Portal>
              <Popover.Positioner>
                <Popover.Content class="w-max text-sm">
                  {item.info}
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>
        </DataList.Item>
      ))}
    </DataList.Root>
  );
}
