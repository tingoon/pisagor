<script lang="ts">
import { DataList } from "@pisagor/svelte/data-list";

const data = [
    { label: "First name", value: "Jane" },
    { label: "Last name", value: "Doe" },
    { label: "Email", value: "jane.doe@example.com" },
    { label: "Phone", value: "1234567890" },
    { label: "Address", value: "1234 Main St, Anytown, USA" },
  ];
</script>

<DataList.Root class="divide-y">
      {#each data as item}
<DataList.Item value={item.value}>
          {item.label}
        </DataList.Item>
{/each}
    </DataList.Root>
