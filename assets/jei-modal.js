// Interactive JEI Recipe Modal for TFC: Arcanum & Empires Wiki
(function () {
  // Auxiliary recipes & acquisition methods for base/sub-ingredients
  const AUX_RECIPES = {
    // Stone Tools & Heads (TFC)
    "tfc_stone_knife": {
      title: "Faca de Pedra TFC (#tfc:knives)",
      badge: "Shaped 2×2",
      type: "3x3",
      cells: ["tfc_stone_knife_head|Lâmina de Faca de Pedra", "", "", "tfc_twig|Graveto (#c:rods/wooden)", "", "", "", "", ""],
      outIcon: "tfc_stone_knife", outTip: "Faca de Pedra (tfc:stone/knife/*)", outCount: 1,
      idText: "tfc:stone/knife/*", noteText: "Qualquer rocha"
    },
    "tfc_stone_knife_head": {
      title: "Lâmina de Faca de Pedra (Rock Knapping)",
      badge: "Rock Knapping (2 Pedras)",
      type: "knap", knapType: "rock",
      rows: [" #   ", "##   ", "##   ", "##   ", "##   "],
      outIcon: "tfc_stone_knife_head", outTip: "Lâmina de Faca de Pedra",
      idText: "tfc:stone/knife_head/*", noteText: "Segure 2 Pedras Soltas + Botão Direito"
    },
    "tfc_stone_axe": {
      title: "Machado de Pedra TFC (#c:tools/axe)",
      badge: "Shaped 2×2",
      type: "3x3",
      cells: ["tfc_stone_axe_head|Cabeça de Machado de Pedra", "", "", "tfc_twig|Graveto (#c:rods/wooden)", "", "", "", "", ""],
      outIcon: "tfc_stone_axe", outTip: "Machado de Pedra (tfc:stone/axe/*)", outCount: 1,
      idText: "tfc:stone/axe/*", noteText: "Derruba árvores inteiras"
    },
    "tfc_stone_axe_head": {
      title: "Cabeça de Machado de Pedra (Rock Knapping)",
      badge: "Rock Knapping (2 Pedras)",
      type: "knap", knapType: "rock",
      rows: [" #   ", "#### ", "#####", "#### ", " #   "],
      outIcon: "tfc_stone_axe_head", outTip: "Cabeça de Machado de Pedra",
      idText: "tfc:stone/axe_head/*", noteText: "Segure 2 Pedras Soltas + Botão Direito"
    },
    "tfc_stone_hammer": {
      title: "Martelo de Pedra TFC (#c:tools/hammer)",
      badge: "Shaped 2×2",
      type: "3x3",
      cells: ["tfc_stone_hammer_head|Cabeça de Martelo de Pedra", "", "", "tfc_twig|Graveto (#c:rods/wooden)", "", "", "", "", ""],
      outIcon: "tfc_stone_hammer", outTip: "Martelo de Pedra (tfc:stone/hammer/*)", outCount: 1,
      idText: "tfc:stone/hammer/*", noteText: "Para bigorna e britagem"
    },
    "tfc_stone_hammer_head": {
      title: "Cabeça de Martelo de Pedra (Rock Knapping)",
      badge: "Rock Knapping (2 Pedras)",
      type: "knap", knapType: "rock",
      rows: ["#####", "#####", "  #  ", "     ", "     "],
      outIcon: "tfc_stone_hammer_head", outTip: "Cabeça de Martelo de Pedra",
      idText: "tfc:stone/hammer_head/*", noteText: "Segure 2 Pedras Soltas + Botão Direito"
    },

    // Metals: Sheets, Double Ingots, Ingots, Blocks, Swords
    "tfc_sheet_wrought_iron": {
      title: "Chapa de Ferro Forjado (Anvil Working)",
      badge: "Bigorna TFC (Tier 3+)",
      type: "process",
      inIcon: "tfc_double_ingot_wrought_iron", inTip: "Lingote Duplo de Ferro Forjado", inCount: 1,
      procLabel: "🔨 Bigorna (Hit ×3)",
      outIcon: "tfc_sheet_wrought_iron", outTip: "Chapa de Ferro Forjado (tfc:metal/sheet/wrought_iron)", outCount: 1,
      idText: "tfc:metal/sheet/wrought_iron", noteText: "Forjar na Bigorna aquecido"
    },
    "tfc_double_ingot_wrought_iron": {
      title: "Lingote Duplo de Ferro Forjado (Welding)",
      badge: "Soldagem na Bigorna + Fluxo",
      type: "3x3",
      cells: ["tfc_ingot_wrought_iron|Lingote de Ferro Forjado (Quente)", "tfc_powder_flux|Fluxo (tfc:powder/flux)", "tfc_ingot_wrought_iron|Lingote de Ferro Forjado (Quente)", "", "tfc_stone_hammer|Martelo (Shift + Clique na Bigorna)", "", "", "", ""],
      outIcon: "tfc_double_ingot_wrought_iron", outTip: "Lingote Duplo de Ferro Forjado", outCount: 1,
      idText: "tfc:metal/double_ingot/wrought_iron", noteText: "Soldar 2 lingotes quentes com Fluxo"
    },
    "tfc_ingot_wrought_iron": {
      title: "Lingote de Ferro Forjado (Bloomery / Refino)",
      badge: "Bloomery + Bigorna",
      type: "process",
      inIcon: "tfc_ore_iron", inTip: "Minério de Ferro (Hematita / Magnetita / Limonita) + Carvão Vegetal", inCount: 1,
      procLabel: "🔥 Bloomery ➔ 🔨 Bigorna",
      outIcon: "tfc_ingot_wrought_iron", outTip: "Lingote de Ferro Forjado (tfc:metal/ingot/wrought_iron)", outCount: 1,
      idText: "tfc:metal/ingot/wrought_iron", noteText: "Ou converter Iron Ingot de dungeons"
    },
    "tfc_sword_wrought_iron": {
      title: "Espada de Ferro Forjado (Forja TFC)",
      badge: "Bigorna TFC + Cabo",
      type: "process",
      inIcon: "tfc_double_ingot_wrought_iron", inTip: "Lingote Duplo de Ferro Forjado (na Bigorna)", inCount: 1,
      procLabel: "🔨 Forjar Lâmina + Graveto",
      outIcon: "tfc_sword_wrought_iron", outTip: "Espada de Ferro Forjado (tfc:metal/sword/wrought_iron)", outCount: 1,
      idText: "tfc:metal/sword/wrought_iron", noteText: "Ou converter Espada de Ferro Vanilla"
    },
    "tfc_block_wrought_iron": {
      title: "Bloco de Ferro Forjado",
      badge: "Shaped 3×3",
      type: "3x3",
      cells: ["tfc_sheet_wrought_iron|Chapa de Ferro Forjado", "tfc_sheet_wrought_iron|Chapa de Ferro Forjado", "tfc_sheet_wrought_iron|Chapa de Ferro Forjado", "tfc_sheet_wrought_iron|Chapa de Ferro Forjado", "tfc_lumber|Tábua TFC (#tfc:lumber)", "tfc_sheet_wrought_iron|Chapa de Ferro Forjado", "tfc_sheet_wrought_iron|Chapa de Ferro Forjado", "tfc_sheet_wrought_iron|Chapa de Ferro Forjado", "tfc_sheet_wrought_iron|Chapa de Ferro Forjado"],
      outIcon: "tfc_block_wrought_iron", outTip: "Bloco de Ferro Forjado (tfc:metal/block/wrought_iron)", outCount: 8,
      idText: "tfc:metal/block/wrought_iron", noteText: "8 Chapas + 1 Tábua no centro"
    },
    "tfc_sheet_copper": {
      title: "Chapa de Cobre (Anvil Working)",
      badge: "Bigorna TFC (Tier 1+)",
      type: "process",
      inIcon: "tfc_double_ingot_copper", inTip: "Lingote Duplo de Cobre", inCount: 1,
      procLabel: "🔨 Bigorna (Hit ×3)",
      outIcon: "tfc_sheet_copper", outTip: "Chapa de Cobre (tfc:metal/sheet/copper)", outCount: 1,
      idText: "tfc:metal/sheet/copper", noteText: "Forjar na Bigorna"
    },
    "tfc_double_ingot_copper": {
      title: "Lingote Duplo de Cobre (Welding)",
      badge: "Soldagem na Bigorna + Fluxo",
      type: "3x3",
      cells: ["tfc_ingot_copper|Lingote de Cobre (Quente)", "tfc_powder_flux|Fluxo (tfc:powder/flux)", "tfc_ingot_copper|Lingote de Cobre (Quente)", "", "tfc_stone_hammer|Martelo", "", "", "", ""],
      outIcon: "tfc_double_ingot_copper", outTip: "Lingote Duplo de Cobre", outCount: 1,
      idText: "tfc:metal/double_ingot/copper", noteText: "Soldar 2 lingotes de cobre"
    },
    "tfc_ingot_copper": {
      title: "Lingote de Cobre (Fundição)",
      badge: "Pit Kiln / Cadinho",
      type: "process",
      inIcon: "tfc_ore_copper", inTip: "Cobre Nativo / Malaquita / Tetraedrita (1080 °C)", inCount: 1,
      procLabel: "🔥 Derreter no Molde",
      outIcon: "tfc_ingot_copper", outTip: "Lingote de Cobre (tfc:metal/ingot/copper)", outCount: 1,
      idText: "tfc:metal/ingot/copper", noteText: "Usar Molde de Lingote Cerâmico"
    },
    "tfc_sheet_bronze": {
      title: "Chapa de Bronze (Anvil Working)",
      badge: "Bigorna TFC (Tier 2+)",
      type: "process",
      inIcon: "tfc_double_ingot_bronze", inTip: "Lingote Duplo de Bronze (90% Cobre + 10% Estanho)", inCount: 1,
      procLabel: "🔨 Bigorna (Hit ×3)",
      outIcon: "tfc_sheet_bronze", outTip: "Chapa de Bronze (tfc:metal/sheet/bronze)", outCount: 1,
      idText: "tfc:metal/sheet/bronze", noteText: "Forjar na Bigorna"
    },
    "tfc_double_ingot_bronze": {
      title: "Lingote Duplo de Bronze (Welding)",
      badge: "Soldagem na Bigorna",
      type: "3x3",
      cells: ["tfc_ingot_bronze|Lingote de Bronze", "tfc_powder_flux|Fluxo", "tfc_ingot_bronze|Lingote de Bronze", "", "tfc_stone_hammer|Martelo", "", "", "", ""],
      outIcon: "tfc_double_ingot_bronze", outTip: "Lingote Duplo de Bronze", outCount: 1,
      idText: "tfc:metal/double_ingot/bronze", noteText: "Soldar 2 lingotes de bronze"
    },
    "tfc_sheet_gold": {
      title: "Chapa de Ouro (Anvil Working)",
      badge: "Bigorna TFC",
      type: "process",
      inIcon: "tfc_double_ingot_gold", inTip: "Lingote Duplo de Ouro", inCount: 1,
      procLabel: "🔨 Bigorna (Hit ×3)",
      outIcon: "tfc_sheet_gold", outTip: "Chapa de Ouro (tfc:metal/sheet/gold)", outCount: 1,
      idText: "tfc:metal/sheet/gold", noteText: "Forjar na Bigorna"
    },
    "tfc_double_ingot_gold": {
      title: "Lingote Duplo de Ouro (Welding)",
      badge: "Soldagem na Bigorna",
      type: "3x3",
      cells: ["tfc_ingot_gold|Lingote de Ouro", "tfc_powder_flux|Fluxo", "tfc_ingot_gold|Lingote de Ouro", "", "tfc_stone_hammer|Martelo", "", "", "", ""],
      outIcon: "tfc_double_ingot_gold", outTip: "Lingote Duplo de Ouro", outCount: 1,
      idText: "tfc:metal/double_ingot/gold", noteText: "Soldar 2 lingotes de ouro"
    },
    "tfc_ingot_gold": {
      title: "Lingote de Ouro (Fundição)",
      badge: "Forja / Cadinho (1060 °C)",
      type: "process",
      inIcon: "tfc_ore_gold", inTip: "Minério de Ouro Nativo (tfc:ore/rich_native_gold)", inCount: 1,
      procLabel: "🔥 Derreter no Molde",
      outIcon: "tfc_ingot_gold", outTip: "Lingote de Ouro (tfc:metal/ingot/gold)", outCount: 1,
      idText: "tfc:metal/ingot/gold", noteText: "Ou converter Gold Ingot Vanilla"
    },
    "tfc_block_gold": {
      title: "Bloco de Ouro TFC",
      badge: "Shaped 3×3",
      type: "3x3",
      cells: ["tfc_sheet_gold|Chapa de Ouro", "tfc_sheet_gold|Chapa de Ouro", "tfc_sheet_gold|Chapa de Ouro", "tfc_sheet_gold|Chapa de Ouro", "tfc_lumber|Tábua TFC (#tfc:lumber)", "tfc_sheet_gold|Chapa de Ouro", "tfc_sheet_gold|Chapa de Ouro", "tfc_sheet_gold|Chapa de Ouro", "tfc_sheet_gold|Chapa de Ouro"],
      outIcon: "tfc_block_gold", outTip: "Bloco de Ouro TFC (tfc:metal/block/gold)", outCount: 8,
      idText: "tfc:metal/block/gold", noteText: "8 Chapas de Ouro + 1 Tábua"
    },
    "tfc_sheet_steel": {
      title: "Chapa de Aço (Anvil Working)",
      badge: "Bigorna TFC (Tier 4+)",
      type: "process",
      inIcon: "tfc_double_ingot_steel", inTip: "Lingote Duplo de Aço", inCount: 1,
      procLabel: "🔨 Bigorna (Hit ×3)",
      outIcon: "tfc_sheet_steel", outTip: "Chapa de Aço (tfc:metal/sheet/steel)", outCount: 1,
      idText: "tfc:metal/sheet/steel", noteText: "Forjar na Bigorna"
    },
    "tfc_double_ingot_steel": {
      title: "Lingote Duplo de Aço (Welding)",
      badge: "Soldagem na Bigorna",
      type: "3x3",
      cells: ["tfc_ingot_steel|Lingote de Aço", "tfc_powder_flux|Fluxo", "tfc_ingot_steel|Lingote de Aço", "", "tfc_stone_hammer|Martelo", "", "", "", ""],
      outIcon: "tfc_double_ingot_steel", outTip: "Lingote Duplo de Aço", outCount: 1,
      idText: "tfc:metal/double_ingot/steel", noteText: "Soldar 2 lingotes de aço"
    },
    "tfc_ingot_steel": {
      title: "Lingote de Aço (Blast Furnace TFC)",
      badge: "Alto-Forno + Bigorna",
      type: "process",
      inIcon: "tfc_ingot_wrought_iron", inTip: "Ferro + Fluxo + Carvão no Alto-Forno (Blast Furnace)", inCount: 1,
      procLabel: "🔥 Pig Iron ➔ 🔨 Aço",
      outIcon: "tfc_ingot_steel", outTip: "Lingote de Aço (tfc:metal/ingot/steel)", outCount: 1,
      idText: "tfc:metal/ingot/steel", noteText: "Refinar Ferro Gusa na Bigorna"
    },
    "tfc_sword_steel": {
      title: "Espada de Aço TFC",
      badge: "Bigorna TFC (Tier 4)",
      type: "process",
      inIcon: "tfc_double_ingot_steel", inTip: "Lingote Duplo de Aço", inCount: 1,
      procLabel: "🔨 Forjar Lâmina + Graveto",
      outIcon: "tfc_sword_steel", outTip: "Espada de Aço (tfc:metal/sword/steel)", outCount: 1,
      idText: "tfc:metal/sword/steel", noteText: "Forjada na Bigorna"
    },
    "tfc_block_steel": {
      title: "Bloco de Aço TFC",
      badge: "Shaped 3×3",
      type: "3x3",
      cells: ["tfc_sheet_steel|Chapa de Aço", "tfc_sheet_steel|Chapa de Aço", "tfc_sheet_steel|Chapa de Aço", "tfc_sheet_steel|Chapa de Aço", "tfc_lumber|Tábua TFC (#tfc:lumber)", "tfc_sheet_steel|Chapa de Aço", "tfc_sheet_steel|Chapa de Aço", "tfc_sheet_steel|Chapa de Aço", "tfc_sheet_steel|Chapa de Aço"],
      outIcon: "tfc_block_steel", outTip: "Bloco de Aço (tfc:metal/block/steel)", outCount: 8,
      idText: "tfc:metal/block/steel", noteText: "8 Chapas de Aço + 1 Tábua"
    },
    "tfc_sheet_black_steel": {
      title: "Chapa de Aço Negro (Anvil Working)",
      badge: "Bigorna TFC (Tier 5)",
      type: "process",
      inIcon: "tfc_double_ingot_black_steel", inTip: "Lingote Duplo de Aço Negro", inCount: 1,
      procLabel: "🔨 Bigorna (Hit ×3)",
      outIcon: "tfc_sheet_black_steel", outTip: "Chapa de Aço Negro (tfc:metal/sheet/black_steel)", outCount: 1,
      idText: "tfc:metal/sheet/black_steel", noteText: "Forjar na Bigorna"
    },
    "tfc_double_ingot_black_steel": {
      title: "Lingote Duplo de Aço Negro (Welding)",
      badge: "Soldagem na Bigorna",
      type: "3x3",
      cells: ["tfc_ingot_black_steel|Lingote de Aço Negro", "tfc_powder_flux|Fluxo", "tfc_ingot_black_steel|Lingote de Aço Negro", "", "tfc_stone_hammer|Martelo", "", "", "", ""],
      outIcon: "tfc_double_ingot_black_steel", outTip: "Lingote Duplo de Aço Negro", outCount: 1,
      idText: "tfc:metal/double_ingot/black_steel", noteText: "Soldar 2 lingotes de Aço Negro"
    },
    "tfc_ingot_black_steel": {
      title: "Lingote de Aço Negro (Liga no Cadinho + Bigorna)",
      badge: "Cadinho + Alto-Forno",
      type: "process",
      inIcon: "tfc_ingot_steel", inTip: "50-70% Aço + 15-25% Níquel + 15-25% Bronze Negro (Weak Black Steel + Pig Iron)", inCount: 1,
      procLabel: "🔥 Liga + 🔨 Refinar",
      outIcon: "tfc_ingot_black_steel", outTip: "Lingote de Aço Negro (tfc:metal/ingot/black_steel)", outCount: 1,
      idText: "tfc:metal/ingot/black_steel", noteText: "Ou converter itens de Diamante"
    },
    "tfc_block_black_steel": {
      title: "Bloco de Aço Negro TFC",
      badge: "Shaped 3×3",
      type: "3x3",
      cells: ["tfc_sheet_black_steel|Chapa de Aço Negro", "tfc_sheet_black_steel|Chapa de Aço Negro", "tfc_sheet_black_steel|Chapa de Aço Negro", "tfc_sheet_black_steel|Chapa de Aço Negro", "tfc_lumber|Tábua TFC (#tfc:lumber)", "tfc_sheet_black_steel|Chapa de Aço Negro", "tfc_sheet_black_steel|Chapa de Aço Negro", "tfc_sheet_black_steel|Chapa de Aço Negro", "tfc_sheet_black_steel|Chapa de Aço Negro"],
      outIcon: "tfc_block_black_steel", outTip: "Bloco de Aço Negro (tfc:metal/block/black_steel)", outCount: 8,
      idText: "tfc:metal/block/black_steel", noteText: "8 Chapas de Aço Negro + 1 Tábua"
    },

    // Leather, Glass, Flux, Vanilla Sub-Crafts
    "tfc_large_prepared_hide": {
      title: "Couro Grande Preparado (Curtimento TFC)",
      badge: "Barril TFC ou Conversão",
      type: "process",
      inIcon: "tfc_large_scraped_hide", inTip: "Couro Grande Raspado (mergulhar em Água Doce no Barril)", inCount: 1,
      procLabel: "🛢️ Água Doce (8h)",
      outIcon: "tfc_large_prepared_hide", outTip: "Couro Grande Preparado (tfc:large_prepared_hide)", outCount: 1,
      idText: "tfc:large_prepared_hide", noteText: "Ou converter 1x Couro Vanilla na grade"
    },
    "tfc_lamp_glass": {
      title: "Vidro de Lâmpada (Glassworking TFC)",
      badge: "Sopro de Vidro",
      type: "process",
      inIcon: "mc_sand", inTip: "Sílica / Areia derretida no Tudo de Sopro (Blowpipe)", inCount: 1,
      procLabel: "🔥 Soprar Vidro",
      outIcon: "tfc_lamp_glass", outTip: "Vidro de Lâmpada (tfc:lamp_glass)", outCount: 1,
      idText: "tfc:lamp_glass", noteText: "Glassworking do TFC"
    },
    "tfc_powder_flux": {
      title: "Fluxo (Flux Powder)",
      badge: "Britagem com Martelo",
      type: "3x3",
      cells: ["tfc_loose_rock|Calcário, Dolomita, Giz ou Mármore (Limestone / Chalk / Marble)", "tfc_stone_hammer|Martelo (#c:tools/hammer)", "", "", "", "", "", "", ""],
      outIcon: "tfc_powder_flux", outTip: "2x Fluxo (tfc:powder/flux)", outCount: 2,
      idText: "tfc:powder/flux", noteText: "Ou moer no Quern (rende 4x)"
    },
    "mc_comparator": {
      title: "Comparador de Redstone",
      badge: "Shaped 3×3",
      type: "3x3",
      cells: ["", "mc_redstone_torch|Tocha de Redstone", "", "mc_redstone_torch|Tocha de Redstone", "mc_quartz|Quartzo do Nether", "mc_redstone_torch|Tocha de Redstone", "tfc_smooth_granite|Pedra Lisa (#c:stones)", "tfc_smooth_granite|Pedra Lisa (#c:stones)", "tfc_smooth_granite|Pedra Lisa (#c:stones)"],
      outIcon: "mc_comparator", outTip: "Comparador de Redstone (minecraft:comparator)", outCount: 1,
      idText: "minecraft:comparator", noteText: "Logística & Redstone"
    },
    "mc_hopper": {
      title: "Funil (Hopper)",
      badge: "Shaped 3×3",
      type: "3x3",
      cells: ["tfc_sheet_wrought_iron|Chapa / Lingote de Ferro Forjado", "", "tfc_sheet_wrought_iron|Chapa / Lingote de Ferro Forjado", "tfc_sheet_wrought_iron|Chapa / Lingote de Ferro Forjado", "tfc_chest_oak|Baú de Madeira (#c:chests)", "tfc_sheet_wrought_iron|Chapa / Lingote de Ferro Forjado", "", "tfc_sheet_wrought_iron|Chapa / Lingote de Ferro Forjado", ""],
      outIcon: "mc_hopper", outTip: "Funil (minecraft:hopper)", outCount: 1,
      idText: "minecraft:hopper", noteText: "5 Ferros + 1 Baú"
    },
    "mc_writable_book": {
      title: "Livro e Pena (Book and Quill)",
      badge: "Shapeless",
      type: "3x3",
      cells: ["mc_book|Livro (minecraft:book)", "mc_ink_sac|Bolsa de Tinta / Corante Preto", "mc_feather|Pena (minecraft:feather)", "", "", "", "", "", ""],
      outIcon: "mc_writable_book", outTip: "Livro e Pena (minecraft:writable_book)", outCount: 1,
      idText: "minecraft:writable_book", noteText: "Base para Grimório"
    },
    "tfc_smooth_granite": {
      title: "Rocha Lisa TFC (Polimento com Cinzel)",
      badge: "Cinzel + Martelo",
      type: "process",
      inIcon: "tfc_raw_granite", inTip: "Rocha Bruta (Granito, Basalto, etc.)", inCount: 1,
      procLabel: "🔨 Cinzel ou Conversão",
      outIcon: "tfc_smooth_granite", outTip: "Granito Liso (tfc:rock/smooth/granite)", outCount: 1,
      idText: "tfc:rock/smooth/granite", noteText: "Ou converter Smooth Stone Vanilla"
    },
    "tfc_straw": {
      title: "Palha TFC (Straw)",
      badge: "Colheita com Faca",
      type: "process",
      inIcon: "tfc_stone_knife", inTip: "Cortar grama/capim com qualquer Faca TFC", inCount: 1,
      procLabel: "🔪 Cortar Capim",
      outIcon: "tfc_straw", outTip: "Palha (tfc:straw)", outCount: 1,
      idText: "tfc:straw", noteText: "Quebre grama alta usando faca"
    },
    "tfc_loose_rock": {
      title: "Pedras Soltas & Gravetos",
      badge: "Coleta no Chão",
      type: "process",
      inIcon: "tfc_loose_rock", inTip: "Espalhadas pela superfície de todos os biomas", inCount: 1,
      procLabel: "🖐️ Botão Direito / Quebrar",
      outIcon: "tfc_loose_rock", outTip: "Pedra Solta (#tfc:rock/loose)", outCount: 1,
      idText: "#tfc:rock/loose", noteText: "Ou desmontar 1 Pedregulho Vanilla = 4x"
    },
    "tfc_twig": {
      title: "Graveto (Twig / Stick)",
      badge: "Coleta no Chão / Folhas",
      type: "process",
      inIcon: "tfc_twig", inTip: "Encontrados no chão sob árvores ou quebrando galhos/folhas", inCount: 1,
      procLabel: "🖐️ Coletar no Chão",
      outIcon: "tfc_twig", outTip: "Graveto (tfc:wood/twig)", outCount: 1,
      idText: "#c:rods/wooden", noteText: "Base de ferramentas e fogueiras"
    },
    "mc_clay_ball": {
      title: "Bola de Argila (Clay Ball)",
      badge: "Escavação com Pá",
      type: "process",
      inIcon: "tfc_stone_shovel", inTip: "Escavar blocos de terra com argila (procure flores Abutilon, Canna, Goldenrod ou Cattails)", inCount: 1,
      procLabel: "⛏️ Escavar perto de plantas indicadoras",
      outIcon: "mc_clay_ball", outTip: "Bola de Argila (minecraft:clay_ball)", outCount: 4,
      idText: "minecraft:clay_ball", noteText: "Indicada por flores específicas"
    },
    "tfc_wool_cloth": {
      title: "Tecido de Lã (Wool Cloth)",
      badge: "Tear TFC (Loom)",
      type: "process",
      inIcon: "tfc_wool", inTip: "16x Fios de Lã no Tear (Loom) do TFC", inCount: 1,
      procLabel: "🧶 Tear (Loom)",
      outIcon: "tfc_wool_cloth", outTip: "Tecido de Lã (tfc:wool_cloth)", outCount: 1,
      idText: "tfc:wool_cloth", noteText: "Fiar lã com fuso (Spindle) e tecer"
    },
    "mc_honeycomb": {
      title: "3× Favo de Mel Silvestre",
      badge: "Shapeless",
      type: "3x3",
      cells: ["tfc_straw|Planta TFC (#tfc:plants)", "tfc_straw|Planta TFC (#tfc:plants)", "tfc_straw|Planta TFC (#tfc:plants)", "mc_sugar|Açúcar (minecraft:sugar)", "", "", "", "", ""],
      outIcon: "mc_honeycomb", outTip: "3x Favo de Mel (minecraft:honeycomb)", outCount: 3,
      idText: "minecraft:honeycomb", noteText: "3 Plantas TFC + 1 Açúcar"
    }
  };

  function renderAuxCard(r) {
    let bodyInner = "";
    if (r.type === "3x3") {
      let g = '<div class="mc-grid-3x3">';
      for (let i = 0; i < 9; i++) {
        const c = r.cells[i] || "";
        if (!c) {
          g += '<div class="mc-slot"></div>';
        } else {
          const p = c.split("|");
          g += `<div class="mc-slot" data-tip="${p[1]}" data-icon="${p[0]}"><img src="assets/icons/${p[0]}.png" alt="${p[1]}"></div>`;
        }
      }
      g += "</div>";
      const cnt = r.outCount > 1 ? `<span class="mc-count">${r.outCount}</span>` : "";
      bodyInner = `${g}<div class="mc-arrow">➔</div><div class="mc-slot large" data-tip="${r.outTip}" data-icon="${r.outIcon}"><img src="assets/icons/${r.outIcon}.png" alt="${r.outTip}">${cnt}</div>`;
    } else if (r.type === "knap") {
      let g = '<div class="mc-knap-5x5">';
      for (const row of r.rows) {
        for (let i = 0; i < 5; i++) {
          const cls = row[i] === "#" ? `${r.knapType}-on` : `${r.knapType}-off`;
          g += `<div class="mc-knap-cell ${cls}"></div>`;
        }
      }
      g += "</div>";
      bodyInner = `${g}<div class="mc-arrow">➔<span class="mc-arrow-sub">Knapping</span></div><div class="mc-slot large" data-tip="${r.outTip}" data-icon="${r.outIcon}"><img src="assets/icons/${r.outIcon}.png" alt="${r.outTip}"></div>`;
    } else if (r.type === "process") {
      const cntIn = r.inCount > 1 ? `<span class="mc-count">${r.inCount}</span>` : "";
      const cntOut = r.outCount > 1 ? `<span class="mc-count">${r.outCount}</span>` : "";
      bodyInner = `<div class="mc-slot large" data-tip="${r.inTip}" data-icon="${r.inIcon}"><img src="assets/icons/${r.inIcon}.png" alt="${r.inTip}">${cntIn}</div><div class="mc-arrow">➔<span class="mc-arrow-sub">${r.procLabel}</span></div><div class="mc-slot large" data-tip="${r.outTip}" data-icon="${r.outIcon}"><img src="assets/icons/${r.outIcon}.png" alt="${r.outTip}">${cntOut}</div>`;
    }

    return `<div class="mc-card">
      <div class="mc-card-header"><span class="mc-card-title">${r.title}</span><span class="mc-card-badge">${r.badge}</span></div>
      <div class="mc-card-body">${bodyInner}</div>
      <div class="mc-card-footer"><code>${r.idText}</code><span>${r.noteText}</span></div>
    </div>`;
  }

  let modalOverlay = null;
  let historyStack = [];

  function ensureModal() {
    if (modalOverlay) return;
    modalOverlay = document.createElement("div");
    modalOverlay.className = "jei-modal-overlay";
    modalOverlay.innerHTML = `
      <div class="jei-modal-window" role="dialog" aria-modal="true">
        <div class="jei-modal-topbar">
          <div class="jei-modal-left">
            <button type="button" class="jei-btn jei-back-btn" id="jei-back-btn" title="Voltar para a receita anterior">⬅ Voltar</button>
            <span class="jei-modal-title" id="jei-modal-title">Receita do Item</span>
          </div>
          <button type="button" class="jei-btn jei-close-btn" id="jei-close-btn" title="Fechar (ESC)">✖ Fechar</button>
        </div>
        <div class="jei-modal-breadcrumbs" id="jei-modal-breadcrumbs"></div>
        <div class="jei-modal-content" id="jei-modal-content"></div>
        <div class="jei-modal-hint">💡 Dica JEI: Clique em qualquer ingrediente dentro desta janela para abrir o sub-craft dele! Pressione <kbd>ESC</kbd> ou clique fora para fechar.</div>
      </div>
    `;
    document.body.appendChild(modalOverlay);

    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) closeModal();
    });
    document.getElementById("jei-close-btn").addEventListener("click", closeModal);
    document.getElementById("jei-back-btn").addEventListener("click", function () {
      if (historyStack.length > 1) {
        historyStack.pop();
        const prev = historyStack[historyStack.length - 1];
        renderModalView(prev.iconKey, prev.label, false);
      }
    });
    document.addEventListener("keydown", function (e) {
      if (!modalOverlay || !modalOverlay.classList.contains("open")) return;
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "Backspace" && historyStack.length > 1) {
        e.preventDefault();
        historyStack.pop();
        const prev = historyStack[historyStack.length - 1];
        renderModalView(prev.iconKey, prev.label, false);
      }
    });
  }

  function extractIconKey(slotEl) {
    if (slotEl.dataset && slotEl.dataset.icon) return slotEl.dataset.icon;
    const img = slotEl.querySelector("img");
    if (!img) return null;
    const m = img.getAttribute("src").match(/icons\/([^/.]+)\.png/);
    return m ? m[1] : null;
  }

  function findRecipesByIconKey(iconKey) {
    const results = [];
    // 1. Search all on-page .mc-card whose output (.mc-slot.large at end of .mc-card-body) has this iconKey
    const allCards = document.querySelectorAll(".markdown-section .mc-card");
    allCards.forEach(function (card) {
      const largeSlots = card.querySelectorAll(".mc-card-body > .mc-slot.large");
      if (largeSlots.length > 0) {
        const outSlot = largeSlots[largeSlots.length - 1];
        const outKey = extractIconKey(outSlot);
        if (outKey === iconKey) {
          results.push(card.outerHTML);
        }
      }
    });

    // 2. Also check AUX_RECIPES
    if (AUX_RECIPES[iconKey]) {
      results.push(renderAuxCard(AUX_RECIPES[iconKey]));
    }
    return results;
  }

  function findUsageCardsByIconKey(iconKey) {
    const usages = [];
    const allCards = document.querySelectorAll(".markdown-section .mc-card");
    allCards.forEach(function (card) {
      const body = card.querySelector(".mc-card-body");
      if (!body) return;
      // Check input slots (either inside .mc-grid-3x3 or the first .mc-slot.large in a process card)
      const gridSlots = body.querySelectorAll(".mc-grid-3x3 .mc-slot");
      let used = false;
      gridSlots.forEach(function (s) {
        if (extractIconKey(s) === iconKey) used = true;
      });
      const largeSlots = body.querySelectorAll(":scope > .mc-slot.large");
      if (largeSlots.length > 1 && extractIconKey(largeSlots[0]) === iconKey) {
        used = true;
      }
      if (used) {
        usages.push(card.outerHTML);
      }
    });
    return usages;
  }

  function renderModalView(iconKey, label, pushHistory) {
    ensureModal();
    const cleanLabel = (label || iconKey).replace(/\s*\([^)]*\)\s*$/, "");
    if (pushHistory) {
      // Avoid duplicate consecutive push
      const top = historyStack[historyStack.length - 1];
      if (!top || top.iconKey !== iconKey) {
        historyStack.push({ iconKey: iconKey, label: cleanLabel });
      }
    }

    const backBtn = document.getElementById("jei-back-btn");
    backBtn.style.display = historyStack.length > 1 ? "inline-flex" : "none";

    document.getElementById("jei-modal-title").innerHTML = `<img src="assets/icons/${iconKey}.png" class="jei-title-icon"> ${cleanLabel}`;

    // Breadcrumbs
    const bc = document.getElementById("jei-modal-breadcrumbs");
    bc.innerHTML = historyStack.map(function (item, idx) {
      const activeCls = idx === historyStack.length - 1 ? "active" : "";
      return `<span class="jei-crumb ${activeCls}" data-idx="${idx}"><img src="assets/icons/${item.iconKey}.png"> ${item.label}</span>`;
    }).join('<span class="jei-crumb-sep">›</span>');

    bc.querySelectorAll(".jei-crumb").forEach(function (el) {
      el.addEventListener("click", function () {
        const idx = parseInt(el.getAttribute("data-idx"), 10);
        if (idx < historyStack.length - 1) {
          historyStack = historyStack.slice(0, idx + 1);
          const target = historyStack[historyStack.length - 1];
          renderModalView(target.iconKey, target.label, false);
        }
      });
    });

    const recipes = findRecipesByIconKey(iconKey);
    const usages = findUsageCardsByIconKey(iconKey);

    let html = "";
    if (recipes.length > 0) {
      html += `<div class="jei-section-label">⚒️ Como Fabricar / Obter (${recipes.length}):</div>`;
      html += `<div class="jei-cards-grid">${recipes.join("")}</div>`;
    } else {
      html += `<div class="jei-empty-box">
        <img src="assets/icons/${iconKey}.png" class="jei-empty-icon">
        <div>
          <strong>${label || iconKey}</strong>
          <p>Este item é um recurso primário, drop de chefe/mob ou item coletado na exploração do mundo.</p>
        </div>
      </div>`;
    }

    if (usages.length > 0) {
      html += `<div class="jei-section-label" style="margin-top:16px;">🔍 Usado como ingrediente em (${usages.length}):</div>`;
      html += `<div class="jei-cards-grid">${usages.join("")}</div>`;
    }

    const contentEl = document.getElementById("jei-modal-content");
    contentEl.innerHTML = html;
    modalOverlay.classList.add("open");
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("open");
    historyStack = [];
  }

  // Global event delegation for clicking ANY .mc-slot (on page OR inside modal!)
  document.addEventListener("click", function (e) {
    const slot = e.target.closest(".mc-slot");
    if (!slot) return;
    const iconKey = extractIconKey(slot);
    if (!iconKey) return;
    e.preventDefault();
    e.stopPropagation();
    const tip = slot.getAttribute("data-tip") || iconKey;
    renderModalView(iconKey, tip, true);
  });
})();
