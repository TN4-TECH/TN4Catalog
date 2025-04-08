<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";
  import IconCopy from "$lib/icons/copy.svelte";

  const ddr3 = [
    {
      code: "ME0005",
      title: "KINGSTON BLISTER 8GB 1600MHZ  VERDE DDR3 ",
      price: "R$150,00",
    },
  ];

  const ddr4 = [
    { code: "ME0012H", title: "KINGSTON BLISTER 8GB 2666MHZ VERDE DDR4", price: "R$190,00" },
    { code: "ME0041", title: "FNX BLISTER 8GB 3200MHZ PRETA DDR4", price: "R$240,00" },
    { code: "ME0027", title: "REDRAGON RAGE 8GB 3200MHZ DDR4", price: "R$260,00" },
    { code: "ME0040", title: "RISE MODE Z BRANCA 8GB 3200MHZ DDR4", price: "R$260,00" },
    { code: "ME0051", title: "HIKSEMI AMOUR U10 8GB 3200MHZ DDR4", price: "R$260,00" },
    { code: "ME0055", title: "HIKSEMI FUTURE 8GB 3200MHZ DDR4", price: "R$260,00" },
    { code: "ME0052", title: "XPG GAMMIX D35 BRANCA 8GB 3200MHZ DDR4", price: "R$280,00" },
    { code: "ME0056", title: "HIKSEMI AMOUR WHITE 8GB 3200MHZ DDR4", price: "R$280,00" },
    { code: "ME0054", title: "HIKSEMI FUTURE RGB 8GB 3200MHZ DDR4", price: "R$300,00" },
    { code: "ME0042", title: "REDRAGON MAGMA 8GB 3200MHZ RGB DDR4", price: "R$310,00" },
    { code: "ME0054", title: "FURY BEAST BLACK 8GB 3200MHZ DDR4", price: "R$310,00" },
    { code: "ME0027", title: "REDRAGON SOLAR 8GB 3600MHZ RGB DDR4", price: "R$350,00" },
    { code: "ME0028", title: "REDRAGON RAGE 16GB 3200MHZ DDR4", price: "R$390,00" },
    { code: "ME0047", title: "REDRAGON MAGMA 16GB 3200MHZ  RGB DDR4", price: "R$400,00" },
    { code: "ME0058", title: "HIKSEMI AMOUR U10 16GB 3200MHZ  DDR4", price: "R$400,00" },
    { code: "ME0027", title: "REDRAGON SOLAR 16GB 3600MHZ  RGB DDR4", price: "R$475,00" },
    { code: "ME0054", title: "FURY  BEAST BLACK  16GB 3200MHZ DDR4", price: "R$490,00" },
    { code: "ME0057", title: "HIKSEMI AKIRA RGB 16GB 3200MHZ DDR4", price: "R$540,00" },
    { code: "ME0033", title: "REDRAGON MAGMA 32GB 3200MHZ RGB DDR4", price: "R$800,00" },
  ];

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text);
  }

  function allDDR4() {
    var finalString = "Memórias DDR4:\n\n";
    ddr4.forEach((DDR4, i) => {
      finalString +=
        `*${DDR4.title}* por *${DDR4.price}*` + (i + 1 < ddr4.length ? "\n" : "");
    });

    navigator.clipboard.writeText(finalString);
  }

  function allDDR3() {
    var finalString = "Memórias DDR3:\n\n";

    ddr3.forEach((DDR3, i) => {
      finalString +=
        `*${DDR3.title}* por *${DDR3.price}*` +
        (i + 1 < ddr3.length ? "\n" : "");
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
        <h1 class="text-xl font-bold">DDR3</h1>
        <CopyButton on:click={() => allDDR3()} class="space-x-2">
          <IconCopy />
          <span class="text-sm tracking-wider">COPIAR TODOS</span>
        </CopyButton>
      </div>
      <table class="border border-neutral-300 w-full">
        {#each ddr3 as DDR3}
          <tr class="group border border-neutral-300">
            <th class="text-left border border-neutral-300 p-2 bg-neutral-100"
              >{DDR3.code} | {DDR3.title}</th
            >
            <td class="p-2 flex justify-between items-center">
              <span>{DDR3.price}</span>
              <CopyButton
                on:click={() =>
                  navigator.clipboard.writeText(
                    `*MEMÓRIA ${DDR3.title}* por *${DDR3.price}*`
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
        <h1 class="text-xl font-bold">DDR4</h1>
        <CopyButton on:click={() => allDDR4()} class="space-x-2">
          <IconCopy />
          <span class="text-sm tracking-wider">COPIAR TODOS</span>
        </CopyButton>
      </div>
      <table class="border border-neutral-300 w-full">
        {#each ddr4 as DDR4}
          <tr class="border border-neutral-300">
            <th class="text-left border border-neutral-300 p-2 bg-neutral-100"
              >{DDR4.code} | {DDR4.title}</th
            >
            <td class="p-2 flex justify-between items-center">
              <span>{DDR4.price}</span>
              <CopyButton
                on:click={() =>
                  navigator.clipboard.writeText(
                    `MEMÓRIA *${DDR4.title}* por *${DDR4.price}*`
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
