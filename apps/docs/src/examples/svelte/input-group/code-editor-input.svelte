<script lang="ts">
import { InputGroup } from "@pisagor/svelte";
import CopyIcon from "phosphor-svelte/lib/CopyIcon";
import FileCodeIcon from "phosphor-svelte/lib/FileCodeIcon";
import { codeEditorInputBlock } from "#/recipes/blocks/input-group";

const styles = codeEditorInputBlock();
</script>

<InputGroup>
  <InputGroup.Textarea
    class={styles.textarea()}
    placeholder="console.log('Hello, world!');"
  />
  <InputGroup.Addon align="block-start">
    <FileCodeIcon class={styles.icon()} />
    <InputGroup.Text class={styles.filename()}>script.js</InputGroup.Text>
    <InputGroup.Button aria-label="Copy" class={styles.copy()} size="icon-xs">
      <CopyIcon />
    </InputGroup.Button>
  </InputGroup.Addon>
</InputGroup>
