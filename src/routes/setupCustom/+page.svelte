<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte"

  const products = [
    // R$3.890,00
    {
      title: "Nº1 - () SETUP GAMER PINK - RYZE 4600G",
      image: "Pink.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 CSGO 2\n🔫 WARZONE(GRÁFICOS Médios/Baixos)\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 4600G\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:* VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER C/ 1FAN RGB\n*Fonte:* 500W\n+ 🖥️ Monitor de 21,5' Pol.\n+ Kit Gamer Rosa(Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$ 3.890,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },

    // R$4.190,00
    {
      title: "Nº2 - () SETUP KIDS - RYZEN 5600G",
      image: "BRANCOALA.png",
      text: "*Setup ideal para Jogos como:* \n 💥 LEAGUE OF LEGENDS\n🌎 MINECRAFT\n🟥 ROBLOX\n🔫 VALORANT\n🔫 CSGO 2\n🔫 WARZONE (GRÁFICOS Médio/Baixos)\n🦙 FORTNITE\n\n*Placa Mãe:* A520\n*Processador:* RYZEN 5 5600G\n*Memória RAM:* 2x8GB(16GB) DDR4\n*Placa de Vídeo:*  VEGA 7 (INTEGRADO)\n*Armazenamento:* SSD 240GB\n*Gabinete:* GAMER C/ 4FANS RGB\n*Fonte:* 500W\n+ 🖥️ Monitor de 21,5' Pol.\n+ Kit Gamer (Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$ 4.190,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },

    // R$8.090,00
    {
      title: "Nº3 - (PC0047) SETUP WHITE Ryzen 5600 + RTX 3050 GALAX 6GB",
      image: "PC0047.png",
      text: "*Setup ideal para Jogos como:*\n🚘FORZA HORIZON\n🚔 GTA 5/RP\n🔫 WARZONE/BLACK OPS 6\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n\n*Placa Mãe:* DUEX B550ZGS\n*Processador:* RYZEN 5 5600\n*Memória RAM:* 2x8GB DDR4 3200Mhz PCYES UDIMM BRANCA\n*Water Cooler* PCYES SANGE FRIO3 BRANCO 120mm\n*Placa de Vídeo:* RX 580 8GB WHITE\n*Armazenamento:* SSD NVME 512GB\n *Water Cooler:* PCYES SANGE FRIO3 BRANCO 120mm\n*Gabinete:* AEROCOOL AERO ONE BRANCO\n*Fonte:* 500W BRANCA\n+ 🖥️ MONITOR BLUECASE ERAS  23,8' Pol. 100Hz BRANCO CURVO\n+ Kit Gamer EVOLUT LUMINI (Teclado, Mouse, Mousepad e Headset)\n\nPOR APENAS *R$ 8.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },

    // R$8.390,00
    {
      title: "Nº4 - (PC0068) SETUP i5 de 10º(10400F) + RTX 3050 E GABINETE STORM-Z",
      image: "PC0068.png",
      text: "*Setup ideal para Jogos como:*\n🚔 GTA 5/RP\n\n🔫 CSGO 2\VALORANT\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Placa Mãe:* B560-PRO MSI(LGA 1200)\n*Processador:* I5-10400F(10º GERAÇÃO)\n*Memória RAM:* 2x8GB DDR4 FURY BEAST 3200MHZ *(16GB)*\n*Placa de Vídeo:* RTX 3050 GALAX 6GB\n*Armazenamento:* SSD 480GB\n *AIR Cooler:* REVENGE DUAL FAN RGB \n*Gabinete:* STORM-Z SHARP\n*Fonte:* 500W PFV ATIVO\n+ 🖥️ Monitor  Duex 32' 75hz PLANO Borda Infinita\n+ Kit Mecânico Knup (Teclado Mecânico Switch Azul, Mouse 4800DPI, Headset KP-359, Mousepad XL)\n\nPOR APENAS *R$ 8.390,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },

     // R$10.690,00
     {
      title: "Nº5 - (PC0067) SETUP i5-12400F(12º Gen) + RTX 4060 E GABINETE AQUÁRIO",
      image: "PC0067.png",
      text: "*Setup ideal para Jogos como:*\n🚘FORZA HORIZON\n🚔 GTA 5/RP\n🔫 CSGO 2\VALORANT\n🦙 FORTNITE\n🐎Red Dead Redemption 2\n🗡Elden Ring\n\n*Placa Mãe:* ASROCK B660M PHANTOM\n*Processador:* I5-12400F(10º GEN)\n*Memória RAM:* 2x8GB DDR4 FURY BEAST 3200MHZ *(16GB)*\n*Placa de Vídeo:* RTX 4060 8GB INNO3D 1X COMPACT\n*Armazenamento:* SSD 480GB\n*Gabinete:* GAMER AQUÁRIO C/4 FANS RGB\n*Fonte:* 700W 80PLUS\n+ 🖥️ Monitor  PRIMETEK ULTRAWIDE 30' POL, 200HZ\n+ Kit Mecânico PRO DRAXEN (Teclado Mecânico DN201, Mouse DN60, Headset DN103, Mousepad XL)\n\nPOR APENAS *R$10.690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
    },

    // R$13.990,00
    {
      title: "Nº5 - (PC0011) SETUP RYZEN 5500, 32GB DE RAM DDR4, RTX 3060 TI + KIT PERIFÉRICO STREAMER",
      image: "PC0011.png",
      text: "*Setup ideal para Jogos como:*\n🚔 GTA 5/RP\n🔫 CSGO 2\VALORANT\n🦙 FORTNITE\n🐎 Red Dead Redemption 2\n🗡 Elden Ring\n\n*Placa Mãe:* ASUS B450M TUF GAMING\n*Processador:* RYZEN 5 5500\n*Memória RAM:* 2x16 REDRAGON SOLAR RGB*(32GB)*\n*Water Cooler* PCYES VISION 240MM C/ VISOR LCD\n*Placa de Vídeo:* RTX 3060TI 3X RGB 8GB\n*Armazenamento:* SSD NVME M.2 500GB\n*Gabinete:* NZXT C/ 2FANS BLACK\n*Fonte:* 700W 80PLUS\n+ Placa PCI-E 2xUSB 3.0\n\n + 🖥️ MONITOR GRASEP GAMER 23,8' 180Hz & MONITOR VX PRO 21,5' 75HZ\n+ SUPORTE P/2 MONITORES MANUAL\n + TECLADO REDRAGON SINDRI\n + MOUSE REDRAGON CENTROPHORUS 2\n + HEADSET REDRAGON CARMEN\n + MOUSEPAD FORTREK SPEED XL\n + MICROFONE REDRAGON BLAZAR\n + WEB CAM PCYES RAZA 1080p \n\nPOR APENAS *R$13.990,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento\n\n"
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
