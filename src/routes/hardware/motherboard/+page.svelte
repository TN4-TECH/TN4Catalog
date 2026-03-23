<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";
  import IconCopy from "$lib/icons/copy.svelte";

  const intel = [
    { code: "PM0099", title: "PLACA MAEH61 PRO REVENGER, LGA 1151", price: "R$549,99" },
    { code: "PM0030", title: "PLACA MAE H610 REVENGER, LGA 1700", price: "R$640,00" },
    { code: "PM0097", title: "PLACA MAE H81 REVENGER, LGA 1150", price: "R$650,00" },
    { code: "PM0028", title: "PLACA MAE AFOX H110, LGA 1151", price: "R$690,00" },
    { code: "PM0027", title: "PLACA MAE H310 VX PRO", price: "R$690,00" },
    { code: "PM0028", title: "PLACA MAE AFOX H110, LGA 1151", price: "R$690,00" },
    { code: "PM0029", title: "PLACA MAE H310 DUEX, LGA 1151", price: "R$700,00" },
    { code: "PM0018", title: "PLACA MAE H510PRO DUEX, LGA 1200", price: "R$730,00" },
    { code: "PM0010R", title: "PLACA MAE B75 REVENGER, LGA 1155", price: "R$750,00" },
    { code: "PM0004", title: "PLACA MAEH510 BIOSTAR, LGA 1200", price: "R$760,00" },
    { code: "PM0017", title: "PLACA MAE H610ZG BRANCA DUEX, LGA 1700", price: "R$790,00" },
    { code: "PM0020", title: "PLACA MAE B660M ASROCK PHANTOM GAMING, LGA 1700", price: "R$1.350,00",},
  ];

  const amd = [
    { code: "PM0015", title: "PLACA MÃE REVENGER A320M - AM4", price: "R$499,99" },
    { code: "PM0096", title: "PLACA MÃE REVENGER A520M AITEK DELTA - AMD AM4", price: "R$739,99" },
    { code: "PM0052", title: "PLACA MÃE MSI A520M-A PRO, AM4", price: "R$790,00" },
    { code: "PM0042", title: "PLACA MÃE DUEX 450G, AM4", price: "R$790,00" },
    { code: "PM0014", title: "PLACA MÃE DUEX B550, AM4", price: "R$790,00" },
    { code: "PM0102", title: "PLACA MÃE MSI PRO A620M-E, AM5", price: "R$990,00" },
    { code: "PM0043", title: "PLACA MÃE MSI B550M-A PRO AM4", price: "R$999,00" },
    { code: "PM0091", title: "PLACA MAE BIOSTAR B650MT, CHIPSET B650, AM5", price: "R$1.190,00" },
    { code: "PM0122", title: "PLACA MÃE GIGABYTE B550 AORUS ELITE - AM4 ", price: "R$1.390,00" },
    { code: "PM0084", title: "PLACA MAE MSI B550M PRO-VHD WIFI, AM4", price: "R$1.390,00" },
    { code: "PM0083", title: "PLACA MAE MSI MPG B550 GAMING PLUS, AM4", price: "R$1.690,00" },
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
