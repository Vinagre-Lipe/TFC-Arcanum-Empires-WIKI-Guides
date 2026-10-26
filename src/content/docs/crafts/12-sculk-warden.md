---
title: "12 · Sculk Fossilizado e Warden"
description: "Script: serverscripts/12tfcsculkandwarden.js"
---


Script: `server_scripts/12_tfc_sculk_and_warden.js`

Torna as Cidades Ancestrais perigosas e recompensadoras: o Sculk pune ferramentas fracas, o Warden pode derrubar o teto se você não escorar com vigas de suporte do TFC, e os baús trazem ligas de aço raras. Não há receitas de crafting.

## Mineração de Sculk

| Condição | Efeito |
|---|---|
| Quebrar qualquer bloco de sculk sem ferramenta de aço (`steel`), draconic ou netherite | Escuridão II (15 s), Lentidão II (5 s), 6 de dano mágico e som de sonic boom |

## Desabamento acústico

| Gatilho | Chance | Efeito |
|---|---|---|
| Warden ataca ou é atacado por um jogador | 40% por golpe | Se não houver viga de suporte (`tfc:support_beams`) num raio ~5 blocos: 3 blocos de pedregulho caem sobre o jogador + Lentidão III (3 s) |

> [!TIP]
> Faça vigas de suporte com machado (veja [08 · Expansão](/crafts/08-expansao/)) e espalhe pela área de combate.

## Loot de baús (biomas `#c:is_mountain` e `minecraft:deep_dark`)

| Item | ID | Chance |
|---|---|---|
| Lingote de Aço Negro | `tfc:metal/ingot/black_steel` | 35% |
| Lingote de Aço Azul | `tfc:metal/ingot/blue_steel` | 20% |
| Lingote de Aço Vermelho | `tfc:metal/ingot/red_steel` | 20% |
| Diamante TFC | `tfc:gem/diamond` | 40% |
| Esmeralda TFC | `tfc:gem/emerald` | 40% |
| Fragmento de Eco | `minecraft:echo_shard` | 60% |
| Tentáculo do Warden | `apothic_enchanting:warden_tendril` | 30% |
