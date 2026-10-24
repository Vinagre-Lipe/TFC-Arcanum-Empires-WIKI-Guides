# 🌙 Criaturas Hostis Noturnas na Superfície & Zonas de Segurança (Script 06)

Script: `kubejs/server_scripts/06_surface_hostile_spawns.js`

> [!NOTE]
> **Mecânica de Tensão Noturna:**
> À noite (tempo de jogo entre `13000` e `23000`) no Overworld, a cada 8 segundos, cada jogador exposto na superfície (Y ≥ 55) tem **40% de chance** (taxa aumentada em mais de 30% em relação ao padrão) de atrair uma criatura hostil temática entre 22 e 38 blocos de distância, em locais com nível de luz ≤ 7.

---

## 🛡️ Zonas de Segurança Territorial (Safezones de 40 Blocos)

O script verifica ativamente a proximidade do jogador com civilizações e guarnições amigáveis:
- **Aldeias do Millénaire (`millenaire:*`):** Se o jogador estiver a até 40 blocos de qualquer aldeão, sentinela ou edifício do Millénaire, **nenhum monstro da superfície poderá nascer**.
- **Guarnições do Millager (`millager:*`):** A mesma proteção de 40 blocos se estende aos soldados e postos avançados do mod Millager. Morar dentro ou ao lado de assentamentos fortificados garante noites seguras!

---

## 👾 Catálogo Amplo de Monstros Noturnos (Born in Chaos, Iron's Spells & Mowzie's)

Substitui a esterilidade vanilla por uma seleção balanceada e aterradora de criaturas dos mods instalados:

| Categoria | Criaturas Noturnas | Mod de Origem | Comportamento |
|---|---|---|---|
| **Tropas do Caos (50%)** | `born_in_chaos_v1:decaying_zombie`<br>`born_in_chaos_v1:decrepit_skeleton`<br>`born_in_chaos_v1:dread_hound`<br>`born_in_chaos_v1:barrel_zombie`<br>`born_in_chaos_v1:zombie_lumberjack`<br>`minecraft:skeleton`<br>`minecraft:zombie` | Born in Chaos & TFC | Hordas persistentes; zumbis lenhadores com machado, cães rápidos e arqueiros decrépitos. |
| **Especialistas & Emboscadores (30%)** | `born_in_chaos_v1:bone_imp`<br>`born_in_chaos_v1:baby_spider`<br>`born_in_chaos_v1:zombie_fisherman`<br>`born_in_chaos_v1:restless_spirit`<br>`minecraft:creeper`<br>`minecraft:witch` | Born in Chaos & Vanilla | Diabretes velozes, espíritos intangíveis, pescadores com anzol e bruxas alquímicas. |
| **Brutamontes & Caçadores (14%)** | `born_in_chaos_v1:skeleton_thrasher`<br>`born_in_chaos_v1:nightmare_stalker`<br>`mowziesmobs:naga`<br>`minecraft:enderman` | Born in Chaos & Mowzie's | Gigantes blindados que atordoam com golpes pesados, Nagas aladas e Endermans ancestrais. |
| **Arcanistas Sombrios (6%)** | `irons_spellbooks:necromancer`<br>`irons_spellbooks:pyromancer`<br>`irons_spellbooks:cryomancer` | Iron's Spells | Magos hostis que lançam rajadas de chamas, estacas de gelo e ressuscitam mortos. |

---

## 👁️ Drop de Pérolas do End Garantido

Os Endermen possuem garantia absoluta de drop de **1 a 2 Pérolas do End** ao serem abatidos pelo jogador, viabilizando o crafting de Waystones e teleporte rápido sem depender de raras masmorras.
