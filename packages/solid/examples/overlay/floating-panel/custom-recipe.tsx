import { GearSixIcon } from "@squidlab/phosphor-solid/icons";
import {
  Button,
  Field,
  FloatingPanel,
  NumberInput,
  Select,
} from "@pisagor/solid";
import { floatingPanelRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandFloatingPanelRecipe = tv({
  extend: floatingPanelRecipe,
  slots: {
    content: "border-emerald-500/40",
    header: "bg-emerald-500/5",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <FloatingPanel
      defaultSize={{ height: 300, width: 360 }}
      recipe={brandFloatingPanelRecipe}
      actions={
        <>
          <Button variant="outline">Save</Button>
        </>
      }
      icon={<GearSixIcon />}
      title="Settings"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
      <Field>
        <Field.Label>Font family</Field.Label>
        <Select
          class="w-full"
          defaultValue={["Inter"]}
          items={["Inter", "Roboto", "Helvetica", "Geist"]}
        />
      </Field>
      <Field>
        <Field.Label>Font size</Field.Label>
        <NumberInput class="w-full" defaultValue="16" />
      </Field>
    </FloatingPanel>
  );
}
