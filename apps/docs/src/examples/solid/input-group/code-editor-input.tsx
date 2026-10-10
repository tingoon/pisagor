/** @jsxImportSource solid-js */

import { InputGroup } from "@pisagor/solid";
import { CopyIcon, FileCodeIcon } from "@pisagor/solid/icons";
import { codeEditorInputBlock } from "#/recipes/blocks/input-group";

const styles = codeEditorInputBlock();

export function CodeEditorInput() {
  return (
    <InputGroup>
      <InputGroup.Textarea
        class={styles.textarea()}
        placeholder="console.log('Hello, world!');"
      />
      <InputGroup.Addon align="block-start">
        <FileCodeIcon class={styles.icon()} />
        <InputGroup.Text class={styles.filename()}>script.js</InputGroup.Text>
        <InputGroup.Button
          aria-label="Copy"
          class={styles.copy()}
          size="icon-xs"
        >
          <CopyIcon />
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
  );
}
