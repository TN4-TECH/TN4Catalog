<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";
  import IconCopy from "$lib/icons/copy.svelte";

  const water120mm = [
    { code: "WC0000", title: "WATER COOLER EVOLUT GLACIAL, 120MM, LED FAN", price: "R$330,00" },
    { code: "WC0000", title: "WATER COOLER EVOLUT GLACIAL, 120MM, MANGUEIRA LED", price: "R$349,90" },
    { code: "WC0000", title: "WATER COOLER PCYES SANGUE FRIO 3 BLACK VULCAN, 120MM", price: "R$359,90" },
    { code: "WC0000", title: "WATER COOLER PCYES SANGUE FRIO 3 WHITE GHOST, 120MM", price: "R$379,90" },
    { code: "WC0000", title: "WATER COOLER GAMDIAS AURA, 120MM, PRETO", price: "R$389,00" },
    { code: "WC0000", title: "WATER COOLER GAMDIAS AURA, 120MM, BRANCO", price: "R$389,90" },
    { code: "WC0000", title: "WATER COOLER SANGUE FRIO2 120MM PCYES", price: "R$399,90" },
    { code: "WC0000", title: "WATER COOLER EVOLUT GLACIAL LUMINI, 120MM, BRANCO, MANGUEIRA LED", price: "R$399,90" },
    { code: "WC0000", title: "WATER COOLER KALKAN IOTA, 240MM, ARBG, PRETO", price: "R$399,91" },
    { code: "WC0000", title: "WATER COOLER KALKAN ALPHA, 240MM, ARBG, TELA DIGITAL, PRETO", price: "R$489,90" },
    { code: "WC0000", title: "WATER COOLER KALKAN DELTA, 240MM, ARBG, PRETO", price: "R$550,00" },
    { code: "WC0000", title: "WATER COOLER PCYES VISION BLACK VULCAN, TELA LCD 2,1", price: "R$1.290,00" }
  ];

  const water360mm = [
    { code: "WC0000", title: "WATER COOLER KALKAN IOTA, 360MM, ARBG, PRETO", price: "R$519,90" },
    { code: "WC0000", title: "WATER COOLER RISE MODE 360MM, AMD/INTEL, PRETO", price: "R$:599,90"},
    { code: "WC0000", title: "WATER COOLER KALKAN ALPHA, 360MM, ARBG, TELA DIGITAL, PRETO", price: "R$:599,90"},
    { code: "WC0000", title: "WATER COOLER KALKAN DELTA, 360MM, ARBG, PRETO", price: "R$:699,90"},
    { code: "WC0000", title: "WATER COOLER ACEGEEK E360, RAINBOW, 360MM, BRANCO", price: "R$:679,90"},
    { code: "WC0000", title: "WATER COOLER SEGOTEP BEICED II ARGB, 360MM, AMD/INTEL, PRETO", price: "R$:729,90"}
  ];

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text);
  }

  function all120mm() {
    let finalString = "Watercoolers 120mm/240mm:\n\n";
    water120mm.forEach((item, i) => {
      finalString += `*${item.title}* por *${item.price}*` + (i + 1 < water120mm.length ? "\n" : "");
    });

    navigator.clipboard.writeText(finalString);
  }

  function all360mm() {
    let finalString = "Watercoolers 360mm:\n\n";
    water360mm.forEach((item, i) => {
      finalString += `*${item.title}* por *${item.price}*` + (i + 1 < water360mm.length ? "\n" : "");
    });
    navigator.clipboard.writeText(finalString);
  }
</script>

<svelte:head>
  <title>TN4-TECH PRODUTOS</title>
</svelte:head>

<div class="p-8">
  <div>
    <a href="/"> ⬅ Home</a>
    <span> | </span>
  </div>

  <div class="grid grid-cols-2 gap-4 mb-8">
    <div>
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-bold">💧 360MM</h1>
        <CopyButton on:click={() => all360mm()} class="space-x-2">
          <IconCopy />
          <span class="text-sm tracking-wider">COPIAR TODOS</span>
        </CopyButton>
      </div>
      <table class="border border-neutral-300 w-full">
        {#each water360mm as item}
          <tr class="group border border-neutral-300">
            <th class="text-left border border-neutral-300 p-2 bg-neutral-100">
              {item.code} | {item.title}
            </th>
            <td class="p-2 flex justify-between items-center">
              <span>{item.price}</span>
              <CopyButton
                on:click={() =>
                  navigator.clipboard.writeText(
                    `🖥 *${item.title}* por *${item.price}*`
                  )}
                class="text-white bg-black rounded-sm p-1"
              >
                <IconCopy />
              </CopyButton>
            </td>
          </tr>
        {/each}
      </table>
    </div>

    <div>
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-bold">💧 120MM / 240MM</h1>
        <CopyButton on:click={() => all120mm()} class="space-x-2">
          <IconCopy />
          <span class="text-sm tracking-wider">COPIAR TODOS</span>
        </CopyButton>
      </div>
      <table class="border border-neutral-300 w-full">
        {#each water120mm as item}
          <tr class="border border-neutral-300">
            <th class="text-left border border-neutral-300 p-2 bg-neutral-100">
              {item.code} | {item.title}
            </th>
            <td class="p-2 flex justify-between items-center">
              <span>{item.price}</span>
              <CopyButton
                on:click={() =>
                  navigator.clipboard.writeText(
                    `🎮 *${item.title}* por *${item.price}*`
                  )}
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
</div>
