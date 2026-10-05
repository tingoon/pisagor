<script lang="ts">
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";

let props: ComponentProps<typeof Table.Row> = $props();
</script>

<Table.Row {...props} data-part="header-row" data-scope="data-table" />
