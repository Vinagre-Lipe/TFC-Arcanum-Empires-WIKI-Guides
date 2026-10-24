# 10 · Fauna, Pesca e Culinária

Script: `server_scripts/10_fauna_integration.js`

Integra Naturalist, Aquaculture 2, Critters and Companions, HerbalBrews e Farmer's Delight ao TFC: utensílios feitos com metais TFC, fontes de calor TFC para a panela, filetagem, cortes de carne, salga com sal do TFC e alerta de predadores.

## Receitas adicionadas

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| Panela `farmersdelight:cooking_pot` | shaped | `'B B'`, `'IBI'`, `'III'` — B = Tijolo `minecraft:brick`, I = Lingote de Ferro Forjado `tfc:metal/ingot/wrought_iron` | Substitui original |
| Panela `farmersdelight:cooking_pot` | shaped | Mesmo padrão — I = Lingote de Ferro Fundido `tfc:metal/ingot/cast_iron` | Alternativa |
| Tábua de Corte `farmersdelight:cutting_board` | shaped | `'SS'`, `'LL'` — S = Graveto, L = `#tfc:lumber` | Substitui original |
| Frigideira `farmersdelight:skillet` | shaped | `' II'`, `' II'`, `'S  '` — I = Lingote de Ferro Forjado, S = Graveto | Substitui original |
| Chaleira de Cobre `herbalbrews:copper_tea_kettle` | shaped | `' S '`, `'C C'`, `'CCC'` — S = Graveto, C = Chapa de Cobre `tfc:metal/sheet/copper` | Substitui original |
| 2× Filé de Peixe Cru `aquaculture:fish_fillet_raw` | shapeless | Robalo `naturalist:bass` + `#c:tools/knife` | Faca perde durabilidade |
| 2× Filé de Peixe Cru | shapeless | Bagre `naturalist:catfish` + Faca | |
| 2× Filé de Peixe Cru | shapeless | Peixe-pescador `naturalist:anglerfish` + Faca | |
| 2× Filé de Peixe Cru | shapeless | Carpa Koi `crittersandcompanions:koi_fish` + Faca | |
| 2× Carne Moída `farmersdelight:minced_beef` | cutting (Tábua de Corte) | Carne Bovina TFC `tfc:food/beef` | Ferramenta: faca |
| 2× Bacon `farmersdelight:bacon` | cutting | Carne Suína TFC `tfc:food/pork` | Ferramenta: faca |
| 2× Costeleta de Carneiro `farmersdelight:mutton_chops` | cutting | Carneiro TFC `tfc:food/mutton` | Ferramenta: faca |
| 2× Cortes de Frango `farmersdelight:chicken_cuts` | cutting | Frango TFC `tfc:food/chicken` | Ferramenta: faca |
| Filé de Peixe Cozido `aquaculture:fish_fillet_cooked` | shapeless | Filé Cru + Sal `tfc:powder/salt` | Cura com sal |
| Carne de Caça Cozida `naturalist:cooked_bushmeat` | shapeless | `naturalist:bushmeat` + Sal | |
| Carne de Veado Cozida `naturalist:cooked_venison` | shapeless | `naturalist:venison` + Sal | |
| Vareta de Estanho `tfc:metal/rod/tin` | smelting | Lata `aquaculture:tin_can` | 0,1 XP |
| 4× Farinha de Osso `minecraft:bone_meal` | shapeless | Chifre `naturalist:antler` + Faca | |

## Receitas removidas

| Item |
|---|
| `farmersdelight:cooking_pot` |
| `farmersdelight:cutting_board` |
| `farmersdelight:skillet` |
| `herbalbrews:copper_tea_kettle` |

## Tags de item

