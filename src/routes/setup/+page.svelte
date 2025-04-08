<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte"

  const products = [
    // R$1.690,00
    {
      title: "Nº1 - (PC0013)i5 3ªSETUP COMPLETO R$1.690,00",
      image: "PC0013.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n\n*Processador:* I5 de 3ª Geração\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 1x8GB(8GB)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER K-TROK C/4FANS RGB\n*Fonte:* 500W\n\n+🖥️ Monitor 19' Pol. Seminovo\n+⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 1.690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n\n\n",
    },

    // R$2.190,00
    {
      title: "Nº2 - (PC0046) SETUP i5 3ª + GT 730 - R$2.190,00",
      image: "PC0046.png",
      text: "*Setup ideal para Jogos como:* \n🔫 GTA 5/RP (Cidades Pequenas e Gráficos Baixos)\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 FREE FIRE(Gráfico Medio)\n🐧 STRUMBLE GUYS\n🔫 VALORANT\n\n*Processador:* I5 de 3ª Geração\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* GT 730 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER K-TROK C/4FANS RGBB\n*Fonte:* 500W\n\n+🖥️ Monitor 19' Pol. Seminovo\n+⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 2.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n\n\n",
    },

    // R$2.390,00
    {
      title: "Nº3 - (PC0010)SETUP i5 3ª + RX 550",
      image: "PC0010.png",
      text: "*Setup ideal para Jogos como:* \n⚡VALORANT ( Gráficos alto )\n💥LEAGUE OF LEGENDS( Gráfico alto )\n🔫CS GO ( Gráfico Medio )\n🚔 GTA RP(Gráficos Médios/Baixos)\n🚚 Euro Truck Simulator 2(Gráficos medio/Baixos)\n🦙 FORTNITE(Gráficos Baixos / medio)\n6️⃣ RAINBOW SIX SIEGE( Gráfico baixo )\n🔫 FREE FIRE (*Necessário conhecimento em uso e configuração de Emuladores*)\n\n*Processador:* I5 de 3ª Geração\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* RX 550 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER K-TROK C/4FANS RGB\n*Fonte:* 500W\n\n+🖥️ Monitor 19' Pol. Seminovo\n+⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 2.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n\n\n",
    },

    // R$2.490,00
    {
      title: "Nº4 - (PC0064) SETUP Athlon 3000G + Monitor 19 + KIT GAMER - R$2.390,00",
      image: "PC0064.png", 
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 CSGO/VALORANT\n\n*Processador:* Athlon 3000G\n*Placa Mãe:* A320\n*Placa de Vídeo*: VEGA 3 (INTEGRADA)\n*Memória RAM:* 2x8GB DDR4 (16GB)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER HAYOM C/4FANS RGB\n*Fonte:* 500W\n\+🖥️ Monitor 19' Pol. Seminovo\n+⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 2.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },
    
    // R$2.590,00
    {
      title: "Nº5 - (PC0018) SETUP i7 3ª + RX 550 - R$2.790,00",
      image: "PC0018.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n 🚔 GTA RP\n🔫 CSGO/VALORANT\n🦙 FORTNITE\n\n*Processador:* I7 de 3ª Geração\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* RX 550 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER K-TROK C/4FANS RGB\n*Fonte:* 500W\n\n+🖥️ Monitor 19' Pol. Seminovo\n+⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 2.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$3.190,00
    // { 
    //   title: "Nº6 - (PC0031) 🖥🖱SETUP GAMER RYZEN 5 4600G",
    //   image: "PC0031.png",
    //   text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 CSGO 2\n🔫 WARZONE(GRÁFICOS Médios/Baixos)\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 4600G\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER C/ 3 FANS RGB\n*Fonte:* 500W\n+ 🖥️ Monitor de 19' Pol. \n+ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$ 3.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    // },

    // R$3.440,00
    {
      title: "Nº6 - (PC0014) 🖥🖱SETUP GAMER RYZEN 5 5600GT",
      image: "PC0014.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 CSGO 2\n🔫 WARZONE(GRÁFICOS Médios/Baixos)\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 5600GT\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* HAYOM GB1749 C/4 FANS RGB\n*Fonte:* 500W\n+ 🖥️ Monitor de 19' Pol.\n+ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nDE ~R$ 3.790,00~ POR APENAS *R$3.690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },

    // R$4.590,00
    {
      title: "Nº7 - (PC0004) 🖱SETUP GAMER RYZEN 5 4500",
      image: "PC0004.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 CSGO 2\n🔫 WARZONE\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 4500\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:*  RX 580 8GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM GB1749 C/4 FANS RGB\n*Fonte:* 500W\n+ 🖥️ Monitor de 19' Pol.\n+ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$ 4.590,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },

    // R$ 5.590,00 Restore
    {
      title: "Nº8 - (PC0066) SETUP RYZEN 5500 + RTX 3050 6GB",
      image: "PC0066.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🔫 CSGO 2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB DDR4(16GB)\n*Placa de Vídeo:* RTX 3050 6GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM GB1749 C/4 FANS RGB\n*Fonte:* 500W\n +🖥 MONITOR 19' Pol.\n + KIT Gamer Completo(Teclado, Headset, Mouse e Mousepad)\n\nPOR APENAS *R$ 5.590,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 6.120,00 Restore
    {
      title: "Nº9 - (PC0056) SETUP RYZEN 5500 + RTX 3060 12GB",
      image: "PC0056.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🔫 CSGO 2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB (16GB) DDR4\n*Placa de Vídeo:* RTX 3060 12GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM GB1749 C/4 FANS RGB\n*Fonte:* 500W 80Plus\n +🖥 MONITOR 19' Pol. VX PRO\n + KIT Gamer Completo(Teclado, Headset, Mouse e Mousepad)\n\nPOR APENAS *R$ 6.120,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
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
