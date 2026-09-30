<script lang="ts">
import { JsonTreeView } from "../../../../../src/components/json-tree-view/index";

const data = { name: "Pisagor", nested: { count: 3, ok: true } };
</script>

<JsonTreeView {data} />
