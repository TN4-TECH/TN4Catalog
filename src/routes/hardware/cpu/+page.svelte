<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";
  import IconCopy from "$lib/icons/copy.svelte";

  const intel = [
    { code: "PO0002", title: "Intel Core I5-3470 (3ªGEN)", price: "R$220,00" },
    { code: "PO0133", title: "Intel Core I7-3770 (3ªGEN)", price: "R$570,00" },
    { code: "PO0122", title: "Intel Core I7-4770 (4ªGEN)", price: "R$590,00" },
    { code: "PO0075", title: "Intel Core I3-10100F (10ªGEN)", price: "R$790,00" },
    { code: "PO0029", title: "Intel Core I5-9600K (9ªGEN)", price: "R$850,00" },
    { code: "PO0069", title: "Intel Core I5-10400F (10ªGEN)", price: "R$990,00" },
    { code: "PO0031", title: "Intel Core I7-8700 (8ªGEN)", price: "R$1.190,00" },
    { code: "PO0072", title: "Intel Core I7-6700 (6ªGEN)", price: "R$1.290,00" },
    { code: "PO0078", title: "Intel Core I5-12400F (12ªGEN)", price: "R$1.390,00" },
    { code: "PO0032", title: "Intel Core I7-9700 (9ªGEN)", price: "R$1.690,00" },
];

  const amd = [
    { code: "PO0040", title: "ATHLON 3000G", price: "R$600,00" },
    { code: "PO0035", title: "AMD Ryzen 5 4500", price: "R$890,00" },
    { code: "PO0058", title: "AMD Ryzen 5 5500", price: "R$990,00" },
    { code: "PO0056B", title: "AMD Ryzen 5 5600G", price: "R$1.250,00" },
    { code: "PO0057B", title: "AMD Ryzen 5 5600", price: "R$1.390,00" },
    { code: "PO0055", title: "AMD Ryzen 5 5600GT", price: "R$1.490,00" },
    { code: "PO0050", title: "AMD Ryzen 5 3700X", price: "R$1.490,00" },
    { code: "PO0063", title: "AMD Ryzen 5 5700G", price: "R$1.750,00" },
    { code: "PO00", title: "AMD Ryzen 7 5700X", price: "R$1.890,00" },
    { code: "PO00", title: "AMD Ryzen 7 5800X", price: "R$2.490,00" },
    { code: "PO00", title: "AMD Ryzen 7 5700X3D", price: "R$2.590,00" },
    { code: "PO00", title: "AMD Ryzen 9 5900X", price: "R$2.990,00" },
  ];

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text);
  }

  function allAmd() {
    var finalString = "Processadores AMD:\n\n";
    amd.forEach((Amd, i) => {
      finalString +=
        `*${Amd.title}* por *${Amd.price}*` + (i + 1 < amd.length ? "\n" : "");
    });

    navigator.clipboard.writeText(finalString);
  }

  function allIntel() {
    var finalString = "Processadores Intel:\n\n";

    intel.forEach((Intel, i) => {
      finalString +=
        `*${Intel.title}* por *${Intel.price}*` +
        (i + 1 < intel.length ? "\n" : "");
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
        <h1 class="text-xl font-bold">🟦INTEL</h1>
        <CopyButton on:click={() => allIntel()} class="space-x-2">
          <IconCopy />
          <span class="text-sm tracking-wider">COPIAR TODOS</span>
        </CopyButton>
      </div>
      <table class="border border-neutral-300 w-full">
        {#each intel as Intel}
          <tr class="group border border-neutral-300">
            <th class="text-left border border-neutral-300 p-2 bg-neutral-100"
              >{Intel.code} | {Intel.title}</th
            >
            <td class="p-2 flex justify-between items-center">
              <span>{Intel.price}</span>
              <CopyButton
                on:click={() =>
                  navigator.clipboard.writeText(
                    `🖥 *PROCESSADOR ${Intel.title}* por *${Intel.price}*`
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
        <h1 class="text-xl font-bold">🟥AMD</h1>
        <CopyButton on:click={() => allAmd()} class="space-x-2">
          <IconCopy />
          <span class="text-sm tracking-wider">COPIAR TODOS</span>
        </CopyButton>
      </div>
      <table class="border border-neutral-300 w-full">
        {#each amd as Amd}
          <tr class="border border-neutral-300">
            <th class="text-left border border-neutral-300 p-2 bg-neutral-100"
              >{Amd.code} | {Amd.title}</th
            >
            <td class="p-2 flex justify-between items-center">
              <span>{Amd.price}</span>
              <CopyButton
                on:click={() =>
                  navigator.clipboard.writeText(
                    `🎮 *${Amd.title}* por *${Amd.price}*`
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
