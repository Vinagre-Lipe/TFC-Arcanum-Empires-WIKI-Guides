---
title: "11 · Chaos Guardian e Endgame (Ato VI)"
description: "Script: serverscripts/11chaosguardianintegration.js"
---


Script: `server_scripts/11_chaos_guardian_integration.js`

Remove **todas** as receitas do Draconic Evolution (nada de reatores, RF ou armaduras sci-fi), mantendo apenas a manipulação dos fragmentos do Caos. Define o endgame: forjar a moldura do Portal do End em Aço Negro, um Olho do Ender ancestral e o Pilão supremo de purificação.

## Receitas removidas

| Filtro | Efeito |
|---|---|
| `mod: draconicevolution` | Remove todas as receitas do Draconic Evolution |

## Fragmentos do Caos

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| 9× Fragmento Grande do Caos `draconicevolution:large_chaos_frag` | shapeless | Estilhaço do Caos `draconicevolution:chaos_shard` | Descompressão |
| 9× Fragmento Médio do Caos `draconicevolution:medium_chaos_frag` | shapeless | Fragmento Grande | |
| 9× Fragmento Pequeno do Caos `draconicevolution:small_chaos_frag` | shapeless | Fragmento Médio | |
| Estilhaço do Caos `draconicevolution:chaos_shard` | shaped | 3×3 de Fragmento Grande | Compressão |
| Fragmento Grande do Caos | shaped | 3×3 de Fragmento Médio | |
| Fragmento Médio do Caos | shaped | 3×3 de Fragmento Pequeno | |

## Endgame

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| Moldura do Portal do End `minecraft:end_portal_frame` | shaped | `'SOS'`, `'BBB'`, `'III'` — S = Chapa de Aço Negro `tfc:metal/sheet/black_steel`, O = Receptáculo de Alma `tombstone:receptacle_of_soul`, B = Bloco de Aço Negro `tfc:metal/block/black_steel`, I = Lingote de Ignitium `cataclysm:ignitium_ingot` | |
| Olho do Ender `minecraft:ender_eye` | shaped | `'ESE'`, `'SMS'`, `'ESE'` — E = Pérola do Ender, S = Essência Arcana `irons_spellbooks:arcane_essence`, M = Olho Monstruoso `cataclysm:monstrous_eye` | Olho ancestral |
| Pilão de Infusão `pylons:infusion_pylon` | shaped | `'CSC'`, `'BDB'`, `'SSS'` — C = Estilhaço do Caos, D = Coração de Dragão `draconicevolution:dragon_heart`, B = Lingote de Ignitium, S = Bloco de Aço Negro | Pilão supremo |

## Eventos

| Evento | Efeito |
|---|---|
| Morte do `draconicevolution:draconic_guardian` | Mensagem global: "O Fim do Caos" |
