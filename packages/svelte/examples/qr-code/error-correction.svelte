<script lang="ts">
import { QrCode } from "@pisagor/svelte";

const eccLevels = ["L", "M", "Q", "H"] as const;
</script>

<div class="flex flex-wrap items-center gap-2">
      {#each eccLevels as ecc}
<div class="flex flex-col items-center gap-2">
          <QrCode
            class="[--qr-code-size:6rem]"
            encoding={{ ecc }}
            value="https://example.com/docs"
          >
            <QrCode.Frame />
          </QrCode>
          <p class="text-muted-foreground text-sm">{ecc}</p>
        </div>
{/each}
    </div>
