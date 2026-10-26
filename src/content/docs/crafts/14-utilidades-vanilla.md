---
title: "📦 Integração de Utilidades Vanilla, Redstone & Decoração (Script 14)"
description: "AVISO — BETA FECHADO DE DESENVOLVIMENTO:"
---


> [!WARNING]
> **AVISO — BETA FECHADO DE DESENVOLVIMENTO:**
> Estas receitas e unificações foram implementadas na versão **v1.2.5** para eliminar gargalos artificiais de progressão do Vanilla e permitir automações plenas mantendo a metalurgia do TFC.

---

## 🎯 Objetivo da Integração

No TerraFirmaCraft tradicional, a ausência de receitas para papel, baldes de ferro, pistões, funis e trilhos bloqueia avanços em mods mágicos e técnicos como **Apotheosis**, **Iron's Spells**, **Create**, **Tom's Storage** e **Sophisticated Backpacks**.

O script `14_vanilla_utility_integration.js` resolve esse problema criando pontes diretas com materiais do TFC, garantindo que o jogador consiga construir oficinas completas e mecanismos de Redstone sem quebrar o realismo geológico.

---

## 📜 1. Papel, Livros & Encantamentos

### 5 Rotas de Papel:
1. **Cana-de-Açúcar TFC:** 3x Cana (`tfc:food/sugarcane`) ➔ 3x Papel.
2. **Papiro TFC:** 3x Papiro selvagem (`tfc:papyrus`) ➔ 3x Papel.
3. **Palha & Água:** 3x Palha seca (`tfc:thatch`) + Balde de Água Doce (`#tfc_arcanum:water_buckets`) ➔ 3x Papel.
4. **Juta & Água:** 3x Fibras de Juta (`tfc:jute_fiber`) + Balde de Água Doce ➔ 3x Papel.
5. **Polpa de Madeira:** 3x Tábuas TFC (`#tfc:lumber`) + Martelo (`#c:tools/hammer`) ➔ 2x Papel.

### Encadernação de Livros:
- **Couro TFC:** 3x Papel + Couro Preparado TFC (`#c:leather`).
- **Peles Tratadas:** 3x Papel + Pele Lavada/Tratada TFC (`tfc:soaked_hide`).
- **Estopa:** 3x Papel + Tecido de Estopa (`tfc:burlap_cloth`).
- **Madeira:** 3x Papel + Tábua TFC (`#tfc:lumber`).
- **Livro e Pena:** Livro + Pena (`#c:feathers`) + Bolsa de Tinta (`#c:dyes/black`).

### Estantes & Mesas:
- **Estante Vanilla:** 3x Livros + 6x Tábuas TFC (necessária para potencializar encantamentos no Apotheosis).
- **Estante Cinzelada:** 6x Tábuas TFC + 3x Placas de Madeira.
- **Atril (Lectern):** 1x Estante de Livros + 4x Placas de Madeira.
- **Mesa de Encantamentos:** 1x Livro + 2x Diamantes TFC (`#c:gems/diamond`) + 4x Obsidiana TFC (`#c:obsidians`).

---

## 🧪 2. Vidraria, Baldes & Caldeirões

- **Garrafas de Vidro Vanilla:** 3x Blocos de Vidro TFC ou 3x Painéis de Vidro ➔ 3x Garrafas.
- **Conversão 1:1:** Garrafas de vidro de sílica/vulcânica do TFC convertem-se diretamente em Garrafas Vanilla na bancada.
- **Painéis de Vidro:** 6x Blocos de Vidro TFC ➔ 16x Painéis de Vidro.
- **Vidro Colorido:** 8x Vidros TFC + Corante correspondente ➔ 8x Vidros Coloridos.
- **Balde de Ferro:** 3x Chapas de Ferro Forjado TFC (`#c:sheets/iron`) em formato de "V".
- **Caldeirão de Ferro:** 7x Chapas de Ferro Forjado TFC em formato de "U".
- **Caldeirão de Cobre:** 7x Chapas de Cobre TFC em formato de "U".
- **Tesoura de Tosa (Shears):** 2x Lâminas de Ferro Forjado TFC cruzadas.
- **Pederneira & Aço:** 1x Pedaço/Lingote de Ferro Forjado + 1x Sílex TFC (`#c:gems/flint`).

