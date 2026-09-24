<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import type { ComponentProps } from "svelte";
import DialogBackdrop from "../dialog/dialog-backdrop.svelte";
import DialogContent from "../dialog/dialog-content.svelte";
import DialogPositioner from "../dialog/dialog-positioner.svelte";

type Props = Omit<ComponentProps<typeof DialogContent>, "showCloseButton"> & {
  bottomStickOnMobile?: boolean;
};

let { bottomStickOnMobile = true, children, ...rest }: Props = $props();
</script>

<Portal>
  <DialogBackdrop />
  <DialogPositioner {bottomStickOnMobile}>
    <DialogContent {...rest} {bottomStickOnMobile} showCloseButton={false}>
      {@render children?.()}
    </DialogContent>
  </DialogPositioner>
</Portal>
