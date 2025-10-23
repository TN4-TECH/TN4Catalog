<script lang="ts">
  import { page } from "$app/stores";
  import CopyButton from "$lib/CopyButton.svelte";
  import IconCopy from "$lib/icons/copy.svelte";

  const products = [
    //R$0.000,00
    // {
    //   title: "(CODE)NOTEBOOK ",
    //   image: ".png",
    //   text: "💻 NOTEBOOK ...\n\n*Processador:* \n*Memória RAM:* \n*Armazenamento:*\n*Tela:*\n(Acompanha Fonte)\n\n*POR APENAS R$0.000,00* em até 10x sem juros!",
    // },

    //R$999,99
    {
      title: "(NT0086) NOTEBOOK DELL VOSTRO P65",
      image: "NT0086.png",
      text: "💻 NOTEBOOK DELL VOSTRO P65\n\n*Processador:* I3 4005U (4ªGEN)\n*Memória RAM:* 8GB DDR3 \n*Armazenamento:* SSD DE 240GB\n*Tela:* 14' POL.\n(Acompanha Fonte)\n\n*POR APENAS R$999,99* em até 10x sem juros!",
    },

    //R$1.499,99
    {
      title: "(NT0080)NOTEBOOK LENOVO THINKPAD T740 ",
      image: "NT0080.png",
      text: "💻 NOTEBOOK LENOVO THINKPAD T740\n\n*Processador:* i5 6300U (6ªGEN)\n*Memória RAM:* 8GB DDR4 \n*Armazenamento:* SSD DE 240GB\n*Tela:* 14' POL.\n(Acompanha Fonte)\n\n*POR APENAS R$1.499,99* em até 10x sem juros!",
    },

    // R$1.790,00
    {
      title: "(NT0059) DELL LATITUDE 5290",
      image: "NT0059.png",
      text: "💻 NOTEBOOK DELL LATITUDE 5290\n\n*Processador:* INTEL CORE I5 DE 7ªGEN\n*Memória RAM:* 8GB DDR4\n*Armazenamento:* SSD 128GB\n(Acompanha Fonte)\n*Tela*: 15.6' POL.\n\n*POR APENAS R$1.790,00* em até 10x sem juros!",
    },

    //R$2.399,99
    {
      title: "(NT0084) NOTEBOOK DELL LATITUDE 3400",
      image: "NT0084.png",
      text: "💻 DELL LATITUDE 3400\n\n*Processador:* i5-8265U (8ªGEN)\n*Memória RAM:* 8GB DDR4 \n*Armazenamento:* SSD DE 240GB\n*Tela:* 14' POL\n(Acompanha Fonte)\n\n*POR APENAS R$2.399,99* em até 10x sem juros!",
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
