<script lang="ts">
import { Button, Editable } from "@pisagor/svelte";
import { CheckIcon, XIcon } from "@pisagor/svelte/icons";
</script>

<Editable>
      <Editable.Area>
        <Editable.Input   />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.CancelTrigger>
            <Button
              aria-label="Cancel"
              size="icon-md"
              variant="outline"
            >
              <XIcon />
            </Button>
          </Editable.CancelTrigger>
        <Editable.SubmitTrigger>
            <Button
              aria-label="Save"
              size="icon-md"
              variant="outline"
            >
              <CheckIcon />
            </Button>
          </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable>
