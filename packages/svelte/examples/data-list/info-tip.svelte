<script lang="ts">
import { Button, DataList, Popover } from "@pisagor/svelte";
import InfoIcon from "phosphor-svelte/lib/InfoIcon";

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
</script>

<DataList.Root>
  {#each data as item}
    <DataList.Item
      classNames={{ label: "inline-flex items-center gap-1.5" }}
      value={item.value}
    >
      {item.label}
      <Popover modal={false} positioning={{ placement: "top" }}>
        <Popover.Trigger>
          {#snippet asChild(
            props,
          )}
            <Button
              {...props()}
              aria-label={`Info about ${item.label}`}
              size="icon-sm"
              variant="ghost"
            >
              <InfoIcon />
            </Button>
          {/snippet}
        </Popover.Trigger>
        <Popover.Content class="w-max text-sm">{item.info}</Popover.Content>
      </Popover>
    </DataList.Item>
  {/each}
</DataList.Root>
