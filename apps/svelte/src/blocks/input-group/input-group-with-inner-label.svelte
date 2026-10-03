<script lang="ts">
import { inputGroupWithInnerLabelBlock } from "@pisagor/recipes/blocks/input-group";
import { Button, Field, InputGroup, Tooltip } from "@pisagor/svelte";
import InfoIcon from "phosphor-svelte/lib/InfoIcon";

const styles = inputGroupWithInnerLabelBlock();
</script>

<InputGroup>
  <InputGroup.Input placeholder="John Doe" />
  <InputGroup.Addon align="block-start">
    <Field.Label>Username</Field.Label>
    <Tooltip content="Enter a username for your account">
      <Button
        aria-label="More info"
        class={styles.info()}
        size="icon-xs"
        variant="ghost"
      >
        <InfoIcon aria-hidden />
      </Button>
    </Tooltip>
  </InputGroup.Addon>
</InputGroup>
