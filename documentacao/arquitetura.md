# Documentação Oficial de Desenvolvimento & Arquitetura
## TFC: Arcanum & Empires (v1.1.4)
> **Data de Atualização:** 23 de Outubro de 2026  
> **Plataforma:** Minecraft 1.21.1 — NeoForge 21.1.249+  
> **Repositório Git:** `https://github.com/Vinagre-Lipe/tfc-arcanum-empires`  
> **Pacote Oficial para CurseForge:** `dist/TFC-Arcanum-Empires-CurseForge-v1.1.4.zip` (376.63 MB)

---

## 1. Visão Geral do Projeto

**TFC: Arcanum & Empires** é um modpack hardcore medieval/fantasia focado na integração profunda entre:
1. **TerraFirmaCraft (TFC):** Sobrevivência crua, física de desmoronamento, metalurgia histórica em bigornas, fundição, cerâmica em covas e agricultura sazonal.
2. **Millénaire (v9.0.3):** Civilizações vivas (Normandos, Bizantinos, Japoneses, Maias, Indianos e Seljúcidas) com economias autônomas e diplomacia.
3. **Magia Escalar:** Ars Nouveau e Iron's Spells 'n Spellbooks com catalisadores e grimórios balanceados em metais e pedras preciosas do TFC.
4. **Dimensões & Desafios:** The Undergarden, The Aether e chefes titânicos de L_Ender's Cataclysm.
5. **Combate & RPG:** Better Combat e Combat Roll integrados com armas TFC; progressão de habilidades via Puffish Skills.
6. **Automação & Armazenamento Medieval:** Tom's Simple Storage, Sophisticated Backpacks e Mob Grinding Utils rebalanceados no aço e alquimia do TFC.

---

## 2. Destaques da Grande Atualização (v1.1.0 até v1.1.4)

### A. Armazenamento e Logística Medieval
- **Tom's Simple Storage Mod:**
  - Ponto central de armazenamento com conectores e cabos de madeira tratada do TFC.
  - Terminais de inventário e conectores requerem placas de ferro forjado e ligas de bronze do TFC.
- **Sophisticated Backpacks:**
  - Mochila inicial confeccionada com couro refinado e agulhas de osso do TFC.
  - Upgrades de capacidade escalonados: Cobre $\rightarrow$ Ferro Forjado $\rightarrow$ Ouro $\rightarrow$ Aço TFC.

### B. Terror Noturno e Proteção de Vilas
- **Born in Chaos + The Graveyard:**
  - Injetados nos spawns noturnos de superfície via KubeJS (`06_surface_hostile_spawns.js`).
  - Mobs de alto perigo (Lich, Dread Hounds, Nightmares) vagam fora de abrigos durante a noite.
  - **Santuários de Proteção:** Zona segura ativa em todas as vilas.

### C. Mecânicas de Combate Fluido
- **Better Combat + Combat Roll:**
  - Adicionadas tags de compatibilidade (`#bettercombat:daggers`, `#bettercombat:swords`, `#bettercombat:maces`, `#bettercombat:two_handed`) para 100% das armas de pedra, bronze, ferro e aço do TFC.
  - Esquivas com tempo de recarga e animações completas.

### D. Automação e Farms Balanceadas
- **Mob Grinding Utils:**
  - *Spikes:* Receitas refeitas usando espadas de ferro forjado e placas duplas do TFC.
  - *Mob Masher:* Exige blocos de aço negro, espadas de aço temperado e gemas lapidadas.
  - *Cursed Earth:* Criada através de alquimia de enxofre e sementes do TFC.

### E. Árvore Canônica de Progressão (FTB Quests)
Criada uma progressão de 6 Atos traduzida em Português (PT-BR) com ícones, tarefas e recompensas:
- **Ato I: Sobreviva (Idade da Pedra):** Lascamento de pedras, palha, gravetos, cerâmica e fogueiras.
- **Ato II: Evolua ou Morra (A Era dos Metais):** Prospecção, fundição de cobre/bronze, bigorna e ferro forjado.
- **Ato III: Siga em Frente (Organização e Magia):** Armazém central de madeira, mochila de couro refinado e primeiros feitiços.
- **Ato IV: Além Desse Mundo (Dimensões Ancestrais):** Portais para The Undergarden e The Aether.
- **Ato V: A Recompensa da Luta (Masmorras e Titãs):** Confrontos contra chefes do Cataclysm e masmorras colossais.
- **Ato VI: Endgame Supremo (Mestria Mágica e Impérios):** Aço Vermelho/Azul, grimórios supremos e comércio civilizatório completo.

