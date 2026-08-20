import { PhHeart } from "@phosphor-icons/vue";
import { Avatar, Card, Rating, Surface } from "@pisagor/vue";
import { computed, ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Rating,
  parameters: {
    docs: {
      description: {
        component: "A star rating component built on Ark UI rating-group.",
      },
    },
  },
  title: "Components/Forms/Rating",
});

export const Default = meta.story({
  render: () => ({
    components: { Rating },
    template: "<Rating />",
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { Rating, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <Rating />
      </Surface>
    `,
  }),
});

export const CustomColor = meta.story({
  render: () => ({
    components: { Rating },
    template: `
      <div class="flex flex-wrap items-center gap-8">
        <Rating class="text-info" :count="5" :defaultValue="4" />
        <Rating class="text-success" :count="5" :defaultValue="4" />
      </div>
    `,
  }),
});

export const Count = meta.story({
  render: () => ({
    components: { Rating },
    template: '<Rating :count="3" :defaultValue="3" />',
  }),
});

export const CustomIcon = meta.story({
  render: () => ({
    components: { Rating },
    setup() {
      return { PhHeart };
    },
    template: '<Rating allowHalf class="text-destructive" :icon="PhHeart" />',
  }),
});

export const CustomSize = meta.story({
  render: () => ({
    components: { Rating },
    template: '<Rating class="**:data-[slot=rating-item-indicator]:size-8" />',
  }),
});

export const HalfStar = meta.story({
  render: () => ({
    components: { Rating },
    template: '<Rating allowHalf :defaultValue="3.5" />',
  }),
});

export const Testimonial = meta.story({
  render: () => ({
    components: { Avatar, Card, Rating },
    template: `
      <Card>
        <Card.Content class="space-y-2">
          <Rating class="**:data-[slot=rating-item-indicator]:size-4" :defaultValue="5" readOnly />
          <blockquote class="text-muted-foreground">
            &ldquo;This completely changed our workflow. Fast, reliable, and the team loves it. Would
            recommend to anyone.&rdquo;
          </blockquote>
          <div class="flex gap-2">
            <Avatar alt="jane.doe@example.com" fallback="JD" size="lg" />
            <div>
              <Card.Title class="font-medium text-sm">Jane Doe</Card.Title>
              <Card.Description>Frontend Developer</Card.Description>
            </div>
          </div>
        </Card.Content>
      </Card>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Rating },
    template: '<Rating :defaultValue="3" invalid />',
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Rating },
    template: '<Rating :defaultValue="3" disabled />',
  }),
});

export const Readonly = meta.story({
  render: () => ({
    components: { Rating },
    template: '<Rating :defaultValue="3" readOnly />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Rating },
    setup() {
      const value = ref(0);
      const isCorrectRating = computed(() => value.value === 5);
      const onValueChange = (next: number) => {
        value.value = next;
      };
      return { isCorrectRating, onValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2 text-center text-sm">
        <p>Select the rating 5</p>
        <Rating :value="value" :onValueChange="onValueChange" />
        <p class="text-center">{{ isCorrectRating ? '✅' : '❌' }}</p>
      </div>
    `,
  }),
});
