<script lang="ts">
import { createToaster } from "@ark-ui/svelte/toast";
import { Button, Toaster } from "@pisagor/svelte";

const topStartToaster = createToaster({
  overlap: true,
  placement: "top-start",
});
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

function showTopStart() {
  topStartToaster.create({
    description: "placement: top-start",
    title: "Top start",
  });
}

function showTop() {
  topToaster.create({
    description: "placement: top",
    title: "Top center",
  });
}

function showTopEnd() {
  topEndToaster.create({
    description: "placement: top-end",
    title: "Top end",
  });
}

function showBottomStart() {
  bottomStartToaster.create({
    description: "placement: bottom-start",
    title: "Bottom start",
  });
}

function showBottom() {
  bottomToaster.create({
    description: "placement: bottom-center",
    title: "Bottom center",
  });
}

function showBottomEnd() {
  bottomEndToaster.create({
    description: "placement: bottom-end",
    title: "Bottom end",
  });
}
</script>

<Toaster toaster={topStartToaster} />
<Toaster toaster={topToaster} />
<Toaster toaster={topEndToaster} />
<Toaster toaster={bottomStartToaster} />
<Toaster toaster={bottomToaster} />
<Toaster toaster={bottomEndToaster} />

<div class="flex flex-col items-center justify-center gap-2">
  <div class="flex flex-wrap gap-2">
    <Button onClick={showTopStart} variant="outline">Top start</Button>
    <Button onClick={showTop} variant="outline">Top center</Button>
    <Button onClick={showTopEnd} variant="outline">Top end</Button>
  </div>
  <div class="flex flex-wrap gap-2">
    <Button onClick={showBottomStart} variant="outline">Bottom start</Button>
    <Button onClick={showBottom} variant="outline">Bottom center</Button>
    <Button onClick={showBottomEnd} variant="outline">Bottom end</Button>
  </div>
</div>
