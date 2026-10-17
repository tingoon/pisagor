<script module lang="ts">
  import source from "./orientation-vertical.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { DataList } from "@pisagor/svelte";
</script>

<DataList.Root orientation="vertical">
  <DataList.Item value="Jane">First name</DataList.Item>
  <DataList.Item value="Doe">Last name</DataList.Item>
  <DataList.Item value="jane.doe@example.com">Email</DataList.Item>
</DataList.Root>
