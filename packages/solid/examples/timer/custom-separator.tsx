/** @jsxImportSource solid-js */
import { Card } from "@pisagor/solid";
import { Timer } from "@pisagor/solid/timer";
export function CustomSeparator() {
  return (
    <Card class="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer
          autoStart
          class="items-center gap-2"
          countdown
          startMs={5 * 60 * 1000}
        >
          <Timer.Area>
            <Timer.Item type="minutes" />
            <Timer.Separator>{"//"}</Timer.Separator>
            <Timer.Item type="seconds" />
          </Timer.Area>
        </Timer>
      </Card.Content>
    </Card>
  );
}
