# 07 · Integração TFC ⇄ Vanilla

Script: `server_scripts/07_tfc_vanilla_integration.js`

Impede atalhos vanilla (fornalhas e ferramentas) e converte tudo o que você encontra em masmorras/estruturas para equivalentes do TFC — por receita, por drop de bloco, no loot de baús e até automaticamente no inventário. Também redireciona o Nether para o **Undergarden** e adiciona receitas de colmeia.

## Receitas removidas (exploits vanilla)

| Item | ID |
|---|---|
| Fornalha / Alto-forno / Defumador | `minecraft:furnace`, `minecraft:blast_furnace`, `minecraft:smoker` |
| Ferramentas de madeira (picareta, machado, pá, enxada, espada) | `minecraft:wooden_*` |
| Ferramentas de pedra (picareta, machado, pá, enxada, espada) | `minecraft:stone_*` |
| Ferramentas de ferro (picareta, machado, pá, enxada, espada) | `minecraft:iron_*` |
| Armadura de ferro (capacete, peitoral, calças, botas) | `minecraft:iron_helmet` … `minecraft:iron_boots` |
| Escudo | `minecraft:shield` |
| Picareta, machado e espada de diamante | `minecraft:diamond_pickaxe`, `minecraft:diamond_axe`, `minecraft:diamond_sword` |

## Conversões por crafting (todas shapeless, sentido vanilla → TFC)

| Resultado | Tipo | Ingredientes | Observações |
|---|---|---|---|
| 4× Pedra Solta de Granito `tfc:rock/loose/granite` | shapeless | Pedregulho `minecraft:cobblestone` | |
| 4× Pedra Solta de Granito `tfc:rock/loose/granite` | shapeless | Pedregulho Musgoso `minecraft:mossy_cobblestone` | |
| Granito Bruto `tfc:rock/raw/granite` | shapeless | Pedra `minecraft:stone` | |
| Tijolos de Granito `tfc:rock/bricks/granite` | shapeless | `minecraft:stone_bricks` | |
| Tijolos Musgosos de Granito `tfc:rock/mossy_bricks/granite` | shapeless | `minecraft:mossy_stone_bricks` | |
| Tijolos Rachados de Granito `tfc:rock/cracked_bricks/granite` | shapeless | `minecraft:cracked_stone_bricks` | |
| Granito Liso `tfc:rock/smooth/granite` | shapeless | `minecraft:smooth_stone` | |
| Granito Cinzelado `tfc:rock/chiseled/granite` | shapeless | `minecraft:chiseled_stone_bricks` | |
| Tronco de Carvalho TFC `tfc:wood/log/oak` | shapeless | `minecraft:oak_log` | |
| Tronco de Abeto TFC `tfc:wood/log/spruce` | shapeless | `minecraft:spruce_log` | |
| Tronco de Bétula TFC `tfc:wood/log/birch` | shapeless | `minecraft:birch_log` | |
| Tronco de Acácia TFC `tfc:wood/log/acacia` | shapeless | `minecraft:acacia_log` | |
| Tronco de Sumaúma `tfc:wood/log/kapok` | shapeless | `minecraft:jungle_log` | |
| Tronco de Nogueira `tfc:wood/log/hickory` | shapeless | `minecraft:dark_oak_log` | |
| Tronco de Mangue TFC `tfc:wood/log/mangrove` | shapeless | `minecraft:mangrove_log` | |
| Tronco de Pau-rosa `tfc:wood/log/rosewood` | shapeless | `minecraft:cherry_log` | |
| 4× Tábua de Carvalho `tfc:wood/lumber/oak` | shapeless | `minecraft:oak_planks` | |
| 4× Tábua de Abeto `tfc:wood/lumber/spruce` | shapeless | `minecraft:spruce_planks` | |
| 4× Tábua de Bétula `tfc:wood/lumber/birch` | shapeless | `minecraft:birch_planks` | |
| 4× Tábua de Nogueira `tfc:wood/lumber/hickory` | shapeless | `minecraft:dark_oak_planks` | |
| Lingote de Ferro Forjado `tfc:metal/ingot/wrought_iron` | shapeless | `minecraft:iron_ingot` | |
| Lingote de Cobre TFC `tfc:metal/ingot/copper` | shapeless | `minecraft:copper_ingot` | |
| Lingote de Ouro TFC `tfc:metal/ingot/gold` | shapeless | `minecraft:gold_ingot` | |
| Couro Grande Preparado `tfc:large_prepared_hide` | shapeless | `minecraft:leather` | |
| Pão de Trigo TFC `tfc:food/wheat_bread` | shapeless | `minecraft:bread` | |
| Maçã Vermelha TFC `tfc:food/red_apple` | shapeless | `minecraft:apple` | |
| 16× Flecha `minecraft:arrow` | shapeless | 16× `tfc:glow_arrow` | Sentido TFC → vanilla |
| Tocha TFC `tfc:torch` | shapeless | `minecraft:torch` | |
| Espada de Ferro Forjado `tfc:metal/sword/wrought_iron` | shapeless | `minecraft:iron_sword` | |
| Picareta de Ferro Forjado `tfc:metal/pickaxe/wrought_iron` | shapeless | `minecraft:iron_pickaxe` | |
| Machado de Ferro Forjado `tfc:metal/axe/wrought_iron` | shapeless | `minecraft:iron_axe` | |
| Pá de Ferro Forjado `tfc:metal/shovel/wrought_iron` | shapeless | `minecraft:iron_shovel` | |
| Capacete de Ferro Forjado `tfc:metal/helmet/wrought_iron` | shapeless | `minecraft:iron_helmet` | |
| Peitoral de Ferro Forjado `tfc:metal/chestplate/wrought_iron` | shapeless | `minecraft:iron_chestplate` | |
| Grevas de Ferro Forjado `tfc:metal/greaves/wrought_iron` | shapeless | `minecraft:iron_leggings` | |
| Botas de Ferro Forjado `tfc:metal/boots/wrought_iron` | shapeless | `minecraft:iron_boots` | |
| Baú de Carvalho TFC `tfc:wood/chest/oak` | shapeless | `minecraft:chest` | |
| Baú com Armadilha TFC `tfc:wood/trapped_chest/oak` | shapeless | `minecraft:trapped_chest` | |
| Barril de Carvalho TFC `tfc:wood/barrel/oak` | shapeless | `minecraft:barrel` | |
| Barras de Ferro Forjado `tfc:metal/bars/wrought_iron` | shapeless | `minecraft:iron_bars` | |
| Lâmpada de Cobre `tfc:metal/lamp/copper` | shapeless | `minecraft:lantern` | |