---

## ⚙️ 3. Redstone, Automação & Trilhos

- **Pistão:** 3x Tábuas TFC + 4x Pedras TFC + 1x Ferro Forjado + 1x Redstone.
- **Pistão Aderente:** 1x Pistão + 1x Slime ou Cola Vegetal TFC (`tfc:glue`).
- **Funil (Hopper):** 5x Chapas de Ferro Forjado TFC + 1x Baú TFC (`#c:chests/wooden`).
- **Ejetor (Dispenser):** 7x Pedras TFC + 1x Arco TFC + 1x Redstone.
- **Liberador (Dropper):** 7x Pedras TFC + 1x Redstone.
- **Repetidor:** 2x Tochas de Redstone + 1x Redstone + 3x Pedras Lisas TFC (`#tfc:rock/smooth`).
- **Comparador:** 3x Tochas de Redstone + 1x Quartzo + 3x Pedras Lisas TFC.
- **Observador:** 6x Pedras TFC + 2x Redstones + 1x Quartzo.
- **Trilhos Comuns:** 6x Lingotes de Ferro Forjado + 1x Graveto ➔ 16x Trilhos.
- **Trilhos Elétricos:** 6x Lingotes de Ouro + 1x Graveto + 1x Redstone ➔ 6x Trilhos.
- **Carrinhos de Mina:** Fabricados com 5x Lingotes de Ferro Forjado TFC.
- **Create (Liga de Andesito):** 2x Pedras Soltas de Andesito TFC + 2x Pepitas de Ferro/Zinco ➔ 1x Liga de Andesito (`create:andesite_alloy`).

---

## 🔨 4. Bigorna Vanilla & Bancadas de Especialização

> [!IMPORTANT]
> A bigorna vanilla tradicional é imprescindível no modpack para operar os rituais de infusão de encantamentos e reforço de equipamentos do **Apotheosis**.

- **Bigorna Vanilla:** 3x Blocos Duplos de Ferro Forjado TFC + 4x Lingotes de Ferro Forjado TFC.
- **Bancada de Ferraria (Smithing Table):** 2x Lingotes de Ferro Forjado + 4x Tábuas TFC.
- **Bancada de Arquearia (Fletching Table):** 2x Sílex TFC + 4x Tábuas TFC.
- **Mesa de Cartografia:** 2x Papel + 4x Tábuas TFC.
- **Rebolo (Grindstone):** 1x Laje de Pedra Lisa TFC + 2x Gravetos + 2x Tábuas TFC.
- **Tear (Loom):** 2x Fios de Lã/Linha TFC + 2x Tábuas TFC.
- **Cortador de Pedras (Stonecutter):** 1x Chapa de Ferro Forjado + 3x Pedras Lisas TFC.
- **Composteira (Composter):** 7x Placas/Lajes de Madeira TFC.

---

## 🎨 5. Decoração, Slime, Camas & Utilidades

- **Gosma de Slime Ecológica:** 1x Cola Vegetal TFC (`tfc:glue`) + 1x Corante Verde (`#c:dyes/green`) ➔ 1x Gosma de Slime.
- **Dinamite TNT:** 4x Areia TFC + 5x Pólvora (`#c:gunpowders`).
- **Pepitas de Ferro & Ouro:** Desmanche e unificação bidirecional 1 Lingote TFC 🔁 9 Pepitas Vanilla.
- **Correntes:** 1x Chapa/Haste de Ferro Forjado + 2x Pepitas.
- **Lanternas:** Fabricadas com Pepitas de Ferro e Tochas TFC ou Lâmpadas de Óleo.
- **Tochas e Lanternas das Almas:** Usando terra/areia das almas e carvão vegetal TFC.
- **Camas Coloridas:** 3x Fardos de Palha TFC ou Tecido de Lã TFC + 3x Tábuas TFC.
- **Fogão a Lenha (Farmer's Delight):** 3x Tijolos Refratários TFC + 1x Fogueira TFC + 4x Ferro Forjado.
- **Mochila Básica (Sophisticated Backpacks):** 4x Couro Grande TFC + 1x Baú TFC + 4x Linhas TFC.
- **Conector de Inventário (Tom's Storage):** 4x Tábuas TFC + 2x Baús TFC + 1x Redstone + 2x Lingotes de Ferro.
