---
title: "Civilizações do Millénaire & Engenharia TFC"
description: "O Mundo Vivo do Millénaire, Exclusividade de Blocos Vanilla e Sistema de Suprimento de Obras com Recursos TFC"
---

## O Mundo Vivo do Millénaire

O mundo está povoado por 7 grandes culturas: **Normandos, Indianos, Japoneses, Maias, Bizantinos, Inuítes e Seljúcidas**.

- **Localizando Vilas:** Pressione a tecla **`[V]`** para verificar se há alguma vila habitada nas redondezas e a distância até o Centro da Vila (*Town Hall*).
- Visite o centro da vila para conhecer os habitantes, consultar os painéis de projetos e negociar com o líder local.

---

## Regra Física do Mundo: Blocos Vanilla Exclusivos para as Vilas

Para preservar a física realista do **TerraFirmaCraft** (desmoronamentos, gravidade de blocos, alvenaria com argamassa, queima de tochas, conservação de alimentos em vasos/barris e agricultura climática):

1. **Bloqueio de Colocação no Mundo TFC:** Blocos estruturais, madeiras, pedras, terras, baús comuns, barris comuns, fornalhas comuns, tochas comuns e sementes do **Minecraft Vanilla padrão** **não podem ser colocados no mundo pelo jogador**.
2. **Uso Exclusivo nas Vilas Millénaire:** Esses itens do Vanilla são restritos exclusivamente ao **Comércio e Construção/Evolução nas Vilas do Millénaire** (os construtores NPCs da vila podem colocá-los normalmente ao erguer seus edifícios!).
3. **Conversão 1:1 na Bancada (Vanilla ↔ TFC):** Qualquer bloco estrutural Vanilla comprado em uma vila ou encontrado em baús de masmorra pode ser colocado na grade de criação para ser **convertido 1:1 no seu equivalente físico do TerraFirmaCraft** (ex.: `minecraft:oak_log` → `tfc:wood/log/oak`, `minecraft:cobblestone` → `tfc:rock/cobble/granite`, `minecraft:chest` → `tfc:wood/chest/oak`, `minecraft:torch` → `tfc:torch`).
4. **Exceções Funcionais Liberadas:** Bancadas mágicas/funcionais, blocos de Redstone/automação e blocos dimensionais sem equivalente físico no TFC (`minecraft:crafting_table`, `minecraft:enchanting_table`, `minecraft:anvil`, `minecraft:smithing_table`, `minecraft:lectern`, `minecraft:brewing_stand`, `minecraft:cauldron`, `minecraft:obsidian`, `minecraft:amethyst_block`, vidros, lãs, camas e estandartes) **permanecem 100% liberados** para colocação.

---

## Sistema de Construção e Evolução com Itens do TFC

As vilas do Millénaire contam com um **Sistema Integrado de Engenharia TFC**, permitindo que você abasteça todas as obras e evoluções da vila usando diretamente **materiais nativos do TerraFirmaCraft**!

### 1. Entrega Direta Interativa (`Shift + Clique Direito` ou `/suprir_vila`)
- Aproxime-se de qualquer vila Millénaire com materiais do TFC na mochila (toras, tábuas, pedras brutas, pedregulhos, pedras polidas, tijolos, areia, terra, argila, palha ou lã).
- Dê **`Shift + Clique Direito`** em qualquer **Painel da Vila (`millenaire:village_panel`)** ou **Baú Trancado (`millenaire:locked_chest`)** — ou digite o comando **`/suprir_vila`**.
- O sistema lê automaticamente a lista de recursos que faltam para o **projeto de construção/evolução atual da vila**, consome os equivalentes TFC da sua mochila, deposita os blocos exatos no estoque da Prefeitura, concede **+Reputação na Vila** e inicia a obra imediatamente!
- Use **`/vila_recursos`** a qualquer momento para consultar o relatório completo do projeto atual da vila e a quantidade exata de recursos faltantes.
- Use **`/suprir_vila tudo`** caso queira doar todo o estoque de materiais de construção TFC da sua mochila para a reserva geral da Prefeitura.

