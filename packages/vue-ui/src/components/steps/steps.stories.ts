import {
  PhCaretLeft,
  PhCaretRight,
  PhCircleNotch,
  PhCreditCard,
  PhHardDrive,
  PhUser,
} from "@phosphor-icons/vue";
import { Button, Steps } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Steps,
  parameters: {
    docs: {
      description: {
        component: "Guides users through a multi-step flow and shows which stage they are on.",
      },
    },
    metadata: {
      aliases: ["stepper", "wizard"],
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    CompletedContent: Steps.CompletedContent,
    Content: Steps.Content,
    Description: Steps.Description,
    Indicator: Steps.Indicator,
    Item: Steps.Item,
    List: Steps.List,
    NextTrigger: Steps.NextTrigger,
    PrevTrigger: Steps.PrevTrigger,
    Separator: Steps.Separator,
    Title: Steps.Title,
    Trigger: Steps.Trigger,
  },
  title: "Components/Navigation/Steps",
});

export const Default = meta.story({
  render: () => ({
    components: { Button, PhCaretLeft, PhCaretRight, Steps },
    setup() {
      const steps = [1, 2, 3];

      return { steps };
    },
    template: `
      <Steps class="size-full" :count="steps.length">
        <Steps.List>
          <Steps.Item v-for="step in steps" :key="step" :index="step - 1">
            <Steps.Trigger>
              <Steps.Indicator>{{ step }}</Steps.Indicator>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        </Steps.List>
        <Steps.Content
          v-for="step in steps"
          :key="step"
          class="flex h-full items-center justify-center rounded-md border"
          :index="step - 1"
        >
          <p class="text-muted-foreground text-sm">Step {{ step }}</p>
        </Steps.Content>

        <Steps.CompletedContent class="flex h-full items-center justify-center rounded-md border">
          <p class="text-muted-foreground text-sm">All steps completed.</p>
        </Steps.CompletedContent>
        <div class="flex flex-row-reverse gap-2">
          <Steps.NextTrigger as-child>
            <Button>
              Next
              <PhCaretRight />
            </Button>
          </Steps.NextTrigger>
          <Steps.PrevTrigger as-child>
            <Button variant="outline">
              <PhCaretLeft />
              Back
            </Button>
          </Steps.PrevTrigger>
        </div>
      </Steps>
    `,
  }),
});

export const Icon = meta.story({
  render: () => ({
    components: { Steps },
    setup() {
      const items = [
        { icon: PhUser, id: "user" },
        { icon: PhHardDrive, id: "drive" },
        { icon: PhCreditCard, id: "card" },
      ];

      return { items };
    },
    template: `
      <Steps :count="items.length">
        <Steps.List>
          <Steps.Item v-for="(item, index) in items" :key="item.id" :index="index">
            <Steps.Trigger>
              <Steps.Indicator>
                <component :is="item.icon" />
              </Steps.Indicator>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        </Steps.List>
      </Steps>
    `,
  }),
});

export const Vertical = meta.story({
  render: () => ({
    components: { Button, PhCaretLeft, PhCaretRight, Steps },
    setup() {
      const items = [
        { description: "Personal", title: "Info" },
        { description: "Company", title: "Docs" },
        { description: "Create", title: "Team" },
      ];

      return { items };
    },
    template: `
      <Steps class="h-64" :count="items.length" orientation="vertical">
        <Steps.List>
          <Steps.Item v-for="(item, index) in items" :key="item.title" :index="index">
            <Steps.Trigger>
              <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
              <span class="flex flex-col items-start gap-1">
                <Steps.Title>{{ item.title }}</Steps.Title>
                <Steps.Description>{{ item.description }}</Steps.Description>
              </span>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        </Steps.List>
        <div class="flex flex-1 flex-col gap-2">
          <Steps.Content
            v-for="(item, index) in items"
            :key="item.title"
            class="flex h-full items-center justify-center rounded-md border"
            :index="index"
          >
            <p class="text-muted-foreground">{{ item.description }}</p>
          </Steps.Content>
          <Steps.CompletedContent class="flex h-full items-center justify-center rounded-md border">
            <p class="text-muted-foreground">Completed</p>
          </Steps.CompletedContent>
          <div class="flex flex-row-reverse gap-2">
            <Steps.NextTrigger as-child>
              <Button variant="outline">
                Next
                <PhCaretRight />
              </Button>
            </Steps.NextTrigger>
            <Steps.PrevTrigger as-child>
              <Button variant="outline">
                <PhCaretLeft />
                Back
              </Button>
            </Steps.PrevTrigger>
          </div>
        </div>
      </Steps>
    `,
  }),
});

