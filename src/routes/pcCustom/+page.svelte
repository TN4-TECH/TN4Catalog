<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    // R$ 4.790,00
    {
      title: "Nº1 - (PC0028) i3 de 10ªG, RX 580, Gabinete Lion",
      image: "PC0028.png",
      text: "*Máquina ideal para Jogos como:*\n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CSGO 2\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* I3-10100F (10ª Geração)\n*Placa Mãe: H510M DUEX\n*Memória RAM:* 2x8GB DDR4 XPG 3200MHZ WHITE(16GB)\n*Air Cooler:*DEX DX-2012 ARGB\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* MYMAX LION ROSA C/1 FAN ARGB E LED\n*Fonte:* 500W 80plus\n\nPOR APENAS *R$ 4.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 5.390,00
    {
      title: "Nº2 - (PC0059) i5 de 12ªG + RX 580",
      image: "PC0059.png",
      text: "*Máquina ideal para Jogos como:*\n🚔 GTA 5/RP\n🔫 CSGO 2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* I5-12400F (12ª Geração)\n*Placa Mãe: H610 Duex Branca (LGA 1700)\n*Memória RAM:* 2x8GB XPG GAMMIX BRANCA 3200Mhz (16GB) DDR4\n*Air Cooler:* PCYES FROST PULSE WHITE GHOST\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM 1793 BRANCO C/ 3 FANS RGB\n*Fonte:* 500W PFC ATIVO Branca\n\nPOR APENAS *R$ 5.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$6.390,00
    {
      title: "Nº3 - I5 DE 10ª + RTX 3050 + GABINETE STORM-Z",
      image: "SETUP - N10.png",
      text: "*Máquina ideal para Jogos como:* \n 🚔 GTA RP\n🔫 CSGO/VALORANT\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* I5-10400F (10ª Geração)\n*Placa Mãe:* B560-PRO MSI (LGA 1200)\n*Memória RAM:* 2x8GB DDR4 FURY BEAST 3200MHZ (16GB)\n*Placa de Vídeo:* RTX 3050 6GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* STORM-Z SHARP\n*Fonte:* 600W 80PLUS RGB\n\n*R$ 6.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },
    
    // R$6.690,00
    {
      title: "Nº4 - (PC0006)i5 de 12ª + GTX 1650",
      image: "PC0006.png",
      text: "*Máquina ideal para Jogos como:* \n 🚘FORZA HORIZON\n🚔 GTA RP\n🔫 CSGO/VALORANT\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* I5-12400F (12ª Geração)\n*Placa Mãe:*ASROCK B660M PHANTOM GAMING (LGA 1700)\n*Memória RAM:* 2x8GB 3200Mhz DDR4 FURY BEAST BLACK (16GB)\n*Water Cooler:* PCYES SANGE FRIO 120mm\n*Placa de Vídeo*: GTX 1650 4GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER AQUÁRIO C/ 4 FANS RGB\n*Fonte:* REDRAGON 500W 80PLUS\n\n*R$ 6.690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$6.790,00
    {
      title: "Nº5 - (PC0076) Ryzen 5600 + RX 580 8GB WHITE",
      image: "PC0076.png",
      text: "*Máquina ideal para Jogos como:* \n 🚘FORZA HORIZON\n🚔 GTA 5/RP\n🔫 WARZONE/BLACK OPS 6\n🐎Red Dead Redemption 2\n\n*Processador:* RYZEN 5 5600\n*Placa Mãe:* DUEX B550ZGS\n*Memória RAM:* 2x8GB DDR4 3200Mhz PCYES UDIMM BRANCA\n*Water Cooler:*PCYES SANGE FRIO3 BRANCO 120mm\n*Armazenamento:* SSD NVME 512GB\n*Placa de Vìdeo:* RX 580 8GB WHITE\n*Gabinete:* AEROCOOL AERO ONE BRANCO \n*Fonte:* 500w WHITE\n\n*R$ 6.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 6.890,00
    {
      title: "Nº6 - Ryzen 5500 + RTX 3050 + WATER COOLER PCYES VISION",
      image: "AMD5500+3060.png",
      text: "*Máquina ideal para Jogos como:* \n  💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CSGO 2\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* B550MX-E PRO\n*Memória RAM:* 2x8 HIKSEMI FUTURE BLACK 3200Mhz (16GB) DDR4\n*WATER COOLER PCYES VISION 240MM C/ VISOR LCD*\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD NVME M.2 500GB\n*Gabinete:* GAMER C/ 2FANS RGB\n*Fonte:* 700W 80PLUS\n\nPOR APENAS *R$ 6.890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 7.390,00
    {
      title: "Nº7 - (PC0055) Ryzen 5700X + RTX 3060 8GB",
      image: "Custom7190.png",
      text: "*Máquina ideal para Jogos como:* \n🚘FORZA HORIZON\n🚔 GTA 5/RP\n🔫 WARZONE/BLACK OPS 6\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n\n*Processador:* RYZEN 7 5700X\n*Placa Mãe:* DUEX B550ZGS\n*Memória RAM:* 2x8GB DDR4 3200Mhz XPG D35 WHITE\n*Water Cooler* ACEGEEK WHITE 360MM\n*Placa de Vídeo:* INNO3D RTX 3060 8GB\n*Armazenamento:* SSD NVME 512GB\n*Gabinete:* PCYES FORCEFIELD WHITE GHOST MAX C/3 FANS\n*Fonte:* 700W 80PLUS BRONZE\n\nPOR APENAS *R$ 8.090,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 7.390,00
    {
      title: "Nº8 - (PC00) Ryzen 5600 + RTX 3060 8GB",
      image: "Custom7390.png",
      text: "*Máquina ideal para Jogos como:* \n🚘FORZA HORIZON\n🚔 GTA 5/RP\n🔫 WARZONE/BLACK OPS 6\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n\n*Processador:* RYZEN 5 5600\n*Placa Mãe:* ASUS A520M TUF GAMING PLUS-II\n*Memória RAM:* 2x8GB DDR4 3200Mhz HIKSEMI FUTURE RGB\n*Water Cooler* KALKAN DELTA 360MM\n*Placa de Vídeo:* INNO3D RTX 3060 8GB\n*Armazenamento:* SSD NVME 500GB\n*Gabinete:* DRAXEN ITHNAN BLACK\n*Fonte:* THERMALTAKE 600W 80PLUS\n\nPOR APENAS *R$ 7.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 7.790,00
    {
      title: "Nº9 - Ryzen 5600 + RTX 3060 12GB",
      image: "FORCEFIELD.png",
      text: "*Máquina ideal para Jogos como:* \n  💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CSGO 2\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 7 3700x\n*Placa Mãe:* B450M GIGABYTE GAMING\n*Memória RAM:* 2x8GB REDRAGON RAGE 16GB DDR4 3200Mhz\n*Water Cooler* Gamdias AURA 120mm V2 PRETO\n*Placa de Vídeo:* RTX 3060 12GB\n*Armazenamento:* SSD NVME 512GB\n*Gabinete:* PCYES FORCEFIELD RED MAGMA C/8FANS\n*Fonte:* 700W 80Plus\n\nPOR APENAS *R$ 7.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$9.290,00
    {
      title: "Nº10 - (PC0083) PC GAMER I5-12400F + RTX 4060 8GB PYTHON",
      image: "Custom9290.png",
      text: "*Máquina ideal para Jogos como:* \n 🚘FORZA HORIZON\n🚔 GTA RP\n🔫 CSGO/VALORANT\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* I5-12400F (12ª Geração)\n*Placa Mãe:* B760M AOURUS ELITE AX WIFI\n*Memória RAM:* RISE MODE 4800MHZ 16GB DDR5\n*Water Cooler:* KALKAN ALPHA 360MM\n*Placa de Vídeo*: GAINWARD PYTHON RTX 4060 8GB\n*Armazenamento:* SSD NVME PRODRIVE 1TB\n*Gabinete:* KALKAN ALFERN\n*Fonte:* TAICON 700W 80PLUS\n\n*R$ 9.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
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
