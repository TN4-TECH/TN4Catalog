<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte"

  const products = [
    // R$2.150,00
    {
      title: "i5 3ª SETUP COMPLETO",
      image: "PC0013.png",
      text: "*Setup ideal para Jogos como:* \n⚡ VALORANT\n💥 LEAGUE OF LEGENDS\n🌎 TERRARIA\n🟥 ROBLOX\n🔫 CROSSFIRE\n\n*Processador:* I5-3570\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER PRETO RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 2.150,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

      // R$2.450,00
    {
      title: "i7 3ª SETUP COMPLETO",
      image: "PC0013.png",
      text: "*Setup ideal para Jogos como:* \n⚡ VALORANT\n💥 LEAGUE OF LEGENDS\n🌎 TERARRIA\n🟥 ROBLOX\n🔫 CROSSFIRE\n\n*Processador:* I7-3770\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER PRETO RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 2.450,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },


    // R$2.650,00
    {
      title: "i5 3ª + GT 730 SETUP COMPLETO",
      image: "PC0046.png",
      text: "*Setup ideal para Jogos como:* \n⚡ VALORANT\n💥 LEAGUE OF LEGENDS\n🌎 TERARRIA\n🟥 ROBLOX\n🔫 CROSSFIRE\n\n*Processador:* I5-3570\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* GT 730 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER PRETO RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 2.650,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$2.950,00
    {
      title: "i5 3ª + RX 550 4GB SETUP COMPLETO",
      image: "PC0010.png",
      text: "*Setup ideal para Jogos como:*  \n⚡ VALORANT\n💥 LEAGUE OF LEGENDS\n🔫 CS2\n🦙 FORTNITE \n🚔 GTA RP\n🚚 Euro Truck Simulator 2\n6️⃣ RAINBOW SIX SIEGE\n\n*Processador:* I5-3570\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* RX 550 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER PRETO RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 2.950,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$3.250,00
    {
      title: "i7 3ª + RX 550 4GB SETUP COMPLETO",
      image: "PC0018.png",
      text: "*Setup ideal para Jogos como:* \n⚡ VALORANT\n💥 LEAGUE OF LEGENDS\n🔫 CS2\n🦙 FORTNITE \n🚔 GTA RP\n🚚 Euro Truck Simulator 2\n6️⃣ RAINBOW SIX SIEGE\n\n*Processador:* i7-3770\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* RX 550 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER EVOLUT RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 3.250,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$3.850,00
    {
      title: "i7 3ª + RX 580 8GB SETUP COMPLETO",
      image: "PC0018.png",
      text: "*Setup ideal para Jogos como:* \n⚡ VALORANT\n💥 LEAGUE OF LEGENDS\n🔫 CS2\n🦙 FORTNITE \n🚔 GTA RP\n🚚 Euro Truck Simulator 2\n6️⃣ RAINBOW SIX SIEGE\n\n*Processador:* i7-3770\n*Placa Mãe:* H61 (LGA 1155)\n*Memória RAM:* 2x8GB(16GB)\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER EVOLUT RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ TECLADO, 🖱️ MOUSE, MOUSEPAD E 🎧 HEADSET\n\n*R$ 3.850,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },
    
        // R$3.090,00
    {
      title: "RYZEN 3 2200G PRO SETUP COMPLETO",
      image: "PC0014.png",
      text: "*Setup ideal para Jogos como:* \n🚔 GTA SA\n💥 LEAGUE OF LEGENDS\n🌎 TERARRIA\n🛀​ THE SIMS 4\n✨​ GENSHIN IMPACT\n🔫 VALORANT\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 3 2200G PRO\n*Memória RAM:* 8GB DDR4\n*Placa de Vídeo:* VEGA 8 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$3.090,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },
        
        // R$3.290,00
    {
      title: "RYZEN 3 3200G SETUP COMPLETO",
      image: "PC0014.png",
      text: "*Setup ideal para Jogos como:* \n🚔 GTA SA\n💥 LEAGUE OF LEGENDS\n🌎 TERARRIA\n🛀​ THE SIMS 4\n✨​ GENSHIN IMPACT\n🔫 VALORANT\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 3 3200G\n*Memória RAM:* 8GB DDR4\n*Placa de Vídeo:* VEGA 8 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$3.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },
    
        // R$3.590,00
    {
      title: "RYZEN 5 3400G SETUP COMPLETO",
      image: "PC0014.png",
      text: "*Setup ideal para Jogos como:* \n🚔 GTA SA\n💥 LEAGUE OF LEGENDS\n🌎 TERARRIA\n🛀​ THE SIMS 4\n✨​ GENSHIN IMPACT\n🔫 VALORANT\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 3400G\n*Memória RAM:* 8GB DDR4\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$4.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },
        
        // R$4.290,00
    {
      title: "RYZEN 5 5600GT SETUP COMPLETO",
      image: "PC0014.png",
      text: "*Setup ideal para Jogos como:* \n🚔 GTA SA\n💥 LEAGUE OF LEGENDS\n🌎 TERARRIA\n🛀​ THE SIMS 4\n✨​ GENSHIN IMPACT\n🔫 VALORANT\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 5600GT\n*Memória RAM:* 8GB DDR4\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$4.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },
    
        // R$4.690,00
    {
      title: "RYZEN 5700G SETUP COMPLETO",
      image: "PC0004.png",
      text: "*Setup ideal para Jogos como:* \n🚔 GTA SA\n💥 LEAGUE OF LEGENDS\n🌎 TERARRIA\n🛀​ THE SIMS 4\n✨​ GENSHIN IMPACT\n🔫 VALORANT\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 7 5700g\n*Memória RAM:* 8GB DDR4\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$ 4.690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

        // R$5.990,00
    {
      title: "RYZEN 5 5500 RX580 SETUP COMPLETO",
      image: "PC0004.png",
      text: "*Setup ideal para Jogos como:* \n💥 FREE FIRE\n⚽ EA FC 26\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n 🐎 Red Dead Redemption 2\n ⚔️ Elden Ring\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 5500\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:*  RX580 8GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n\n + 🖥️ Monitor de 19' Pol.\n + ⌨️ Kit Gamer(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$ 5.990,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

        // R$ 6.790,00
    {
      title: "(PC0066) SETUP RYZEN 5500 + RTX 3050 6GB",
      image: "PC0066.png",
      text: "*Setup ideal para Jogos como:* \n💥 FREE FIRE\n⚽ EA FC 26\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n 🐎 Red Dead Redemption 2\n ⚔️ Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB DDR4(16GB)\n*Placa de Vídeo:* RTX 3050 6GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n\n + 🖥️ MONITOR 19' Pol.\n + ⌨️ KIT Gamer Completo(Teclado, Headset, Mouse e Mousepad)\n\nPOR APENAS *R$ 6.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

        // R$ 7.290,00
    {
      title: "(PC00) SETUP RYZEN 5500 + RTX 2060 SUPER",
      image: "PC0066.png",
      text: "*Setup ideal para Jogos como:* \n💥 FREE FIRE\n⚽ EA FC 26\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n 🐎 Red Dead Redemption 2\n ⚔️ Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB DDR4(16GB)\n*Placa de Vídeo:* RTX 2060 SUPER\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 500W\n\n + 🖥️ MONITOR 19' Pol.\n + ⌨️ KIT Gamer Completo(Teclado, Headset, Mouse e Mousepad)\n\nPOR APENAS *R$ 7.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

        // R$ 7.990,00
    {
      title: "(PC0056) SETUP RYZEN 5500 + RTX 5050 8GB ",
      image: "PC0056.png",
      text: "*Setup ideal para Jogos como:* \n💥 FREE FIRE\n⚽ EA FC 26\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n 🐎 Red Dead Redemption 2\n ⚔️ Elden Ring\n\n*Processador:* RYZEN 5 5500\n*Placa Mãe:* A520\n*Memória RAM:* 2x8GB (16GB) DDR4\n*Placa de Vídeo:* RTX 5050 8GB \n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 700W 80Plus\n\n + 🖥️ MONITOR 19' Pol. VX PRO\n + ⌨️ KIT Gamer Completo(Teclado, Headset, Mouse e Mousepad)\n\nPOR APENAS *R$ 7.990,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

        // R$ 9.290,00
    {
      title: "SETUP RYZEN 5700X + RTX 5060 8GB ",
      image: "PCSetup-AMD.png",
      text: "*Setup ideal para Jogos como:* \n💥 FREE FIRE\n⚽ EA FC 26\n🔫 WARZONE\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n 🐎 Red Dead Redemption 2\n ⚔️ Elden Ring\n\n*Processador:* RYZEN 7 5700X\n*Placa Mãe:* B450\n*Memória RAM:* 2x8GB (16GB) DDR4\n*Placa de Vídeo:* RTX 5060 8GB \n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER LED C/3 FANS RGB\n*Fonte:* 700W 80Plus\n\n + 🖥️ MONITOR 19' Pol. VX PRO\n + ⌨️ KIT Gamer Completo(Teclado, Headset, Mouse e Mousepad)\n\nPOR APENAS *R$ 9.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
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
