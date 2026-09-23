<script lang="ts" setup >
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { Steps } from "..";

const steps = Array.from({ length: 3 }, (_, index) => index + 1);
</script>

<template>
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
            class="flex h-full items-center justify-center rounded-md border"
            v-for="step in steps"
            :key="step"
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
  
</template>
