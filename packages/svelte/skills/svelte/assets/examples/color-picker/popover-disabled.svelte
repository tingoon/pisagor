<script lang="ts">
import { Button } from "@pisagor/svelte";
import { ColorPicker } from "@pisagor/svelte/color-picker";
</script>

<ColorPicker disabled value="#eb5e41" >
      <ColorPicker.Control>
        <ColorPicker.Trigger>
            <Button size="lg" variant="ghost">
              <ColorPicker.SwatchPreview class="size-6" />
              Pick as color
            </Button>
          </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area />
      </ColorPicker.Content>
    </ColorPicker>