### F. Pente Fino Anti-Exploit & Conversão TFC
- Bloqueio completo de qualquer receita reversa que permitisse transformar itens TFC em itens vanilla exploitiveis.
- Desativação de fornalhas e ferramentas vanilla.
- **Mineração em Masmorras:** 100% dos blocos minerados em dungeons vanilla (pedras, tijolos, barras de ferro, minérios) convertem automaticamente em drops correspondentes do TFC via script de eventos (`07_tfc_vanilla_integration.js`).

---

## 3. Correções Críticas Realizadas (v1.1.4)

### 1. Santuário das Vilas (Waystone + Pilões de Proteção)
- **Causa Raiz Resolvida:** O script `04_millenaire_features.js` sofria de um erro fatal silencioso no motor Rhino JavaScript (`TypeError: redeclaration of var VillageSavedData`) que abortava a execução a cada tick.
- **Solução Implementada:** Classes Java agora carregam estaticamente no escopo superior.
- **Suporte Abrangente:** O script detecta automaticamente vilas do **Millénaire**, vilarejos com aldeões do **MCA Reborn** (`mca:villager`), **aldeões vanilla** e **sinos de aldeia** (`minecraft:bell`) num raio de 48 blocos do jogador.
- **Estrutura Gerada:**
  - Fundação sólida em Granito Polido do TFC.
  - Waystone completa (metade inferior e superior sincronizadas).
  - Pilão de Expulsão (*Expulsion Pylon* — afasta monstros hostis da vila).
  - Pilão de Interdição (*Interdiction Pylon* — previne o surgimento de monstros dentro da vila).
  - Alerta sonoro de beacon e notificação no chat ao consagrar a área.
- **Comandos Manuais:** Comandos `/consagrar` e `/proteger_vila` adicionados para ativação imediata pelo jogador onde estiver.

### 2. Menu Principal e Layout Responsivo
- **Causa Raiz Resolvida:** Botões configurados como `vanilla_button` herdavam a renderização cinza padrão do Minecraft/ModernFix, ignorando as texturas aplicadas pelo FancyMenu.
- **Solução Implementada:** Migração de todos os botões para elementos `custom_button` no FancyMenu (`tfc_arcanum_menu.txt`), com executáveis `mimicbutton`.
- **Texturas Desenvolvidas:**
  - `button.png` (Normal): Ardósia basáltica com chanfro de ouro antigo forjado e rebites de canto.
  - `button_hovered.png` (Hover): Bordas em ouro rúnico brilhante com aura de luminescência arcana violeta/ametista.
  - `small_button_98.png` (Metade): Proporção exata para *Opções...* e *Sair do Jogo*.
- **Limpeza Visual Completa:** Ocultados todos os botões rogue flutuantes sobre o emblema rúnico (`376394` óculos Create/ModernFix, `604394` boneco de acessibilidade, `604334` globo de idioma, `400358`).
- **Overlays Desativados:** `show_customization_overlay = false` e `modpack_mode = true` garantindo tela limpa sem botões `W` ou `Menu List`.

---

## 4. Mapeamento de Arquivos Críticos

### KubeJS (`kubejs/`)
| Arquivo | Função Principal |
|---|---|
| `server_scripts/01_knapping_and_elements.js` | Knapping de argila e receitas base dos núcleos de pilão. |
| `server_scripts/02_starter_guide.js` | Kit inicial de sobrevivência, guia Patchouli e livro de quests no login. |
| `server_scripts/03_early_game_tfc_balance.js` | Modificadores de temperatura e sede no early-game. |
| `server_scripts/04_millenaire_features.js` | Geração do Santuário de Proteção (Waystone + Pylons) em todas as vilas e comandos `/consagrar`. |
| `server_scripts/05_boss_and_dungeon_tuning.js` | Ajustes de resistência e dano de chefes contra armamentos TFC. |
| `server_scripts/06_surface_hostile_spawns.js` | Injeção noturna de monstros de Born in Chaos e The Graveyard com safezones. |
| `server_scripts/07_tfc_vanilla_integration.js` | Conversão 100% de masmorras vanilla para TFC e proteção anti-exploit. |
| `server_scripts/08_expansion_recipes.js` | Integração completa de Tom's Storage, Sophisticated Backpacks, Mob Grinding Utils e Better Combat. |
| `startup_scripts/01_arcanum_items.js` | Registro de itens customizados (núcleos de pilão crus e queimados). |

