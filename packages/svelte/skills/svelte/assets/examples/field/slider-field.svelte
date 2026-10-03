<script lang="ts">
import { Slider } from "@pisagor/svelte";
import { Field } from "@pisagor/svelte/field";
</script>

<Field class="items-stretch gap-3">
      <Slider defaultValue={[50]} label="Volume" />
      <Field.Description>
        Adjust the volume of the media player
      </Field.Description>
    </Field>