### 2. Assimilador Automático da Prefeitura (Ciclo de 5s)
- Quando você **vende materiais TFC** no comércio da Prefeitura (*Town Hall*) ou deposita itens TFC diretamente nos baús da vila, o **Assimilador Automático** converte esses itens TFC dentro dos baús da Prefeitura a cada **5 segundos** nos exatos materiais que a vila precisa para o próximo nível de evolução!

### 3. Tabela de Equivalência: Insumos TFC → Construção Millénaire

| Material Nativo do TFC | Proporção | Recursos de Construção Gerados na Vila Millénaire |
| :--- | :---: | :--- |
| **Toras TFC** (`tfc:wood/log/*`) | `1 : 1` | Qualquer tora exigida pelo projeto (`oak_log`, `spruce_log`, `birch_log`, `jungle_log`, `acacia_log`, `dark_oak_log`, `anywood_log`) |
| **Tábuas TFC** (`tfc:wood/lumber/*`) | `2 : 1` | `millenaire:timber_frame_plain`, `timber_frame_cross`, `wooden_bars`, `paper_wall` ou toras |
| **Pedregulho TFC** (`tfc:rock/cobble/*`) | `1 : 1` | `minecraft:cobblestone`, `stone`, `mossy_stone_bricks`, `byzantine_stone_tiles` |
| **Rocha Bruta TFC** (`tfc:rock/raw/*`) | `1 : 1` | `minecraft:stone`, `diorite`, `cobblestone`, `smooth_stone`, `polished_diorite` |
| **Rocha Polida / Tijolos TFC** (`tfc:rock/smooth/*`, `bricks/*`) | `1 : 1` | `minecraft:smooth_stone`, `polished_diorite`, `stone`, `mossy_stone_bricks`, `path_slabs` |
| **Arenitos & Areias TFC** (`tfc:*_sandstone/*`, `tfc:sand/*`) | `1 : 1` | `minecraft:sandstone`, `red_sandstone`, `sand`, `sandstone_carved`, `ochre_sandstone_carved` |
| **Terras, Lamas & Tijolos de Barro TFC** (`tfc:dirt/*`, `mud_bricks/*`) | `1 : 1` | `millenaire:mud_brick`, `dirt_wall`, `minecraft:dirt`, `coarse_dirt`, `clay`, `sod_*` |
| **Tijolos & Argamassa TFC** (`tfc:brick/*`, `fire_brick`, `mortar`) | `1 : 1` | `millenaire:painted_brick_white`, `decorated_brick_white`, `byzantine_tiles`, `minecraft:bricks` |
| **Colmo & Palha TFC** (`tfc:thatch` / `2x tfc:straw`) | `1 : 1` | `millenaire:thatch`, `straw_bed`, `timber_frame_plain`, `mud_brick` |
| **Tecidos & Lã TFC** (`tfc:wool_cloth`, `burlap_cloth`, `wool`) | `1 : 1` | `minecraft:white_wool`, `white_banner`, `millenaire:charpoy`, `paper_wall` |
| **Lingotes de Ferro / Ouro TFC** (`wrought_iron`, `gold`) | `1 : 1` | `minecraft:iron_ingot`, `gold_ingot`, `cauldron` |

---

## Mercadores Viajantes de Mods

Assim que a vila constrói sua praça de mercado, ela passa a receber mercadores especialistas:

- **Mercador Arcanista:** Vende *Source Gems*, mudas de *Archwood*, tintas arcanas, essências do *Iron's Spells* e *Gem Dust*.
- **Mercador Engenheiro Mecânico:** Vende ligas de andesito, engrenagens, rodas d'água, lingotes de zinco e prensas do *Create*.
- **Mestre Metalurgista TFC:** Vende metais, foles, cadinhos, argamassa e pós de caulinita, criolita e grafite!
