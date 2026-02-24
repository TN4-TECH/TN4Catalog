<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [

   // R$2.790,00
    {
      title: "i5 de 11ª (Gamdias)",
      image: "I5-11500(GAMDIAS).png",
      text: "*Máquina ideal para Jogos como:* \n🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 CS2\n🦙 FORTNITE\n\n*Processador:* I5-11500 (11° GEN)\n*Placa Mãe:* LGA 1200 GIGABYTE\n*Memória RAM:* 2x8GB(16GB)\n*Air Cooler*\n*Armazenamento:* NVME 256GB\n*Gabinete:*GAMDIAS AURA BRANCO C/3 FANS RGB\n*Fonte:* 500W\n\n*R$ 2.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

     // R$ 3.390,00
    {
      title: "PC GAMER ROSA RYZEN 3",
      image: "CUSTOM3390.png",
      text: "*Máquina ideal para Jogos como:* \n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🚔 GTA 5/RP\n🔫 VALORANT\n\n*Processador:* RYZEN 3 3200G\n*Placa Mãe:* A520 REVENGER\n*Memória RAM:* 8GB DDR4\n*Armazenamento:* SSD 480GB\n*Fonte:* 500W\n*Gabinete:* MYMAX TAURUS ROSA\n\nPOR APENAS *R$ 3.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$5.490,00
    {
      title: "(PC00) i7 de 8ª + RX 580 8GB",
      image: "HAYOMPC.png",
      text: "*Máquina idealpara Jogos como:* \n 🚔 GTA RP\n🔫 CSGO/VALORANT\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* I7-8700 (8ªGEN)\n*Placa Mãe:* H310 VX PRO\n*Memória RAM:* 2x8GB(16GB) DDR4 3200MHZ\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD 480GB\n*Gabinete:* HAYOM C/3 FANS RGB\n*Fonte:* BRIGHT 650W\n\n*R$ 5.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n",
    },
   
    // R$ 6.690,00
    {
      title: "PC AMARELO RYZEN 5 5600GT",
      image: "CUSTOM6690.png",
      text: "*Máquina ideal para:* \n🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n⚽ EA FC 26\n🔫 VALORANT\n🔫 CS2\n🦙 FORTNITE\n\n*Processador:* RYZEN 5 5600GT\n*Placa Mãe:* B550M ASUS TUF GAMING\n*Memória RAM:* 2X8GB (16GB) DDR4 HIKSEMI FUTURE RGB\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 512GB\n*Fonte:* 500W 80PLUS DUEX\n*Gabinete:* DELTA HYPERION\n\nPOR APENAS *R$ 6.690,00* em até 10x sem juros!\n\nFormas de Pagamento:\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    // R$ 6.990,00
    {
      title: "PC PRETO COOLER MASTER I7 9° GEN + RX 580",
      image: "CUSTOM5790.png",
      text: "*Máquina ideal para Jogos como:* \n🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n⚽ EA FC 26\n🔫 VALORANT\n🔫 CS2\n🦙 FORTNITE\n\n*Processador:* I7-9700 (9° Geração)\n*Placa Mãe:* H310 VX PRO\n*Memória RAM:* 2x8GB (16GB) FNX 3200Mhz DDR4\n*Placa de Vídeo:* RX 580 8GB\n*Water Cooler:* PCYES ARGB NIX 120MM PRETO\n*Armazenamento:* SSD DUEX 480GB\n*Gabinete:* MASTERBOX COOLER MASTER\n*Fonte:* TAICON 500W\n\nPOR APENAS *R$ 6.990,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },
        // R$ 8.390,00
    {
      title: "PC KALKAN RYZEN 5 8500G",
      image: "GB0114.png",
      text: "*Máquina ideal para:* \n🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n⚽ EA FC 26\n🔫 VALORANT\n🔫 CS2\n🦙 FORTNITE\n\n*Processador:* RYZEN 5 8500G\n*Placa Mãe:* A620 MSI\n*Cooler:* WATER COOLER 240MM PCYES VISION COM TELA\n*Memória RAM:* 2X8GB (16GB) DDR5 ASGARD 5200MHZ\n*Armazenamento:* SSD 1TB\n*Fonte:* 450W 80PLUS GIGABYTE\n*Gabinete:* DRAXEN ITNHAN\n\nPOR APENAS *R$ 8.390,00* em até 10x sem juros!\n\nFormas de Pagamento:\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    // R$ 8.990,00
    {
      title: "PC AQUARIO BRANCO RYZEN 7 5700G + RTX 5050",
      image: "CUSTOM8990.png",
      text: "*Máquina ideal para:* \n💥 FREE FIRE\n⚽ EA FC 26\n🔫 VALORANT\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 7 5700G\n*Placa Mãe:* B550ZGS DUEX\n*Memória RAM:* 2x8(16GB) 3200MHZ XPG BRANCA DDR4\n*Cooler:* PCYES FROST PULSE ARGB WHITE GHOST\n*Placa de Vídeo:* RTX 5050 8GB\n*Armazenamento:* SSD NVME 500GB PRODRIVE\n*Gabinete:* 'AQUARIO' BLUECASE C/5 FANS RGB\n*Fonte:* 500W FORTREK BRANCA\n\nPOR APENAS *R$ 8.990,00* em até 10x sem juros!\n\nFormas de Pagamento:\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    // R$ 11.290,00
    {
      title: "PC KALKAN I7 12700F + RTX 5060",
      image: "CUSTOM11290.png",
      text: "*Máquina ideal para:* \n💥 FREE FIRE\n⚽ EA FC 26\n🔫 VALORANT\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* I7-12700F (12ª Geração)\n*Placa Mãe:* B760M MSI\n*Memória RAM:* 16GB DDR5 RISE MODE\n*Placa de Vídeo:* GAINWARD RTX 5060 8GB\n*Water Cooler:* KALKAN ALPHA 360MM PRETO\n*Armazenamento:* SSD NVME 500GB\n*Gabinete:* KALKAN ALFERN\n*Fonte:* TAICON 700W 80PLUS\n\nPOR APENAS *R$ 11.290,00* em até 10x sem juros!\n\nFormas de Pagamento:\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

   // R$ 12.590,00

    {
      title: "PC DELTA VERDE RYZEN 5500 + RTX 5050",
      image: "CUSTOM12590.png",
      text: "*Máquina ideal para:* \n💥 FREE FIRE\n⚽ EA FC 26\n🔫 VALORANT\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n 🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5500\n*Placa Mãe:* B550M ASUS TUF GAMING\n*Cooler:* WATER COOLER 360MM SEGOTEP\n*Memória RAM:* 2X16GB (32GB) DDR4 BRANCA XPG\n*Placa de Vídeo:* RTX 5050 8GB\n*Armazenamento:* NVME 1TB\n*Fonte:* 700W 80PLUS\n*Gabinete:* DELTA VERDE C/3 FANS\n\nPOR APENAS *R$ 12.590,00* em até 10x sem juros!\n\nFormas de Pagamento:\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
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
