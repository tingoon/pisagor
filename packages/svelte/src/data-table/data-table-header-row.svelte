<script lang="ts">
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";

type Props = ComponentProps<typeof Table.Row>;
let props: Props = $props();
</script>

<Table.Row {...props} data-part="header-row" data-scope="data-table" />
