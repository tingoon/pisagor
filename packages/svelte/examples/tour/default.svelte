<script lang="ts">
import { buttonRecipe } from "@pisagor/recipes";
import { Tour, type TourStepDetails } from "@pisagor/svelte";

const steps: TourStepDetails[] = [
  {
    actions: [{ action: "next", label: "Start tour" }],
    description: "You gonna learn how to use to install and use the component.",
    id: "step-1",
    title: "Welcome to the tour",
    type: "dialog",
  },
  {
    actions: [
      { action: "prev", label: "Previous" },
      { action: "next", label: "Next" },
    ],
    description:
      "Let's take a quick tour of the documentation site to help you get started。",
    id: "step-2",
    target: () => document.querySelector<HTMLElement>("#installation"),
    title: "Installation step",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Previous" },
      { action: "next", label: "Next" },
    ],
    description: "This is how to use the component.",
    id: "step-3",
    target: () => document.querySelector<HTMLElement>("#usage"),
    title: "Usage step",
    type: "tooltip",
  },
  {
    actions: [{ action: "dismiss", label: "Finish tour" }],
    description: "You've completed the tour. Thank you for your time.",
    id: "step-4",
    title: "Tour complete",
    type: "dialog",
  },
];
</script>

<Tour {steps}>
  <Tour.Trigger class={buttonRecipe({ variant: "outline" }).base()}>
    Open
  </Tour.Trigger>
  <Tour.Content>
    <Tour.Header>
      <Tour.ProgressText />
      <Tour.Title />
      <Tour.Description />
    </Tour.Header>
    <Tour.Footer>
      <Tour.PreviousStep />
      <Tour.NextStep />
    </Tour.Footer>
  </Tour.Content>
</Tour>
