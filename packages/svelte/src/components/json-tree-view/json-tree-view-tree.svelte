<script lang="ts">
import {
  JsonTreeView as JsonTreeViewPrimitive,
  type JsonTreeViewTreeProps,
} from "@ark-ui/svelte/json-tree-view";
import { withContext } from "./json-tree-view.context";

let { ...rest }: JsonTreeViewTreeProps = $props();
const part = withContext(() => rest, { name: "Tree" });
</script>

<JsonTreeViewPrimitive.Tree {...part.props} />
