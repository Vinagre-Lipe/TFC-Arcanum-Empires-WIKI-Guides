---
title: "21 — Fogueira Vanilla, Cocção & Avanços FTB"
description: "TerraFirmaCraft: Arcanum & Empires"
---


> **TerraFirmaCraft: Arcanum & Empires (NeoForge 1.21.1 — v1.3.0)**  
> **Script KubeJS:** `kubejs/server_scripts/21_vanilla_campfire_and_cooking.js`  
> **Status:** Ativo no Servidor & Cliente

---

## 🍳 Cocção de Alimentos TFC na Fogueira Vanilla & Defumador

Para integrar a culinária do *Farmer's Delight* e do Minecraft Vanilla com o rigor nutricional do *TerraFirmaCraft*, foram cadastradas **50 receitas de cocção** que permitem colocar carnes cruas, peixes nativos, aves, massas de pão e vegetais do TFC diretamente nos espetos da Fogueira Vanilla (`minecraft:campfire`) e na grelha do Defumador (`minecraft:smoker`).

### Parâmetros Térmicos
* **Fogueira Vanilla (`campfireCooking`):** 600 ticks (30 segundos), concedendo +0.35 XP por porção assada.
* **Defumador (`smoking`):** 100 ticks (5 segundos com fumaça controlada), mantendo 100% dos nutrientes.

---

## 📑 Tabela de Alimentos Habilitados na Fogueira

| Alimento Cru TFC | Alimento Assado Resultante | Tempo Fogueira | Rendimento Nutricional |
| :--- | :--- | :---: | :--- |
| `tfc:food/beef` (Carne Bovina) | `tfc:food/cooked_beef` | 30s | Proteína Nobre |
| `tfc:food/pork` (Carne Suína) | `tfc:food/cooked_pork` | 30s | Proteína & Lipídios |
| `tfc:food/chicken` (Frango) | `tfc:food/cooked_chicken` | 30s | Proteína Leve |
| `tfc:food/mutton` (Cordeiro) | `tfc:food/cooked_mutton` | 30s | Proteína Rústica |
| `tfc:food/quail`, `duck`, `pheasant`, `grouse`, `turkey` | Variantes de Aves Assadas | 30s | Caça de Penas |
| `tfc:food/venison` (Cervo) | `tfc:food/cooked_venison` | 30s | Carne de Caça Nobre |
| `tfc:food/bear`, `wolf`, `hyena`, `fox` | Carnes de Predadores Assadas | 30s | Sobrevivência Selvagem |
| `tfc:food/rabbit` (Coelho) | `tfc:food/cooked_rabbit` | 30s | Proteína de Pequeno Porte |
| `tfc:food/horse_meat`, `chevon`, `bison`, `camelidae` | Carnes de Grande Porte Assadas | 30s | Alta Saciedade |
| `minecraft:egg` (Ovo Cru) | `tfc:food/cooked_egg` (Ovo Cozido) | 30s | Café da Manhã Rápido |
| `tfc:food/calamari`, `shellfish`, `frog_legs` | Frutos do Mar e Anfíbios Assados | 30s | Culinária Costeira |
| Peixes de Água Doce (`salmon`, `cod`, `bluegill`, `trout`, `bass`, etc.) | Peixes Grelhados TFC (16 espécies) | 30s | Ômega 3 & Proteína |
| `tfc:food/potato`, `tfc:food/cassava` | Batata / Mandioca Assada | 30s | Carboidratos Básicos |
| Massas de Cereal (`wheat`, `barley`, `oat`, `rye`, `maize`, `rice`) | Pães Rústicos Assados | 30s | Fibras e Grãos |

---

## 🎖️ Gatilhos de Avanço Instantâneos (FTB Quests)

Em virtude da complexidade de metadados das ferramentas do TFC, o script implementa escutas nativas no evento `PlayerEvents.inventoryChanged` para disparar os avanços canônicos sem atrasos:

1. **Primeira Faca:** Qualquer item com a tag `#c:tools/knife` ou `#tfc:knives` concede o avanço `tfc_arcanum:first_knife` e conclui a quest correspondente no Capítulo 1 (*Sobreviva*).
2. **Primeiro Machado:** Qualquer item com `#minecraft:axes` ou `#tfc:axes` concede `tfc_arcanum:first_axe`.
3. **Primeiro Martelo:** Qualquer item com `#c:tools/hammer` ou `#tfc:hammers` concede `tfc_arcanum:first_hammer`.
