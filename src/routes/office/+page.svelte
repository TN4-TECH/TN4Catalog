<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    // R$500,00
    {
      title: "(DT00?) HP EliteDesk",
      image: "DT0000.png",
      text: "*Placa Mãe:* \n*Processador:* AMD A4\n*Memória RAM:* 8GB DDR3\n*Armazenamento:* SSD 120GB\n*Fonte:* 200w 80PLUS Platinum\n\nDe ~R$790,00~ Por apenas *R$500,00*em até 10x sem juros!",
    },

    // R$690,00
    {
      title: "(DT0012) DESKTOP LENOVO THINKCENTRE M92P",
      image: "DT0012.png",
      text: "*Processador:* INTEL I5-3470 (3ªGEN)\n*Memória RAM:* 8GB DDR3\n*Armazenamento:* SSD 256GB\n\nPor apenas *R$690,00*em até 10x sem juros!",
    },

    // R$790,00
    {
      title: "(DT00?) HP EliteDesk + GT 210",
      image: "DT0000.png",
      text: "*Placa Mãe:* \n*Processador:* AMD A4\n*Memória RAM:* 8GB DDR3\n*Armazenamento:* SSD 120GB\n*Placa De Vídeo:* GT 210 1GB\n*Fonte:* 200w 80PLUS Platinum\n\nPor apenas *R$790,00*em até 10x sem juros!",
    },

    // R$690,00
    {
      title: "(DT0015) DESKTOP HP ELITEDESK 8300",
      image: "DT0015.png",
      text: "*Processador:* INTEL CORE I7-3770 (3ªGEN)\n*Memória RAM:* 8GB DDR3\n*Armazenamento:* SSD 256GB\n\nPor apenas *R$890,00*em até 10x sem juros!",
    },

    // R$690,00
    {
      title: "(DT0016) DESKTOP HP ELITEDESK 800 G1",
      image: "DT0016.png",
      text: "*Processador:* INTEL I7-4770 (4ªGEN)\n*Memória RAM:* 8GB DDR3\n*Armazenamento:* SSD 256GB\n\nPor apenas *R$1.090,00*em até 10x sem juros!",
    },

     // R$1.690,00
     {
      title: "(DT0017) DESKTOP LENOVO THINKCENTRE",
      image: "DT0017.png",
      text: "*Processador:* INTEL I7-7077 (7ªGEN)\n*Memória RAM:* 8GB DDR3\n*Armazenamento:* SSD 256GB\n\nPor apenas *R$1.690,00*em até 10x sem juros!",
    },

    // R$ 1.790,00
    {
      title: "(DT0087)Lenovo Thinkcentre M910",
      image: "DT0087.png",
      text: "*Placa Mãe:* \n*Processador:* Intel i7 de 6ª Geração\n*Memória RAM:* 8GB DDR4\n*Armazenamento:* SSD 240GB\n*Fonte:* 200w 80PLUS Platinum\n\nDe ~R$1.990,00~ Por apenas *R$1.690,00*em até 10x sem juros!",
    },

    // R$ 3.590,00
    {
      title: "(DT00?)Lenovo Thinkcentre + RTX 3050",
      image: "DT00.png",
      text: "*Placa Mãe:* \n*Processador:* Intel i7 de 6ª Geração\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Armazenamento:* SSD 240GB\n*Placa De Vídeo:* RTX 3050 6GB Low profile\n*Fonte:* 200w 80PLUS Platinum\n\nPor apenas *R$3.590,00*em até 10x sem juros!",
    },
  ];

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text);
  }
</script>

<div class="p-8">
  <a href="/"> ⬅ Home</a>
  <h1 class="text-xl font-bold mb-4">⚙️ Desktop Office</h1>
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
