<script lang="ts">
import { createToaster } from "@ark-ui/svelte/toast";
import { Button, Toaster } from "@pisagor/svelte";

const topStartToaster = createToaster({ overlap: true, placement: "top-start" });
const topToaster = createToaster({ overlap: true, placement: "top" });
const topEndToaster = createToaster({ overlap: true, placement: "top-end" });
const bottomStartToaster = createToaster({
  overlap: true,
  placement: "bottom-start",
});
const bottomToaster = createToaster({ overlap: true, placement: "bottom" });
const bottomEndToaster = createToaster({
  overlap: true,
  placement: "bottom-end",
});
</script>

<Toaster toaster={topStartToaster} />
<Toaster toaster={topToaster} />
<Toaster toaster={topEndToaster} />
<Toaster toaster={bottomStartToaster} />
<Toaster toaster={bottomToaster} />
<Toaster toaster={bottomEndToaster} />

<div class="flex flex-col items-center justify-center gap-2">
  <div class="flex flex-wrap gap-2">
    <Button
      onClick={() =>
        topStartToaster.create({
          description: "placement: top-start",
          title: "Top start",
        })}
      variant="outline"
    >
      Top start
    </Button>
    <Button
      onClick={() =>
        topToaster.create({
          description: "placement: top",
          title: "Top center",
        })}
      variant="outline"
    >
      Top center
    </Button>
    <Button
      onClick={() =>
        topEndToaster.create({
          description: "placement: top-end",
          title: "Top end",
        })}
      variant="outline"
    >
      Top end
    </Button>
  </div>
  <div class="flex flex-wrap gap-2">
    <Button
      onClick={() =>
        bottomStartToaster.create({
          description: "placement: bottom-start",
          title: "Bottom start",
        })}
      variant="outline"
    >
      Bottom start
    </Button>
    <Button
      onClick={() =>
        bottomToaster.create({
          description: "placement: bottom-center",
          title: "Bottom center",
        })}
      variant="outline"
    >
      Bottom center
    </Button>
    <Button
      onClick={() =>
        bottomEndToaster.create({
          description: "placement: bottom-end",
          title: "Bottom end",
        })}
      variant="outline"
    >
      Bottom end
    </Button>
  </div>
</div>
