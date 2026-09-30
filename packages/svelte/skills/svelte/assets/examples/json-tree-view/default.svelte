<script lang="ts">
import { JsonTreeView } from "@pisagor/svelte/json-tree-view";

const data = { name: "Pisagor", nested: { count: 3, ok: true } };
</script>

<JsonTreeView {data} />
