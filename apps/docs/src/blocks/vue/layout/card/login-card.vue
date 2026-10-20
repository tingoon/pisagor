<script lang="ts" setup>
import { PhGlobe } from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import { Button, Card, Field, Input } from "@pisagor/vue";
import { loginCardBlock } from "#/styles/recipes/card";

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    class?: unknown;
    primaryActionLabel?: string;
  }>(),
  { class: undefined, primaryActionLabel: "Send one-time code" },
);

const styles = loginCardBlock();
</script>

<template>
  <Card :class="cn(styles.root(), props.class)">
    <Card.Header>
      <Card.Title>Sign in</Card.Title>
      <Card.Description>
        Enter your email and we'll send a one-time code to sign you in.
      </Card.Description>

      <Card.Action>
        <Button variant="link">Sign up</Button>
      </Card.Action>
    </Card.Header>
    <Card.Content>
      <Field.Set>
        <Field>
          <Field.Label>Email</Field.Label>
          <Input placeholder="you@example.com" type="email" />
        </Field>
      </Field.Set>
    </Card.Content>
    <Card.Footer :class="styles.footer()">
      <Button size="lg" type="button" :class="styles.action()">
        {{ props.primaryActionLabel }}
      </Button>
      <Button
        size="lg"
        type="button"
        variant="outline"
        :class="styles.action()"
      >
        <PhGlobe aria-hidden="true" />
        Continue with Google
      </Button>
    </Card.Footer>
  </Card>
</template>
