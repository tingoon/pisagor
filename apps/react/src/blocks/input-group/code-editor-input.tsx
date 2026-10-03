import { CopyIcon, FileCodeIcon } from "@phosphor-icons/react";
import { InputGroup } from "@pisagor/react";
import { codeEditorInputBlock } from "@pisagor/recipes/blocks/input-group";

const styles = codeEditorInputBlock();

export function CodeEditorInput() {
  return (
    <InputGroup>
      <InputGroup.Textarea
        className={styles.textarea()}
        placeholder="console.log('Hello, world!');"
      />
      <InputGroup.Addon align="block-start">
        <FileCodeIcon className={styles.icon()} />
        <InputGroup.Text className={styles.filename()}>
          script.js
        </InputGroup.Text>
        <InputGroup.Button
          aria-label="Copy"
          className={styles.copy()}
          size="icon-xs"
        >
          <CopyIcon />
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
  );
}
