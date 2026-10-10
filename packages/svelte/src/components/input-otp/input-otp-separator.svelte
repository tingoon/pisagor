<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./input-otp.context";

let { ...rest }: HTMLAttributes<HTMLHRElement> = $props();
const part = withContext(() => rest, { name: "Separator" });
</script>

<Ark as="hr" {...part.props} />