## Abelhas e colmeias

| Resultado | Tipo | Ingredientes/Padrão | Observações |
|---|---|---|---|
| Colmeia `minecraft:beehive` | shaped | `'LLL'`, `'HHH'`, `'LLL'` — L = `#tfc:lumber`, H = Favo de Mel `minecraft:honeycomb` | |
| 3× Favo de Mel `minecraft:honeycomb` | shapeless | 3× `#tfc:plants` + Açúcar `minecraft:sugar` | Coleta silvestre |

## Conversão de drops ao quebrar blocos

| Bloco quebrado | Drop substituído por |
|---|---|
| `minecraft:cobblestone`, `minecraft:mossy_cobblestone`, `minecraft:stone` | 4× `tfc:rock/loose/granite` |
| `minecraft:stone_bricks` | `tfc:rock/bricks/granite` |
| `minecraft:mossy_stone_bricks` | `tfc:rock/mossy_bricks/granite` |
| `minecraft:cracked_stone_bricks` | `tfc:rock/cracked_bricks/granite` |
| `minecraft:smooth_stone` | `tfc:rock/smooth/granite` |
| `minecraft:chiseled_stone_bricks` | `tfc:rock/chiseled/granite` |
| `minecraft:iron_bars` | `tfc:metal/bars/wrought_iron` |
| `minecraft:chest` | `tfc:wood/chest/oak` |
| `minecraft:barrel` | `tfc:wood/barrel/oak` |
| `minecraft:lantern` | `tfc:metal/lamp/copper` |
| `minecraft:torch` | `tfc:torch` |
| `minecraft:oak_planks` | 4× `tfc:wood/lumber/oak` |
| `minecraft:spruce_planks` | 4× `tfc:wood/lumber/spruce` |
| `minecraft:birch_planks` | 4× `tfc:wood/lumber/birch` |
| `minecraft:dark_oak_planks` | 4× `tfc:wood/lumber/hickory` |
| `minecraft:oak_log` / `spruce_log` / `birch_log` | `tfc:wood/log/oak` / `spruce` / `birch` |
| Minério de Carvão (normal/deepslate) | `tfc:ore/bituminous_coal` |
| Minério de Ferro (normal/deepslate) | `tfc:ore/rich_hematite` |
| Minério de Cobre (normal/deepslate) | `tfc:ore/rich_native_copper` |
| Minério de Ouro (normal/deepslate) | `tfc:ore/rich_native_gold` |

## Loot de baús e inventário

Itens em baús são convertidos no loot; equipamentos vanilla que entram no inventário são convertidos automaticamente **preservando encantamentos/afixos**.

| Item vanilla | Vira |
|---|---|
| `minecraft:iron_ingot` (baú) | `tfc:metal/ingot/wrought_iron` |
| `minecraft:raw_iron` (baú) | `tfc:ore/rich_hematite` |
| `minecraft:raw_copper` (baú) | `tfc:ore/rich_native_copper` |
| `minecraft:raw_gold` (baú) | `tfc:ore/rich_native_gold` |
| Ferramentas/armadura de ferro + escudo | Equivalente em **ferro forjado** (`wrought_iron`; calças → `greaves`) |
| Ferramentas/armadura de diamante | Equivalente em **aço negro** (`black_steel`) |
| Ferramentas/armadura de ouro | Equivalente em **aço** (`steel`) |
| Armadura de cota de malha | Equivalente em **bronze** (`bronze`) |

## Tags de mineração

| Tag | Blocos adicionados |
|---|---|
| `minecraft:mineable/pickaxe` | stone, cobblestone, mossy_cobblestone, stone_bricks (normal/musgoso/rachado/cinzelado), iron_bars, chain, lantern |
| `minecraft:mineable/axe` | chest, trapped_chest, barrel, troncos vanilla (oak, spruce, birch, acacia, jungle, dark_oak, mangrove, cherry), tábuas oak/spruce/birch/dark_oak |
| `minecraft:mineable/shovel` | dirt, coarse_dirt, gravel, sand |

## Redirecionamento do Nether

| Evento | Efeito |
|---|---|
| Entrar em `minecraft:the_nether` | Jogador é teleportado para `undergarden:undergarden` (Y = 90, mesmas X/Z) |
