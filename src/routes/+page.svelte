<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";
  import IconCopy from "$lib/icons/copy.svelte";

  let open = false;

  function toggle() {
    open = !open;
  }

  const monitors = [
    { code: "LC0032", title: "SEMINOVO 19' POL. *SORTIDO*", price: "R$390,00" },
    { code: "LC0015", title: "MYMAX 19' POL., ROXO, LED", price: "R$550,00" },
    { code: "LC0033", title: "BLUECASE 19' POL. 75Hz", price: "R$570,00" },
    {
      code: "LC0010",
      title: "3GREEN 20' POL, LED, 2MS, 75HZ",
      price: "R$630,00",
    },
    {
      code: "LC0019",
      title: "VX PRO 21.5' POL., LED, 60HZ, 8MS",
      price: "R$690,00",
    },
    {
      code: "LC0093",
      title: "OFFICE BRIGHT, 24' POL., FULL HD, 5MS",
      price: "R$850,00",
    },
    { code: "LC0014", title: "3GREEN 24' POL. 75Hz", price: "R$890,00" },
    {
      code: "LC0077",
      title: "OFFICE BRIGHT, 27' POL., FULL HD, 5MS, IPS",
      price: "R$1.090,00",
    },
    {
      code: "LC0066",
      title: "BLUECASE OPTIGAMER FHD 23.8', 100HZ, 5MS, CURVO",
      price: "R$1.100,00",
    },
    {
      code: "LC0066B",
      title: "GAMER BLUECASE OPTIGAMER PRO 23,8' POL., BRANCO, CURVO, 100HZ, 5MS",
      price: "R$1.190,00",
    },
    {
      code: "LC00",
      title: "BLUECASE ERAS FHD 23.8', 100HZ, CURVO",
      price: "R$1.190,00",
    },
    {
      code: "LC00",
      title: "BLUECASE ERAS FHD 23.8', 100HZ, CURVO  *BRANCO*",
      price: "R$1.290,00",
    },
    {
      code: "LC0022",
      title: "GRASEP LED 23.8'POL., 180HZ, 1MS",
      price: "R$1.390,00",
    },
    {
      code: "LC0078",
      title: "DUEX 32' POL., 75Hz, PLANO",
      price: "R$1.390,00",
    },
    {
      code: "LC0094",
      title: "BLUECASE ARCUS FHD 23.6', 180HZ, CURVO",
      price: "R$1.490,00",
    },
    { code: "LC0031", title: "DUEX 27' POL. 240HZ", price: "R$1.590,00" },
    {
      code: "LC00",
      title: "BLUECASE ERAS FHD 27', 100HZ, CURVO  *PRETO*",
      price: "R$1.590,00",
    },
    {
      code: "LC00",
      title: "BLUECASE ERAS FHD 27', 100HZ, CURVO  *BRANCO *",
      price: "R$1.690,00",
    },
    {
      code: "LC0091",
      title: "DUEX BLACK 27'POL. LED, 165HZ, 2K",
      price: "R$1.690,00",
    },
    {
      code: "LC00",
      title: "GRASEP 30'POL. 2K, 100HZ, ULTRAWIDE",
      price: "R$1.890,00",
    },
  ];

  const gpus = [
    { code: "VG0039", title: "REVENGER GT 730 4GB", price: "R$ 490,00" },
    { code: "VG0053", title: "BIOSTAR RX 550 4GB", price: "R$ 790,00" },
    { code: "VG0073", title: "PCYES RX 570 4GB, 256BITS, GDDR5, PROJETO EDGE", price: "R$ 1.090,00" },
    { code: "VG0013V", title: "MSI GTX 1650 4GB VENTUS", price: "R$ 1.290,00" },
    { code: "VG0000", title: "RX 580 8GB ", price: "R$ 1.290,00" },
    { code: "VG0056", title: "ZOTAC RTX 3050 6GB LOW PROFILE", price: "R$ 1.990,00" },
    { code: "VG0000", title: "RTX 3060", price: "R$ 2.590,00" },
    { code: "VG0058", title: "MSI RTX 4070 SUPER 12GB", price: "R$ 7.290,00" },
    { code: "VG0071", title: "MSI RTX 5070TI 16GB", price: "R$ 11.900,00" },
  ];

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text);
  }

  function allGPUs() {
    var finalString = "🎮 PLACAS DE VÍDEO:\n\n";
    gpus.forEach((gpu, i) => {
      finalString +=
        `GPU *${gpu.title}* por *${gpu.price}*` + (i + 1 < gpus.length ? "\n" : "");
    });

    navigator.clipboard.writeText(finalString);
  }

  function allMonitors() {
    var finalString = "🖥 MONITORES:\n\n";

    monitors.forEach((monitor, i) => {
      finalString +=
        `MONITOR *${monitor.title}* por *${monitor.price}*` +
        (i + 1 < monitors.length ? "\n" : "");
    });
    navigator.clipboard.writeText(finalString);
  }
