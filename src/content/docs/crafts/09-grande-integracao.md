---
title: "09 · Grande Integração (Armaria, Dragões, Apotheosis, Lua de Sangue, Sculk)"
description: "Script: serverscripts/09grandintegration.js"
---


Script: `server_scripts/09_grand_integration.js`

Integra quatro subsistemas: **armaria medieval** (Epic Knights, Simply Swords) com metais TFC; **dragões** do Wyrmroost alimentados com comida TFC e equipados com ligas TFC; **Apotheosis** com sigilos que exigem drops de chefes; e um **subsolo hostil** (Warden causa desabamentos, Sculk exige Aço Negro). Durante a Lua de Sangue surgem hordas extras.

## Receitas adicionadas

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| Armadura de Dragão de Ferro `wyrmroost:iron_dragon_armor` | shaped | `'X# '`, `'X #'`, `' X '` — # = Bloco de Ferro Forjado `tfc:metal/block/wrought_iron`, X = Chapa de Ferro Forjado `tfc:metal/sheet/wrought_iron` | Substitui original |
| Armadura de Dragão de Ouro `wyrmroost:gold_dragon_armor` | shaped | Mesmo padrão — # = `tfc:metal/block/gold`, X = `tfc:metal/sheet/gold` | Substitui original |
| Armadura de Dragão de Diamante `wyrmroost:diamond_dragon_armor` | shaped | Mesmo padrão — # = Bloco de Aço Negro `tfc:metal/block/black_steel`, X = Chapa de Aço Negro `tfc:metal/sheet/black_steel` | Substitui original |
| Cajado do Dragão `wyrmroost:dragon_staff` | shaped | `' G '`, `' S '`, `' S '` — G = Geodo Vermelho `wyrmroost:red_geode`, S = Vara de Blaze `minecraft:blaze_rod` | Substitui original |
| Cristal de Alma `wyrmroost:soul_crystal` | shaped | `' B '`, `'BEB'`, `' B '` — B = Geodo Azul `wyrmroost:blue_geode`, E = Olho do Ender | Substitui original |
| 3× Sigilo de Engaste `apotheosis:sigil_of_socketing` | shaped | `'GUG'`, `'ECE'`, `'GAG'` — G = `apotheosis:gem_dust`, U = Chapa de Aço Negro, E = `apotheosis:gem_fused_slate`, C = Olho Monstruoso `cataclysm:monstrous_eye`, A = Cristal de Alma `wyrmroost:soul_crystal` | Catalisador de chefe |
| Sigilo de Engaste `apotheosis:sigil_of_socketing` | shaped | `'GUG'`, `'ECE'`, `'GAG'` — G = Pó de Gema, U = Chapa de Aço `tfc:metal/sheet/steel`, E = Ardósia Fundida, C = Essência de Cinzas `irons_spellbooks:cinder_essence`, A = Diamante `tfc:gem/diamond` | Alternativa vulcânica |
| 4× Sigilo de Aprimoramento `apotheosis:sigil_of_enhancement` | shaped | `'GEG'`, `'ECE'`, `'GEG'` — G = Pó de Gema, E = Ardósia Fundida, C = Cristal de Gelo `mowziesmobs:ice_crystal` | Drop do Frostmaw |

## Receitas removidas

| ID removido | Motivo |
|---|---|
| `magistuarmory:furnace/steel_ingot_blasting` | Aço do Epic Knights em fornalha (exploit) |
| `wyrmroost:iron_dragon_armor`, `gold_dragon_armor`, `diamond_dragon_armor` | Trocadas por versões TFC |
| `wyrmroost:dragon_staff`, `wyrmroost:soul_crystal` | Trocadas |
| `apotheosis:sigil_of_socketing`, `apotheosis:sigil_of_enhancement` | Trocadas por versões com drops de chefes |

## Tags de item

| Tag | Entradas adicionadas |
|---|---|
| `c:ingots/wrought_iron` | `tfc:metal/ingot/wrought_iron` |
| `c:ingots/steel` | steel, black_steel, blue_steel, red_steel (TFC) |
| `c:ingots/black_steel` | `tfc:metal/ingot/black_steel` |
| `c:ingots/blacked_steel` | `tfc:metal/ingot/black_steel`, `ekotsk:blacked_steel_ingot` |
| `c:ingots/bronze` | bronze, bismuth_bronze, black_bronze (TFC) |
| `c:ingots/copper` / `c:ingots/gold` | cobre TFC / ouro e ouro rosé TFC |
| `c:plates/steel` | `tfc:metal/sheet/steel`, `black_steel`, `magistuarmory:steel_plate` |
| `c:plates/iron` | `tfc:metal/sheet/wrought_iron`, `cast_iron` |
| `c:plates/blacked_steel` | `tfc:metal/sheet/black_steel`, `ekotsk:blacked_steel_plate` |
| `c:wood_sticks`, `c:rods/wooden` | `minecraft:stick` |
| `magistuarmory:leather_strips` | `tfc:treated_hide` |
| `magistuarmory:woolen_fabrics` | `tfc:wool_cloth` |
| `c:leather` | couros TFC (tratado e preparados) |
| `c:foods/raw_meat`, `minecraft:meat` | 16 carnes cruas TFC (boi, porco, frango, codorna, carneiro, urso, cavalo, faisão, perdiz, peru, pavão, veado, bisão, lobo, coelho, raposa) |
| `c:foods/cooked_meat`, `minecraft:meat` | as mesmas 16 cozidas |
| `wyrmroost:royal_red_food`, `wyrmroost:roost_stalker_food` | carnes TFC cruas e cozidas |
| `wyrmroost:butterfly_leviathan_food` | carnes cruas + peixes TFC |
| `wyrmroost:silver_glider_food` | peixes TFC (bacalhau, salmão, trutas, peixe tropical, mariscos) |
| `wyrmroost:overworld_drake_food` | trigo, cevada, aveia, centeio, arroz TFC |
| `wyrmroost:dragon_fruit_drake_food` | maçã vermelha e verde TFC |
| `bettercombat:swords` | espadas Wyrmroost (platina, geodos azul/vermelho/roxo) |
| `bettercombat:axes` | machados Wyrmroost (platina, geodos) |

## Tags de bloco

| Tag | Blocos |
|---|---|
| `minecraft:mineable/pickaxe` | sculk, sculk_catalyst, sculk_sensor, sculk_shrieker, sculk_vein |
| `minecraft:needs_diamond_tool` | sculk_catalyst, sculk_shrieker |
| `tfc:can_collapse` | deepslate, deepslate_bricks, deepslate_tiles, sculk |
| `tfc:can_trigger_collapse` | deepslate, sculk_catalyst |

## Eventos

| Evento | Efeito |
|---|---|
| Lua de Sangue (Enhanced Celestials) | A cada 5 s, 25% por jogador de surgir um `born_in_chaos_v1:decaying_zombie` a até 16 blocos |
| Warden recebe dano | Pontos de teto (pedra/deepslate/sculk) num raio de 12 blocos têm 15% de chance de desabar, gerando `tfc:rock/loose/granite` |
| Quebrar `minecraft:sculk*` sem ferramenta de aço negro/azul/vermelho | Escuridão (8 s) e Lentidão II (5 s) |
