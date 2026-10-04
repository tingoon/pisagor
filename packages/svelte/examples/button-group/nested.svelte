<script lang="ts">
import { Button, ButtonGroup } from "@pisagor/svelte";
import BracketsCurlyIcon from "phosphor-svelte/lib/BracketsCurlyIcon";
import ImageSquareIcon from "phosphor-svelte/lib/ImageSquareIcon";
import TextBIcon from "phosphor-svelte/lib/TextBIcon";
import TextItalicIcon from "phosphor-svelte/lib/TextItalicIcon";
import TextUnderlineIcon from "phosphor-svelte/lib/TextUnderlineIcon";
</script>

<ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Italic" size="icon-md" variant="outline">
          <TextItalicIcon />
        </Button>
        <Button aria-label="Bold" size="icon-md" variant="outline">
          <TextBIcon />
        </Button>
        <Button aria-label="Underline" size="icon-md" variant="outline">
          <TextUnderlineIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Image" size="icon-md" variant="outline">
          <ImageSquareIcon />
        </Button>
        <Button aria-label="Code" size="icon-md" variant="outline">
          <BracketsCurlyIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
