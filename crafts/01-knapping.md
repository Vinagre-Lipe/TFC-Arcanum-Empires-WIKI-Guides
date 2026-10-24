# 01 · Knapping, Cerâmica Arcana e Ponte Millénaire

Script: `server_scripts/01_knapping_and_elements.js`

Introduz o **xamanismo primitivo**: você molda catalisadores arcanos em argila (Knapping do TFC), queima no Pit Kiln e usa-os para criar o primeiro livro de magia e o primeiro pilão de proteção. Também cria conversões de blocos do TFC para blocos vanilla aceitos pelos construtores do Millénaire, e ajusta biomas/estruturas.

## Itens customizados (startup)

| Item | ID | Descrição |
|---|---|---|
| Argila Rúnica | `tfc_arcanum:runic_clay_ball` | Argila imbuída com essência primitiva |
| Catalisador Arcano Cru | `tfc_arcanum:unfired_arcane_catalyst` | Queimar a 1099 °C |
| Catalisador Arcano Cerâmico | `tfc_arcanum:fired_arcane_catalyst` | Foco primitivo de Mana/Source |
| Núcleo de Pilão Cru | `tfc_arcanum:unfired_pylon_core` | Molde para Pilão Tier 1 |
| Núcleo de Pilão Cerâmico | `tfc_arcanum:fired_pylon_core` | Afasta criaturas corrompidas |
| Carta de Concessão de Vila | `tfc_arcanum:village_charter` | Autoriza fundação de colônia / Pilão Tier 2 |

## Receitas de Knapping e Queima

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| Catalisador Arcano Cru `tfc_arcanum:unfired_arcane_catalyst` | knapping (argila) | `' ### '`, `'#   #'`, `'# # #'`, `'#   #'`, `' ### '` | Anel com ponto central |
| Núcleo de Pilão Cru `tfc_arcanum:unfired_pylon_core` | knapping (argila) | `'  #  '`, `' ### '`, `'#####'`, `' ### '`, `'  #  '` | Losango |
| Catalisador Arcano Cerâmico `tfc_arcanum:fired_arcane_catalyst` | heating | Catalisador Arcano Cru | 1099 °C (Pit Kiln) |
| Núcleo de Pilão Cerâmico `tfc_arcanum:fired_pylon_core` | heating | Núcleo de Pilão Cru | 1099 °C (Pit Kiln) |

## Receitas de progressão

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| Livro de Feitiços Novato `ars_nouveau:novice_spell_book` | shaped | `' C '`, `'KBL'`, `' F '` — C = Catalisador Arcano Cerâmico, K = `#tfc:knives`, B = Livro e Pena, L = `#c:leathers`, F = `#tfc:axes` | Substitui a receita original |
| Pilão de Expulsão `pylons:expulsion_pylon` | shaped | `'RRR'`, `'CPC'`, `'SSS'` — R = `#c:cobblestones`, C = Catalisador Arcano Cerâmico, P = Núcleo de Pilão Cerâmico, S = `#c:stones` | Pilão Tier 1; substitui original |
| Guia Arcanum `patchouli:guide_book` (guia_arcanum) | shapeless | `#tfc:rock/loose` + `#c:rods/wooden` | Recriar o guia perdido |

## Ponte TFC → Millénaire (shapeless)

