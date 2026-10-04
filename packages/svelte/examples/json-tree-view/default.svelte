<script lang="ts">
import { JsonTreeView } from "@pisagor/svelte";

const data = { name: "Pisagor", nested: { count: 3, ok: true } };
</script>

<JsonTreeView {data} />
