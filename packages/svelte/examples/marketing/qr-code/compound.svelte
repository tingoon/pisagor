<script lang="ts">
  import { QrCode } from "@pisagor/svelte";
</script>

<QrCode.Root value="https://example.com">
  <QrCode.Frame>
    <QrCode.Pattern />
  </QrCode.Frame>
</QrCode.Root>