| Resultado | Tipo | Ingredientes | Observações |
|---|---|---|---|
| Pedregulho `minecraft:cobblestone` | shapeless | `#tfc:rock/cobble` | |
| Pedra `minecraft:stone` | shapeless | `#tfc:rock/raw` | |
| Tijolos de Pedra `minecraft:stone_bricks` | shapeless | `#tfc:rock/bricks` | |
| Tronco de Carvalho `minecraft:oak_log` | shapeless | `#tfc:logs_that_log` | |
| Tronco de Abeto `minecraft:spruce_log` | shapeless | `tfc:wood/log/spruce` | |
| Tronco de Abeto `minecraft:spruce_log` | shapeless | `tfc:wood/log/pine` | |
| Tronco de Abeto `minecraft:spruce_log` | shapeless | `tfc:wood/log/douglas_fir` | |
| Tronco de Bétula `minecraft:birch_log` | shapeless | `tfc:wood/log/birch` | |
| Lã Branca `minecraft:white_wool` | shapeless | `tfc:wool` | |
| Tábuas de Carvalho `minecraft:oak_planks` | shapeless | `#minecraft:planks` | |
| Tábuas Quaisquer `millenaire:anywood_planks` | shapeless | `#minecraft:planks` | |
| Terra `minecraft:dirt` | shapeless | `#minecraft:dirt` | |
| Areia `minecraft:sand` | shapeless | `#c:sands` | |
| Arenito `minecraft:sandstone` | shapeless | `#c:sandstone/blocks` | |
| Tijolos `minecraft:bricks` | shapeless | 4× `tfc:ceramic/brick` | |
| 4× Tijolo de Barro `millenaire:mud_brick` | shapeless | 4× `tfc:straw` + `#minecraft:dirt` + `#tfc:rock/loose` | |

## Receitas removidas

| Item | Motivo |
|---|---|
| `ars_nouveau:novice_spell_book` | Substituída pela versão TFC |
| `pylons:expulsion_pylon` | Substituída pela versão cerâmica |

## Alterações de tags

| Tag | Tipo | Operação | Entradas |
|---|---|---|---|
| `tfc:supports_landslide` | bloco | adiciona | dirt/grass/farmland/grass_path/rooted_dirt **alfisol** |
| `tfc:can_landslide` | bloco | remove | os acima + `tfc:coarse_dirt/alfisol` |
| `tfc:unfired_pottery` | item | adiciona | Catalisador Arcano Cru, Núcleo de Pilão Cru (permite Pit Kiln) |

### Biomas (Millénaire / convenções)

| Tag | Biomas TFC adicionados |
|---|---|
| `millenaire:is_temperate_forest` | `tfc:rolling_hills` |
| `c:is_birch_forest` | `tfc:dolines` |
| `c:is_dark_forest` | `tfc:cenotes` |
| `millenaire:is_meadow` | `tfc:highlands` |
| `millenaire:is_cherry_grove` | `tfc:plateaus` |
| `c:is_forest` | rolling_hills, dolines, cenotes |
| `c:is_taiga` | highlands, plateaus, tuyas |
| `c:is_jungle` | shilin |
| `c:is_savanna` | canyons, low_canyons, stair_step_canyons |
| `c:is_desert` | badlands, inverted_badlands, salt_marsh, salt_flats |

### Estruturas (Dungeons Arise, Cataclysm, vanilla)

| Estrutura | Biomas |
|---|---|
| bandit_village | `#c:is_plains`, `#c:is_savanna`, `#c:is_desert`, plains, lowlands, canyons |
| bandit_towers | `#c:is_plains`, `#c:is_hill`, rolling_hills, highlands, plateaus |
| illager_fort | `#c:is_forest`, `#c:is_taiga`, rolling_hills, dolines |
| coliseum | `#c:is_plains`, plains, lowlands |
| infested_temple | `#c:is_jungle`, shilin |
| monastery | `#c:is_mountain`, `#c:is_hill`, highlands, plateaus |
| greenwood_pub | `#c:is_forest`, rolling_hills |
| foundry | `#c:is_badlands`, `#c:is_desert`, badlands, canyons |
| shiraz_palace | `#c:is_desert`, badlands |
| plague_asylum | `#c:is_swamp`, salt_marsh, salt_flats |
| small_blimp | `#c:is_plains`, `#c:is_hill`, `#c:is_forest` |
| undead_pirate_ship | `#c:is_ocean` |
| bathhouse | `#c:is_plains`, `#c:is_forest`, plains |
| abandoned_temple | `#c:is_jungle`, `#c:is_desert`, shilin |
| Pillager Outpost (vanilla) | `#c:is_plains`, `#c:is_hill` |
| Cursed Pyramid (Cataclysm) | `#c:is_badlands` |
| Acropolis / Sunken City (Cataclysm) | `#c:is_ocean` |
| Frosted Prison (Cataclysm) | `#c:is_snowy`, `#c:is_icy` |
