<script lang="ts" setup>
import { Button, Card, Field, Textarea } from "@pisagor/vue";
import { ref } from "vue";

const message = ref("");
const error = ref<string | null>(null);

function onSubmit() {
  if (message.value.trim().length < 10) {
    error.value = "Message must be at least 10 characters.";
    return;
  }
  error.value = null;
}

function onValueChange(next: string) {
  message.value = next;
  error.value = null;
}

function clear() {
  message.value = "";
  error.value = null;
}
</script>

<template>
  <Card>
    <form @submit.prevent="onSubmit">
      <Card.Content>
        <Field :invalid="Boolean(error)">
          <Field.Label>Message</Field.Label>
          <Textarea
            name="message"
            placeholder="Type your message here"
            :value="message"
            @value-change="onValueChange"
          />
          <Field.Error v-if="error">{{ error }}</Field.Error>
        </Field>
      </Card.Content>
      <Card.Footer>
        <Field orientation="horizontal" reverse>
          <Button type="submit">Submit</Button>
          <Button type="button" variant="outline" @click="clear">Clear</Button>
        </Field>
      </Card.Footer>
    </form>
  </Card>
</template>
