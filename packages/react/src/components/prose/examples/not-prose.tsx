import { Prose } from "..";

export function NotProse() {
  return (
    <Prose className="space-y-10">
      <div>
        <h1>Davy Jones' locker</h1>

        <p>
          Davy Jones' locker is a metaphor for the oceanic abyss, the final
          resting place of drowned sailors and travellers
        </p>
      </div>
      <hr />

      <div className="not-prose">
        <h1>Davy Jones' locker</h1>

        <p>
          Davy Jones' locker is a metaphor for the oceanic abyss, the final
          resting place of drowned sailors and travellers
        </p>
      </div>
    </Prose>
  );
}
