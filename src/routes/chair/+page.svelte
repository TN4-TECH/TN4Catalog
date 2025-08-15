<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    {
      title: "(CA0057) CADEIRA GAMER DUEX PRETO",
      image: "CA0057.png",
      text: "*CADEIRA GAMER DUEX PRETO - DX9025BK*\n\nEspecificações: \n- Largura do encosto: 50,5 cm\n- Largura do assento: 50,0 cm\n- Largura de apoio de braço: 64,0 cm\n- Materiais: Tecido, espuma de alta densidade no encosto e no assento\n- Peso suportado: 120kg\n\nPor apenas *R$790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    {
      title: "(CA0058) CADEIRA GAMER DUEX PRETO/AZUL",
      image: "CA0058.png",
      text: "*CADEIRA GAMER DUEX PRETO/AZUL - DX9025BK*\n\nEspecificações: \n- Largura do encosto: 50,5 cm\n- Largura do assento: 50,0 cm\n- Largura de apoio de braço: 64,0 cm\n- Materiais: Tecido, espuma de alta densidade no encosto e no assento\n- Peso suportado: 120kg\n\nPor apenas *R$790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    {
      title: "(CA0059)CADEIRA GAMER DUEX PRETO/VERMELHO",
      image: "CA0059.png",
      text: "*CADEIRA GAMER DUEX PRETO/VERMELHO - DX9025BK*\n\nEspecificações: \n- Largura do encosto: 50,5 cm\n- Largura do assento: 50,0 cm\n- Largura de apoio de braço: 64,0 cm\n- Materiais: Tecido, espuma de alta densidade no encosto e no assento\n- Peso suportado: 120kg\n\nPor apenas *R$790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    {
      title: "(CA0060)CADEIRA GAMER DUEX ROSA/BRANCO",
      image: "CA0060.png",
      text: "*CADEIRA GAMER DUEX ROSA/BRANCO - DX9025BK*\n\nEspecificações: \n- Largura do encosto: 50,5 cm\n- Largura do assento: 50,0 cm\n- Largura de apoio de braço: 64,0 cm\n- Materiais: Tecido, espuma de alta densidade no encosto e no assento\n- Peso suportado: 120kg\n\nPor apenas *R$890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    {
      title: "(CA0061)CADEIRA GAMER DUEX BRANCO/PRETO",
      image: "CA0061.png",
      text: "*CADEIRA GAMER DUEX BRANCO/PRETO - DX9025BK*\n\nEspecificações: \n- Largura do encosto: 50,5 cm\n- Largura do assento: 50,0 cm\n- Largura de apoio de braço: 64,0 cm\n- Materiais: Tecido, espuma de alta densidade no encosto e no assento\n- Peso suportado: 120kg\n\nPor apenas *R$890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },
  ];

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text);
  }
</script>

<div class="p-8">
  <a href="/"> ⬅ Home</a>
  <h1 class="text-xl font-bold mb-4">🪑 CADEIRAS GAMER</h1>
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
