<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte"

  const products = [
    // R$4.790,00
    {
     title: "(PC00) SETUP RYZEN 5600GT ROSE",
     image: "PinkSetup.png",
     text: "*Setup ideal para Jogos como:*\n🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 WARZONE(GRÁFICOS Médios)\n🔫 CS2\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 5600GT\n*Memória RAM:* 2x8GB DDR4 *(16GB)*\n*Placa de Vídeo:* VEGA 7 (INTEGRADA)\n*Cooler:* Box Hoopson RGB\n*Armazenamento:* SSD 480GB\n*Gabinete:* MYMAX ROSA LION C/LED RGB\n*Fonte:* 500W\n+ 🖥️ Monitor MYMAX ROSA 21.5' POL.\n+ Kit Gamer Redragon Luluca (Mouse, Teclado, Mousepad e Headset)\n+ Suporte de Headset Redragon Scepter\n\nPOR APENAS *R$ 4.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },

    // R$7.790,00
    {
     title: "(PC00) SETUP RYZEN 5600GT ROSE",
     image: "SetupOFFWhite.png",
     text: "*Setup ideal para Jogos como:*\n🚔 GTA 5/RP\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 CS2\n🦙 FORTNITE\n\n*Placa Mãe:* B550ZGS DUEX\n*Processador:* RYZEN 5 5500\n*Memória RAM:* 2x8(16GB) 3200MHZ XPG BRANCA DDR4\n*Placa de Vídeo:* RX 580 8GB\n*Cooler:* PCYES FROST PULSE ARGB WHITE GHOST\n*Armazenamento:* SSD NVME 500GB PRODRIVE\n*Gabinete:* 'AQUARIO' NINJA BRANCO C/3 FANS RGB\n*Fonte:* FORTREK BRANCA\n+ 🖥️ Monitor ERAS 23,8POL 100HZ CURVO BRANCO\n+ Kit Gamer KIT GAMER EVOLUT LUMINI (TECLADO, MOUSE E HEADSET) & MOUSEPAD TOMATE 90X40 CINZA\n+SUPORTE DE HEADSET REDRAGON SCEPTER\n\nPOR APENAS *R$ 7.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },
  ]

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text)
  }
</script>

<div class="p-8">
  <a href="/"> ⬅ Home</a>
  <span> | </span>
  <a href="/intel">PC</a>
  <h1 class="text-xl font-bold mb-4">⚙️ MÁQUINAS PRONTAS (SETUP)</h1>
  <div class="grid grid-cols-4 gap-8">
    {#each products as product, index}
      <div class="space-y-4">
        <img
          src={product.image}
          class="rounded-md w-full h-64 object-contain border border-gray-200 bg-gray-50"
          alt={product.title}
        />
        <h1 class="font-bold text-xl truncate">Nº{index + 1} - {product.title}</h1>
        <code
          class="font-mono-emoji block w-full h-64 overflow-y-scroll whitespace-pre-line bg-gray-100 border border-gray-300 p-2 rounded"
        >
          {product.text}
        </code>

        <CopyButton
          class="w-full tracking-wider text-sm"
          on:click={() => copyToClipboard(product)}>COPIAR</CopyButton
        >
      </div>
    {/each}
  </div>
</div>
