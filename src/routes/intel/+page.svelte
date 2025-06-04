<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    // R$1.190,00
    {
      title: "Nº1 - (PC0002) PC GAMER i5 de 3ª - R$1.190,00",
      image: "PC0002.png",
      text: "*Máquina ideal para Jogos como:* \n  LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n\n*Processador:* I5 de 3ª Geração\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB) DDR3\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER C/ LED\n*Fonte:* 500W\n\n*R$ 1.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$1.390,00
    {
      title: "Nº2 - (PC0044) i5 3ª + GT 730",
      image: "PC0044.png",
      text: "*Máquina ideal para Jogos como:* \n🔫 GTA 5/RP (Cidades Pequenas e Gráficos Baixos)\n⚡VALORANT ( gráfico alto )\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 FREE FIRE(Gráfico Medio)\n🐧 STRUMBLE GUYS\n\n*Processador:* I5 de 3ª Geração\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB) DDR3\n*Armazenamento:* SSD 240GB\n*Placa de Vídeo:* GT 730 4GB\n*Gabinete:* GAMER C/ LED\n*Fonte:* 500W\n\n*R$ 1.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$1.690,00
    {
      title: "Nº3 - (PC0016) i5 3ª + RX 550",
      image: "PC0016.png",
      text: "*Máquina ideal para Jogos como:* \n⚡VALORANT ( Gráficos alto )\n💥LEAGUE OF LEGENDS( Gráfico alto )\n🔫CS GO ( Gráfico Medio )\n🚔 GTA RP(Gráficos Médios/Baixos)\n🚚 Euro Truck Simulator 2(Gráficos medio/Baixos)\n🦙 FORTNITE(Gráficos Baixos / medio)\n6️⃣ RAINBOW SIX SIEGE( Gráfico baixo )\n🔫 FREE FIRE (*Necessário conhecimento em uso e configuração de Emuladores*)\n\n*Processador:* I5 de 3ª Geração\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* RX 550 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER C/ LED\n*Fonte:* 500W\n\n*R$ 1.690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$1.990,00
    {
      title: "Nº4 - (PC0020) i7 de 3ª + RX 550",
      image: "PC0020.png",
      text: "*Máquina ideal para Jogos como:* \n  LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🚔 GTA RP\n🔫 CSGO/VALORANT\n🦙 FORTNITE\n\n*Processador:* I7 de 3ª Geração\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Air Cooler* RGB\n*Placa de Vídeo:* RX 550 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER C/ LED\n*Fonte:* 500W\n\n*R$ 1.990,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$4.290,00
    {
      title: "Nº5 - (PC0050) I3-10100F + GTX 1650 4GB",
      image: "PC0050.png",
      text: "*Máquina ideal para Jogos como:* \n💥 FREE FIRE\n🔫 CSGO/VALORANT\n🔫 WARZONE\n🦙 FORTNITE\n🚔 GTA 5/RP\n\n*Processador:* I3-10100F (10ª Geração)\n*Placa Mãe:* H510M\n*Memória RAM:* 2x8GB DDR4(16GB)\n*Placa de Vídeo:* GTX 1650 4GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM GB1759 C/3 FANS RGB\n*Fonte:* 500W\n\n*R$ 4.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$4.490,00
    {
      title: "Nº6 - (PC0052) i5 de 10ª + GTX 1650 4GB",
      image: "PC0052.png",
      text: "*Máquina ideal para Jogos como:* \n💥 FREE FIRE\n🔫 CSGO/VALORANT\n🔫 WARZONE\n🦙 FORTNITE\n🚔 GTA 5/RP\n\n*Processador:* I5-10400F (10ª Geração)\n*Placa Mãe:* H510M (LGA 1200)\n*Memória RAM:* 2x8GB DDR4 (16GB)\n*Placa de Vídeo:* GTX 1650 4GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM GB1759 C/3 FANS RGB\n*Fonte:* 500W\n\n*R$ 4.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$4.790,00
    {
      title: "Nº7 - (PC0051) i5 de 12ª + RX 570 8GB",
      image: "PC0051.png",
      text: "*Máquina idealpara Jogos como:* \n 🚔 GTA RP\n🔫 CSGO/VALORANT\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* I5-12400F (12ª Geração)\n*Placa Mãe:* H610 (LGA 1700)\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM GB1759 C/3 FANS RGB\n*Fonte:* 500W\n\n*R$ 4.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },
  ];

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text);
  }
</script>

<div class="p-8">
  <a href="/"> ⬅ Home</a>
  <h1 class="text-xl font-bold mb-4">⚙️ MÁQUINAS PRONTAS (PC)</h1>
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
