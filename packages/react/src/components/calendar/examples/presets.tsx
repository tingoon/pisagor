import { Button, Card } from "@pisagor/react";
import { Calendar } from "..";
export function Presets() {
  const presets = [
    { label: "Last 7 days", value: "last7Days" as const },
    { label: "Last 14 days", value: "last14Days" as const },
    { label: "Last 30 days", value: "last30Days" as const },
    { label: "This month", value: "thisMonth" as const },
  ];
  return (
    <Calendar className="[--cell-size:--spacing(8)]" selectionMode="range">
      <Card className="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar.ViewControl>
            <Calendar.PrevTrigger />
            <Calendar.MonthSelect />
            <Calendar.YearSelect />
            <Calendar.NextTrigger />
          </Calendar.ViewControl>
          <Calendar.Table>
            <Calendar.WeekDays />
            <Calendar.TableDays />
          </Calendar.Table>
        </Card.Content>
        <Card.Footer className="flex flex-wrap">
          {presets.map((preset) => (
            <Calendar.PresetTrigger
              asChild
              key={preset.value}
              value={preset.value}
            >
              <Button className="flex-1" size="sm" variant="outline">
                {preset.label}
              </Button>
            </Calendar.PresetTrigger>
          ))}
        </Card.Footer>
      </Card>
    </Calendar>
  );
}
