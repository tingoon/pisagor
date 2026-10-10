<script lang="ts">
import { Button, ButtonGroup, Tooltip } from "@pisagor/svelte";
import TextBIcon from "phosphor-svelte/lib/TextBIcon";
import TextItalicIcon from "phosphor-svelte/lib/TextItalicIcon";
import TextStrikethroughIcon from "phosphor-svelte/lib/TextStrikethroughIcon";
import TextUnderlineIcon from "phosphor-svelte/lib/TextUnderlineIcon";
</script>

<ButtonGroup>
  <Tooltip content="Bold">
    <Button aria-label="Bold" size="icon-md" variant="outline"
      ><TextBIcon /></Button
    >
  </Tooltip>
  <Tooltip content="Italic">
    <Button aria-label="Italic" size="icon-md" variant="outline"
      ><TextItalicIcon /></Button
    >
  </Tooltip>
  <Tooltip content="Underline">
    <Button aria-label="Underline" size="icon-md" variant="outline"
      ><TextUnderlineIcon /></Button
    >
  </Tooltip>
  <Tooltip content="Strikethrough">
    <Button aria-label="Strikethrough" size="icon-md" variant="outline"
      ><TextStrikethroughIcon /></Button
    >
  </Tooltip>
</ButtonGroup>
