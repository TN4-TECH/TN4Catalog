<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    // R$ 4.690,00
    {
      title: "PC AQUÁRIO NINJA BRANCO RYZEN 5500 + RX 580",
      image: "CUSTOM4690.png",
      text: "*Máquina ideal para Jogos como:* \n🚔 GTA 5/RP\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 WARZONE\n🔫 CS2\n🦙 FORTNITE\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* B550ZGS DUEX\n*Memória RAM:* 2x8(16GB) 3200MHZ XPG BRANCA DDR4\n*Cooler:* PCYES FROST PULSE ARGB WHITE GHOST\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD NVME 500GB PRODRIVE\n*Gabinete:* 'AQUARIO' NINJA BRANCO C/3 FANS RGB\n*Fonte:* 500W FORTREK BRANCA\n\nPOR APENAS *R$ 5.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 4.790,00
    {
      title: "PC WHITE 5600GT",
      image: "CUSTOM4790.png",
      text: "*Máquina ideal para Jogos como:* \n🚔 GTA 5/RP\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 WARZONE\n🔫 CS2\n🦙 FORTNITE\n\n*Processador:* RYZEN 5 5600GT\n*Placa Mãe:* B450M DUEX\n*Memória RAM:* 2x8GB(16GB) DDR4 3200MHZ\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Water Cooler:* EVOLUT LUMINI 120MM BRANCO\n*Armazenamento:* SSD 480GB\n*Gabinete:* PCYES FORCEFIELD TWR WHITE GHOST C/6 FANS\n*Fonte:* 500W FORTREK\n\nPOR APENAS *R$ 4.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 5.790,00
    {
      title: "PC PRETO HAYOM I7 9° GEN + RX 580",
      image: "CUSTOM5790.png",
      text: "*Máquina ideal para Jogos como:* \n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n\n*Processador:* I7-9700 (9° Geração)\n*Placa Mãe:* H310 VX PRO\n*Memória RAM:* 2x8GB (16GB) FNX 3200Mhz DDR4\n*Placa de Vídeo:* RX 580 8GB\n*Water Cooler:* PCYES ARGB NIX 120MM PRETO\n*Armazenamento:* SSD DUEX 480GB\n*Gabinete:* MASTERBOX COOLER MASTER\n*Fonte:* TAICON 500W\n\nPOR APENAS *R$ 5.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 6.590,00
    {
      title: "PC AQUÁRIO MAGMA RYZEN 7 3700X + RX 580",
      image: "MAGMA6590.png",
      text: "*Máquina ideal para Jogos como:* \n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n🐎 Red Dead Redemption 2\n🗡 Elden Ring\n\n*Processador:* RYZEN 7 3700x\n*Placa Mãe:* B450M GIGABYTE GAMING\n*Memória RAM:* 2x8GB (16GB) REDRAGON RAGE RED DDR4 3200Mhz\n*Placa de Vídeo:* RX 580 8GB\n*Water Cooler:* KALKAN ALPHA 240mm PRETO\n*Armazenamento:* SSD NVME PRODRIVE 500GB\n*Gabinete:* PCYES FORCEFIELD RED MAGMA C/6FANS ARGB\n*Fonte:* GIGABYTE 450W 80PLUS BRONZE\n\nPOR APENAS *R$ 6.590,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 8.090,00
    {
      title: "PC ALFERN I5 12° GERAÇÃO + RTX 3060",
      image: "CUSTOM8090.png",
      text: "*Máquina ideal para Jogos como:* \n🚘FORZA HORIZON\n🚔 GTA RP\n🔫 CSGO/VALORANT\n🦙 FORTNITE\n🐎 Red Dead Redemption 2\n🗡 Elden Ring\n\n*Processador:* I5-12400F (12ª Geração)\n*Placa Mãe:* B660M ASROCK\n*Memória RAM:* 2X 8GB (16GB) REDRAGON SOLAR RGB DDR4 3600MHZ\n*Placa de Vídeo:* ZOTAC RTX 3060 12GB\n*Water Cooler:* KALKAN ALPHA 360MM PRETO\n*Armazenamento:* SSD NVME PRODRIVE 500GB\n*Gabinete:* KALKAN ALFERN\n*Fonte:* TAICON 700W 80PLUS\n\nPOR APENAS *R$ 8.090,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 14.990,00
    {
      title: "(PC0065)PC GAMER RYZEN 5 7500F + RTX 4070",
      image: "CUSTOM14990.png",
      text: "*Máquina ideal para Jogos como:* \n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n🐎 Red Dead Redemption 2\n🗡 Elden Ring\n\n*Processador:* RYZEN 5 7500F\n*Placa Mãe:* A620M MSI\n*Memória RAM:* 2x8GB (16GB) DDR5 ASGARD 5200Mhz\n*Placa de Vídeo:* RTX 4070 SUPER 12GBn*Armazenamento:* SSD NVME 1TB REDRAGON\n*Gabinete:* ACER V951\n*Fonte:* TAICON 700W 80Plus\n*FANS:* 2x KIT ARGB REVENGER\n*Water Cooler:* PCYES VISION ULTRA\n\nPOR APENAS *R$ 14.990,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
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
    {#each products as product, index}
      <div class="space-y-4">
        <img
          src={"/" + product.image}
          class="rounded-md w-full h-64 object-contain border border-gray-200 bg-gray-50"
          alt={product.title}
        />
        <h1 class="font-bold text-xl truncate"> Nº{index + 1} - {product.title}</h1>
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
