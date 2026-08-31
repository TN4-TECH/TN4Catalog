<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    // R$1.490,00
    {
      title: "PC GAMER i5 de 3ª",
      image: "GB0230.png",
      text: "*Máquina ideal para Jogos como:* \n🟥 ROBLOX\n⚡ VALORANT\n🌎 TERRARIA\n🔫 CROSSFIRE\n💥 LEAGUE OF LEGENDS\n\n*Placa Mãe:* H61M\n*Processador:* I5 3570\n*Memória RAM:* 2x8GB (16GB) DDR3\n*Armazenamento:* SSD 240GB\n*Gabinete:* PRETO C/ LED\n*Fonte:* 500W PFC ATIVO\n\n*R$ 1.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },
      // R$1.790,00
    {
      title: "PC GAMER i7 de 3ª",
      image: "GB0230.png",
      text: "*Máquina ideal para Jogos como:* \n🟥 ROBLOX\n⚡ VALORANT\n🌎 TERRARIA\n🔫 CROSSFIRE\n💥 LEAGUE OF LEGENDS\n\n*Placa Mãe:* H61M\n*Processador:* I7 3770\n*Memória RAM:* 2x8GB (16GB) DDR3\n*Armazenamento:* SSD 240GB\n*Gabinete:* PRETO C/ LED\n*Fonte:* 500W PFC ATIVO\n\n*R$ 1.790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$1.890,00
    {
      title: "i5 de 3ª + GT 730",
      image: "GB0230.png",
      text: "*Máquina ideal para Jogos como:* \n🟥 ROBLOX\n⚡ VALORANT\n🌎 TERRARIA\n🔫 CROSSFIRE\n💥 LEAGUE OF LEGENDS\n\n*Placa Mãe:* H61M\n*Processador:* I5 3570\n*Memória RAM:* 2x8GB(16GB) DDR3\n*Placa de Vídeo:* GT 730 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* PRETO C/ LED\n*Fonte:* 500W PFC ATIVO\n\n*R$ 1.890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$2.190,00
    {
      title: "i5 de 3ª + RX 550 4GB",
      image: "GB0231.png",
      text: "*Máquina ideal para Jogos como:* \n🔫 CS2\n🚔 GTA RP\n⚡ VALORANT\n🦙 FORTNITE\n🚚 EURO TRUCK 2\n6️⃣ RAINBOW SIX SIEGE\n💥 LEAGUE OF LEGENDS\n\n*Placa Mãe:* H61M\n*Processador:* I5 3570\n*Memória RAM:* 2x8GB(16GB) DDR3\n*Placa de Vídeo:* RX 550 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* PRETO C/ LED\n*Fonte:* 500W PFC ATIVO\n\n*R$ 2.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$2.490,00
    {
      title: "i7 de 3ª + RX 550 4GB",
      image: "GB0231.png",
      text: "*Máquina ideal para Jogos como:* \n🔫 CS2\n🚔 GTA RP\n⚡ VALORANT\n🦙 FORTNITE\n🚚 EURO TRUCK 2\n6️⃣ RAINBOW SIX SIEGE\n💥 LEAGUE OF LEGENDS\n\n*Placa Mãe:* H61M\n*Processador:* i7 3770\n*Memória RAM:* 2x8GB(16GB) DDR3\n*Placa de Vídeo:* RX 550 4GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* PRETO C/ LED\n*Fonte:* 500W PFC ATIVO\n\n*R$ 2.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },
       
    // R$3.090,00
    {
      title: "i7 de 3ª + RX 580 8GB",
      image: "GB0231.png",
      text: "*Máquina ideal para Jogos como:* \n🔫 CS2\n🚔 GTA RP\n⚡ VALORANT\n🦙 FORTNITE\n🚚 EURO TRUCK 2\n6️⃣ RAINBOW SIX SIEGE\n💥 LEAGUE OF LEGENDS\n\n*Placa Mãe:* H61M\n*Processador:* i7  3770\n*Memória RAM:* 2x8GB(16GB) DDR3\n*Placa de Vídeo:* RX 580 8GB\n*Armazenamento:* SSD 240GB\n*Gabinete:* PRETO C/ LED\n*Fonte:* 500W PFC ATIVO\n\n*R$ 3.090,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
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
