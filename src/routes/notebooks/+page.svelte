<script lang="ts">
  import { page } from "$app/stores";
  import CopyButton from "$lib/CopyButton.svelte";
  import IconCopy from "$lib/icons/copy.svelte";

  const products = [

 //R$2.890,00
    { 
      title: "(NT0021)  NOTEBOOK HP ELITEBOOK 840 ",
      image: "NT0021.png",
      text: "💻 NOTEBOOK HP ELITEBOOK 840\n\n*Processador:* i5 (10ªGEN)\n*Memória RAM:* 8GB DDR4 \n*Armazenamento:* SSD DE 256GB\n*Tela:* TOUCHSCREEN.\n(Acompanha Fonte)\n\n*POR APENAS R$ 2.890,00* em até 10x sem juros!\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    //R$ 2.590,00 
    { 
      title: "(NT0051)  NOTEBOOK DELL LATITUDE 5420 ",
      image: "NT0051.png",
      text: "💻 NOTEBOOK DELL LATITUDE 5420\n\n*Processador:* i5 (7ªGEN)\n*Memória RAM:* 8GB DDR4 \n*Armazenamento:* SSD DE 256GB\n*Tela:* 14' POL.\n(Acompanha Fonte)\n\n*POR APENAS R$  2.590,00 * em até 10x sem juros!\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

     //R$ 2.990,00
    {
      title: "(NT0052) LENOVO THINKPAD i7 8ªGEN ",
      image: "NT0080.png",
      text: "💻 NOTEBOOK LENOVO THINKPAD E490\n\n*Processador:* i7 (8ªGEN)\n*Memória RAM:* 8GB DDR4 \n*Armazenamento:* SSD DE 240GB\n*Tela:* 14' POL.\n(Acompanha Fonte)\n\n*POR APENAS R$ 2.990,00* em até 10x sem juros!\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

 //R$1.590,00
    {
      title: "(NT0068) LENOVO THINKPAD E490 ",
      image: "NT0080.png",
      text: "💻 NOTEBOOK LENOVO THINKPAD E490\n\n*Processador:* i5 (5ªGEN)\n*Memória RAM:* 8GB DDR3 \n*Armazenamento:* SSD DE 240GB\n*Tela:* 14' POL.\n(Acompanha Fonte)\n\n*POR APENAS R$1.590,00* em até 10x sem juros!\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

//R$ 2.890,00
    {
      title: "(NT0085) DELL PRATA I5 10ªGEN ",
      image: "NT0085.png",
      text: "💻 NOTEBOOK DELL PRATA \n\n*Processador:* i5 (10ªGEN)\n*Memória RAM:* 8GB DDR4 \n*Armazenamento:* SSD DE 240GB\n*Tela:* 14' POL.\n(Acompanha Fonte)\n\n*POR APENAS R$ 2.890,00* em até 10x sem juros!\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

//R$2.890,00
    { 
      title: "(NT0091)  NOTEBOOK HP ELITEBOOK 840 G8 ",
      image: "NT0021.png",
      text: "💻 NOTEBOOK HP ELITEBOOK 840\n\n*Processador:* i5 (11ªGEN)\n*Memória RAM:* 8GB DDR4 \n*Armazenamento:* SSD DE 256GB\n*Tela:* TOUCHSCREEN.\n(Acompanha Fonte)\n\n*POR APENAS R$ 2.890,00* em até 10x sem juros!\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
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
