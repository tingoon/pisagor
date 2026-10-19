<script lang="ts">
  import { Button, Tour, type TourStepDetails } from "@pisagor/svelte";

  const steps: TourStepDetails[] = [
    {
      actions: [{ action: "next" as const, label: "Next" }],
      description:
        "`Tour.Content` uses `[--space:--spacing(2)]` here for tighter padding than the default.",
      id: "step-1",
      title: "Custom spacing",
      type: "dialog",
    },
    {
      actions: [{ action: "dismiss" as const, label: "Done" }],
      description:
        "You can pair `[--space]` with responsive variants, for example `md:[--space:--spacing(6)]`.",
      id: "step-2",
      title: "Breakpoint utilities",
      type: "dialog",
    },
  ];
</script>

<Tour classNames={{ content: "[--space:--spacing(2)]" }} {steps}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
</Tour>