| Tag | Entradas adicionadas |
|---|---|
| `farmersdelight:tools/knives` | `#c:tools/knife` + facas de filetar Aquaculture (madeira, pedra, ferro, ouro, diamante, netúnio) |
| `farmersdelight:straw_harvesters` | `#c:tools/knife`, `#tfc:knives` |
| `c:tools/knife` | facas de filetar Aquaculture |
| `c:straw` / `farmersdelight:straw` / `tfc:straw` | palha TFC ⇄ palha Farmer's Delight |
| `c:ropes`, `tfc:ropes` | `farmersdelight:rope` |
| `c:foods/raw_meat(s)`, `c:foods/meat`, `tfc:foods/can_be_salted` | carnes cruas Naturalist (bushmeat, mamute, veado, pato, cauda de lagarto) |
| `c:foods/cooked_meat(s)`, `c:foods/meat` | versões cozidas + ovo cozido Naturalist |
| `c:foods/raw_fish`, `c:foods/fish`, `tfc:foods/can_be_salted` | filé cru, robalo, bagre, peixe-pescador, blobfish, piranha, caranguejo, marisco, koi, clam |
| `c:foods/cooked_fish`, `c:foods/fish` | versões cozidas |
| `c:bones` | `aquaculture:fish_bones`, `naturalist:antler` |
| `c:slimeballs` | garrafas de gosma de caracol e de lebre-do-mar (Critters) |
| `c:strings` | `crittersandcompanions:silk` |
| `herbalbrews:large_water_fill` | `tfc:wood/bucket`, `minecraft:water_bucket` |
| `herbalbrews:small_water_fill` | `tfc:ceramic/jug`, `minecraft:potion` |
| `herbalbrews:heat_items` | carvão vegetal TFC, bloco de carvão, carvão betuminoso, lignito, `tfc:firepit` |
| `herbalbrews:is_milk` | `minecraft:milk_bucket` |

## Tags de bloco

| Tag | Blocos |
|---|---|
| `farmersdelight:heat_sources` | `tfc:firepit`, `tfc:campfire`, `tfc:charcoal_forge`, `tfc:bloomery`, `tfc:pit_kiln`, `tfc:pot`, `tfc:crucible`, `tfc:grill` |

## Alerta de predadores

| Gatilho | Efeito |
|---|---|
| Urso, leão, tigre ou jacaré do Naturalist a até 8 blocos, sem tocha/dardo/lanterna/lança na mão | Mensagem na action bar a cada 2 s pedindo para empunhar tocha ou lança |

---

## 🐾 Expansão Ecológica: Fauna Selvagem nos Biomas TFC (+30% de Densidade)

Todos os animais dos mods **Naturalist** e **Critters and Companions** foram integrados aos biomas e climas específicos do TerraFirmaCraft via NeoForge Biome Modifiers, com **taxas de spawn aumentadas em 30%**:

| Ecossistema TFC | Biomas Compatíveis | Criaturas Presentes |
|---|---|---|
| **Savanas & Planícies Quentes** | `#c:is_plains`, `#c:is_dry`, `#c:is_hot/overworld` | Zebras, Elefantes, Girafas, Leões, Rinocerontes, Avestruzes e Abutres. |
| **Florestas Temperadas** | `#c:is_sparse_vegetation/overworld`, `#c:is_plains` | Cervos, Javalis, Ursos Pardos, Ursos Negros, Pássaros Canoros, Borboletas, Ouriços e Caracóis. |
| **Pântanos, Lagos & Rios** | `#c:is_swamp`, `#c:is_river`, `#c:is_surface_lake` | Jacarés/Aligátores, Patos Selvagens, Cobras, Lagartos, Tartarugas, Hipopótamos, Libélulas e Vaga-lumes. |
| **Tundras & Picos Gelados** | `#c:is_cold/overworld`, `#c:is_snowy`, `#c:is_mountain` | Ursos Polares, Pinguins, Mamutes Peludos e Ursos das Cavernas. |
| **Litorais & Oceanos Profundos** | `#c:is_ocean`, `#c:is_beach` | Caranguejos, Robalos, Bagres, Tubarões-Brancos, Baleias, Águas-vivas, Lontras (*Otters*) e Carpas Koi. |

