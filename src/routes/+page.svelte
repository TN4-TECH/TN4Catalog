<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";
  import IconCopy from "$lib/icons/copy.svelte";
  import { onMount } from "svelte";
  import { buscarProdutos } from "$lib/api";
  import { session } from "$lib/sessionStore";
  import { get } from "svelte/store";

  let produtos: any[] = [];
  let erro = "";

  onMount(async () => {
    try {
      const sessaoAtual = get(session); // obtém o valor atual do store
      if (!sessaoAtual) {
        erro = "Sessão não encontrada!";
        return;
      }
      produtos = await buscarProdutos(sessaoAtual, {
        estoque_maior_zero: "true",
        familia_id: "66",
      });
    } catch (e) {
      erro = e instanceof Error ? e.message : String(e);
    }
  });

  let open = false;

  function toggle() {
    open = !open;
  }

  const monitors = [
    { code: "LC0032", title: "MONITOR SEMINOVO 19' POL. SORTIDO", price: "R$390,00" },
    { code: "LC0016", title: "MONITOR HAYOM 17.1, VGA, HDMI, PRETO", price: "R$439,90" },
    { code: "LC0139", title: "MONITOR HAYOM 19' POL., VGA, HDMI, PRETO", price: "R$490,00" },
    { code: "LC0081", title: " MONITOR VX PRO 21' POL., LED, VGA + HDMI, 60HZ", price: "R$650,00" },
    { code: "LC0120", title: "MONITOR MNBOX 20' POL, LED", price: "R$590,00" },
    { code: "LC0108", title: "MONITOR VX PRO 21.5' POL., LED, 60HZ", price: "R$650,00" },
    { code: "LC0038", title: "MONITOR BLUECASE 21.5' BRANCO, LED, 75Hz", price: "R$700,00" },
    { code: "LC0084", title: "MONITOR MYMAX 21,5' POL. ROSA, FULL HD", price: "R$790,00" },
    { code: "LC0109", title: "MONITOR VX PRO 23' POL", price: "R$800,00" },
    { code: "LC0014", title: "MONITOR BLUECASE 23.6', BRANCO", price: "R$990,00" },
    { code: "LC0110", title: "MONITOR VX PRO 24' POL., LED 60HZ", price: "R$900,00" },
    { code: "LC0141", title: "MONITOR GAMER BLUECASE TRACE 23,8, CURVO, BRANCO, 75HZ", price: "R$969,90" },
    { code: "LC0142", title: "MONITOR GAMER BLUECASE TRACE 23,8, CURVO, PRETO, 75HZ", price: "R$969,90" },
    { code: "LC0077", title: "MONITOR OFFICE BRIGHT, 27' POL 5MS", price: "R$1.050,00" },
    { code: "LC0000", title: "MONITOR GRASEP LED 24.5', 100HZ, 1MS", price: "R$1.059,00" },
    { code: "LC0101", title: "MONITOR GRASEP LED 24.5', 180HZ, 1MS", price: "R$1.290,00" },
    { code: "LC0107", title: "MONITOR ACER NITRO KG1 180HZ", price: "R$1.390,00" },
    { code: "LC0085", title: "MONITOR GAMER BLUECASE TAURUS 23,8, IPS, 180HZ", price: "R$1.450,00" },
    { code: "LC0094", title: "MONITOR GAMER BLUECASE ARCUS 23.8' POL CURVO, 180HZ", price: "R$1.490,00" },
    { code: "LC0103", title: "MONITOR GRASEP LED 27', 100HZ, 1MS CURVO", price: "R$1.490,00" },
    { code: "LC0000", title: "MONITOR MSI 27', 144HZ, 1MS", price: "R$1.490,00" },
    { code: "LC0000", title: "MONITOR KALKAN FREYA 24', 240HZ, 1MS", price: "R$1.490,00" },
    { code: "LC0000", title: "MONITOR KALKAN FENRIR 27', 144HZ, 1MS", price: "R$1.590,00" },
    { code: "LC0082", title: "MONITOR GRASEP 30'POL. 2K, 100HZ, ULTRAWIDE", price: "R$1.890,00" },
    { code: "LC0118", title: "MONITOR GAMER DUEX FLY 32' POL, PRO GAMER, 240HZ, CURVO", price: "R$1.990,00" },
    { code: "LC0117", title: "MONITOR GAMER DUEX ULTRAWIDE, 34' POL., 180HZ", price: "R$2.890,00" },
    { code: "LC0000", title: "MONITOR DUEX ULTRAWIDE, 49\" POL., CURVO, 165HZ", price: "R$5.890,00" }
  ];

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

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text);
  }

  function allGPUs() {
    var finalString = "🎮 PLACAS DE VÍDEO:\n\n";
    gpus.forEach((gpu, i) => {
      finalString +=
        `GPU *${gpu.title}* por *${gpu.price}*` +
        (i + 1 < gpus.length ? "\n" : "");
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
    <a href="/chair">🪑 Cadeiras</a>
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
        <a href="hardware/watercooler">Watercooler</a>
        <a href="hardware/motherboard">Placa Mãe</a>
        <a href="hardware/cabinet">Gabinetes</a>
         <a href="hardware/gpu">Placas de Vídeo</a>

      </div>
    </div>
  </div>

  <div>
    <br />
    <hr />
    <br />
  </div>

  {#if erro}
    <div class="bg-red-100 text-red-800 p-2 rounded mb-4">{erro}</div>
  {/if}

<!-- 
  {#if produtos.length > 0}
    <h2>Produtos</h2>
    <ul>
      {#each produtos as produto}
        <li>
          <strong>{produto.descricao}</strong><br />
          Preço: R$ {produto.preco}<br />
          Família: {produto.familia}<br />
          <img
            src={produto.imagem_grande}
            alt="Imagem do produto"
            width="120"
          />
        </li>
      {/each}
    </ul>
  {:else}
    <div>Nenhum produto encontrado.</div>
  {/if} -->

  <div class="grid grid-cols-2 gap-4 mb-8">
    <div>
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-bold">🖥️ MONITORES</h1>
        <CopyButton on:click={() => allMonitors()} class="space-x-2">
          <IconCopy />
          <span class="text-sm tracking-wider">COPIAR TODOS</span>
        </CopyButton>
      </div>
      <table class="border border-neutral-300 w-full product-table">
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
      <table class="border border-neutral-300 w-full product-table">
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
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
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
