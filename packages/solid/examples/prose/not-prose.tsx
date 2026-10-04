/** @jsxImportSource solid-js */
import { Prose } from "@pisagor/solid";

export function NotProse() {
  return (
    <Prose class="space-y-10">
      <div>
        <h1>Davy Jones' locker</h1>

        <p>
          Davy Jones' locker is a metaphor for the oceanic abyss, the final
          resting place of drowned sailors and travellers
        </p>
      </div>
      <hr />

      <div class="not-prose">
        <h1>Davy Jones' locker</h1>

        <p>
          Davy Jones' locker is a metaphor for the oceanic abyss, the final
          resting place of drowned sailors and travellers
        </p>
      </div>
    </Prose>
  );
}
