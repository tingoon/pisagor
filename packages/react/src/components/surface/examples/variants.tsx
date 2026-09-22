import { Surface } from "..";

export function Variants() {
  return (
    <div className="grid w-full gap-2 md:grid-cols-2">
      <Surface bordered className="flex flex-col gap-2" padding="md" variant="default">
        <h3 className="font-semibold text-sm">Default</h3>
        <p className="text-muted-foreground text-sm">Uses the page background token.</p>
      </Surface>
      <Surface bordered className="flex flex-col gap-2" padding="md" variant="secondary">
        <h3 className="font-semibold text-sm">Secondary</h3>
        <p className="text-muted-foreground text-sm">First nested emphasis level.</p>
      </Surface>
      <Surface bordered className="flex flex-col gap-2" padding="md" variant="tertiary">
        <h3 className="font-semibold text-sm">Tertiary</h3>
        <p className="text-muted-foreground text-sm">Second nested emphasis level.</p>
      </Surface>
      <Surface bordered className="flex flex-col gap-2" padding="md" variant="transparent">
        <h3 className="font-semibold text-sm">Transparent</h3>
        <p className="text-muted-foreground text-sm">No fill — useful for custom backgrounds.</p>
      </Surface>
    </div>
  );
}
