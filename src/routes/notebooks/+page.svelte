<script lang="ts">
  import { page } from "$app/stores";
  import CopyButton from "$lib/CopyButton.svelte";
  import IconCopy from "$lib/icons/copy.svelte";

  const products = [
    // R$0.000,00
    // {
    //   title: "(CODE)NOTEBOOK ",
    //   image: ".png",
    //   text: "💻 NOTEBOOK ...\n\n*Processador:* \n*Memória RAM:* \n*Armazenamento:*\n(Acompanha Fonte)\n\n*POR APENAS R$0.000,00* em até 10x sem juros!",
    // },

    // R$1.490,00
    {
      title: "Nº1 - (NT0002) NOTEBOOK LENOVO T440",
      image: "NT0002.png",
      text: "💻 NOTEBOOK LENOVO THINKPAD T440\n\n*Processador:* INTEL CORE I5-4300U(4ªGEN)\n*Memória RAM:* 8GB DDR3\n*Armazenamento:* SSD 256GB\n(Acompanha Fonte)\n\n*POR APENAS R$1.490,00* em até 10x sem juros!",
    },

    // R$1.590,00
    {
      title: "Nº2 - (NT0054) NOTEBOOK DELL LATITUDE E7440",
      image: "NT0054.png",
      text: "💻 NOTEBOOK DELL LATITUDE E7440\n\n*Processador:* INTEL CORE I5-4310U(4ªGEN)\n*Memória RAM:* 8GB DDR3\n*Armazenamento:* SSD 256GB\n(Acompanha Fonte)\n\n*POR APENAS R$1.590,00* em até 10x sem juros!",
    },

    // R$1.790,00
    {
      title: "Nº3 - (NT0056) NOTEBOOK DELL LATITUDE E7440",
      image: "NT0056.png",
      text: "💻 NOTEBOOK DELL LATITUDE E7440\n\n*Processador:* INTEL CORE I7-4600U(4ªGEN)\n*Memória RAM:* 8GB DDR3\n*Armazenamento:* SSD 256GB\n(Acompanha Fonte)\n\n*POR APENAS R$1.790,00* em até 10x sem juros!",
    },

    // R$1.790,00
    {
      title: "Nº4 - (NT0057) NOTEBOOK HP 246 G7",
      image: "NT0057.png",
      text: "💻 NOTEBOOK DELL LATITUDE E7440\n\n*Processador:* INTEL CORE I3-8100U(8ªGEN)\n*Memória RAM:* 8GB DDR3\n*Armazenamento:* SSD 256GB\n(Acompanha Fonte)\n\n*POR APENAS R$1.790,00* em até 10x sem juros!",
    },

    // R$2.490,00
    {
      title: "Nº5 - (NT0043) NOTEBOOK LENOVO THINKPAD T480",
      image: "NT0043.png",
      text: "💻 NOTEBOOK DELL LATITUDE E7440\n\n*Processador:* INTEL CORE I5-8550U(8ªGEN)\n*Memória RAM:* 8GB DDR3\n*Armazenamento:* SSD 256GB\n(Acompanha Fonte)\n\n*POR APENAS R$2.490,00* em até 10x sem juros!",
    },

    // R$2.690,00
    {
      title: "Nº6 - (NT0064) NOTEBOOK LENOVO IDEAPAD ",
      image: "NT0064.png",
      text: "💻 NOTEBOOK LENOVO IDEAPAD\n\n*Processador:* i7 8ª GERAÇÃO\n*Memória RAM:* 8GB DDR4\n*Armazenamento:* SSD 240GB\n(Acompanha Fonte)\n\nDE ~R$3.290,00~ POR APENAS *R$2.690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    // R$2.890,00
    {
      title: "Nº7 - (NT0052) NOTEBOOK LENOVO THINKPAD T480",
      image: "NT0052.png",
      text: "💻 NOTEBOOK LENOVO THINKPAD T480\n\n*Processador:* INTEL CORE I7-8750U(8ªGEN)\n*Memória RAM:* 8GB DDR4\n*Armazenamento:* SSD 256GB\n(Acompanha Fonte)\n\nPOR APENAS *R$2.890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    // R$2.690,00
    {
      title: "Nº8 - (NT0065) NOTEBOOK LENOVO THINKPAD E14",
      image: "NT0065.png",
      text: "💻 NOTEBOOK LENOVO THINKPAD E14\n\n*Processador:* INTEL CORE I5 de 10ªGEN\n*Memória RAM:* 8GB DDR4\n*Armazenamento:* SSD 240GB\n(Acompanha Fonte)\n\nPOR APENAS *R$3.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },
  ];

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text);
  }
</script>

<div class="p-8">
  <a href="/"> ⬅ Home</a>
  <h1 class="text-xl font-bold mb-4">💻 Notebooks</h1>
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
