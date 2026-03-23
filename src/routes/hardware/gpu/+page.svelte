<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";
  import IconCopy from "$lib/icons/copy.svelte";

  const gpus = [
    { code: "VG0015", title: "PCYES GT 740, 4GB", price: "R$ 750,00" },
    { code: "VG0091", title: "DELTA GTX 750 TI, 4GB", price: "R$ 890,00" },
    { code: "VG0087", title: "PCYES GTX 750 TI, 4GB", price: "R$ 990,00" },
    { code: "VG0067", title: "RX 580 8GB", price: "R$1.390,00" },
    { code: "VG0119", title: "PCYES RTX 3050 6GB", price: "R$1.990,00" },
    { code: "VG0118", title: "MSI SHADOW 2X RTX 5050 8GB", price: "R$2.950,00" },
    { code: "VG0117", title: "GALAX BLACK RTX 5050 8GB", price: "R$3.199,00" },
    { code: "VG0116", title: "MSI VENTUS 2X RTX 5060 8GB", price: "R$ 3.490,00" },
    { code: "VG0066", title: "GAINWARD RTX 5060 8GB", price: "R$ 3.590,00" },
    { code: "VG0099", title: "GIGABYTE RX 9060 XT GAMING OC, 8GB, GDDR6", price: "R$ 3.599,00" },
    { code: "VG0100", title: "GIGABYTE RTX 5060 TI 8GB", price: "R$ 3.899,00" },
    { code: "VG0115", title: "ASUS RTX 5060 TI OC PRIME 8GB", price: "R$ 4.390,00" },
    { code: "VG0113", title: "GAINWARD PYTHON RTX 5060TI 16GB ", price: "R$ 5.390,00" },
    { code: "VG0069", title: "ASROCK RADEON RX 6600 CHALLENGER D, 8GB, GDDR6, 128BITS", price: "R$ 2.490,00" },
    { code: "VG0079", title: "ASUS RADEON RX 7600 DUAL EVO OC EDITION, 8GB, GDDR6, 128 BIT", price: "R$  2.650,00" },
  ];

  function allGPUs() {
    var finalString = "🎮 PLACAS DE VÍDEO:\n\n";
    gpus.forEach((gpu, i) => {
      finalString +=
        `GPU *${gpu.title}* por *${gpu.price}*` +
        (i + 1 < gpus.length ? "\n" : "");
    });

    navigator.clipboard.writeText(finalString);
  }
</script>

<svelte:head>
  <title>Placas de Vídeo — TN4-TECH</title>
</svelte:head>

<div class="p-8">
  <div>
    <a href="/"> ⬅ Home</a>
    <span> | </span>
    <a href="/hardware"> ↕ Hardware</a>
  </div>

  <div class="mb-6">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-bold">🎮 PLACAS DE VÍDEO</h1>
      <CopyButton on:click={() => allGPUs()} class="space-x-2">
        <IconCopy />
        <span class="text-sm tracking-wider">COPIAR TODOS</span>
      </CopyButton>
    </div>

    <table class="border border-neutral-300 w-full product-table">
      {#each gpus as gpu}
        <tr class="border border-neutral-300">
          <th class="text-left border border-neutral-300 p-2 bg-neutral-100">{gpu.code} | {gpu.title}</th>
          <td class="p-2 flex justify-between items-center">
            <span>{gpu.price}</span>
            <CopyButton
              on:click={() => navigator.clipboard.writeText(`🎮 *${gpu.title}* por *${gpu.price}*`) }
              class="text-white bg-black rounded-sm p-1"
            >
              <IconCopy />
            </CopyButton>
          </td>
        </tr>
      {/each}
    </table>
  </div>
</div>
