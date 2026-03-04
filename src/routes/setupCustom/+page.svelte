<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte"

  const products = [
    // R$5.280,00
    {
     title: "(PC00) SETUP ROSA",
     image: "SETUPROSA.png",
     text: "*Máquina ideal para Jogos como:*\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🚔 GTA 5/RP\n🔫 VALORANT\n\n*Processador:* RYZEN 3 3200G\n*Placa Mãe:* A520 REVENGER\n*Memória RAM:* 8GB DDR4\n*Armazenamento:* SSD 480GB\n*Fonte:* 500W\n*Gabinete:* MYMAX TAURUS ROSA\n\n+ MONITOR 21.5 ROSA MYMAX \n+ TECLADO MECANICO ROSA DAZZ ORION \n+ MOUSE REDRAGON LULUCA \n+ HEADSET REDRAGON LULUCA \n+ MOUSEPAD REDRAGON LULUCA\n+ SUPORTE HEADSET REDRAGON SCEPTER\n+ CADEIRA GAMER ROSA DUEX \n\nPOR APENAS *R$ 5.280,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$5.840,00
    {
     title: "(PC01) SETUP BRANCO",
     image: "SETUPBRANCO.png",
     text: "*Máquina ideal para Jogos como:*\n🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🚗 FORZA HORIZON\n🔫 VALORANT\n🔫 CS2\n🦙 FORTNITE\n\n*Processador:* I5-11500 (11° GEN)\n*Placa Mãe:* LGA 1200 GIGABYTE\n*Memória RAM:* 2x8GB(16GB)\n*Cooler:* Air Cooler\n*Armazenamento:* NVME 256GB\n*Gabinete:* GAMDIAS AURA BRANCO C/3 FANS RGB\n*Fonte:* 500W\n\n+ KIT GAMER EVOLUT (TECLADO, MOUSE, HEADSET)\n+ MOUSEPAD RGB DRAXEN 35X40 \n+ SUPORTE DE HEADSET REDRAGON SCEPTER \n+ MONITOR 24'POL OFFICE BLUECASE\n+ CADEIRA GAMER PCYES CONFORT KALAHARI  \n\n*R$ 5.840,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n*PROPOSTA VÁLIDA POR 48 HORAS, SUJEITA A ALTERAÇÃO DE VALOR*",
    },

    // R$10.780,00
    {
     title: "(PC02) SETUP AMARELO",
     image: "SETUPAMARELO.png",
     text: "*Máquina ideal para:*\n🚔 GTA 5/RP\n💥 LEAGUE OF LEGENDS\n⚽ EA FC 26\n🔫 VALORANT\n🔫 CS2\n🦙 FORTNITE\n\n*Processador:* RYZEN 5 5600GT\n*Placa Mãe:* B550M ASUS TUF GAMING\n*Memória RAM:* 2X8GB (16GB) DDR4 HIKSEMI FUTURE RGB\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 512GB\n*Fonte:* 500W 80PLUS DUEX\n*Gabinete:* DELTA HYPERION\n\n+ MONITOR KALKAN FENRYR 144HZ 27'POL \n+ MOUSE REDRAGON KING PRO WORLD OF WARCRAFT \n+ TECLADO MECANICO REDRAGON WORLD OF WARCRAFT \n+ MOUSEPAD REDRAGON HARRY POTTER 90X40\n+ CADEIRA GAMER PCYES RACER V8 AMARELA \n\nPOR APENAS *R$ 10.780,00* em até 10x sem juros!\n\nFormas de Pagamento:\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    // R$11.190,00
    {
     title: "(PC03) SETUP BRANCO AQUARIO",
     image: "SETUPAQUARIOBCO.png",
     text: "*Máquina ideal para:*\n💥 FREE FIRE\n⚽ EA FC 26\n🔫 VALORANT\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 7 5700G\n*Placa Mãe:* B550ZGS DUEX\n*Memória RAM:* 2x8(16GB) 3200MHZ XPG BRANCA DDR4\n*Cooler:* PCYES FROST PULSE ARGB WHITE GHOST\n*Placa de Vídeo:* RTX 5050 8GB\n*Armazenamento:* SSD NVME 500GB PRODRIVE\n*Gabinete:* 'AQUARIO' BLUECASE C/5 FANS RGB\n*Fonte:* 500W FORTREK BRANCA\n\n+ MONITOR BLUECASE ERAS 23.8'POL 100HZ CURVO BRANCO\n+ TECLADO MECANICO FORTREK GRAVITY 100 BRANCO \n+ MOUSE FORTREK STRIKER BRANCO \n+ MOUSEPAD PCYES BRANCO 90X40 \n+ HEADSET REDRAGON CADMUS BRANCO\n\nPOR APENAS *R$ 11.190,00* em até 10x sem juros!\n\nFormas de Pagamento:\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    // R$13.230,00
    {
     title: "(PC04) SETUP DDR5 INTEL I7",
     image: "SETUPDDR5INTELI7.png",
     text: "*Máquina ideal para:*\n💥 FREE FIRE\n⚽ EA FC 26\n🔫 VALORANT\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* I7-12700F (12ª Geração)\n*Placa Mãe:* B760M MSI\n*Memória RAM:* 16GB DDR5 RISE MODE\n*Placa de Vídeo:* GAINWARD RTX 5060 8GB\n*Water Cooler:* KALKAN ALPHA 360MM PRETO\n*Armazenamento:* SSD NVME 500GB\n*Gabinete:* KALKAN ALFERN\n*Fonte:* TAICON 700W 80PLUS\n\n+ MONITOR 24.5'POL 180HZ GRASEP\n+ TECLADO MECANICO FORTREK GRAVITY 80%\n+ MOUSE REDRAGON COBRA FPS \n+ MOUSEPAD FORTREK 80X30 \n\nPOR APENAS *R$ 13.230,00* em até 10x sem juros!\n\nFormas de Pagamento:\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    // R$21.390,00
    {
     title: "(PC05) SETUP VERDE",
     image: "SETUPVERDE.png",
     text: "*Máquina ideal para:*\n💥 FREE FIRE\n⚽ EA FC 26\n🔫 VALORANT\n🚔 GTA 5/RP\n🔫 CS2\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Processador:* RYZEN 5500\n*Placa Mãe:* B550M ASUS TUF GAMING\n*Cooler:* WATER COOLER 360MM SEGOTEP\n*Memória RAM:* 2X16GB (32GB) DDR4 BRANCA XPG\n*Placa de Vídeo:* RTX 5050 8GB\n*Armazenamento:* NVME 1TB\n*Fonte:* 700W 80PLUS\n*Gabinete:* DELTA VERDE C/3 FANS\n\n+ MONITOR DUEX 49'POL ULTRAWIDE 240HZ CURVO \n+ SIMULADOR VOLANTE KALKAN G500 PRO RACING FORCEFEEDBACK \n+ TECLADO MAGNÉTICO REDRAGON KUMARA PRO \n+ MOUSE REDRAGON DEVOURER \n+ HEADSET KALKAN MAGNI \n\nPOR APENAS *R$ 21.390,00* em até 10x sem juros!\n\nFormas de Pagamento:\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },
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
