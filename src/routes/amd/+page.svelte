<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
     // R$ 3.290,00
    {
      title: "(PC0079) GAMER RYZEN 3200G",
      image: "PCAMD.png",
      text: "*Máquina ideal para Jogos como:* \n🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🔫 VALORANT\n🔫 CS2n\n*Placa Mãe:* A520\n*Processador:* RYZEN 3 3200G\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* VEGA 8 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER LED C/3 FANS RGB \n*Fonte:* 500W\n\nPOR APENAS *R$ 3.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },
    
    // R$ 3.890,00
    {
      title: "(PC0001) GAMER RYZEN 5600GT",
      image: "PC0001.png",
      text: "*Máquina ideal para Jogos como:* \n🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 WARZONE(GRÁFICOS Médios)\n🔫 CS2\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 5600GT\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER LED C/3 FANS RGB \n*Fonte:* 500W\n\nPOR APENAS *R$3.890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$ 5.090,00
    {
      title: "(PC0039) RYZEN 5700G",
      image: "PC0039.png",
      text: "*Máquina ideal para Jogos como:* \n 🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n🌎 ARK (Grâficos Médios/Baixos)\n⚽ EA FC 24\n🔫 VALORANT\n🔫 WARZONE (Grâficos Médios/Baixos)\n🔫 CS2\n🦙 FORTNITE\n\n*Processador:* RYZEN 7 5700G\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB DDR4 (16GB)\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n\nPOR APENAS *R$ 5.090,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$ 5.290,00
    {
      title: "(PC0045) RYZEN 5500 + RX 580 8GB",
      image: "PC0045.png",
      text: "*Máquina ideal para Jogos como:* \n 💥 FREE FIRE \n 🌎 MINECRAFT \n 🟥 ROBLOX \n🚔 GTA 5/RP\n 🔫 CSGO/VALORANT \n🦙 FORTNITE\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB (16GB) DDR4\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n\nPOR APENAS *R$5.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },
    
    // R$ 5.990,00
    {
      title: "(PC0062) RYZEN 5500 + RTX 3050 6GB",
      image: "PC0062.png",
      text: "*Máquina ideal para Jogos como:* \n  💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB (16GB) DDR4\n*Placa de Vídeo:* RTX 3050 6GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB \n*Fonte:* 500W\n\nPOR APENAS *R$ 5.990,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$ 6.390,00
    {
      title: "(PC0088) RYZEN 5500 + RX 6600 8GB",
      image: "PC0061.png",
      text: "*Máquina ideal para Jogos como:* \n  💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB (16GB) DDR4\n*Placa de Vídeo:* RX 6600 8GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB \n*Fonte:* 500W\n\nPOR APENAS *R$ 6.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$ 6.490,00
    {
      title: "(PC0061)RYZEN 5500 + RTX 5050 8GB ",
      image: "PC0061.png",
      text: "*Máquina ideal para Jogos como:* \n  💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* RTX 5050 8GB \n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W 80Plus\n\nPOR APENAS *R$ 6.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$ 7.290,00
    {
      title: "RYZEN 5700X + RTX 5050 8GB ",
      image: "PCAMD.png",
      text: "*Máquina ideal para Jogos como:* \n 🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 7 5700X\n*Placa Mãe:* B450\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* RTX 5050 8GB \n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W 80Plus\n\nPOR APENAS *R$ 7.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
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
