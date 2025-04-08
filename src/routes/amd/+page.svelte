<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    // R$ 1.990,00
    {
      title: "Nº1 (PC0015) Athlon 3000G",
      image: "PC0015.png",
      text: "*Máquina ideal para Jogos como:* \n 💥LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 CSGO 2\n\n*Placa Mãe:* A320\n*Processador:* Athlon 3000G\n*Placa de Vídeo* VEGA 3 (INTEGRADA)\n*Memória RAM:* 2x8GB DDR4\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER HAYOM C/4 FANS RGB\n*Fonte:* 500W\n\n*R$ 1.990,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n\n",
    },

    // // R$ 2.490,00
    // {
    //   title: "Nº2 (PC0017) PC GAMER RYZEN 4600G",
    //   image: "PC0017.png",
    //   text: "*Máquina ideal para Jogos como:* \n 🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 WARZONE (GRÁFICOS Médios/Baixos)\n🔫 CSGO 2\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 4600G\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* HAYOM GB1749 C/4 FANS RGB \n*Fonte:* 500W\n\nPOR APENAS *R$ 2.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    // },

    // R$ 2.690,00
    {
      title: "Nº2 - (PC0001) GAMER RYZEN 5600GT",
      image: "PC0001.png",
      text: "*Máquina ideal para Jogos como:* \n 🚔 GTA 5/RP\n  💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 WARZONE(GRÁFICOS Médios/Baixos)\n🔫 CSGO 2\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 5600GT\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* HAYOM GB1749 C/4 FANS RGB \n*Fonte:* 500W\n\nDE ~R$ 2.990,00~ PRO APENAS *R$2.890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 3.290,00
    {
      title: "Nº3 - (PC0039) RYZEN 5700G",
      image: "PC0039.png",
      text: "*Máquina ideal para Jogos como:* \n 🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n🌎 ARK (Grâficos Médios/Baixos)\n⚽ EA FC 24\n🔫 VALORANT\n🔫 WARZONE (Grâficos Médios/Baixos)\n🔫 CSGO 2\n🦙 FORTNITE\n\n*Processador:* RYZEN 7 5700G\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB DDR4 (16GB)\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM GB1749 C/4 FANS RGB\n*Fonte:* 500W\n\nDE ~R$3.690,00~ POR APENAS *R$ 3.590,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // // R$ 3.490,00
    // {
    //   title: "Nº5 - (PC0053) RYZEN 4500 + RX 560",
    //   image: "PC0053.png",
    //   text: "*Máquina ideal para Jogos como:* \n 🔫 VALORANT\n🔫 WARZONE\n🔫 CSGO 2\n🦙 FORTNITE\n🚔 GTA 5/RP\n\n*Processador:* RYZEN 5 4500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB 2666Mhz DDR4 (16GB)\n*Placa de Vídeo:* RX 560 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER C/3FANS RGB\n*Fonte:* 500W\n\nPOR APENAS *R$ 3.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳Cartão - Débito *á vista* ou Crédito em até *10x SEM JUROS**\n❖ Pix á Vista\n❌*NÃO* é possível realizar pagamento via Boleto Bancário",
    // },

    // R$ 3.890,00
    {
      title: "Nº4 - (PC0045) RYZEN 4500 + RX 580 8GB",
      image: "PC0045.png",
      text: "*Máquina ideal para Jogos como:* \n 💥 FREE FIRE \n 🌎 MINECRAFT \n 🟥 ROBLOX \n🚔 GTA 5/RP\n 🔫 CSGO/VALORANT \n🦙 FORTNITE\n\n*Processador:* RYZEN 5 4500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB (16GB) DDR4\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM GB1749 C/4 FANS RGB\n*Fonte:* 500W\n\nPOR APENAS *R$3.890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 4.490,00
    {
      title: "Nº5 - (PC0062) RYZEN 4500 + RTX 3050 6GB",
      image: "PC0062.png",
      text: "*Máquina ideal para Jogos como:* \n  💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CSGO 2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 4500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB (16GB) DDR4\n*Placa de Vídeo:* RTX 3050 6GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM GB1749 C/4 FANS RGB \n*Fonte:* 500W\n\nPOR APENAS *R$ 4.590,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // // R$ 5.190,00
    // {
    //   title: "Nº8 - (PC0003)RYZEN 5600 + RTX 3050",
    //   image: "PC0003.png",
    //   text: "*Máquina ideal para Jogos como:* \n  💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CSGO 2\n🦙 FORTNITE\n\n*Processador:* RYZEN 5 5600\n*Placa Mãe:* A520\n*Memória RAM:* 16GB DDR4\n*Placa de Vídeo:* RTX 3050 6GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER C/ 4FANS RGB \n*Fonte:* 500W\n\nPOR APENAS *R$ 5.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    // },

    // R$ 5.390,00
    {
      title: "Nº6 - (PC0061)RYZEN 5500 + RTX 3060 12GB",
      image: "PC0061.png",
      text: "*Máquina ideal para Jogos como:* \n  💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CSGO 2\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* RTX 3060 12GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM GB1749 C/4 FANS RGB\n*Fonte:* 500W 80Plus\n\nPOR APENAS *R$ 5.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 8.290,00
    {
      title: "Nº7 - (PC0080)Ryzen 7500F + RTX 4060 E GABINETE AQUÁRIO",
      image: "PC0080.png",
      text: "*Máquina ideal para Jogos como:* \n🚔 GTA 5/RP\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 WARZONE\n🔫 CSGO 2\n🦙 FORTNITE\n\n*Processador:* RYZEN 5 7500F\n*Placa Mãe:* MSI A620M-E\n*Memória RAM:* 2x8(16GB) 5200MHZ DDR5\n*Placa de Vídeo:* RTX 4060 COMPACT 8GB\n*Armazenamento:* SSD NVME 512GB\n*Gabinete:* 'AQUARIO' NINJA BRANCO\n*Fonte:* 550W PCYES ELECTRO 80PLUS\n\nPOR APENAS *R$ 8.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
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
