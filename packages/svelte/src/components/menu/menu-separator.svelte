<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./menu.context";

let { ...rest }: HTMLAttributes<HTMLHRElement> = $props();
const part = withContext(() => rest, { name: "Separator" });
</script>

<Ark as="hr" {...part.props} aria-hidden="true" />
