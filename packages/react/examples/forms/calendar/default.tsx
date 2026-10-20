import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Button, Calendar, Card } from "@pisagor/react";

export function Default() {
  return (
    <Card className="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar>
          <Calendar.ViewControl>
            <Calendar.PrevTrigger asChild>
              <Button size="icon-md" variant="ghost">
                <CaretLeftIcon aria-hidden className="rtl:rotate-180" />
              </Button>
            </Calendar.PrevTrigger>
            <Calendar.ViewDate />
            <Calendar.NextTrigger asChild>
              <Button size="icon-md" variant="ghost">
                <CaretRightIcon aria-hidden className="rtl:rotate-180" />
              </Button>
            </Calendar.NextTrigger>
          </Calendar.ViewControl>
          <Calendar.Table>
            <Calendar.WeekDays />
            <Calendar.TableDays />
          </Calendar.Table>
        </Calendar>
      </Card.Content>
    </Card>
  );
}
