<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    //R$790,00
    {
      title: "(CA0057) CADEIRA GAMER DUEX PRETO",
      image: "CA0057.png",
      text: "*CADEIRA GAMER DUEX PRETO - DX9025BK*\n\nEspecificações: \n- Altura do encosto: \n- Largura do encosto: 50,5 cm\n- Largura do assento: 50,0 cm\n- Largura de apoio de braço: 64,0 cm\n- Materiais: Tecido, espuma de alta densidade no encosto e no assento\n- Peso suportado: 120kg\n\nPor apenas *R$790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$790,00
    {
      title: "(CA0058) CADEIRA GAMER DUEX PRETO/AZUL",
      image: "CA0058.png",
      text: "*CADEIRA GAMER DUEX PRETO/AZUL - DX9025BK*\n\nEspecificações: \n- Largura do encosto: 50,5 cm\n- Largura do assento: 50,0 cm\n- Largura de apoio de braço: 64,0 cm\n- Materiais: Tecido, espuma de alta densidade no encosto e no assento\n- Peso suportado: 120kg\n\nPor apenas *R$790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$790,00
    {
      title: "(CA0059) CADEIRA GAMER DUEX PRETO/VERMELHO",
      image: "CA0059.png",
      text: "*CADEIRA GAMER DUEX PRETO/VERMELHO - DX9025BK*\n\nEspecificações: \n- Largura do encosto: 50,5 cm\n- Largura do assento: 50,0 cm\n- Largura de apoio de braço: 64,0 cm\n- Materiais: Tecido, espuma de alta densidade no encosto e no assento\n- Peso suportado: 120kg\n\nPor apenas *R$790,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$890,00
    {
      title: "(CA0060) CADEIRA GAMER DUEX ROSA/BRANCO",
      image: "CA0060.png",
      text: "*CADEIRA GAMER DUEX ROSA/BRANCO - DX9025BK*\n\nEspecificações: \n- Largura do encosto: 50,5 cm\n- Largura do assento: 50,0 cm\n- Largura de apoio de braço: 64,0 cm\n- Materiais: Tecido, espuma de alta densidade no encosto e no assento\n- Peso suportado: 120kg\n\nPor apenas *R$890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$890,00
    {
      title: "(CA0061) CADEIRA GAMER DUEX BRANCO/PRETO",
      image: "CA0061.png",
      text: "*CADEIRA GAMER DUEX BRANCO/PRETO*\n\nEspecificações: \n- Largura do encosto: 50,5 cm\n- Largura do assento: 50,0 cm\n- Largura de apoio de braço: 64,0 cm\n- Materiais: Tecido, espuma de alta densidade no encosto e no assento\n- Peso suportado: 120kg\n\nPor apenas *R$890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$1.190,00
    //{
      //title: "(CA0053) CADEIRA GAMER KALKAN AESIR KLK027",
      //image: "CA0053.png",
      //text: "*CADEIRA GAMER KALKAN AESIR KLK027*\n\nEspecificações: \n- Altura do encosto (cm): 84CM \n- Largura do assento (cm): Interna 39 / Externa 53 \n- Materiais: Corino e espuma de alta densidade\n- Peso suportado: 12 0kg\n\nPor apenas *R$1.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    //},

    //R$1.190,00
    //{
      //title: "(CA0049) CADEIRA GAMER MYMAX MX5 AZUL/BRANCO",
      //image: "CA0049.png",
      //text: "*CADEIRA GAMER MYMAX MX5 AZUL/BRANCO*\n\nEspecificações: \n- Altura do encosto (cm): 85CM \n- Largura do assento: Interna 34 / Externa 53\n- Materiais: Estofamento em tecido sintético PU e Estrutura Metálica\n- Peso suportado: 150kg\n\nPor apenas *R$1.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    //},

    //R$1.190,00
    //{
      //title: "(CA0037) CADEIRA GAMER MX7 PRETO/ROSA",
      //image: "CA0037.png",
      //text: "*CADEIRA GAMER MX7 PRETO/ROSA*\n\nEspecificações: \n- Altura do encosto (cm): 82CM \n- Largura do Interna: 34CM\n- Materiais: Estofamento em tecido sintético PU e Estrutura Metálica\n- Peso suportado: 150kg\n\nPor apenas *R$1.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    //},

    //R$1.190,00
    {
      title: "(CA0029) CADEIRA GAMER MYMAX MX8 PRETO/AZUL",
      image: "CA0029.png",
      text: "*CADEIRA GAMER MYMAX MX8 PRETO/AZUL*\n\nEspecificações: \n- Altura do encosto (cm): 82CM \n- Largura do Interna: 34CM\n- Materiais: Estofamento em tecido sintético PU e Estrutura Metálica\n- Peso suportado: 150kg\n\nPor apenas *R$1.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$1.190,00
    {
      title: "(CA0038) CADEIRA GAMER DRAXEN DN2 PRETO/AZUL CELESTE",
      image: "CA0038.png",
      text: "*CADEIRA GAMER DRAXEN DN2 PRETO/AZUL CELESTE*\n\nEspecificações: \n- Altura do encosto (cm): 83CM \n- Largura do Interna: 52CM\n- Materiais: Enchimento e Espuma e Estrutura Metálica\n- Peso suportado: 150kg\n\nPor apenas *R$1.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$1.190,00
    //{
      //title: "(CA0063) CADEIRA GAMER MYMAX MX5 PRETO/VERMELHO",
      //image: "CA0063.png",
      //text: "*CADEIRA GAMER MYMAX MX5 PRETO/VERMELHO*\n\nEspecificações: \n- Altura do encosto (cm): 83CM \n- Largura do Interna: 34CM\n- Materiais: Estofamento em tecido sintético PU e Estrutura Metálica\n- Peso suportado: 150kg\n\nPor apenas *R$1.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    //},

    //R$1.190,00
    //{
      //title: "(CA0034) CADEIRA GAMER MYMAX MX7 PRETO/DOURADO",
      //image: "CA0034.png",
      //text: "*CADEIRA GAMER MYMAX MX7 PRETO/DOURADO*\n\nEspecificações: \n- Altura do encosto (cm): 82CM \n- Largura do Interna: 34CM\n- Materiais: Estofamento em tecido sintético PU e Estrutura Metálica\n- Peso suportado: 150kg\n\nPor apenas *R$1.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    //},

    //R$1.290,00
    //{
      //title: "(CA0045) CADEIRA GAMER MYMAX MX15 PRETO/AZUL",
      //image: "CA0045.png",
      //text: "*CADEIRA GAMER MYMAX MX15 PRETO/AZUL*\n\nEspecificações: \n- Altura do encosto (cm): 89CM \n- Largura do Assento: Interna: 32CM, Externa: 51cm\n- Materiais: Estofamento em tecido sintético PU e Estrutura Metálica\n- Peso suportado: 150kg\n\nPor apenas *R$1.290,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    //},

    //R$1.390,00
    //{
      //title: "(CA0055) CADEIRA GAMER PCYES MAD RACER V8 TURBO AMARELA",
      //image: "CA0055.png",
      //text: "*CADEIRA GAMER PCYES MAD RACER V8 TURBO AMARELA*\n\nEspecificações: \n- Altura do encosto (cm): 89CM \n- Largura do Assento: Interna: 37CM, Externa: 58cm\n- Materiais: Estofamento em tecido sintético PU e Estrutura Metálica\n- Peso suportado: 120kg\n\nPor apenas *R$1.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    //},

    //R$1.390,00
    {
      title: "(CA0026) CADEIRA GAMER DRAXEN DN1 RGB",
      image: "CA0026.png",
      text: "*CADEIRA GAMER DRAXEN DN1 RGB*\n\nEspecificações: \n- Altura do encosto (cm): 84CM \n- Largura do Assento: 52CM\n- Materiais: Estofamento em tecido sintético PU e Estrutura Metálica\n- Peso suportado: 150kg\n\nPor apenas *R$1.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$1.490,00
    //{
      //title: "(CA0065) CADEIRA GAMER PCYES SENTINEL, RED MAGMA",
      //image: "CA0065.png",
      //text: "*CADEIRA GAMER PCYES SENTINEL, RED MAGMA*\n\nEspecificações: \n- Altura do encosto (cm): 87CM \n- Largura do Assento: 56CM\n- Materiais: PU (couro sintetico) + tecido mesh E estrutura de ferro + espuma injetada D45\n- Peso suportado: 150kg\n\nPor apenas *R$1.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    //},

    //R$1.490,00
    {
      title: "(CA0056) CADEIRA GAMER PCYES SENTINEL, MINT GREEN",
      image: "CA0056.png",
      text: "*CADEIRA GAMER PCYES SENTINEL, MINT GREEN*\n\nEspecificações: \n- Altura do encosto (cm): 87CM \n- Largura do Assento: 56CM\n- Materiais: PU (couro sintetico) + tecido mesh E estrutura de ferro + espuma injetada D45\n- Peso suportado: 150kg\n\nPor apenas *R$1.490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
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
