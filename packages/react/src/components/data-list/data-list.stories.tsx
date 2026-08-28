import { InfoIcon } from "@phosphor-icons/react";
import preview from "#/storybook/preview";
import { Button, DataList, Popover } from "..";

const meta = preview.meta({
  component: DataList,
  parameters: {
    docs: {
      description: {
        component:
          "Presents label-value pairs in a readable list for summaries, metadata, and detail views.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Item: DataList.Item,
    Root: DataList.Root,
  },
  title: "Components/Data Display/Data List",
});

export const Default = meta.story({
  args: {
    items: [
      { label: "New users", value: "234" },
      { label: "Sales", value: "£12,340" },
      { label: "Revenue", value: "3,450" },
    ],
  },
});

export const OrientationHorizontal = meta.story({
  render: () => (
    <DataList.Root orientation="horizontal">
      <DataList.Item value="Jane">First name</DataList.Item>
      <DataList.Item value="Doe">Last name</DataList.Item>
      <DataList.Item value="jane.doe@example.com">Email</DataList.Item>
    </DataList.Root>
  ),
});

export const OrientationVertical = meta.story({
  render: () => (
    <DataList.Root orientation="vertical">
      <DataList.Item value="Jane">First name</DataList.Item>
      <DataList.Item value="Doe">Last name</DataList.Item>
      <DataList.Item value="jane.doe@example.com">Email</DataList.Item>
    </DataList.Root>
  ),
});

export const Separator = meta.story({
  render: () => {
    const data = [
      { label: "First name", value: "Jane" },
      { label: "Last name", value: "Doe" },
      { label: "Email", value: "jane.doe@example.com" },
      { label: "Phone", value: "1234567890" },
      { label: "Address", value: "1234 Main St, Anytown, USA" },
    ];
    return (
      <DataList.Root className="divide-y">
        {data.map((item) => (
          <DataList.Item key={item.label} value={item.value}>
            {item.label}
          </DataList.Item>
        ))}
      </DataList.Root>
    );
  },
});

export const InfoTip = meta.story({
  render: () => {
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
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `DataList.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => (
    <DataList.Root>
      <DataList.Item value="234">New users</DataList.Item>
      <DataList.Item value="£12,340">Sales</DataList.Item>
      <DataList.Item value="3,450">Revenue</DataList.Item>
    </DataList.Root>
  ),
});
