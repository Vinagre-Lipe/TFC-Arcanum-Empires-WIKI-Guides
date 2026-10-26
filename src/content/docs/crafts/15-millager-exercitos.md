---
title: "⚔️ Integração Militar Millager & Exércitos Mercenários (Script 15)"
description: "AVISO — BETA FECHADO DE DESENVOLVIMENTO:"
---


> [!WARNING]
> **AVISO — BETA FECHADO DE DESENVOLVIMENTO:**
> Implementado na versão **v1.2.6** com a adição do mod **Millager (Village Defenders v0.7.7)**, integrando defesas de vilarejo e contratação de tropas com a economia histórica do **Millénaire**.

---

## 🛡️ Visão Geral do Sistema

O modpack introduz um sistema de estratégia militar e defesa de fronteiras:
1. **Defensores de Vilas (Millager):** Aldeões comuns podem ser promovidos a combatentes de elite através de **Ordens de Profissão Militar**.
2. **Armas Táticas:** Introdução de Lanças de Cavalaria (para investidas montadas), Broquel ágil (para combate corpo a corpo rápido), Coquetéis Molotov e TNT na vara.
3. **Mesa Tática de Areia:** Permite visualizar posições estratégicas e gerenciar patrulhas e postos de sentinela ao redor de suas bases.
4. **Contratos Mercenários do Millénaire:** Você pode contratar esquadrões de soldados usando diretamente as moedas históricas do Millénaire (*Deniers* de cobre, prata e ouro).

---

## 🎯 1. Equipamentos Táticos & Armas

| Equipamento | Receita com TFC | Função em Combate |
|---|---|---|
| **Mesa Tática de Areia** | 6x Corantes (vermelho, azul, papel, branco, amarelo, verde) + 2x Toras TFC + 1x Pedra Solta TFC | Gerenciamento de esquadrões de guardas |
| **Broquel (Buckler)** | 1x Lingote de Metal TFC + 3x Tábuas TFC + 1x Tira de Couro TFC | Escudo leve de bloqueio rápido e alta mobilidade |
| **Lança de Ferro (Lancer Spear)** | 1x Lingote de Ferro Forjado TFC + 2x Hastes de Madeira TFC | Multiplica o dano proporcionalmente à velocidade da montaria |
| **Lança de Ouro** | 1x Lingote de Ouro TFC + 2x Hastes de Madeira TFC | Alta velocidade de ataque e manuseio rápido |
| **Lança de Diamante** | 1x Diamante TFC + 2x Hastes de Madeira TFC | Dano penetrante extremo contra armaduras pesadas |
| **Infusor de Totens** | 1x Âmbar de Golem + 1x Totem da Imortalidade + 2x Ouro + 5x Pedras TFC | Revive e energiza defensores caídos |
| **Coquetel Molotov** | 1x Garrafa de Vidro + 1x Papel/Estopa + 1x Pólvora/Pó de Carvão | Cria poças de fogo contínuo contra hordas |
| **TNT na Vara** | 1x Dinamite TNT + 1x Haste de Madeira TFC + 1x Fio TFC | Ataque explosivo de precisão sem detonar o próprio soldado |

---

## 🎖️ 2. Ordens de Profissão Militar

Todas as ordens militares utilizam **1x Bloco de Esmeralda + 1x Papel** combinados aos equipamentos forjados do TFC:

- 🗡️ **Mestre das Espadas (Swordmaster):** Espada de Ferro Forjado TFC + Escudo de Ferro TFC. Especialista em combate corpo a corpo sustentado.
- 🔨 **Rompedor de Linha (Breacher):** Maça de Ferro TFC + Peitoral de Bronze TFC. Guerreiro pesado para romper falanges inimigas.
- 🏹 **Arqueiro Real (Archer):** Arco TFC + Pena. Sentinela de longo alcance para torres e muralhas.
- 🏇 **Lanceiro Montado (Lancer):** Lança de Cavalaria de Ferro + Sela. Cavalaria pesada de ataque relâmpago.
- 🩺 **Médico de Campo (Doctor):** Frasco de Poção/Gordura + Pomada/Bolsa de Cura. Fornece regeneração aos companheiros de esquadrão.
- 🛡️ **Espancador Pesado (Mauler):** Martelo Pesado de Ferro + Lingote de Ferro Forjado. Atordoa e quebra a defesa de inimigos de escudo.
- 🦅 **Batedor Avançado (Scouter):** Besta de Caça + Foguete de Artifício + Sela. Reconhecimento rápido de ameaças e patrulha perimetral.
- 💣 **Tropa de Choque (Rioter):** TNT na Vara + Coquetel Molotov + Escudo TFC. Especialista em controle de multidões e dispersão de monstros.

---

## 💰 3. Contratos Mercenários com o Millénaire

Se sua vila do Millénaire for próspera, você pode converter o lucro do comércio exterior em poder militar instantâneo:

1. **Convocação de Infantaria Mercenária (`millager:infantry_muster_order`):**
   - **Custo:** 1x **Denier de Prata** (`millenaire:denier_argent`) + Espada de Ferro TFC + Escudo TFC + Papel + Tábua.
   - **Efeito:** Convoca guerreiros experientes para proteger o feudo.
2. **Convocação de Cavalaria de Choque (`millager:cavalry_muster_order`):**
   - **Custo:** 1x **Denier de Ouro** (`millenaire:denier_or`) + Lança de Cavalaria + Sela + Papel.
   - **Efeito:** Convoca lanceiros montados de alta elite.
3. **Milícia Popular de Voluntários (`millager:random_muster_order`):**
   - **Custo:** 8x **Deniers de Cobre** (`millenaire:denier`) + Papel + Tábua.
   - **Efeito:** Convoca recrutas e guardas auxiliares para defesa civil.

---

## 🛡️ 4. Zona de Segurança Territorial

Conforme ajustado em `06_surface_hostile_spawns.js`, todas as entidades pertencentes ao **Millénaire** e ao **Millager** possuem uma **zona de exclusão de spawns hostis de 40 blocos**, impedindo que creepers, zumbis da superfície ou esqueletos nasçam imediatamente dentro do perímetro das muralhas da sua vila!
