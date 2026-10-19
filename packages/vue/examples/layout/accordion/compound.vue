<script lang="ts" setup>
import { Accordion } from "@pisagor/vue";
</script>

<template>
  <Accordion.Root :default-value="['item-1']">
    <Accordion.Item value="item-1">
      <Accordion.ItemTrigger>
        Product information
        <Accordion.ItemIndicator />
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <Accordion.ItemBody class="text-muted-foreground flex flex-col gap-2">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.ItemTrigger>
        Shipping details
        <Accordion.ItemIndicator />
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <Accordion.ItemBody class="text-muted-foreground flex flex-col gap-2">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3 to 5 business days, while express shipping
            ensures delivery within 1 to 2 business days.
          </p>
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
    <Accordion.Item value="item-3">
      <Accordion.ItemTrigger>
        Return policy
        <Accordion.ItemIndicator />
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <Accordion.ItemBody class="text-muted-foreground flex flex-col gap-2">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you're not completely satisfied, return the item in its
            original condition.
          </p>
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>
