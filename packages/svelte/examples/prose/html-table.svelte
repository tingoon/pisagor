<script module lang="ts">
  import source from "./html-table.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Prose } from "@pisagor/svelte";
</script>

<Prose>
  <table>
    <thead>
      <tr>
        <th>King&apos;s Treasury</th>
        <th>People&apos;s happiness</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Empty</td>
        <td>Overflowing</td>
      </tr>
      <tr>
        <td>Modest</td>
        <td>Satisfied</td>
      </tr>
      <tr>
        <td>Full</td>
        <td>Ecstatic</td>
      </tr>
    </tbody>
  </table>
</Prose>