</script>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 6px;
  }
  .dropdown-content a {
    padding: 10px;
    text-decoration: none;
    display: block;
    color: black;
  }
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  .show {
    display: block;
  }
</style>

<svelte:head>
  <title>TN4-TECH PRODUTOS</title>
</svelte:head>

<div class="p-8" style="text-align:center;">
  <div>
    <a href="/notebooks">💻 Notebooks</a>
    <span> | </span>
    <a href="/office">⚙Office⚙</a>
    <span> | </span>
    <a href="/amd">🔴AMD🔴</a>
    <span> | </span>
    <a href="/intel">🔹Intel🔹</a>
    <span> | </span>
    <a href="/setup">⌨🖱 Setup Completo</a>
    <span> | </span>
    <a href="/setupCustom">🖌 Setup Personalizado</a>
    <span> | </span>
    <a href="/pcCustom">🖌 PCs Personalizado</a>
    <span> | </span>
    <div class="dropdown">
      <button on:click={toggle}>↕ Hardware</button>
      <div class="dropdown-content {open ? 'show' : ''}">
        <a href="hardware/cpu">Processadores</a>
        <a href="hardware/ram">Memória RAM</a>
        <a href="hardware/watercooler">Watercooler</a>
        <a href="hardware/motherboard">Placa Mãe</a>
      </div>
    </div>
    </div>

  <div><br /><hr /><br /></div>

  <div class="grid grid-cols-2 gap-4 mb-8">
    <div>
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-bold">🖥️ MONITORES</h1>
        <CopyButton on:click={() => allMonitors()} class="space-x-2">
          <IconCopy />
          <span class="text-sm tracking-wider">COPIAR TODOS</span>
        </CopyButton>
      </div>
      <table class="border border-neutral-300 w-full">
        {#each monitors as monitor}
          <tr class="group border border-neutral-300">
            <th class="text-left border border-neutral-300 p-2 bg-neutral-100"
              >{monitor.code} | {monitor.title}</th
            >
            <td class="p-2 flex justify-between items-center">
              <span>{monitor.price}</span>
              <CopyButton
                on:click={() =>
                  navigator.clipboard.writeText(
                    `🖥 *MONITOR ${monitor.title}* por *${monitor.price}*`
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
        <h1 class="text-xl font-bold">🎮 PLACAS DE VÍDEO</h1>
        <CopyButton on:click={() => allGPUs()} class="space-x-2">
          <IconCopy />
          <span class="text-sm tracking-wider">COPIAR TODOS</span>
        </CopyButton>
      </div>
      <table class="border border-neutral-300 w-full">
        {#each gpus as gpu}
          <tr class="border border-neutral-300">
            <th class="text-left border border-neutral-300 p-2 bg-neutral-100"
              >{gpu.code} | {gpu.title}</th
            >
            <td class="p-2 flex justify-between items-center">
              <span>{gpu.price}</span>
              <CopyButton
                on:click={() =>
                  navigator.clipboard.writeText(
                    `🎮 *${gpu.title}* por *${gpu.price}*`
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
