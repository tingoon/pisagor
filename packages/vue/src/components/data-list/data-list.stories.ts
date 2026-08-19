import { PhInfo } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue/button";
import { DataList } from "@pisagor/vue/data-list";
import { Popover } from "@pisagor/vue/popover";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: DataList,
  parameters: {
    docs: {
      description: {
        component:
          "Presents label-value pairs in a readable list for summaries, metadata, and detail views.",
      },
    },
  },
  subcomponents: {
    Item: DataList.Item,
    Root: DataList.Root,
  },
  title: "Components/Data Display/Data List",
});

export const Default = meta.story({
  render: () => ({
    components: { DataList },
    setup() {
      const items = [
        { label: "New users", value: "234" },
        { label: "Sales", value: "£12,340" },
        { label: "Revenue", value: "3,450" },
      ];

      return { items };
    },
    template: `
      <div class="w-96 rounded-xl border bg-card p-4">
        <DataList :items="items" />
      </div>
    `,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { DataList },
    template: `
      <div class="w-96 rounded-xl border bg-card p-4">
        <DataList.Root orientation="horizontal">
          <DataList.Item value="Jane">First name</DataList.Item>
          <DataList.Item value="Doe">Last name</DataList.Item>
          <DataList.Item value="jane.doe@example.com">Email</DataList.Item>
        </DataList.Root>
      </div>
    `,
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { DataList },
    template: `
      <div class="w-96 rounded-xl border bg-card p-4">
        <DataList.Root orientation="vertical">
          <DataList.Item value="Jane">First name</DataList.Item>
          <DataList.Item value="Doe">Last name</DataList.Item>
          <DataList.Item value="jane.doe@example.com">Email</DataList.Item>
        </DataList.Root>
      </div>
    `,
  }),
});

export const Separator = meta.story({
  render: () => ({
    components: { DataList },
    setup() {
      const data = [
        { label: "First name", value: "Jane" },
        { label: "Last name", value: "Doe" },
        { label: "Email", value: "jane.doe@example.com" },
        { label: "Phone", value: "1234567890" },
        { label: "Address", value: "1234 Main St, Anytown, USA" },
      ];

      return { data };
    },
    template: `
      <div class="w-96 rounded-xl border bg-card p-4">
        <DataList.Root class="divide-y" >
          <DataList.Item v-for="item in data" :key="item.label" :value="item.value">
            {{ item.label }}
          </DataList.Item>
        </DataList.Root>
      </div>
    `,
  }),
});

export const InfoTip = meta.story({
  render: () => ({
    components: { Button, DataList, PhInfo, Popover },
    setup() {
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

      return { data };
    },
    template: `
      <div class="w-96 rounded-xl border bg-card p-4">
        <DataList.Root>
          <DataList.Item
            v-for="item in data"
            :classNames="{ label: 'inline-flex items-center gap-1.5' }"
            :key="item.label"
            :value="item.value"
          >
            {{ item.label }}
            <Popover :modal="false" :positioning="{ placement: 'top' }">
              <Popover.Trigger :asChild="true">
                <Button :aria-label="\`Info about \${item.label}\`" size="icon-sm" variant="ghost">
                  <PhInfo />
                </Button>
              </Popover.Trigger>
              <Popover.Content class="w-max text-sm">{{ item.info }}</Popover.Content>
            </Popover>
          </DataList.Item>
        </DataList.Root>
      </div>
    `,
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `DataList.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => ({
    components: { DataList },
    template: `
      <div class="w-96 rounded-xl border bg-card p-4">
        <DataList.Root>
          <DataList.Item value="234">New users</DataList.Item>
          <DataList.Item value="£12,340">Sales</DataList.Item>
          <DataList.Item value="3,450">Revenue</DataList.Item>
        </DataList.Root>
      </div>
    `,
  }),
});