export const Loading = meta.story({
  render: () => ({
    components: { PhCircleNotch, Steps },
    setup() {
      const items = [
        { id: "step-1", loading: true },
        { id: "step-2", loading: false },
        { id: "step-3", loading: false },
      ];

      return { items };
    },
    template: `
      <Steps :count="items.length">
        <Steps.List>
          <Steps.Item v-for="(item, index) in items" :key="item.id" :index="index">
            <Steps.Trigger disabled>
              <Steps.Indicator>
                <PhCircleNotch v-if="item.loading" class="animate-spin" />
                <template v-else>{{ index + 1 }}</template>
              </Steps.Indicator>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        </Steps.List>
      </Steps>
    `,
  }),
});

export const Description = meta.story({
  render: () => ({
    components: { Steps },
    setup() {
      const items = [
        { description: "Personal", title: "Info" },
        { description: "Company", title: "Docs" },
        { description: "Create", title: "Team" },
      ];

      return { items };
    },
    template: `
      <Steps :count="items.length">
        <Steps.List>
          <Steps.Item v-for="(item, index) in items" :key="item.title" :index="index">
            <Steps.Trigger>
              <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
              <div class="flex flex-col items-start gap-1">
                <Steps.Title>{{ item.title }}</Steps.Title>
                <Steps.Description>{{ item.description }}</Steps.Description>
              </div>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        </Steps.List>
      </Steps>
    `,
  }),
});

export const Title = meta.story({
  render: () => ({
    components: { Steps },
    setup() {
      const items = ["Info", "Docs", "Team"];

      return { items };
    },
    template: `
      <Steps :count="items.length">
        <Steps.List>
          <Steps.Item v-for="(item, index) in items" :key="item" :index="index">
            <Steps.Trigger>
              <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
              <Steps.Title>{{ item }}</Steps.Title>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        </Steps.List>
      </Steps>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Button, Steps },
    setup() {
      const items = [
        {
          content: "Please provide your name and email address.",
          title: "Your details",
        },
        { content: "A few details about your company.", title: "Company details" },
        { content: "Start collaborating with your team.", title: "Invite your team" },
      ];
      const step = ref(0);
      const onStepChange = (details: { step: number }) => {
        step.value = details.step;
      };
      const back = () => {
        step.value = Math.max(0, step.value - 1);
      };
      const next = () => {
        step.value = Math.min(items.length, step.value + 1);
      };
      const reset = () => {
        step.value = 0;
      };

      return { back, items, next, onStepChange, reset, step };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Steps class="w-full" :count="items.length" :onStepChange="onStepChange" :step="step">
          <Steps.List>
            <Steps.Item v-for="(item, index) in items" :key="item.title" :index="index">
              <Steps.Trigger>
                <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
                <Steps.Title>{{ item.title }}</Steps.Title>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          </Steps.List>

          <Steps.Content v-for="(item, index) in items" :key="item.title" :index="index">
            <p class="text-muted-foreground">{{ item.content }}</p>
          </Steps.Content>

          <Steps.CompletedContent>
            <p class="text-muted-foreground">All steps completed.</p>
          </Steps.CompletedContent>
        </Steps>
        <div class="flex gap-2">
          <Button @click="back" variant="outline">Back</Button>
          <Button @click="next">Next</Button>

          <Button @click="reset" variant="ghost">Reset</Button>
        </div>
      </div>
    `,
  }),
});
