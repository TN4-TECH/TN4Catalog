<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    // R$1.190,00
    {
      title: "(PC0002) PC GAMER i5 de 3ª - R$1.190,00",
      image: "PC0002.png",
      text: "*Máquina ideal para Jogos como:* \nLEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n\n*Processador:* i5-3470\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB) DDR3\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER C/ LED\n*Fonte:* 500W\n\n*R$ 1.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$1.390,00
    {
      title: "(PC0044) i5 3ª + GT 730",
      image: "PC0044.png",
      text: "*Máquina ideal para Jogos como:* \n🔫 GTA 5 (Gráficos Baixos)\n⚡VALORANT\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 FREE FIRE (*Necessário configuração de emuladores*)\n\n*Processador:* i5-3470\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB) DDR3\n*Armazenamento:* SSD 240GB\n*Placa de Vídeo:* GT 730 4GB\n*Gabinete:* GAMER C/ LED\n*Fonte:* 500W\n\n*R$ 1.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$1.690,00
    {
      title: "(PC0016) i5 3ª + GTX 750 TI",
      image: "PC0016.png",
      text: "*Máquina ideal para Jogos como:* \n⚡VALORANT\n💥LEAGUE OF LEGENDS\n🔫CS2 (Gráfico Medio)\n🚔 GTA V(Gráficos Baixo)\n🚚 Euro Truck Simulator 2(Gráficos Baixos)\n6️⃣ RAINBOW SIX SIEGE(Gráfico baixo)\n🔫 FREE FIRE (*Necessário configuração de Emuladores*)\n\n*Processador:* i5-3470\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* GTX 750 TI 2GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER C/ LED\n*Fonte:* 500W\n\n*R$ 1.690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$1.990,00
    {
      title: "(PC0020) i7 de 3ª + GTX 750 TI 2GB",
      image: "PC0020.png",
      text: "*Máquina ideal para Jogos como:* \n  LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🚔 GTA V (Gráficos Médios)\n🔫 CSGO/VALORANT\n🦙 FORTNITE\n\n*Processador:* i7-3770\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Air Cooler* RGB\n*Placa de Vídeo:* GTX 750 TI 2GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER C/ LED\n*Fonte:* 500W\n\n*R$ 1.990,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$2.190,00
    {
      title: "(PC0000) i7 de 3ª + GT 750TI 4GB",
      image: "ORCUSPC.png",
      text: "*Máquina ideal para Jogos como:* \n🌎 MINECRAFT\n🟥 ROBLOX\n🚔 GTA V (Gráficos Médios)\n🔫 CSGO/VALORANT\n🦙 FORTNITE\n\n*Processador:* i7-3770\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Air Cooler* RGB\n*Placa de Vídeo:* GTX 750TI 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER C/ LED\n*Fonte:* 500W\n\n*R$ 2.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$5.490,00
    {
      title: "(PC00) i7 de 8ª + RTX 3050 6GB",
      image: "HAYOMPC.png",
      text: "*Máquina idealpara Jogos como:* \n 🚔 GTA RP\n🔫 CSGO/VALORANT\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* I7-8700 (8ªGEN)\n*Placa Mãe:* H310 VX PRO\n*Memória RAM:* 2x8GB(16GB) DDR4 3200MHZ\n*Placa de Vídeo:* RTX 3050 6GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM GB1759 C/3 FANS RGB\n*Fonte:* 500W 80PLUS DRAXEN\n\n*R$ 5.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
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
    {#each products as product, index}
      <div class="space-y-4">
        <img
          src={"/" + product.image}
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
