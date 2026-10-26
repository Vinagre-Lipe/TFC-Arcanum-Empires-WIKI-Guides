---
title: "20 · Transmutação de Restos em XP & Equipamentos de Expedição"
description: "Script: kubejs/serverscripts/20moblootxptransmutationandexpedition.js"
---


Script: `kubejs/server_scripts/20_mob_loot_xp_transmutation_and_expedition.js`

Resolve dois dos maiores gargalos dos servidores e jogadores de sobrevivência:
1. **Transmutação do entulho de mobtrap** (toneladas de Carne Podre, Ossos e Olhos de Aranha) em Frascos de Experiência e Couro limpo.
2. **Receitas rústicas no TFC para Equipamentos de Expedição e Amuletos Situacionais** (Aljavas, Cintos, Nadadeiras, Snorkel e Amuletos).

---

## 🧪 Transmutação de Restos Mortais em Experiência (XP)

| Resultado | Tipo | Ingredientes | Finalidade / Benefício |
|---|---|---|---|
| **Frasco de XP de Relíquia** `relics:relic_experience_bottle` | shaped | 6× Carne Podre + 2× Ossos + Olho de Aranha + Frasco de Vidro | Condensa necromassa em 100+ pontos de XP arcana |
| **2× Frascos de Experiência** `minecraft:experience_bottle` | shapeless | 7× Carne Podre + Redstone + Frasco de Vidro | Garante XP rápida para encantamento e reparos |
| **Couro Rústico Limpo** `minecraft:leather` | smelting | 1× Carne Podre na Fogueira ou Forja | Desidrata carne putrefata em fitas de couro úteis |

---

## 🎒 Equipamentos de Expedição & Sobrevivência Rústica

Permite que itens essenciais de utilidade e exploração aquática/terrestre sejam criados com materiais do TFC:

| Equipamento | Mod de Origem | Receita Adaptada no TFC | Efeito na Exploração |
|---|---|---|---|
| **Aljava de Flechas** `relics:arrow_quiver` | Relics | 6× Couro TFC + 2× Cordas TFC + Chapa de Cobre | Armazena flechas extras e concede disparo rápido |
| **Cinto de Caçador** `relics:hunter_belt` | Relics | 5× Couro TFC + Corda + Fivela de Ferro Forjado | Aumenta velocidade ao rastejar e bônus de caça |
| **Nadadeiras de Mergulho** `artifacts:flippers` | Artifacts | 4× Couro TFC + 2× Fita Adesiva/Resina TFC | Nado ultraveloz em rios profundos e oceanos |
| **Snorkel** `artifacts:snorkel` | Artifacts | 4× Bambu/Cana TFC + Fita de Borracha + Vidro de Lâmpada | Respiração subaquática estendida |
| **Pingente de Chamas** `artifacts:flame_pendant` | Artifacts | Lingote de Ouro TFC + 4× Pó de Blaze + Corda | Causa queimadura reflexa em atacantes |
| **Pingente de Espinhos** `artifacts:thorn_pendant` | Artifacts | Lingote de Ferro Forjado + 4× Cactos + Corda | Retaliação com dano perfurante físico |
| **Vaso Antídoto** `artifacts:antidote_vessel` | Artifacts | Pote Cerâmico TFC + 4× Folhas Medicinais + Corda | Reduz duração de venenos e toxinas em 75% |
| **Ímã de Experiência** `nameless_trinkets:experience_magnet` | Nameless Trinkets | Chapa de Cobre + Chapa de Ferro + 4× Redstone + Frasco de XP | Atrai orbes de XP de longas distâncias |
| **Bateria de Experiência** `nameless_trinkets:experience_battery` | Nameless Trinkets | Bloco de Cobre TFC + 4× Ametista TFC + Frasco de XP | Armazena níveis de XP para evitar perdas ao morrer |
