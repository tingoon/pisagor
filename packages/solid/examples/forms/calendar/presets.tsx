import { CaretLeftIcon, CaretRightIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Calendar, Card } from "@pisagor/solid";

export function Presets() {
  const presets = [
    { label: "Last 7 days", value: "last7Days" as const },
    { label: "Last 14 days", value: "last14Days" as const },
    { label: "Last 30 days", value: "last30Days" as const },
    { label: "This month", value: "thisMonth" as const },
  ];

  return (
    <Calendar class="[--cell-size:--spacing(8)]" selectionMode="range">
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar.ViewControl>
            <Calendar.PrevTrigger
              asChild={(props) => (
                <Button {...props()} size="icon-md" variant="ghost">
                  <CaretLeftIcon aria-hidden class="rtl:rotate-180" />
                </Button>
              )}
            />
            <Calendar.MonthSelect />
            <Calendar.YearSelect />
            <Calendar.NextTrigger
              asChild={(props) => (
                <Button {...props()} size="icon-md" variant="ghost">
                  <CaretRightIcon aria-hidden class="rtl:rotate-180" />
                </Button>
              )}
            />
          </Calendar.ViewControl>
          <Calendar.Table>
            <Calendar.WeekDays />
            <Calendar.TableDays />
          </Calendar.Table>
        </Card.Content>
        <Card.Footer class="flex flex-wrap">
          {presets.map((preset) => (
            <Calendar.PresetTrigger
              value={preset.value}
              asChild={(props) => (
                <Button {...props()} class="flex-1" size="sm" variant="outline">
                  {preset.label}
                </Button>
              )}
            />
          ))}
        </Card.Footer>
      </Card>
    </Calendar>
  );
}