### FancyMenu (`config/fancymenu/`)
| Arquivo / Pasta | Função Principal |
|---|---|
| `customization/tfc_arcanum_menu.txt` | Layout oficial do menu principal (elementos `custom_button`, posições, ações). |
| `assets/background.png` | Arte oficial Full HD do modpack (1920x1080). |
| `assets/button.png` | Textura normal de ardósia basáltica e ouro antigo (200x20). |
| `assets/button_hovered.png` | Textura com brilho arcano ametista para hover (200x20). |
| `assets/button_disabled.png` | Textura de ferro envelhecido e ardósia fria (200x20). |
| `assets/small_button_98.png` | Textura reduzida para botões duplos (98x20). |
| `options.txt` | Configurações do FancyMenu (modpack_mode ativo, overlays desativados). |

### FTB Quests (`config/ftbquests/`)
| Arquivo / Pasta | Função Principal |
|---|---|
| `quests/chapters/01_sobreviva.snbt` | Missões do Ato I (Pedra, Cerâmica, Primeiros Passos). |
| `quests/chapters/02_evolua_ou_morra.snbt` | Missões do Ato II (Cobre, Bronze, Bigorna, Ferro Forjado). |
| `quests/chapters/03_siga_em_frente.snbt` | Missões do Ato III (Armazenamento, Mochilas, Magia Inicial). |
| `quests/chapters/04_alem_desse_mundo.snbt` | Missões do Ato IV (Undergarden e Aether). |
| `quests/chapters/05_a_recompensa_da_luta.snbt` | Missões do Ato V (Chefes do Cataclysm e Dungeons). |
| `quests/chapters/06_endgame_supremo.snbt` | Missões do Ato VI (Aço Colorido, Automação, Mestria Arcana). |

---

## 5. Procedimentos de Exportação e Build

### 1. Exportação para CurseForge:
Execute no terminal PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File scripts\export-curseforge.ps1
```
- **Saída:** `dist/TFC-Arcanum-Empires-CurseForge-v1.1.4.zip`
- **Conteúdo:** `manifest.json`, `modlist.html`, pasta `overrides/` completa com configurações, scripts e 74 mods de produção (excluindo utilitários de DEV).

### 2. Sincronização de Metadados Packwiz:
```powershell
powershell -ExecutionPolicy Bypass -File scripts\sync-packwiz.ps1
```
- Atualiza `index.toml` e `pack.toml` com todos os hashes SHA-256 e SHA-512 dos arquivos do modpack.

### 3. Exportação para Modrinth (.mrpack) e Prism Launcher:
```powershell
powershell -ExecutionPolicy Bypass -File scripts\export-pack.ps1
```

---

## 6. Comandos Úteis Durante Testes no Jogo

- `/reload` ou `/kubejs reload server_scripts` — Recarrega todos os scripts de receitas, spawns e vilarejos em tempo de execução sem reiniciar o jogo.
- `/consagrar` ou `/proteger_vila` — Ergue instantaneamente o santuário com Waystone e Pilões de Proteção na posição do jogador.
- `/fancymenu reload` — Recarrega o layout e as texturas do FancyMenu.
- `/ftbquests open` — Abre a interface de missões dos 6 Atos.
- `[K]` — Tecla padrão para abrir a árvore de habilidades (Puffish Skills).
- `[V]` — Tecla padrão do Millénaire para informações do vilarejo.

---

## 7. Próximos Passos Sugeridos para a Próxima Sessão de DEV

1. **Refinamento de Recompensas das Quests:** Adicionar recompensas cosméticas ou moedas do Millénaire para missões avançadas do Ato IV e V.
2. **Localização de Estruturas do Cataclysm:** Ajustar frequência de spawn de templos submersos e arenas de chefes no gerador TFC.
3. **Mochilas com Filtros Avançados:** Testar upgrades de compressão e alimentação automática do Sophisticated Backpacks em conjunto com a mecânica de validade de comida do TFC.
4. **Áudio Temático no Menu Principal:** Integrar trilha orquestral medieval/arcana no FancyMenu através do Melody.
