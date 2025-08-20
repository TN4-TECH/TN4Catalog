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
    { code: "LC0032", title: "SEMINOVO 19' POL. *SORTIDO*", price: "R$390,00"},
    { code: "LC0015", title: "MYMAX 19' POL., ROSA, LED", price: "R$550,00"},
    { code: "LC0081", title: "MONITOR VX PRO 19' POL", price: "R$550,00"},
    { code: "LC0108", title: "MONITOR VX PRO 21.5' POL., LED, 60HZ", price: "R$650,00"},
    { code: "LC0038", title: "MONITOR BLUECASE 21.5' BRANCO, LED, 75Hz", price: "R$700,00"},
    { code: "LC0084", title: "MONITOR MYMAX 21,5' POL. ROSA, FULL HD", price: "R$790,00"},
    { code: "LC0109", title: "MONITOR VX PRO 23' POL", price: "R$800,00"},
    { code: "LC0105", title: "MONITOR BLUECASE 23.6', BRANCO", price: "R$800,00"},
    { code: "LC0014", title: "MONITOR BLUECASE 23.6', BRANCO", price: "R$990,00"},
    { code: "LC0110", title: "MONITOR VX PRO 24' POL., LED 60HZ", price: "R$900,00"},
    { code: "LC0077", title: "MONITOR OFFICE BRIGHT, 27' POL 5MS", price: "R$1.050,00"},
    { code: "LC0066", title: "MONITOR BLUECASE OPTIGAMER PRO 23,8' PRETO, CURVO, 100HZ", price: "R$1.090,00"},
    { code: "LC0066B",title: "MONITOR BLUECASE OPTIGAMER PRO 23,8' BRANCO, CURVO, 100HZ", price: "R$1.190,00"},
    { code: "LC0096", title: "MONITOR GAMER BLUECASE ERAS 23.8' POL., 100HZ, PRETO, CURVO", price: "R$1.190,00"},
    { code: "LC0095", title: "MONITOR GAMER BLUECASE ERAS 23.8' POL., 100HZ, BRANCO, CURVO", price: "R$1.290,00"},
    { code: "LC0078", title: "MONITOR GAMER BLUECASE ERAS 23.8' POL., 100HZ, BRANCO, CURVO", price: "R$1.390,00", },

    { code: "LC0107", title: "MONITOR ACER NITRO KG1 180HZ", price: "R$1.390,00", },
    { code: "LC0094", title: "MONITOR GAMER BLUECASE ARCUS 23.8' POL CURVO, 180HZ", price: "R$1.490,00", },
    { code: "LC0085", title: "MONITOR GAMER BLUECASE TAURUS 23,8, IPS, 180HZ", price: "R$1.450,00", },
    { code: "LC0103", title: "MONITOR GRASEP LED 27', 100HZ 1MS", price: "R$1.490,00", },
    { code: "LC0087", title: "MONITOR GAMER BLUECASE TAURUS PRO 23.8, IPS, 180HZ", price: "R$1.550,00", },
    { code: "LC0097", title: "MONITOR GAMER BLUECASE ERAS 27' POL., PRETO, CURVO 100HZ", price: "R$1.590,00", },
    { code: "LC0098", title: "MONITOR GAMER BLUECASE ERAS 27' POL., BRANCO, CURVO 100HZ", price: "R$1.690,00", },
    { code: "LC0082", title: "GRASEP 30'POL. 2K, 100HZ, ULTRAWIDE", price: "R$1.890,00", },
  ];

  const gpus = [
    { code: "VG0039", title: "REVENGER GT 730 4GB", price: "R$ 490,00" },
    { code: "VG0053", title: "BIOSTAR RX 550 4GB", price: "R$ 790,00" },
    { code: "VG0053", title: "GTX 750TI 2GB", price: "R$ 890,00" },
    { code: "VG0067", title: "RX 580 8GB", price: "R$1.390,00" },
    { code: "VG0070", title: "GAINWARD RTX 3050 6GB", price: "R$1.990,00" },
    { code: "VG0016", title: "RX 6600 8GB CHALLENGER", price: "R$ 2.490,00" },
    { code: "VG0016", title: "ZOTAC RTX 3060 12GB", price: "R$ 2.590,00" },
    { code: "VG0000", title: "RTX 4060 ZOTAC WHITE", price: "R$ 3.290,00" },
    { code: "VG0066", title: "GAINWARD GHOST RTX 5060, 8GB", price: "R$ 3.590,00" },
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
        <a href="hardware/ram">Memória RAM</a>
        <a href="hardware/watercooler">Watercooler</a>
        <a href="hardware/motherboard">Placa Mãe</a>
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
  {/if}

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
