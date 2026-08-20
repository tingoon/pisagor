import { PhCalendar } from "@phosphor-icons/vue";
import { Button, Calendar, DatePicker, Field, parseDate, Surface } from "@pisagor/vue";
import { computed, defineComponent, h, ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: "Pick a date from a calendar popover.",
      },
    },
  },
  subcomponents: {
    ClearTrigger: DatePicker.ClearTrigger,
    Content: DatePicker.Content,
    Input: DatePicker.Input,
    PresetTrigger: DatePicker.PresetTrigger,
    Timer: DatePicker.Timer,
    Trigger: DatePicker.Trigger,
    Value: DatePicker.Value,
  },
  title: "Components/Forms/Date Picker",
});

interface WeekDay {
  narrow: string;
  short: string;
}

// `Calendar.WeekDays` isn't exposed from `@pisagor/vue/calendar`'s public surface yet, so
// this recreates it locally from the already-exported `Calendar.Context` primitives.
const CalendarWeekDays = defineComponent({
  name: "CalendarWeekDays",
  setup() {
    return () =>
      h(Calendar.Context, null, {
        default: (calendar: { weekDays: WeekDay[] }) =>
          h(Calendar.TableHead, null, () =>
            h(Calendar.TableRow, null, () =>
              calendar.weekDays.map((weekDay) =>
                h(Calendar.TableHeader, { key: weekDay.short }, () => weekDay.narrow),
              ),
            ),
          ),
      });
  },
});

const CalendarBody = defineComponent({
  name: "CalendarBody",
  setup() {
    return () => [
      h(Calendar.ViewControl, null, () => [
        h(Calendar.PrevTrigger),
        h(Calendar.MonthSelect),
        h(Calendar.YearSelect),
        h(Calendar.NextTrigger),
      ]),
      h(Calendar.Table, null, () => [h(CalendarWeekDays), h(Calendar.TableDays)]),
    ];
  },
});

