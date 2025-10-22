<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte"

  const products = [
    // R$1.690,00
    {
      title: "(PC0013)i5 3ªSETUP COMPLETO R$1.690,00",
      image: "PC0013.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n\n*Processador:* I5-4570\n*Placa Mãe:* H81 (LGA 1150)\n*Memória RAM:* 2x8GB(16GB)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER EVOLUT RGB\n*Fonte:* 500W\n\n+🖥️ Monitor 19' Pol. Seminovo\n+⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 1.690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n\n\n",
    },

    // R$1.990,00
    {
      title: "(PC0046) SETUP i5 3ª + GT 730 - R$1.990,00",
      image: "PC0046.png",
      text: "*Setup ideal para Jogos como:* \n🔫 GTA 5 (Gráficos Baixos)\n⚡VALORANT\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 FREE FIRE (*Necessário configuração de emuladores*)\n\n*Processador:* I5-4570\n*Placa Mãe:* H81 (LGA 1150)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* GT 730 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER EVOLUT RGB\n*Fonte:* 500W\n\n+🖥️ Monitor 19' Pol. Seminovo\n+⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 1.990,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n\n\n",
    },

    // R$2.290,00
    {
      title: "(PC0010)SETUP i5 3ª + GTX 750 TI",
      image: "PC0010.png",
      text: "*Setup ideal para Jogos como:* \n⚡VALORANT ( Gráficos alto )\n💥LEAGUE OF LEGENDS( Gráfico alto )\n🔫CS GO ( Gráfico Medio )\n🚔 GTA V(Gráficos Baixos)\n🚚 Euro Truck Simulator 2(Gráficos medio/Baixos)\n6️⃣ RAINBOW SIX SIEGE( Gráfico baixo )\n🔫 FREE FIRE (*Necessário conhecimento em uso e configuração de Emuladores*)\n\n*Processador:* I5-4570\n*Placa Mãe:* H81 (LGA 1150)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* GTX 750 TI 2GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER EVOLUT RGB\n*Fonte:* 500W\n\n+🖥️ Monitor 19' Pol. Seminovo\n+⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 2.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n\n\n",
    },

    // R$2.590,00
    {
      title: "(PC0018) SETUP i7 3ª + GTX 750 TI - R$2.790,00",
      image: "PC0018.png",
      text: "*Setup ideal para Jogos como:* \n⚡VALORANT\n💥LEAGUE OF LEGENDS\n🔫CS GO (Gráfico Medio)\n🦙 FORTNITE (Gráficos Baixos)\n🚔 GTA RP(Gráficos Baixo)\n🚚 Euro Truck Simulator 2(Gráficos Baixos)\n6️⃣ RAINBOW SIX SIEGE(Gráfico baixo)\n🔫 FREE FIRE (*Necessário configuração de Emuladores*)\n\n*Processador:* i7-3770\n*Placa Mãe:* H81 (LGA 1150)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* GTX 750 TI 2GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER EVOLUT RGB\n*Fonte:* 500W\n\n+🖥️ Monitor 19' Pol. Seminovo\n+⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 2.590,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$3.090,00
    {
      title: "(PC0091) SETUP GAMER RYZEN 3 3200G",
      image: "PC0014.png",
      text: "*Setup ideal para Jogos como:* \n🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🔫 VALORANT\n🔫 CS2\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 3 3200G\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* VEGA 8 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n+ 🖥️ Monitor de 19' Pol.\n+ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$3.090,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },

    // R$3.440,00
    {
      title: "(PC0014) 🖥🖱SETUP GAMER RYZEN 5 5600GT",
      image: "PC0014.png",
      text: "*Setup ideal para Jogos como:* \n🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 WARZONE(GRÁFICOS Médios)\n🔫 CS2\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 5600GT\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n+ 🖥️ Monitor de 19' Pol.\n+ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nDE ~R$ 3.790,00~ POR APENAS *R$3.690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },
    
    // R$4.390,00
    {
      title: "🖱SETUP GAMER RYZEN 5700G",
      image: "PC0004.png",
      text: "*Setup ideal para Jogos como:* \n 🚔 GTA 5/RP\n🚔 GTA 5/RP\n🌎 MINECRAFT\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 WARZONE(GRÁFICOS Médios)\n🔫 CS2\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 7 5700g\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n+ 🖥️ Monitor de 19' Pol.\n+ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$ 4.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },

    // R$4.590,00
    {
      title: "(PC0004) 🖱SETUP GAMER RYZEN 5 5500 RX580",
      image: "PC0004.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 CS2\n🔫 WARZONE\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 5500\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:*  RX580 8GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n+ 🖥️ Monitor de 19' Pol.\n+ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$ 4.590,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },

    // R$ 5.290,00 Restore
    {
      title: "(PC0066) SETUP RYZEN 5500 + RTX 3050 6GB",
      image: "PC0066.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🔫 CS2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB DDR4(16GB)\n*Placa de Vídeo:* RTX 3050 6GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n +🖥 MONITOR 19' Pol.\n + KIT Gamer Completo(Teclado, Headset, Mouse e Mousepad)\n\nPOR APENAS *R$ 5.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 5.290,00 Restore
    {
      title: "(PC00) SETUP RYZEN 5500 + RX 6600 8GB",
      image: "PC0066.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🔫 CS2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB DDR4(16GB)\n*Placa de Vídeo:* RX 6600 8GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n +🖥 MONITOR 19' Pol.\n + KIT Gamer Completo(Teclado, Headset, Mouse e Mousepad)\n\nPOR APENAS *R$ 5.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 5.890,00 Restore
    {
      title: "(PC0056) SETUP RYZEN 5500 + RTX 3060 12GB",
      image: "PC0056.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 WARZONE\n🔫 CS2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB (16GB) DDR4\n*Placa de Vídeo:* RTX 3060 12GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W 80Plus\n +🖥 MONITOR 19' Pol. VX PRO\n + KIT Gamer Completo(Teclado, Headset, Mouse e Mousepad)\n\nPOR APENAS *R$ 5.890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },

    // R$ 6.590,00 Restore
    {
      title: "SETUP RYZEN 5700X + RTX 3060 12GB",
      image: "PCSetup-AMD.png",
      text: "*Setup ideal para Jogos como:* \n🔫 VALORANT\n🔫 WARZONE\n🔫 CS2\n🦙 FORTNITE\n🐎 Red Dead Redemption 2\n🗡 Elden Ring\n\n*Processador:* RYZEN 7 5700X\n*Placa Mãe:* B450\n*Memória RAM:* 2x8GB (16GB) DDR4\n*Placa de Vídeo:* RTX 3060 12GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W 80Plus\n +🖥 MONITOR 19' Pol. VX PRO\n + KIT Gamer Completo(Teclado, Headset, Mouse e Mousepad)\n\nPOR APENAS *R$ 6.590,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
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
