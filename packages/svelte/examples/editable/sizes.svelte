<script lang="ts">
import { Button, Editable } from "@pisagor/svelte";
import { CheckIcon, XIcon } from "@pisagor/svelte/icons";
</script>

<div class="flex flex-col gap-2">
      <Editable value="Editable content">
        <Editable.Area>
          <Editable.Input size="sm"   />
          <Editable.Preview size="sm" />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger>
            <Button
                aria-label="Cancel"
                size="icon-sm"
                variant="outline"
              >
                <XIcon />
              </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger>
            <Button
                aria-label="Save"
                size="icon-sm"
                variant="outline"
              >
                <CheckIcon />
              </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
      <Editable value="Editable content">
        <Editable.Area>
          <Editable.Input size="md"   />
          <Editable.Preview size="md" />
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
      <Editable value="Editable content">
        <Editable.Area>
          <Editable.Input size="lg"   />
          <Editable.Preview size="lg" />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger>
            <Button
                aria-label="Cancel"
                size="icon-lg"
                variant="outline"
              >
                <XIcon />
              </Button>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger>
            <Button
                aria-label="Save"
                size="icon-lg"
                variant="outline"
              >
                <CheckIcon />
              </Button>
          </Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
    </div>
