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

  //const monitors = [
    //{ code: "LC0032", title: "MONITOR SEMINOVO 19' POL. SORTIDO", price: "R$390,00" },
    //{ code: "LC0016", title: "MONITOR HAYOM 17.1, VGA, HDMI, PRETO", price: "R$439,90" },
    //{ code: "LC0139", title: "MONITOR HAYOM 19' POL., VGA, HDMI, PRETO", price: "R$490,00" },
    //{ code: "LC0081", title: " MONITOR VX PRO 21' POL., LED, VGA + HDMI, 60HZ", price: "R$650,00" },
    //{ code: "LC0120", title: "MONITOR MNBOX 20' POL, LED", price: "R$590,00" },
  //]

  const gpus = [
    { code: "VG0042", title: "GT 730, 4GB", price: "R$ 499,99"},
    { code: "VG0011", title: "GTX 1650, 4GB", price: "R$ 1.590,00"},
    { code: "VG0013", title: "GTX 1660 SUPER, 6GB", price: "R$ 1.990,90"},
    { code: "VG0103", title: "RTX 3050, 6GB", price: "R$ 1.990,90"},
    { code: "VG0017", title: "RTX 2060 SUPER, 8GB", price: "R$ 2.490,00"},
    { code: "VG0124", title: "RTX 5050, 8GB", price: "R$ 3.090,00"},
    { code: "VG0066", title: "RTX 5060, 8GB", price: "R$ 3.690,00"},
    { code: "VG0115", title: "RTX 5060 TI, 8GB", price: "R$ 4.390,00"},
    { code: "VG0110", title: "RTX 5060 TI, 16GB", price: "R$ 4.990,00"},
    { code: "VG0004", title: "RX 550, 4GB", price: "R$ 990,00"},
    { code: "VG0067", title: "RX 580, 8GB", price: "R$ 1.390,00"},
    { code: "VG0127", title: "RX 9060 XT, 16GB", price: "R$ 4.299,00"},
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
    <a href="/office">⚫​ Office</a>
    <span> | </span>
    <a href="/setup">💿​ Setup Completo</a>
    <span> | </span>
    <a href="/amd">🔴 AMD</a>
    <span> | </span>
    <a href="/intel">🔵​ Intel​</a>
    <span> | </span>
    <a href="/chair">🪑 Cadeiras</a>
    <span> | </span>
    <a href="hardware/cpu">⚙️ Processadores</a>
    <span> | </span>
    <a href="hardware/cabinet">🗄️​ Gabinetes</a>
    <!--<a href="/setupCustom">🖌 Setup Personalizado</a>
    <span> | </span>
    <a href="/pcCustom">🖌 PCs Personalizado</a>
    <span> | </span>-->
    <!--<div class="dropdown">
      <button on:click={toggle}>↕ Hardware</button>
      <div class="dropdown-content {open ? 'show' : ''}">
        <a href="hardware/cpu">Processadores</a>-->

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
