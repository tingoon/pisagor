import { Card } from "@pisagor/react";
import { Timer } from "..";
export function CountdownDate() {
  const formatDate = (date: Date) =>
    date.toLocaleDateString(undefined, { dateStyle: "medium" });

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  return (
    <Card className="rounded-3xl [--space:--spacing(6)]">
      <Card.Content className="flex flex-col items-center gap-3">
        <p className="text-center text-muted-foreground text-xs">
          Until {formatDate(targetDate)}
        </p>
        <Timer
          autoStart
          className="items-center gap-2"
          countdown
          startMs={Math.max(0, targetDate.getTime() - Date.now())}
        >
          <Timer.Area>
            <Timer.ItemGroup>
              <Timer.Item type="days" />
              <Timer.ItemLabel>days</Timer.ItemLabel>
            </Timer.ItemGroup>
            <Timer.Separator />
            <Timer.ItemGroup>
              <Timer.Item type="hours" />
              <Timer.ItemLabel>hours</Timer.ItemLabel>
            </Timer.ItemGroup>
            <Timer.Separator />
            <Timer.ItemGroup>
              <Timer.Item type="minutes" />
              <Timer.ItemLabel>minutes</Timer.ItemLabel>
            </Timer.ItemGroup>
            <Timer.Separator />
            <Timer.ItemGroup>
              <Timer.Item type="seconds" />
              <Timer.ItemLabel>seconds</Timer.ItemLabel>
            </Timer.ItemGroup>
          </Timer.Area>
        </Timer>
      </Card.Content>
    </Card>
  );
}
