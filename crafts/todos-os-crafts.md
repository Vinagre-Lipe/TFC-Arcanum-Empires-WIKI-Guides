# ⚒️ Todos os Crafts do Modpack (Catálogo Geral)

> Aqui você encontra **todos os crafts customizados, conversões e receitas exclusivas** do **TFC: Arcanum & Empires** reunidos em uma única página para consulta rápida (use `Ctrl + F` ou a barra de pesquisa no topo esquerdo para filtrar qualquer item ou ID).

---

## 📑 Índice Rápido por Categoria

1. [🏺 Cerâmica Arcana, Knapping & Queima (Pit Kiln)](#1-cerâmica-arcana-knapping--queima-pit-kiln)
2. [✨ Magia, Grimórios & Pilões de Proteção](#2-magia-grimórios--pilões-de-proteção)
3. [🔥 Sobrevivência, Fogo & Qualidade de Vida (QoL)](#3-sobrevivência-fogo--qualidade-de-vida-qol)
4. [🪓 Carpintaria Rústica com Machado (20 Madeiras TFC)](#4-carpintaria-rústica-com-machado-20-madeiras-tfc)
5. [🔪 Couro, Fibras, Britagem com Martelo & Moagem](#5-couro-fibras-britagem-com-martelo--moagem)
6. [🏺 Moldes de Cerâmica na Bancada (Sem Knapping)](#6-moldes-de-cerâmica-na-bancada-sem-knapping)
7. [📦 Armazenamento & Mochilas (Tom's Storage & Sophisticated Backpacks)](#7-armazenamento--mochilas-toms-storage--sophisticated-backpacks)
8. [⚙️ Automação & Farms (Mob Grinding Utils)](#8-automação--farms-mob-grinding-utils)
9. [🐉 Dragões (Wyrmroost) & Sigilos (Apotheosis)](#9-dragões-wyrmroost--sigilos-apotheosis)
10. [🍲 Culinária, Pesca, Salga & Apicultura (Farmer's Delight, Aquaculture, Naturalist)](#10-culinária-pesca-salga--apicultura-farmers-delight-aquaculture-naturalist)
11. [🏰 Ponte TFC → Millénaire (Blocos para Construtores)](#11-ponte-tfc--millénaire-blocos-para-construtores)
12. [🔄 Conversões Vanilla → TFC (Loot de Dungeons)](#12-conversões-vanilla--tfc-loot-de-dungeons)
13. [🌌 Endgame Supremo & Chaos Guardian (Ato VI)](#13-endgame-supremo--chaos-guardian-ato-vi)
14. [🚫 Receitas Desativadas / Removidas (Anti-Exploit)](#14-receitas-desativadas--removidas-anti-exploit)

---

## 1. Cerâmica Arcana, Knapping & Queima (Pit Kiln)

| Resultado | ID do Item | Tipo de Craft | Ingredientes / Padrão 5×5 | Observações |
|---|---|---|---|---|
| **Catalisador Arcano Cru** | `tfc_arcanum:unfired_arcane_catalyst` | Clay Knapping (5 argilas) | `' ### '`<br>`'#   #'`<br>`'# # #'`<br>`'#   #'`<br>`' ### '` | Desenho de anel com ponto no centro |
| **Núcleo de Pilão Cru** | `tfc_arcanum:unfired_pylon_core` | Clay Knapping (5 argilas) | `'  #  '`<br>`' ### '`<br>`'#####'`<br>`' ### '`<br>`'  #  '` | Desenho de losango preenchido |
| **Catalisador Arcano Cerâmico** | `tfc_arcanum:fired_arcane_catalyst` | Queima (Heating / Pit Kiln) | `tfc_arcanum:unfired_arcane_catalyst` | Atingir **1099 °C** no Pit Kiln |
| **Núcleo de Pilão Cerâmico** | `tfc_arcanum:fired_pylon_core` | Queima (Heating / Pit Kiln) | `tfc_arcanum:unfired_pylon_core` | Atingir **1099 °C** no Pit Kiln |

---

## 2. Magia, Grimórios & Pilões de Proteção

| Resultado | ID do Item | Tipo | Ingredientes / Padrão 3×3 | Observações |
|---|---|---|---|---|
| **Livro de Feitiços Novato** | `ars_nouveau:novice_spell_book` | Shaped | `' C '`, `'KBL'`, `' F '`<br>• **C** = Catalisador Arcano Cerâmico (`tfc_arcanum:fired_arcane_catalyst`)<br>• **K** = Qualquer Faca TFC (`#tfc:knives`)<br>• **B** = Livro e Pena (`minecraft:writable_book`)<br>• **L** = Couro (`#c:leathers`)<br>• **F** = Qualquer Machado TFC (`#tfc:axes`) | Substitui a receita original do Ars Nouveau |
| **Pilão de Expulsão (Tier 1)** | `pylons:expulsion_pylon` | Shaped | `'RRR'`, `'CPC'`, `'SSS'`<br>• **R** = Pedregulho (`#c:cobblestones`)<br>• **C** = Catalisador Arcano Cerâmico<br>• **P** = Núcleo de Pilão Cerâmico (`tfc_arcanum:fired_pylon_core`)<br>• **S** = Pedra Bruta (`#c:stones`) | Protege sua base contra spawns e invasões |
| **Pilão de Infusão (Supremo)** | `pylons:infusion_pylon` | Shaped | `'CSC'`, `'BDB'`, `'SSS'`<br>• **C** = Estilhaço do Caos (`draconicevolution:chaos_shard`)<br>• **D** = Coração de Dragão (`draconicevolution:dragon_heart`)<br>• **B** = Lingote de Ignitium (`cataclysm:ignitium_ingot`)<br>• **S** = Bloco de Aço Negro (`tfc:metal/block/black_steel`) | Pilão definitivo do Ato VI |
| **Guia Arcanum (Patchouli)** | `patchouli:guide_book` | Shapeless | 1× Pedra Solta (`#tfc:rock/loose`) + 1× Graveto (`#c:rods/wooden`) | Caso perca o guia inicial |

---

## 3. Sobrevivência, Fogo & Qualidade de Vida (QoL)

| Resultado | ID do Item | Tipo | Ingredientes / Padrão | Observações |
|---|---|---|---|---|
| **Acendedor (Firestarter)** | `tfc:firestarter` | Shapeless | 2× Gravetos (`#c:rods/wooden`) | Funciona em qualquer posição da grade |
| **Fogueira TFC (Shaped)** | `tfc:firepit` | Shaped | `' S '`, `'SLS'`, `' K '`<br>• **S** = Graveto (`#c:rods/wooden`)<br>• **L** = Tora de Madeira (`#minecraft:logs`)<br>• **K** = Palha/Graveto seco (`#tfc:firepit_kindling`) | Alternativa rápida na bancada |
| **Fogueira TFC (Shapeless)** | `tfc:firepit` | Shapeless | 1× Tora (`#minecraft:logs`) + 3× Gravetos (`#c:rods/wooden`) + 1× Kindling (`#tfc:firepit_kindling`) | Sem precisar jogar itens no chão |
| **Fogueira Vanilla (Carvão)** | `minecraft:campfire` | Shaped | `' S '`, `'SCS'`, `'LLL'`<br>• **S** = Graveto, **C** = Carvão (`#minecraft:coals`), **L** = Tora | |
| **Fogueira Vanilla (Palha)** | `minecraft:campfire` | Shaped | `' S '`, `'SKS'`, `'LLL'`<br>• **S** = Graveto, **K** = Palha (`#tfc:firepit_kindling`), **L** = Tora | |

---

## 4. Carpintaria Rústica com Machado (20 Madeiras TFC)

> [!TIP]
> Válido para todas as **20 madeiras do TFC**: `acacia`, `ash`, `aspen`, `birch`, `blackwood`, `chestnut`, `douglas_fir`, `hickory`, `kapok`, `mangrove`, `maple`, `oak`, `palm`, `pine`, `rosewood`, `sequoia`, `spruce`, `sycamore`, `white_cedar`, `willow`. O machado (`#c:tools/axe`) apenas gasta durabilidade.

| Resultado | ID do Item | Tipo | Ingredientes / Padrão | Observações |
|---|---|---|---|---|
| **2× Tábuas (Lumber)** | `tfc:wood/lumber/<madeira>` | Shapeless | 1× Tora (`tfc:wood/log/<madeira>`) + Machado (`#c:tools/axe`) | Permite fazer tábuas antes de ter serra de metal (serra rende 8×) |
| **1× Viga de Suporte** | `tfc:wood/support/<madeira>` | Shapeless | 1× Tora (`tfc:wood/log/<madeira>`) + Machado | Essencial para escorar cavernas contra desmoronamento |
| **Baú de Madeira TFC** | `tfc:wood/chest/<madeira>` | Shaped | `'LLL'`, `'LAL'`, `'LLL'` (8× Tábuas + Machado no centro) | |
| **Barril TFC** | `tfc:wood/barrel/<madeira>` | Shaped | `'L L'`, `'LAL'`, `'LLL'` (7× Tábuas + Machado no centro) | |
| **Bancada de Trabalho TFC** | `tfc:wood/workbench/<madeira>` | Shaped (2×2) | `'LL'`, `'AL'` (3× Tábuas + Machado) | |
| **Porta de Madeira TFC** | `tfc:wood/door/<madeira>` | Shaped | `'LL'`, `'LL'`, `'LA'` (5× Tábuas + Machado) | Rende 1 porta |
| **Alçapão TFC** | `tfc:wood/trapdoor/<madeira>` | Shaped | `'LLL'`, `' A '` (3× Tábuas + Machado) | |
| **Barco TFC** | `tfc:wood/boat/<madeira>` | Shaped | `'L L'`, `'LAL'`, `' L '` (4× Tábuas + Machado) | |

---

## 5. Couro, Fibras, Britagem com Martelo & Moagem

| Resultado | ID do Item | Tipo | Ingredientes | Observações |
|---|---|---|---|---|
| **Linha (String)** | `minecraft:string` | Shapeless | 3× Palha (`tfc:straw`) + Faca (`#tfc:knives`) | Faca gasta durabilidade |
| **Corda (Rope)** | `tfc:rope` | Shapeless | 3× Linha (`minecraft:string`) | |
| **Couro Raspado Pequeno** | `tfc:small_scraped_hide` | Shapeless | `tfc:small_raw_hide` + Faca (`#tfc:knives`) | Alternativa rápida na grade |
| **Couro Raspado Médio** | `tfc:medium_scraped_hide` | Shapeless | `tfc:medium_raw_hide` + Faca (`#tfc:knives`) | |
| **Couro Raspado Grande** | `tfc:large_scraped_hide` | Shapeless | `tfc:large_raw_hide` + Faca (`#tfc:knives`) | |
| **1× Couro Vanilla** | `minecraft:leather` | Shapeless | `tfc:small_prepared_hide` + Faca | |
| **2× Couro Vanilla** | `minecraft:leather` | Shapeless | `tfc:medium_prepared_hide` + Faca | |
| **3× Couro Vanilla** | `minecraft:leather` | Shapeless | `tfc:large_prepared_hide` + Faca | |
| **Cascalho (Gravel)** | `minecraft:gravel` | Shapeless | 1× Pedra (`#tfc:rock_knapping`) + Martelo (`#c:tools/hammer`) | Britagem manual |
| **Areia (Sand)** | `minecraft:sand` | Shapeless | 1× Cascalho (`minecraft:gravel`) + Martelo (`#c:tools/hammer`) | |
| **1× Farinha de Grão** | `tfc:food/<grão>_flour` | Shapeless | 1× Grão (`barley`, `maize`, `oat`, `rye`, `rice`, `wheat`) + Martelo | Moagem rústica (Quern rende mais) |

---

## 6. Moldes de Cerâmica na Bancada (Sem Knapping)

| Resultado | ID do Item | Tipo | Ingredientes |
|---|---|---|---|
| **Vaso de Cerâmica Cru** | `tfc:ceramic/unfired_vessel` | Shapeless | 4× Bolas de Argila (`minecraft:clay_ball`) |
| **Pote de Cerâmica Cru** | `tfc:ceramic/unfired_pot` | Shapeless | 3× Bolas de Argila |
| **Molde de Cabeça de Picareta Cru** | `tfc:ceramic/unfired_pickaxe_head_mold` | Shapeless | 2× Bolas de Argila |
| **Molde de Cabeça de Machado Cru** | `tfc:ceramic/unfired_axe_head_mold` | Shapeless | 2× Bolas de Argila + 1× Palha (`tfc:straw`) |
| **Molde de Lâmina de Serra Cru** | `tfc:ceramic/unfired_saw_blade_mold` | Shapeless | 2× Bolas de Argila + 1× Graveto (`#c:rods/wooden`) |
| **Molde de Lâmina de Faca Cru** | `tfc:ceramic/unfired_knife_blade_mold` | Shapeless | 1× Bola de Argila + 1× Graveto (`#c:rods/wooden`) |
| **Molde de Lingote Cru** | `tfc:ceramic/unfired_ingot_mold` | Shapeless | 1× Bola de Argila + 1× Palha (`tfc:straw`) |
| **Molde de Propick Cru** | `tfc:ceramic/unfired_propick_head_mold` | Shapeless | 2× Bolas de Argila + 1× Molde de Lingote Cru |

---

## 7. Armazenamento & Mochilas (Tom's Storage & Sophisticated Backpacks)

| Resultado | ID do Item | Tipo | Ingredientes / Padrão 3×3 |
|---|---|---|---|
| **Conector de Inventário** | `toms_storage:inventory_connector` | Shaped | `'PLP'`, `'CDC'`, `'PEP'`<br>• **P** = Tábua (`#tfc:lumber`)<br>• **L** = Chapa de Ferro Forjado (`tfc:metal/sheet/wrought_iron`)<br>• **C** = Baú (`#c:chests`)<br>• **D** = Comparador de Redstone<br>• **E** = Pérola do Ender |
| **Terminal de Armazenamento** | `toms_storage:storage_terminal` | Shaped | `'PCP'`, `'cGs'`, `'PCP'`<br>• **P** = Tábua (`#tfc:lumber`), **c** = Baú (`#c:chests`), **C** = Comparador<br>• **G** = Chapa de Cobre (`tfc:metal/sheet/copper`)<br>• **s** = Vidro de Lâmpada (`tfc:lamp_glass`) |
| **4× Moldura de Armazenamento (Trim)** | `toms_storage:trim` | Shaped | `' P '`, `'PLP'`, `' P '` (**P** = `#tfc:lumber`, **L** = `#minecraft:logs`) |
| **16× Cabo de Inventário** | `toms_storage:inventory_cable` | Shaped | `'PPP'`, `'R R'`, `'PPP'` (**P** = `#tfc:lumber`, **R** = `#c:rods/wooden`) |
| **Conector de Cabo** | `toms_storage:inventory_cable_connector` | Shapeless | 1× Cabo de Inventário + 1× Chapa de Ferro Forjado |
| **Mochila de Couro (Base)** | `sophisticatedbackpacks:backpack` | Shaped | `'SLS'`, `'LCL'`, `'LLL'`<br>• **S** = Linha/Fibra de Juta (`#c:strings`)<br>• **L** = Couro Grande Preparado (`tfc:large_prepared_hide`)<br>• **C** = Baú (`#c:chests`) |
| **Mochila de Cobre** | `sophisticatedbackpacks:copper_backpack` | Shaped | 8× Chapa de Cobre (`tfc:metal/sheet/copper`) ao redor da Mochila Base |
| **Mochila de Ferro** | `sophisticatedbackpacks:iron_backpack` | Shaped | 8× Chapa de Ferro Forjado (`tfc:metal/sheet/wrought_iron`) ao redor da Mochila de Cobre |
| **Mochila de Ouro** | `sophisticatedbackpacks:gold_backpack` | Shaped | 8× Chapa de Ouro (`tfc:metal/sheet/gold`) ao redor da Mochila de Ferro |
| **Mochila de Diamante (Aço TFC)** | `sophisticatedbackpacks:diamond_backpack` | Shaped | 8× Chapa de Aço (`tfc:metal/sheet/steel`) ao redor da Mochila de Ouro |

---

## 8. Automação & Farms (Mob Grinding Utils)

| Resultado | ID do Item | Tipo | Ingredientes / Padrão 3×3 |
|---|---|---|---|
| **Espetos de Ferro (Spikes)** | `mob_grinding_utils:spikes` | Shaped | `' S '`, `'SIS'`<br>• **S** = Espada de Ferro Forjado (`tfc:metal/sword/wrought_iron`)<br>• **I** = Lingote Duplo de Ferro Forjado (`tfc:metal/double_ingot/wrought_iron`) |
| **Triturador (Mob Masher / Saw)** | `mob_grinding_utils:saw` | Shaped | `'SDS'`, `'VRV'`, `'DID'`<br>• **S** = Espada de Aço (`tfc:metal/sword/steel`)<br>• **D** = Diamante TFC (`tfc:gem/diamond`)<br>• **V** = Espetos (`mob_grinding_utils:spikes`)<br>• **R** = Bloco de Redstone<br>• **I** = Bloco de Aço (`tfc:metal/block/steel`) |
| **Ventilador de Mobs (Fan)** | `mob_grinding_utils:fan` | Shaped | `'SIS'`, `'IRI'`, `'SIS'`<br>• **I** = Chapa de Bronze (`tfc:metal/sheet/bronze`)<br>• **S** = Granito Liso (`tfc:rock/smooth/granite`)<br>• **R** = Bloco de Redstone |
| **Tremonha de Absorção** | `mob_grinding_utils:absorption_hopper` | Shaped | `' E '`, `' O '`, `'OHO'` (**E** = Olho do Ender, **O** = Obsidiana, **H** = Funil) |
| **Cotonete Genético (Mob Swab)** | `mob_grinding_utils:mob_swab` | Shaped | `'  W'`, `' S '`, `'W  '` (**W** = Tecido de Lã `tfc:wool_cloth`, **S** = Graveto) |
| **Ração Amaldiçoada (Cursed Feed)** | `mob_grinding_utils:gm_chicken_feed_cursed` | Shapeless | Semente TFC (`#c:seeds`) + Enxofre (`tfc:powder/sulfur`) + Pólvora + Olho de Aranha + Carne Podre + Osso + Frasco de XP |

---

## 9. Dragões (Wyrmroost) & Sigilos (Apotheosis)

| Resultado | ID do Item | Tipo | Ingredientes / Padrão 3×3 |
|---|---|---|---|
| **Armadura de Dragão de Ferro** | `wyrmroost:iron_dragon_armor` | Shaped | `'X# '`, `'X #'`, `' X '`<br>• **#** = Bloco de Ferro Forjado (`tfc:metal/block/wrought_iron`)<br>• **X** = Chapa de Ferro Forjado (`tfc:metal/sheet/wrought_iron`) |
| **Armadura de Dragão de Ouro** | `wyrmroost:gold_dragon_armor` | Shaped | `'X# '`, `'X #'`, `' X '`<br>• **#** = Bloco de Ouro TFC (`tfc:metal/block/gold`)<br>• **X** = Chapa de Ouro TFC (`tfc:metal/sheet/gold`) |
| **Armadura de Dragão de Diamante** | `wyrmroost:diamond_dragon_armor` | Shaped | `'X# '`, `'X #'`, `' X '`<br>• **#** = Bloco de Aço Negro (`tfc:metal/block/black_steel`)<br>• **X** = Chapa de Aço Negro (`tfc:metal/sheet/black_steel`) |
| **Cajado do Dragão** | `wyrmroost:dragon_staff` | Shaped | `' G '`, `' S '`, `' S '` (**G** = `wyrmroost:red_geode`, **S** = Vara de Blaze) |
| **Cristal de Alma (Soul Crystal)** | `wyrmroost:soul_crystal` | Shaped | `' B '`, `'BEB'`, `' B '` (**B** = `wyrmroost:blue_geode`, **E** = Olho do Ender) |
| **3× Sigilo de Engaste (Boss)** | `apotheosis:sigil_of_socketing` | Shaped | `'GUG'`, `'ECE'`, `'GAG'`<br>• **G** = Pó de Gema (`apotheosis:gem_dust`)<br>• **U** = Chapa de Aço Negro<br>• **E** = Ardósia Fundida (`apotheosis:gem_fused_slate`)<br>• **C** = Olho Monstruoso (`cataclysm:monstrous_eye`)<br>• **A** = Cristal de Alma (`wyrmroost:soul_crystal`) |
| **1× Sigilo de Engaste (Alternativo)** | `apotheosis:sigil_of_socketing` | Shaped | `'GUG'`, `'ECE'`, `'GAG'`<br>• **G** = Pó de Gema, **U** = Chapa de Aço (`tfc:metal/sheet/steel`), **E** = Ardósia Fundida<br>• **C** = Essência de Cinzas (`irons_spellbooks:cinder_essence`), **A** = Diamante TFC (`tfc:gem/diamond`) |
| **4× Sigilo de Aprimoramento** | `apotheosis:sigil_of_enhancement` | Shaped | `'GEG'`, `'ECE'`, `'GEG'`<br>• **G** = Pó de Gema, **E** = Ardósia Fundida, **C** = Cristal de Gelo (`mowziesmobs:ice_crystal`) |

---

## 10. Culinária, Pesca, Salga & Apicultura (Farmer's Delight, Aquaculture, Naturalist)

| Resultado | ID do Item | Tipo | Ingredientes / Padrão |
|---|---|---|---|
| **Panela (Cooking Pot)** | `farmersdelight:cooking_pot` | Shaped | `'B B'`, `'IBI'`, `'III'` (**B** = Tijolo `minecraft:brick`, **I** = Lingote de Ferro Forjado ou Ferro Fundido TFC) |
| **Tábua de Corte** | `farmersdelight:cutting_board` | Shaped | `'SS'`, `'LL'` (**S** = Graveto, **L** = Tábua `#tfc:lumber`) |
| **Frigideira (Skillet)** | `farmersdelight:skillet` | Shaped | `' II'`, `' II'`, `'S  '` (**I** = Lingote de Ferro Forjado, **S** = Graveto) |
| **Chaleira de Cobre** | `herbalbrews:copper_tea_kettle` | Shaped | `' S '`, `'C C'`, `'CCC'` (**S** = Graveto, **C** = Chapa de Cobre `tfc:metal/sheet/copper`) |
| **Colmeia (Beehive)** | `minecraft:beehive` | Shaped | `'LLL'`, `'HHH'`, `'LLL'` (**L** = `#tfc:lumber`, **H** = Favo de Mel `minecraft:honeycomb`) |
| **3× Favo de Mel** | `minecraft:honeycomb` | Shapeless | 3× Plantas TFC (`#tfc:plants`) + 1× Açúcar (`minecraft:sugar`) |
| **2× Filé de Peixe Cru** | `aquaculture:fish_fillet_raw` | Shapeless | Peixe (`naturalist:bass`, `catfish`, `anglerfish` ou `crittersandcompanions:koi_fish`) + Faca (`#c:tools/knife`) |
| **2× Carne Moída** | `farmersdelight:minced_beef` | Tábua de Corte | Carne Bovina TFC (`tfc:food/beef`) + Faca |
| **2× Bacon Cru** | `farmersdelight:bacon` | Tábua de Corte | Carne Suína TFC (`tfc:food/pork`) + Faca |
| **2× Costeleta de Carneiro** | `farmersdelight:mutton_chops` | Tábua de Corte | Carneiro TFC (`tfc:food/mutton`) + Faca |
| **2× Cortes de Frango** | `farmersdelight:chicken_cuts` | Tábua de Corte | Frango TFC (`tfc:food/chicken`) + Faca |
| **Filé de Peixe Curado/Cozido** | `aquaculture:fish_fillet_cooked` | Shapeless | Filé de Peixe Cru + Sal TFC (`tfc:powder/salt`) |
| **Carne de Caça Curada** | `naturalist:cooked_bushmeat` | Shapeless | `naturalist:bushmeat` + Sal TFC (`tfc:powder/salt`) |
| **Carne de Veado Curada** | `naturalist:cooked_venison` | Shapeless | `naturalist:venison` + Sal TFC (`tfc:powder/salt`) |
| **Vareta de Estanho TFC** | `tfc:metal/rod/tin` | Fundição | Lata Pescada (`aquaculture:tin_can`) |
| **4× Farinha de Osso** | `minecraft:bone_meal` | Shapeless | Chifre (`naturalist:antler`) + Faca |

---

## 11. Ponte TFC → Millénaire (Blocos para Construtores)

> Receitas Shapeless para converter recursos do TFC em blocos que as civilizações do **Millénaire** aceitam em construções e comércio.

| Resultado (Para Millénaire) | ID do Resultado | Ingrediente TFC |
|---|---|---|
| **Pedregulho Vanilla** | `minecraft:cobblestone` | Qualquer Pedregulho TFC (`#tfc:rock/cobble`) |
| **Pedra Lisa Vanilla** | `minecraft:stone` | Qualquer Rocha Bruta TFC (`#tfc:rock/raw`) |
| **Tijolos de Pedra Vanilla** | `minecraft:stone_bricks` | Qualquer Tijolo de Rocha TFC (`#tfc:rock/bricks`) |
| **Tora de Carvalho Vanilla** | `minecraft:oak_log` | Qualquer Tora TFC (`#tfc:logs_that_log`) |
| **Tora de Pinheiro/Abeto Vanilla** | `minecraft:spruce_log` | `tfc:wood/log/spruce`, `pine` ou `douglas_fir` |
| **Tora de Bétula Vanilla** | `minecraft:birch_log` | `tfc:wood/log/birch` |
| **Tábuas de Carvalho Vanilla** | `minecraft:oak_planks` | Qualquer Tábua (`#minecraft:planks`) |
| **Tábuas Millénaire** | `millenaire:anywood_planks` | Qualquer Tábua (`#minecraft:planks`) |
| **Lã Branca Vanilla** | `minecraft:white_wool` | Lã TFC (`tfc:wool`) |
| **Terra Vanilla** | `minecraft:dirt` | Qualquer Terra TFC (`#minecraft:dirt`) |
| **Areia Vanilla** | `minecraft:sand` | Qualquer Areia TFC (`#c:sands`) |
| **Arenito Vanilla** | `minecraft:sandstone` | Qualquer Arenito TFC (`#c:sandstone/blocks`) |
| **Bloco de Tijolos Vanilla** | `minecraft:bricks` | 4× Tijolo Cerâmico TFC (`tfc:ceramic/brick`) |
| **4× Tijolo de Barro (Mud Brick)** | `millenaire:mud_brick` | 4× Palha (`tfc:straw`) + 1× Terra (`#minecraft:dirt`) + 1× Pedra Solta (`#tfc:rock/loose`) |

---

## 12. Conversões Vanilla → TFC (Loot de Dungeons)

> Todas são **Shapeless** (basta colocar na grade de inventário) para converter itens encontrados em masmorras em materiais úteis do TFC.

| Resultado TFC | ID do Resultado | Ingrediente Vanilla |
|---|---|---|
| **4× Pedra Solta de Granito** | `tfc:rock/loose/granite` | `minecraft:cobblestone` ou `minecraft:mossy_cobblestone` |
| **Granito Bruto** | `tfc:rock/raw/granite` | `minecraft:stone` |
| **Tijolos de Granito (Normal / Musgoso / Rachado)** | `tfc:rock/bricks/granite` (e variantes) | `minecraft:stone_bricks` (e variantes) |
| **Granito Liso / Cinzelado** | `tfc:rock/smooth/granite` / `chiseled` | `minecraft:smooth_stone` / `chiseled_stone_bricks` |
| **Toras TFC** (`oak`, `spruce`, `birch`, `acacia`, `kapok`, `hickory`, `mangrove`, `rosewood`) | `tfc:wood/log/<tipo>` | Toras Vanilla correspondentes (`oak`, `spruce`, `birch`, `acacia`, `jungle`, `dark_oak`, `mangrove`, `cherry`) |
| **4× Tábuas TFC** (`oak`, `spruce`, `birch`, `hickory`) | `tfc:wood/lumber/<tipo>` | Tábuas Vanilla (`oak_planks`, `spruce_planks`, `birch_planks`, `dark_oak_planks`) |
| **Lingote de Ferro Forjado** | `tfc:metal/ingot/wrought_iron` | `minecraft:iron_ingot` |
| **Lingote de Cobre TFC** | `tfc:metal/ingot/copper` | `minecraft:copper_ingot` |
| **Lingote de Ouro TFC** | `tfc:metal/ingot/gold` | `minecraft:gold_ingot` |
| **Couro Grande Preparado** | `tfc:large_prepared_hide` | `minecraft:leather` |
| **Pão de Trigo TFC / Maçã TFC** | `tfc:food/wheat_bread` / `red_apple` | `minecraft:bread` / `minecraft:apple` |
| **Tocha TFC** | `tfc:torch` | `minecraft:torch` |
| **16× Flecha Vanilla** | `minecraft:arrow` | 16× `tfc:glow_arrow` |
| **Ferramentas e Armaduras de Ferro Forjado** | `tfc:metal/<peça>/wrought_iron` | Espada, Picareta, Machado, Pá e Armaduras de Ferro Vanilla |
| **Baú / Baú com Armadilha / Barril de Carvalho TFC** | `tfc:wood/chest/oak` / `trapped_chest` / `barrel` | `minecraft:chest` / `trapped_chest` / `barrel` |
| **Barras de Ferro Forjado** | `tfc:metal/bars/wrought_iron` | `minecraft:iron_bars` |
| **Lâmpada de Cobre TFC** | `tfc:metal/lamp/copper` | `minecraft:lantern` |

---

## 13. Endgame Supremo & Chaos Guardian (Ato VI)

| Resultado | ID do Item | Tipo | Ingredientes / Padrão 3×3 |
|---|---|---|---|
| **Moldura do Portal do End** | `minecraft:end_portal_frame` | Shaped | `'SOS'`, `'BBB'`, `'III'`<br>• **S** = Chapa de Aço Negro (`tfc:metal/sheet/black_steel`)<br>• **O** = Receptáculo de Alma (`tombstone:receptacle_of_soul`)<br>• **B** = Bloco de Aço Negro (`tfc:metal/block/black_steel`)<br>• **I** = Lingote de Ignitium (`cataclysm:ignitium_ingot`) |
| **Olho do Ender Ancestral** | `minecraft:ender_eye` | Shaped | `'ESE'`, `'SMS'`, `'ESE'`<br>• **E** = Pérola do Ender<br>• **S** = Essência Arcana (`irons_spellbooks:arcane_essence`)<br>• **M** = Olho Monstruoso (`cataclysm:monstrous_eye`) |
| **Fragmentos do Caos (Compressão 3×3)** | `chaos_shard` / `large` / `medium` | Shaped (3×3) | 9× Fragmentos menores formam 1× Fragmento maior |
| **Fragmentos do Caos (Descompressão)** | `large` / `medium` / `small_chaos_frag` | Shapeless | 1× Fragmento maior gera 9× Fragmentos menores |

---

## 14. Receitas Desativadas / Removidas (Anti-Exploit)

Para preservar a progressão do TerraFirmaCraft, as seguintes receitas originais foram **removidas**:

| Categoria | Itens com Receita Removida |
|---|---|
| **Blocos de Fundição Vanilla** | `minecraft:furnace`, `minecraft:blast_furnace`, `minecraft:smoker` |
| **Ferramentas e Armas Vanilla** | Todas de Madeira (`wooden_*`), Pedra (`stone_*`), Ferro (`iron_*`) e Diamante (`diamond_pickaxe`, `axe`, `sword`) |
| **Armaduras e Escudo Vanilla** | Capacete, Peitoral, Calça e Botas de Ferro (`iron_*`) e Escudo (`minecraft:shield`) |
| **Exploit de Aço em Fornalha** | `magistuarmory:furnace/steel_ingot_blasting` (Epic Knights) |
| **Draconic Evolution** | Todas as máquinas, reatores, armaduras e ferramentas sci-fi do mod (mantidos apenas os itens do Chaos Guardian) |
