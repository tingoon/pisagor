<script lang="ts">
import { Field } from "@pisagor/svelte";
import { CircularProgress } from "@pisagor/svelte/circular-progress";
</script>

<Field>
      <Field.Label class="justify-center">
        Establishing connection...
      </Field.Label>
      <CircularProgress />
    </Field>
