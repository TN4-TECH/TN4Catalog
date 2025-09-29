<script lang="ts">
  import CopyButton from "$lib/CopyButton.svelte";

  const products = [
    //R$279,99
    {
      title: "(GB0089) GABINETE GAMER EVOLUT LOTUS ROSA - EG816 ",
      image: "GB0089.png",
      text: "*GABINETE GAMER EVOLUT LOTUS ROSA - EG816 *\n\nEspecificações: \n- Marca: EVOLUT\n - Modelo: LOTUS - EG-816\n - Cor: Rosa \n - Materiais: Aço, Plástico \n - Painel lateral: Vidro Temperado \n - Dimensões: 285 x 198 x 280mm\n - Slots: 4 \n- Suporte para fonte de alimentação: Montagem Superior, ATX PS2 \n\nSuporte para placa-mãe: \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$279,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento", 
    },

    //R$279,99
    {
      title: "(GB0146) GABINETE GAMER MYMAX DRAGON, ROSA",
      image: "GB0146.png",
      text: "*GABINETE GAMER MYMAX DRAGON, ROSA*\n\nEspecificações: \n- Marca: MYMAX\n - Modelo:  MCA-DRAGON/PK\n - Cor: Rosa \n - Materiais: Aço, Plástico \n - Painel lateral: Acrílico\n - Dimensões: 22 x 45,4 x 46,7 cm\n - Slots: Não possui\n- Suporte para fonte de alimentação: Montagem Superior, ATX PS2 \n\nSuporte para placa-mãe: \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$279,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento", 
    },

    //R$299,99
    {
      title: "(GB0116) GABINETE GAMER MYMAX TAURUS, ROSA",
      image: "GB0116.png",
      text: "*GABINETE GAMER MYMAX TAURUS, ROSA*\n\nEspecificações: \n- Marca: MYMAX\n - Modelo: TAURUS\n - Cor: Rosa \n - Materiais: Aço, Plástico \n - Painel lateral: Acrílico\n - Dimensões: 45 X. 43 X. 21.7cm\n - Slots: Não possui\n- Suporte para fonte de alimentação: Montagem Superior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$299,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento", 
    },

    //R$340,00
    {
      title: "(GB0075) GABINETE FORTREK HOLT, BRACO",
      image: "GB0075.png",
      text: "*GABINETE FORTREK HOLT*\n\nEspecificações: \n- Marca: FORTREK\n - Modelo: HOLT\n - Cor: Branco \n - Materiais: ABS + malha preta;\n - Painel lateral: Vidro Temperado \n - Dimensões: 375 x 215 x 439mm\n - Slots: 7 \n- Suporte para fonte de alimentação: Montagem Superior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX\n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$340,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento", 
    },

    //R$389,99
    {
      title: "(GB0115) GABINETE GAMER MYMAX LION ROSA",
      image: "GB0115.png",
      text: "*GABINETE GAMER MYMAX LION ROSA - MCA-LION/PK*\n\nEspecificações: \n- Marca: MYMAX\n - Modelo: LION - MCA-LION/PK\n - Cor: Rosa \n - Materiais: Aço, Plástico \n - Painel lateral: Vidro Temperado \n - Dimensões: 18,5 x 41,5 x 34,2 cm\n - Slots: 7 \n- Suporte para fonte de alimentação: Montagem INFERIOR, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$389,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento", 
    },
    
    //R$339,99
    {
      title: "(GB0139) GABINETE GAMER AEROCOOL SHARD, PRETO",
      image: "GB0139.png",
      text: "*GABINETE GAMER AEROCOOL SHARD*\n\nEspecificações: \n- Marca: AEROCOOL\n - Modelo: Shard RGB - 679890\n - Cor: Preto\n - Materiais: Aço, Plástico \n - Painel lateral: Vidro Temperado \n - Dimensões: 194 x 444 x 423.5mm\n - Slots: 4 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX\n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$399,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },
    
    //R$390,00
    {
      title: "(GB0169) GABINETE GAMER GAMDIAS AURA GC7, PRETO",
      image: "GB0169.png",
      text: "* GABINETE GAMER GAMDIAS AURA GC7*\n\nEspecificações: \n- Marca: GAMDIAS\n - Modelo: AURA GC7 ARGB\n - Cor: Preto\n - Materiais: Aço SPCC, Plástico ABS\n - Painel lateral: Vidro Temperado \n - Dimensões: 350 x 188 x 430 mm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$389,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },
    
    //R$390,00
    {
      title: "(GB0165) GABINETE GAMER AEROCOOL DELTA, PRETO",
      image: "GB0165.png",
      text: "* GABINETE GAMER AEROCOOL DELTA*\n\nEspecificações: \n- Marca: AEROCOOL\n - Modelo: Delta-G-BK-v1\n - Cor: Preto\n - Materiais: SPCC\n - Painel lateral: Vidro Temperado \n - Dimensões: 197 x 431 x 357 mm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$390,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },
    
    //R$399,99
    {
      title: "(GB0114) GABINETE GAMER DRAXEN ITHNAN ARGB, PRETO",
      image: "GB0114.png",
      text: "*GABINETE GAMER DRAXEN ITHNAN ARGB PRETO*\n\nEspecificações: \n- Marca: DRAXEN\n - Modelo: DCA-SM-ITHNAN02/BK\n - Cor: Preto\n - Materiais: Aço, Plástico \n - Painel lateral: Vidro Temperado \n - Dimensões: 215 x 465 x 410 mm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$399,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$419,99
    {
      title: "(GB0171) GABINETE GAMER GAMDIAS AURA GC7 WH, BRANCO",
      image: "GB0171.png",
      text: "*GABINETE GAMER GAMDIAS AURA GC7 WH, BRANCO*\n\nEspecificações: \n- Marca: GAMDIAS\n - Modelo: AURA GC7 WH ARGB\n - Cor: Preto\n - Materiais: Aço SPCC, Plástico ABS\n - Painel lateral: Vidro Temperado \n - Dimensões: 350 x 188 x 430 mm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$419,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$419,99
    {
      title: "(GB0128) GABINETE GAMER HAYOM, PRETO - GB1713",
      image: "GB0128.png",
      text: "*GABINETE GAMER HAYOM, PRETO*\n\nEspecificações: \n- Marca: HAYOM\n - Modelo: GB1713\n - Cor: Preto\n - Materiais: Aço E Plástico\n - Painel lateral: Vidro Temperado \n - Dimensões: 330 x 180 x 425 mm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$419,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$429,99
    {
      title: "(GB0014) GABINETE GAMER HAYOM C/3 FANS, RGB, PRETO - GB1710",
      image: "GB0014.png",
      text: "*GABINETE GAMER HAYOM C/3 FANS, RGB, PRETO - GB1710*\n\nEspecificações: \n- Marca: HAYOM\n - Modelo: GB1710\n - Cor: Preto\n - Materiais: Aço e Plástico\n - Painel lateral: Vidro Temperado \n - Dimensões:  380 x 200 x 460 mm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX\n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$429,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$434,99
    {
      title: "(GB0059) GABINETE GAMER AEROCOOL TRINITY MINI ROSA V1",
      image: "GB0059.png",
      text: "*GABINETE GAMER AEROCOOL TRINITY MINI ROSA V1*\n\nEspecificações: \n- Marca: AEROCOOL\n - Modelo: MINI-G-PK-V1\n - Cor: Rosa\n - Materiais: Aço SPCC, Plástico ABS\n - Painel lateral: Vidro Temperado \n - Dimensões: 44 x 26 x 41 cm\n - Slots: 4 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$434,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$439,90
    {
      title: "(GB0167) GABINETE GAMER AEROCOOL MECHA, PRETO",
      image: "GB0167.png",
      text: "*GABINETE GAMER AEROCOOL MECHA*\n\nEspecificações: \n- Marca: AEROCOOL\n - Modelo: MECHA RGB - 72998\n - Cor: Preto\n - Materiais: Aço e Plástico \n - Painel lateral: Vidro Temperado \n - Dimensões: 200 x 430 x 305mm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \N - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$439,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$449,99
    {
      title: "(GB0036) GABINETE GAMER FORTREK BLACK HAWK, PRETO",
      image: "GB0036.png",
      text: "*GABINETE GAMER FORTREK BLACK HAWK*\n\nEspecificações: \n- Marca: FORTREK\n - Modelo: BLACK HAWK\n - Cor: Preto\n - Materiais: Aço, Plástico \n - Painel lateral: Vidro Temperado \n - Dimensões: 375 x 215 x 439mm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$449,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },
      
    //R$479,99
    {
      title: "(GB0148) GABINETE GAMER KALKAN MUSPEL, PRETO",
      image: "GB0148.png",
      text: "*GABINETE GAMER KALKAN MUSPEL*\n\nEspecificações: \n- Marca: KALKAN\n - Modelo: MUSPEL\n - Cor: Preto\n - Materiais: Aço, Plástico \n - Painel lateral: Vidro Temperado \n - Dimensões: 305 x 435 x 192 mm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$479,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$490,00
    {
      title: "(GB0163)  GABINETE GAMER VINIK G-CUBE, PRETO, 'AQUARIO'",
      image: "GB0163.png",
      text: "* GABINETE GAMER VINIK G-CUBE, PRETO*\n\nEspecificações: \n- Marca: VINIK\n - Modelo:   GGGCVBK\n - Cor: Preto\n - Materiais: Aço e Plástico \n - Painel lateral: Vidro Temperado \n - Dimensões: 330 x 275 x 340mm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX\n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$490,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$499,99
    {
      title: "(GB0162) GABINETE GAMER REDRAGON DEFLECT, PRETO",
      image: "GB0162.png",
      text: "*GABINETE GAMER REDRAGON DEFLECT*\n\nEspecificações: \n- Marca: REDRAGON\n - Modelo: CRUISER\n - Cor: Preto\n - Materiais: Aço SPCC \n - Painel lateral: Vidro Temperado \n - Dimensões: 425 x 212 x 470 mm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX\n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$499,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$499,99
    {
      title: "(GB0168) GABINETE FORTREK CRUISER, BRANCO",
      image: "GB0168.png",
      text: "*GABINETE FORTREK CRUISER, BRANCO*\n\nEspecificações: \n- Marca: FORTREK\n - Modelo: CA-609B\n - Cor: Preto\n - Materiais: ABS + malha preta; \n - Painel lateral: Vidro Temperado \n - Dimensões:375 x 215 x 439mm\n - Slots: 4 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX\n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$499,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$535,99
    {
      title: "(GB0060) GABINETE GAMER AEROCOOL AERO ONE MINI BR, PRETO",
      image: "GB0060.png",
      text: "*GABINETE GAMER AERO ONE MINI BR*\n\nEspecificações: \n- Marca: AEROCOOL \n - Modelo: TRINITY MINI\n - Cor: Preto\n - Materiais: ABS + malha preta; \n - Painel lateral: Vidro Temperado \n - Dimensões:375 x 215 x 439mm\n - Slots: 4 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX\n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$499,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$539,99
    {
      title: "(GB0160) GABINETE GAMER COOLER MASTER MASTERBOX Q300L, PRETO",
      image: "GB0160.png",
      text: "*GABINETE GAMER COOLER MASTER MASTERBOX Q300L*\n\nEspecificações: \n- Marca: Cooler Master \n - Modelo: MCB-Q300L-KANN-S00 \n - Cor: Preto \n - Materiais: Aço, Plástico \n - Painel lateral: Acrílico \n - Dimensões: 387 x 230 x 378 mm \n - Slots: 4 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$539,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },
    

    //R$549,99
    {
      title: "(GB0173) GABINETE GAMER DRAXEN THALATHA ARGB, BRANCO",
      image: "GB0173.png",
      text: "*GABINETE GAMER DRAXEN THALATHA ARGB BRANCO*\n\nEspecificações: \n- Marca: DRAXEN\n - Modelo: DCA-SM-THALA5/WH\n - Cor: Branco\n - Materiais: Aço, Plástico \n - Painel lateral: Vidro Temperado \n - Dimensões: 495 x 210 x 485 mm\n - Slots: 8 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$549,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$549,99
    {
      title: "(GB0117) GABINETE GAMER DRAXEN THALATHA ARGB, PRETO",
      image: "GB0117.png",
      text: "*GABINETE GAMER DRAXEN THALATHA ARGB BRANCO*\n\nEspecificações: \n- Marca: DRAXEN\n - Modelo: DCA-SM-THALA5/BK\n - Cor: Preto\n - Materiais: Aço, Plástico \n - Painel lateral: Vidro Temperado \n - Dimensões: 495 x 210 x 485 mm\n - Slots: 8 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$549,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$569,99
    {
      title: "(GB0007) GABINETE REDRAGON AEROGLASS, PRETO",
      image: "GB0007.png",
      text: "*GABINETE REDRAGON AEROGLASS*\n\nEspecificações: \n- Marca: Redragon\n - Modelo: CA-602B\n - Cor: Preto\n - Materiais: Aço SGCC e Painel de Mesh \n - Painel lateral: Vidro Temperado \n - Dimensões: 525mm x 290 mm x 525 mm \n - Slots: 7 + 2 verticais \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX \n - Micro-ATX\n - Mini-ITX \n - E-ATX \n\nPor apenas *R$569,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$589,99
    {
      title: "(GB0145) GABINETE GAMER THERMALTAKE S100TG, PRETO",
      image: "GB0145.png",
      text: "*GABINETE GAMER THERMALTAKE S100TG*\n\nEspecificações: \n- Marca: THERMALTAKE\n - Modelo: CA-3Q9-60S1WZ-00\n - Cor: Preto\n - Materiais: Aço, Plástico \n - Painel lateral: Vidro Temperado \n - Dimensões: 411 x 220 x 441 mm\n - Slots: 4 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$589,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$599,99
    {
      title: "(GB0149) GABINETE GAMER PCYES FORCEFIELD TWR WHITE GHOST, BRANCO",
      image: "GB0149.png",
      text: "*GABINETE GAMER PCYES FORCEFIELD TWR WHITE GHOST, BRANCO*\n\nEspecificações: \n- Marca: PCYES\n - Modelo: GFFTWRWG\n - Cor: Branco\n - Materiais: Vidro Temperado Frontal, Aço \n - Painel lateral: Vidro Temperado \n - Dimensões: 395 x 228 x 415mm\n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$599,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$599,99
    {
      title: "(GB0153) GABINETE AQUARIO EVOLUT MIZU, BRANCO",
      image: "GB0153.png",
      text: "*GABINETE AQUÁRIO EVOLUT MIZU, BRANCO*\n\nEspecificações: \n- Marca: EVOLUT\n - Modelo: EG824\n - Cor: Branco\n - Materiais: Vidro Temperado Frontal, Aço \n - Painel lateral: Vidro Temperado \n - Dimensões: 33,9 x 27,6 x 33 cm\n - Slots: 4 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$599,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$690,00
    {
      title: "(GB0151) GABINETE GAMER PCYES FORCEFIELD 'AQUARIO' MAX BLACK VULCAN, PRETO",
      image: "GB0151.png",
      text: "*GABINETE GAMER PCYES FORCEFIELD 'AQUARIO' MAX BLACK VULCAN, PRETO*\n\nEspecificações: \n- Marca: PCYES\n - Modelo:  GFFMAXBV - BLACK VULCAN \n - Cor: Preto\n - Materiais: Vidro Temperado Frontal, Aço \n - Painel lateral: Vidro Temperado \n - Dimensões: 33,9 x 27,6 x 33 cm\n - Slots: 4 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$690,00
    {
      title: "(GB0143) GABINETE GAMER PCYES FORCEFIELD 'AQUARIO 'MAX WHITE GHOST, BRANCO",
      image: "GB0143.png",
      text: "*GABINETE GAMER PCYES FORCEFIELD 'AQUARIO 'MAX WHITE GHOST, BRANCO*\n\nEspecificações: \n- Marca: PCYES\n - Modelo: GFFMAXWG \n - Cor: Branco\n - Materiais: Vidro Temperado Frontal, Aço \n - Painel lateral: Vidro Temperado \n - Dimensões:  425x280x435mm;\n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX\n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$690,00* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$690,00
    {
      title: "(GB0161)  GABINETE GAMER REDRAGON EDGE, PRETO, S/FANS, MID TOWER, ATX",
      image: "GB0161.png",
      text: "* GABINETE GAMER REDRAGON EDGE, PRETO, S/FANS, MID TOWER, ATX*\n\nEspecificações: \n- Marca: REDRAGON\n - Modelo:  CA-608B\n - Cor: Preto\n - Materiais: SPCC, Aço \n - Painel lateral: Vidro Temperado \n - Dimensões:  440 x 238 x 495mm;\n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - ATX\n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$749,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$000,00
    {
      title: "(GB0166) GABINETE GAMER AEROCOOL CYLON, BRANCO",
      image: "GB0166.png",
      text: "*GABINETE GAMER AEROCOOL CYLON, BRANCO*\n\nEspecificações: \n- Marca: AEROCOOL\n - Modelo: Cylon RGB - 67630\n - Cor: Branco\n - Materiais: Vidro Temperado Frontal, Aço \n - Painel lateral: Vidro Temperado \n - Dimensões: 45,9 x 19,8 x 41,3 cm\n - Slots: 7 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \N - ATX \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$000,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },

    //R$000,00
    {
      title: "(GB0164)  GABINETE GAMER AEROCOOL TRINITY MINI BRANCO V1",
      image: "GB0164.png",
      text: "* GABINETE GAMER AEROCOOL TRINITY MINI BRANCO V1*\n\nEspecificações: \n- Marca: AEROCOOL\n - Modelo:  MINI-G-WH-V1\n - Cor: Branco\n - Materiais: Aço e SPCC \n - Painel lateral: Vidro Temperado \n - Dimensões: 44 x 26 x 41 cm\n - Slots: 4 \n- Suporte para fonte de alimentação: montagem inferior, ATX PS2 \n\nSuporte para placa-mãe: \n - Micro-ATX\n - Mini-ITX \n\nPor apenas *R$000,99* em até 10x sem juros!\n\n*Formas de Pagamento:*\n💳 Cartão - Débito à vista ou Crédito em até 10x *SEM JUROS*\n❖ Pix á Vista\n❌ NÃO aceitamos pagamento via boleto bancário\n❌ NÃO geramos link de pagamento",
    },
  ];

  const filterOptions = ["Branco", "Rosa", "Aquario", "Preto"];
  let selectedFilter: string | null = null;

  $: filteredProducts = !selectedFilter
    ? products
    : products.filter((product) =>
        product.title.toLowerCase().includes(selectedFilter!.toLowerCase())
      );

  function copyToClipboard(product: { text: string }) {
    navigator.clipboard.writeText(product.text);
  }
</script>

<div class="p-8">
  <a href="/"> ⬅ Home</a>
  <h1 class="text-xl font-bold mb-4">🗄 GABINETES GAMER</h1>

  <div class="mb-4 flex items-center space-x-4">
    <span class="font-semibold">Filtros:</span>
    {#each filterOptions as filter}
      <label class="flex items-center space-x-2 cursor-pointer">
        <input type="radio" bind:group={selectedFilter} name="color-filter" value={filter} />
        <span>{filter}</span>
      </label>
    {/each}
    {#if selectedFilter}
      <button on:click={() => selectedFilter = null} class="text-sm text-blue-500 hover:underline">Limpar</button>
    {/if}
  </div>

  <div class="grid grid-cols-4 gap-8">
    {#each filteredProducts as product, index}
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
