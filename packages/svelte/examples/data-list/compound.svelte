<script module lang="ts">
  import source from "./compound.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { DataList } from "@pisagor/svelte";
</script>

<DataList.Root>
  <DataList.Item value="234">New users</DataList.Item>
  <DataList.Item value="£12,340">Sales</DataList.Item>
  <DataList.Item value="3,450">Revenue</DataList.Item>
</DataList.Root>