export const Default = meta.story({
  render: () => ({
    components: { Button, CalendarBody, DatePicker, PhCalendar },
    template: `
      <DatePicker>
        <DatePicker.Trigger :asChild="true">
          <Button variant="outline">
            <PhCalendar />
            <DatePicker.Value placeholder="Pick a date" />
          </Button>
        </DatePicker.Trigger>
        <DatePicker.Content>
          <CalendarBody />
        </DatePicker.Content>
      </DatePicker>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { CalendarBody, DatePicker },
    template: `
      <div class="flex flex-col gap-2">
        <DatePicker variant="primary">
          <DatePicker.Input placeholder="Primary" />
          <DatePicker.Content>
            <CalendarBody />
          </DatePicker.Content>
        </DatePicker>
        <DatePicker variant="secondary">
          <DatePicker.Input placeholder="Secondary" />
          <DatePicker.Content>
            <CalendarBody />
          </DatePicker.Content>
        </DatePicker>
      </div>
    `,
  }),
});

const surfaceDecorator = () => ({
  components: { Surface },
  template: `
    <div class="absolute inset-0 grid size-full min-h-svh w-full grid-cols-2">
      <div class="relative flex size-full items-center justify-center">
        <p class="absolute top-0 left-0 w-full p-4 text-center font-medium text-muted-foreground text-sm">
          Normal
        </p>
        <story />
      </div>
      <Surface padding="none" :rounded="false" variant="secondary">
        <div class="relative flex size-full items-center justify-center">
          <p class="absolute top-0 left-0 w-full p-4 text-center font-medium text-muted-foreground text-sm">
            On Surface
          </p>
          <story />
        </div>
      </Surface>
    </div>
  `,
});

export const OnSurface = Variants.extend({
  decorators: [surfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Range = meta.story({
  render: () => ({
    components: { Button, CalendarBody, DatePicker, PhCalendar },
    setup() {
      const focusedValue = parseDate(new Date());

      return { focusedValue };
    },
    template: `
      <DatePicker :focusedValue="focusedValue" selectionMode="range">
        <DatePicker.Trigger :asChild="true">
          <Button variant="outline">
            <PhCalendar />
            <DatePicker.Value placeholder="Pick a date range" />
          </Button>
        </DatePicker.Trigger>
        <DatePicker.Content>
          <CalendarBody />
        </DatePicker.Content>
      </DatePicker>
    `,
  }),
});

export const CustomFormat = meta.story({
  render: () => ({
    components: { Button, CalendarBody, DatePicker, PhCalendar },
    setup() {
      const value = ref([parseDate("2025-01-15")]);

      const handleValueChange = (next: unknown) => {
        value.value = (next as typeof value.value) ?? [];
      };

      const formattedDate = computed(() =>
        new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
          new Date((value.value[0] ?? parseDate("2025-01-15")).toString()),
        ),
      );

      return { formattedDate, handleValueChange, value };
    },
    template: `
      <DatePicker :onValueChange="handleValueChange" :value="value">
        <DatePicker.Trigger :asChild="true">
          <Button variant="outline">
            <PhCalendar />
            {{ formattedDate }}
          </Button>
        </DatePicker.Trigger>
        <DatePicker.Content>
          <CalendarBody />
        </DatePicker.Content>
      </DatePicker>
    `,
  }),
});

export const Input = meta.story({
  render: () => ({
    components: { CalendarBody, DatePicker },
    template: `
      <DatePicker>
        <DatePicker.Input placeholder="Select date" />
        <DatePicker.Content>
          <CalendarBody />
        </DatePicker.Content>
      </DatePicker>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { CalendarBody, DatePicker },
    template: `
      <DatePicker :invalid="true">
        <DatePicker.Input placeholder="Select date" />
        <DatePicker.Content>
          <CalendarBody />
        </DatePicker.Content>
      </DatePicker>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { CalendarBody, DatePicker },
    template: `
      <DatePicker :disabled="true">
        <DatePicker.Input placeholder="Select date" />
        <DatePicker.Content>
          <CalendarBody />
        </DatePicker.Content>
      </DatePicker>
    `,
  }),
});

export const Clearable = meta.story({
  render: () => ({
    components: { Button, CalendarBody, DatePicker, Field, PhCalendar },
    setup() {
      const value = ref([parseDate("2025-06-15")]);

      const handleValueChange = (next: unknown) => {
        value.value = (next as typeof value.value) ?? [];
      };

      return { handleValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-6">
        <Field>
          <Field.Label>Input variant</Field.Label>
          <DatePicker :onValueChange="handleValueChange" :value="value">
            <DatePicker.Input placeholder="Select date" />
            <DatePicker.Content />
          </DatePicker>
        </Field>
        <Field>
          <Field.Label>Trigger variant</Field.Label>
          <DatePicker :onValueChange="handleValueChange" :value="value">
            <DatePicker.Trigger :asChild="true">
              <Button variant="outline">
                <PhCalendar />
                <DatePicker.Value placeholder="Pick a date" />
              </Button>
            </DatePicker.Trigger>
            <DatePicker.Content />
          </DatePicker>
        </Field>
      </div>
    `,
  }),
});

export const Time = meta.story({
  render: () => ({
    components: { DatePicker, Field },
    template: `
      <Field>
        <Field.Label>Time</Field.Label>
        <DatePicker.Timer />
      </Field>
    `,
  }),
});

export const WithPresets = meta.story({
  render: () => ({
    components: { Button, CalendarBody, DatePicker, PhCalendar },
    setup() {
      const presets = [
        { days: 0, label: "Today" },
        { days: 1, label: "Tomorrow" },
        { days: 3, label: "In 3 days" },
        { days: 7, label: "In a week" },
      ].map((preset) => ({
        ...preset,
        value: [parseDate(new Date(new Date().setDate(new Date().getDate() + preset.days)))],
      }));

      const defaultValue = [parseDate(new Date())];

      return { defaultValue, presets };
    },
    template: `
      <DatePicker :defaultValue="defaultValue">
        <DatePicker.Trigger :asChild="true">
          <Button variant="outline">
            <PhCalendar />
            <DatePicker.Value />
          </Button>
        </DatePicker.Trigger>
        <DatePicker.Content>
          <div class="flex max-sm:flex-col">
            <div class="relative py-1 ps-1 max-sm:order-1 max-sm:border-t">
              <div class="flex h-full flex-col sm:border-e sm:pe-3">
                <DatePicker.PresetTrigger
                  v-for="preset in presets"
                  :asChild="true"
                  :key="preset.label"
                  :value="preset.value"
                >
                  <Button class="w-full justify-start" size="sm" variant="ghost">
                    {{ preset.label }}
                  </Button>
                </DatePicker.PresetTrigger>
              </div>
            </div>
            <div class="max-sm:pb-3 sm:ps-2">
              <CalendarBody />
            </div>
          </div>
        </DatePicker.Content>
      </DatePicker>
    `,
  }),
});
