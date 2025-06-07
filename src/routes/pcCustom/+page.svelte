<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    // R$ 4.690,00
    {
      title: "Nº1 - Ryzen 5500 + RX 580",
      image: "CUSTOM4690.png",
      text: "*Máquina ideal para Jogos como:* \n🚔 GTA 5/RP\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 WARZONE\n🔫 CSGO 2\n🦙 FORTNITE\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520 REVENGER\n*Memória RAM:* 2x8(16GB) 3200MHZ FNX DDR4\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD NVME 500GB PRODRIVE\n*Gabinete:* 'AQUARIO' NINJA BRANCO C/3 FANS RGB\n*Fonte:* 500W FORTREK\n\nPOR APENAS *R$ 4.690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 6.590,00
    {
      title: "Nº2 - INTEL I7 de 9ª + GTX 1650",
      image: "CUSTOM6590.png",
      text: "*Máquina ideal para Jogos como:* \n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CSGO 2\n🦙 FORTNITE\n\n*Processador:* I7-9700 (9° Geração)\n*Placa Mãe:* H310 VX PRO\n*Memória RAM:* 2x8GB (16GB) FNX 3200Mhz DDR4\n*Placa de Vídeo:* GTX 1650 4GB\n*Water Cooler:* PCYES ARGB NIX 120MM PRETO\n*Armazenamento:* SSD DUEX 480GB\n*Gabinete:* AQUÁRIO PRETO HAYOM C/4 FANS RGB\n*Fonte:* REDRAGON 500W 80PLUS\n\nPOR APENAS *R$ 6.590,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 6.890,00
    {
      title: "Nº4 - Ryzen 5500 + RTX 3050 + WATER COOLER PCYES VISION",
      image: "AMD5500+3060.png",
      text: "*Máquina ideal para Jogos como:* \n  💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CSGO 2\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* B550MX-E PRO\n*Memória RAM:* 2x8 HIKSEMI FUTURE BLACK 3200Mhz (16GB) DDR4\n*WATER COOLER PCYES VISION 240MM C/ VISOR LCD*\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD NVME M.2 500GB\n*Gabinete:* GAMER C/ 2FANS RGB\n*Fonte:* 700W 80PLUS\n\nPOR APENAS *R$ 6.890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },
  ];

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text);
  }
</script>

<div class="p-8">
  <a href="/"> ⬅ Home</a>
  <span> | </span>
  <a href="/intel">PC</a>
  <h1 class="text-xl font-bold mb-4">🖌 PCs Personalizados</h1>
  <div class="grid grid-cols-4 gap-8">
    {#each products as product}
      <div class="space-y-4">
        <img
          src={product.image}
          class="rounded-md w-full h-64 object-contain border border-gray-200 bg-gray-50"
          alt={product.title}
        />
        <h1 class="font-bold text-xl truncate">{product.title}</h1>
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
