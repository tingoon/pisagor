<script lang="ts">
import { Editable } from "../index";
</script>

<Editable defaultValue="Click to edit" placeholder="Enter text…">
  <Editable.Area>
    <Editable.Preview />
    <Editable.Input />
  </Editable.Area>
  <Editable.Control>
    <Editable.EditTrigger>Edit</Editable.EditTrigger>
    <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
    <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
  </Editable.Control>
</Editable>
