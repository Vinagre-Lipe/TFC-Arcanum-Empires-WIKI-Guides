# 🌙 Criaturas Hostis Noturnas na Superfície & Zonas de Segurança (Script 06)

Script: `kubejs/server_scripts/06_surface_hostile_spawns.js`

> [!NOTE]
> **Mecânica de Tensão Noturna:**
> À noite (tempo de jogo entre `13000` e `23000`) no Overworld, a cada 10 segundos, cada jogador exposto na superfície (Y ≥ 60) tem **30% de chance** de atrair uma criatura hostil temática entre 24 e 36 blocos de distância, em locais com nível de luz ≤ 7.

---

## 🛡️ Zonas de Segurança Territorial (Safezones de 40 Blocos)

O script verifica ativamente a proximidade do jogador com civilizações e guarnições amigáveis:
- **Aldeias do Millénaire (`millenaire:*`):** Se o jogador estiver a até 40 blocos de qualquer aldeão, sentinela ou edifício do Millénaire, **nenhum monstro da superfície poderá nascer**.
- **Guarnições do Millager (`millager:*`):** A mesma proteção de 40 blocos se estende aos soldados e postos avançados do mod Millager. Morar dentro ou ao lado de assentamentos fortificados garante noites seguras!

---

## 👾 Tabela de Spawns Noturnos

| Criatura | Mod de Origem | Chance Relativa | Observação |
|---|---|---|---|
| **Zumbi em Decomposição** | `born_in_chaos_v1:decaying_zombie` | 20% | Lento, mas causa infecção persistente |
| **Esqueleto Decrépito** | `born_in_chaos_v1:decrepit_skeleton` | 15% | Arqueiro primitivo agressivo |
| **Carniçal (Ghoul)** | `graveyard:ghoul` | 13% | Carnívoro faminto, salta sobre presas |
| **Espectro (Wraith)** | `graveyard:wraith` | 12% | Voador etéreo imune a empurrões comuns |
| **Revenant** | `graveyard:revenant` | 12% | Cadáver blindado resistente |
| **Cão do Pavor (Dread Hound)** | `born_in_chaos_v1:dread_hound` | 10% | Rápido, caça em matilha |
| **Enderman Noturno** | `minecraft:enderman` | 8% | **Garante drop de 1 a 2 Pérolas do End!** |
| **Wilden Stalker** | `ars_nouveau:wilden_stalker` | 8% | Fera arcana, dropa chifres e asas |
| **Necromante Sombrio** | `irons_spellbooks:necromancer` | 6% | Conjura feitiços de sangue e esqueletos |
| **Koboleton** | `cataclysm:koboleton` | 4% | Guerreiro de ossos com escudo |

---

## 👁️ Drop de Pérolas do End Garantido

Na atualização **v1.2.4**, os Endermen receberam garantia absoluta de drop de **1 a 2 Pérolas do End** ao serem abatidos pelo jogador (`loot_tables.modify`), acabando com a frustração do drop zerado comum do Vanilla e viabilizando o crafting de Waystones e teleporte rápido.
