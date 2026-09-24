<script lang="ts">
import { JsonTreeView } from "../index";

const data = { name: "Pisagor", nested: { count: 3, ok: true } };
</script>

<JsonTreeView {data} />
