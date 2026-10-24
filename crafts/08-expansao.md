# 08 · Armazenamento, Farms e Receitas Rústicas

Script: `server_scripts/08_expansion_recipes.js`

Adapta mods de armazenamento (Tom's Simple Storage, Sophisticated Backpacks) e automação (Mob Grinding Utils) aos materiais do TFC, unifica tags e adiciona várias **receitas rústicas** de qualidade de vida: fogueira na bancada, tábuas com machado, couro com faca, britagem com martelo e moldes de cerâmica sem knapping.

## Tom's Simple Storage

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| Conector de Inventário `toms_storage:inventory_connector` | shaped | `'PLP'`, `'CDC'`, `'PEP'` — P = `#tfc:lumber`, L = Chapa de Ferro Forjado `tfc:metal/sheet/wrought_iron`, C = `#c:chests`, D = Comparador, E = Pérola do Ender | |
| Terminal de Armazenamento `toms_storage:storage_terminal` | shaped | `'PCP'`, `'cGs'`, `'PCP'` — P = `#tfc:lumber`, c = `#c:chests`, C = Comparador, G = Chapa de Cobre `tfc:metal/sheet/copper`, s = Vidro de Lâmpada `tfc:lamp_glass` | |
| 4× Moldura `toms_storage:trim` | shaped | `' P '`, `'PLP'`, `' P '` — P = `#tfc:lumber`, L = `#minecraft:logs` | |
| 16× Cabo de Inventário `toms_storage:inventory_cable` | shaped | `'PPP'`, `'R R'`, `'PPP'` — P = `#tfc:lumber`, R = `#c:rods/wooden` | |
| Conector de Cabo `toms_storage:inventory_cable_connector` | shapeless | Cabo de Inventário + Chapa de Ferro Forjado | |

## Sophisticated Backpacks

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| Mochila `sophisticatedbackpacks:backpack` | shaped | `'SLS'`, `'LCL'`, `'LLL'` — S = `#c:strings`, L = Couro Grande Preparado `tfc:large_prepared_hide`, C = `#c:chests` | |
| Mochila de Cobre `sophisticatedbackpacks:copper_backpack` | shaped | 8× Chapa de Cobre `tfc:metal/sheet/copper` ao redor da Mochila | |
| Mochila de Ferro `sophisticatedbackpacks:iron_backpack` | shaped | 8× Chapa de Ferro Forjado ao redor da Mochila de Cobre | |
| Mochila de Ouro `sophisticatedbackpacks:gold_backpack` | shaped | 8× Chapa de Ouro `tfc:metal/sheet/gold` ao redor da Mochila de Ferro | |
| Mochila de Diamante `sophisticatedbackpacks:diamond_backpack` | shaped | 8× Chapa de Aço `tfc:metal/sheet/steel` ao redor da Mochila de Ouro | Aço substitui diamante |

## Mob Grinding Utils

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| Espetos `mob_grinding_utils:spikes` | shaped | `' S '`, `'SIS'` — S = Espada de Ferro Forjado `tfc:metal/sword/wrought_iron`, I = Lingote Duplo de Ferro Forjado `tfc:metal/double_ingot/wrought_iron` | |
| Serra `mob_grinding_utils:saw` | shaped | `'SDS'`, `'VRV'`, `'DID'` — S = Espada de Aço `tfc:metal/sword/steel`, D = Diamante `tfc:gem/diamond`, V = Espetos, R = Bloco de Redstone, I = Bloco de Aço `tfc:metal/block/steel` | |
| Ventilador `mob_grinding_utils:fan` | shaped | `'SIS'`, `'IRI'`, `'SIS'` — I = Chapa de Bronze `tfc:metal/sheet/bronze`, S = Granito Liso `tfc:rock/smooth/granite`, R = Bloco de Redstone | |
| Tremonha de Absorção `mob_grinding_utils:absorption_hopper` | shaped | `' E '`, `' O '`, `'OHO'` — E = Olho do Ender, O = Obsidiana, H = Funil | |
| Cotonete de Mob `mob_grinding_utils:mob_swab` | shaped | `'  W'`, `' S '`, `'W  '` — W = Tecido de Lã `tfc:wool_cloth`, S = `#c:rods/wooden` | |
| Ração Amaldiçoada `mob_grinding_utils:gm_chicken_feed_cursed` | shapeless | `#c:seeds` + Pó de Enxofre `tfc:powder/sulfur` + Pólvora + Olho de Aranha + Carne Podre + Osso + Frasco de Experiência | Gera Cursed Earth |

## Fogo (qualidade de vida)

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| Fogueira TFC `tfc:firepit` | shaped | `' S '`, `'SLS'`, `' K '` — S = `#c:rods/wooden`, L = `#minecraft:logs`, K = `#tfc:firepit_kindling` | |
| Fogueira TFC `tfc:firepit` | shapeless | `#minecraft:logs` + 3× `#c:rods/wooden` + `#tfc:firepit_kindling` | |
| Fogueira `minecraft:campfire` | shaped | `' S '`, `'SCS'`, `'LLL'` — S = `#c:rods/wooden`, C = `#minecraft:coals`, L = `#minecraft:logs` | |
| Fogueira `minecraft:campfire` | shaped | `' S '`, `'SKS'`, `'LLL'` — K = `#tfc:firepit_kindling` | Versão com palha |
| Acendedor `tfc:firestarter` | shapeless | 2× `#c:rods/wooden` | |

## Madeira rústica com machado

Válido para os 20 tipos de madeira TFC: acacia, ash, aspen, birch, blackwood, chestnut, douglas_fir, hickory, kapok, mangrove, maple, oak, palm, pine, rosewood, sequoia, spruce, sycamore, white_cedar, willow (`<madeira>` abaixo). O machado (`#c:tools/axe`) **perde durabilidade** e não é consumido.

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| 2× Tábua `tfc:wood/lumber/<madeira>` | shapeless | Tronco `tfc:wood/log/<madeira>` + Machado | A serra rende 8 |
| Viga de Suporte `tfc:wood/support/<madeira>` | shapeless | Tronco + Machado | |
| Baú `tfc:wood/chest/<madeira>` | shaped | `'LLL'`, `'LAL'`, `'LLL'` — L = Tábua, A = Machado | |
| Barril `tfc:wood/barrel/<madeira>` | shaped | `'L L'`, `'LAL'`, `'LLL'` | |
| Bancada `tfc:wood/workbench/<madeira>` | shaped | `'LL'`, `'AL'` | |
| Porta `tfc:wood/door/<madeira>` | shaped | `'LL'`, `'LL'`, `'LA'` | 1 porta (serra rende 3) |
| Alçapão `tfc:wood/trapdoor/<madeira>` | shaped | `'LLL'`, `' A '` | |
| Barco `tfc:wood/boat/<madeira>` | shaped | `'L L'`, `'LAL'`, `' L '` | |

## Fibras, couro, britagem e moagem

| Resultado | Tipo | Ingredientes | Observações |
|---|---|---|---|
| Linha `minecraft:string` | shapeless | 3× Palha `tfc:straw` + `#tfc:knives` | Faca perde durabilidade |
| Corda `tfc:rope` | shapeless | 3× Linha | |
| Couro Raspado Pequeno `tfc:small_scraped_hide` | shapeless | `tfc:small_raw_hide` + Faca | |
| Couro Raspado Médio `tfc:medium_scraped_hide` | shapeless | `tfc:medium_raw_hide` + Faca | |
| Couro Raspado Grande `tfc:large_scraped_hide` | shapeless | `tfc:large_raw_hide` + Faca | |
| Couro `minecraft:leather` | shapeless | `tfc:small_prepared_hide` + Faca | |
| 2× Couro | shapeless | `tfc:medium_prepared_hide` + Faca | |
| 3× Couro | shapeless | `tfc:large_prepared_hide` + Faca | |
| Cascalho `minecraft:gravel` | shapeless | `#tfc:rock_knapping` + `#c:tools/hammer` | Martelo perde durabilidade |
| Areia `minecraft:sand` | shapeless | Cascalho + Martelo | |
| Farinha `tfc:food/<grão>_flour` | shapeless | `tfc:food/<grão>_grain` + Martelo | Grãos: barley, maize, oat, rye, rice, wheat. O Quern rende 3–4× |

## Moldes de cerâmica na bancada

| Resultado | Tipo | Ingredientes | Observações |
|---|---|---|---|
| Vaso Cru `tfc:ceramic/unfired_vessel` | shapeless | 4× Argila `minecraft:clay_ball` | Alternativa ao knapping |
| Pote Cru `tfc:ceramic/unfired_pot` | shapeless | 3× Argila | |
| Molde de Picareta `tfc:ceramic/unfired_pickaxe_head_mold` | shapeless | 2× Argila | |
| Molde de Machado `tfc:ceramic/unfired_axe_head_mold` | shapeless | 2× Argila + Palha | |
| Molde de Serra `tfc:ceramic/unfired_saw_blade_mold` | shapeless | 2× Argila + `#c:rods/wooden` | |
| Molde de Faca `tfc:ceramic/unfired_knife_blade_mold` | shapeless | Argila + `#c:rods/wooden` | |
| Molde de Lingote `tfc:ceramic/unfired_ingot_mold` | shapeless | Argila + Palha | |
| Molde de Propick `tfc:ceramic/unfired_propick_head_mold` | shapeless | 2× Argila + Molde de Lingote Cru | |

## Tags de unificação (item)

| Tag | Entradas adicionadas |
|---|---|
| `c:leathers`, `c:leather` | `tfc:treated_hide`, `tfc:large/medium/small_prepared_hide` |
| `c:chests` (+ `c:chests/wooden`) | Baús TFC de todas as 19 madeiras (`tfc:wood/chest/*`) |
| `c:strings` | `tfc:jute_fiber`, `minecraft:string` |
| `c:ingots/iron` | `tfc:metal/ingot/wrought_iron`, `cast_iron` |
| `c:ingots/copper` | `tfc:metal/ingot/copper` |
| `c:ingots/gold` | `tfc:metal/ingot/gold`, `rose_gold` |
| `c:ingots/steel` | `steel`, `black_steel`, `blue_steel`, `red_steel` |
| `c:storage_blocks/iron` | `tfc:metal/block/wrought_iron`, `cast_iron` |
| `c:storage_blocks/steel` | `tfc:metal/block/steel`, `black_steel` |
| `c:seeds` | 19 sementes TFC (`tfc:seeds/*`: cereais, legumes, juta, papiro) |
| `bettercombat:daggers` | Facas TFC de pedra e metal |
| `bettercombat:swords` | Espadas TFC de metal |
| `bettercombat:maces` | Maças TFC de metal |
| `bettercombat:two_handed` | Dardos (javelins) TFC de pedra e metal |

---

## 🔮 11. Transmutação Alquímica de Recursos Místicos (v1.2.4)

Para garantir acesso a **Waystones**, **Olhos do Fim** e rituais arcanos antes de entrar no Nether ou The End, o script adiciona rotas de transmutação química e moagem:

### Pérolas do End Alquímicas
- **Via Ametista:** 2x Componentes de Ametista (`#tfc_arcanum:amethyst_components` — fragmento ou pó) + 2x Aglutinantes (`#tfc_arcanum:alchemical_binders` — cola vegetal TFC, gosma de slime ou mel) + 1x Pó de Enxofre (`#tfc_arcanum:sulfur_powders`) em formato de cruz ➔ 1x **Pérola do End** (`minecraft:ender_pearl`).
- **Via Lápis-Lazúli:** 2x Componentes de Lápis-Lazúli (`#tfc_arcanum:lapis_components` — lápis ou pó) + 2x Aglutinantes + 1x Pó de Enxofre em formato de cruz ➔ 1x **Pérola do End** (`minecraft:ender_pearl`).

### Síntese de Pó de Blaze
- **Pó de Blaze sem Nether:** 1x Pó de Enxofre (`#tfc_arcanum:sulfur_powders`) + 1x Cinzas de Madeira de Fogueira (`tfc:powder/wood_ash`) + 1x Pó de Carvão Vegetal (`tfc:powder/charcoal`) ➔ 2x **Pó de Blaze** (`minecraft:blaze_powder`).

