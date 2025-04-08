<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";
  import IconCopy from "$lib/icons/copy.svelte";

  const intel = [
    { code: "PM0000", title: "775 G41 DDR3 TA-PCB001M - LGA 775", price: "R$390,00" },
    { code: "PM0000", title: "1155 STI", price: "R$480,00" },
    { code: "PM0000", title: "BLUCASE H110 DDR4 BMBH110-D3HGU - LGA 1151", price: "R$649,99" },
    { code: "PM0000", title: "BRAZILPC BPC-B75M.2 - LGA 1155", price: "R$479,99" },
    { code: "PM0000", title: "GMOG H81, LGA 1150, M.2 NVME, 100/100MBPS, MICRO ATX, HDMI, VGA", price: "R$499,99" },
    { code: "PM0000", title: "IH61-MA5 BULK DDR3 1155P REDE 10/100 AFOX - 16GB / VGA / HDMI", price: "R$539,99" },
    { code: "PM0000", title: "REVENGER H61/K - LGA1155", price: "R$549,99" },
    { code: "PM0000", title: "DUEX H61S, LGA 1155(INTEL 3GEN), MATX, DDR3", price: "R$549,90" },
    { code: "PM0000", title: "TAICON H55 DDR3 TA-PCB004 - LGA 1156 ", price: "R$579,99" },
    { code: "PM0000", title: "TAICON B75 H61 TA-PCB003M - LGA 1155", price: "R$580,00" },
    { code: "PM0000", title: "REVENGER H310 - LGA 1151", price: "R$589,99" },
    { code: "PM0000", title: "LGA 1151 H110", price: "R$590,00" },
    { code: "PM0000", title: "H610 LGA 1700 REVENGER", price: "R$640,00" },
    { code: "PM0000", title: "BLUECASE H81 BMBH81-A3HGU - LGA 1150", price: "R$649,99" },
    { code: "PM0000", title: "GT H310M-T, LGA 1151, DDR4 - TGT-H310M-T", price: "R$690,00" },
    { code: "PM0000", title: "BRAZILPC A520, AM4, DDR4", price: "R$690,00" },
    { code: "PM0000", title: "DUEX DX H510 PRO, INTEL LGA 1200, DDR4, mATX - DX H510 PRO", price: "R$730,00" },
    { code: "PM0000", title: "BIOSTAR H510M, DDR4, INTEL, LGA 1200, M-ATX", price: "R$759,99" },
    { code: "PM0000", title: "BIOSTAR B560MHP, 2.0, SOCKET 1200", price: "R$789,99" },
    { code: "PM0000", title: "DUEX H61, WHITE - H610ZG", price: "R$790,00" },
    { code: "PM0000", title: "BRAZILPC H610M BPC-H610M.2-TG - LGA 1700", price: "R$810,00" },
    { code: "PM0000", title: "MSI B560M PRO-E, INTEL LGA 1200, MATX, DDR4 ", price: "R$859,99" },
    { code: "PM0000", title: "BLUECASE BMBH410-D3HGU - LGA 1151", price: "R$889,99" },
    { code: "PM0000", title: "GIBABYTE B450M GAMING, AM4, 2XDDR4 (MAX 64GB)", price: "R$929,99" },

    
    { code: "PM0000", title: "LGA 1151 H110", price: "R$590,00" },

];

  const amd = [
    { code: "PM0000", title: "REVENGER A320 - AMD AM4", price: "R$499,99" },
    { code: "PM0000", title: "REVENGER A520 - AMD AM4", price: "R$599,99" },
    { code: "PM0000", title: "BLUECASE BMBA780G-A2HG DDR3 - AMD AM3/AM3+", price: "R$609,99" },
    { code: "PM0000", title: "PCWARE APM-320G DDR4 - AMD AM4", price: "R$629,99" },
    { code: "PM0000", title: "BIOSTAR AMD B450MHP - AM4 - DDR4", price: "R$689,99" },
    { code: "PM0000", title: "DUEX B550, M2, AM4 - DX B550ZG-S", price: "R$789,99" },
    { code: "PM0000", title: "MSI B450M-M PRO - MAX II", price: "R$790,00" },
    { code: "PM0000", title: "BIOSTAR B450MX-S, SOCKET AM4", price: "R$790,00" },
    { code: "PM0000", title: "MSI A520M-A PRO", price: "R$790,00" },
    { code: "PM0000", title: "ASUS PRIME A520M-E - AMD AM4", price: "R$850,00" },
    { code: "PM0000", title: "BIOSTAR B550MXE PRO DDR4 ", price: "R$949,99" },
    { code: "PM0000", title: "BLUECASE BMBA88-A2HG DDR3 - FM2/FM2+", price: "R$949,99" },
    { code: "PM0000", title: "BIOSTAR B550MT, DDR4, SOCKET AM4, MATX", price: "R$949,99" },
    { code: "PM0000", title: "ASUS TUF GAMING A520M-PLUS II - AMD AM4", price: "R$990,00" },
    { code: "PM0000", title: "Biostar B650MT, Chipset B650, AMD AM5, MATX, DDR5", price: "R$1.190,00" },
    { code: "PM0000", title: "GIGABYTE AORUS ELITE B760M, AX, 1.3", price: "R$2.190,00" },

    
    
    
    { code: "PM0000", title: "DUEX B550, M2, AM4 - DX B550ZG-S", price: "R$789,99" },
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
