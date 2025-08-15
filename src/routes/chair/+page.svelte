<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    {
      title: "(CA0057) CADEIRA GAMER DUEX PRETO",
      image: "CA0057.png",
      text: "*CADEIRA GAMER DUEX PRETO - DX9025BK*\nDecrição: A cadeira Spectrum DX9025BK oferece design sofisticado e conforto máximo. Com encosto de 69 cm e assento de 50 cm, possui apoio de braço ajustável (63-73 cm) e acolchoado. Feita de tecido com espuma de alta densidade, base de nylon e rodas de 50 mm, é regulável em altura e suporta até 120 kg, ideal para uso diário.\n\nEspecificações: \n- Largura do encosto: 50,5 cm\n- Largura de apoio de braço: 64,0 cm\n- Materiais: Tecido, espuma de alta densidade no encosto e no assento\n- Peso suportado: 120kg",
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
