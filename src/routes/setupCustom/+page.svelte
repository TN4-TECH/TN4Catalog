<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte"

  const products = [
    // R$8.390,00
    //{
    //  title: "Nº4 - (PC0068) SETUP i5 de 10º(10400F) + RTX 3050 E GABINETE STORM-Z",
    //  image: "PC0068.png",
    //  text: "*Setup ideal para Jogos como:*\n🚔 GTA 5/RP\n\n🔫 CS2\VALORANT\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Placa Mãe:* B560-PRO MSI(LGA 1200)\n*Processador:* I5-10400F(10º GERAÇÃO)\n*Memória RAM:* 2x8GB DDR4 FURY BEAST 3200MHZ *(16GB)*\n*Placa de Vídeo:* RTX 3050 GALAX 6GB\n*Armazenamento:* SSD 480GB\n *AIR Cooler:* REVENGE DUAL FAN RGB \n*Gabinete:* STORM-Z SHARP\n*Fonte:* 500W PFV ATIVO\n+ 🖥️ Monitor  Duex 32' 75hz PLANO Borda Infinita\n+ Kit Mecânico Knup (Teclado Mecânico Switch Azul, Mouse 4800DPI, Headset KP-359, Mousepad XL)\n\nPOR APENAS *R$ 8.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    //},
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
          src={product.image}
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
