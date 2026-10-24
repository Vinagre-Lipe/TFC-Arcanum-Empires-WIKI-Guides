# TFC: Arcanum & Empires (v1.1.4)

Modpack para **Minecraft 1.21.1 (NeoForge 21.1.249+)** combinando a sobrevivência geológica e metalúrgica do **TerraFirmaCraft (TFC)** com magia arcana (**Ars Nouveau** & **Iron's Spells 'n Spellbooks**), civilizações autônomas (**Millénaire 9.0.3**), combate RPG fluido (**Better Combat** & **Combat Roll**), terror noturno (**Born in Chaos** & **The Graveyard**), automação e armazenamento medieval (**Tom's Simple Storage**, **Sophisticated Backpacks**, **Mob Grinding Utils**), árvore canônica de progressão nos 6 Atos (**FTB Quests**), ameaças míticas (**Cataclysm**, **When Dungeons Arise**), dimensões ancestrais (**The Aether**, **The Undergarden**) e santuários de proteção (**Pylons** & **Waystones**).

> 📘 **Documentação Completa de Desenvolvimento & Arquitetura:** Veja [DOCUMENTACAO_COMPLETA_v1.1.4.md](DOCUMENTACAO_COMPLETA_v1.1.4.md)  
> 📦 **Pacote Oficial para CurseForge:** `dist/TFC-Arcanum-Empires-CurseForge-v1.1.4.zip` (376.63 MB)

---

## 1. Estrutura do Projeto

```text
Modpack/
├── modlist.json                  # Manifesto técnico consolidado (IDs, slugs, versões e dependências 1.21.1 NeoForge)
├── scripts/
│   └── download-mods.ps1         # Script PowerShell para baixar todos os .jar do Modrinth em ./mods
├── mods/                         # Pasta onde os arquivos .jar são instalados
├── config/                       # Configurações de mods (TFC, Pylons, Apotheosis, Waystones, etc.)
└── kubejs/
    ├── startup_scripts/          # Registro de itens customizados (Argila Rúnica, Catalisadores Brutos, Carta de Concessão)
    ├── server_scripts/           # Receitas customizadas (Knapping TFC, Queima em Pit Kiln, Balanceamento Água/Fogo, Tags)
    ├── client_scripts/           # Tooltips e integração visual
    └── data/
        └── puffish_skills/       # Definição da Árvore de Habilidades nos 4 ramos (Sobrevivência, Humana, Combate, Mágica)
```

---

## 2. Verificação de Compatibilidade (NeoForge 1.21.1)

Todos os mods principais do escopo possuem builds nativas verificadas para **NeoForge 1.21.1**:

| Categoria | Mod | Mod ID (`KubeJS`) | Fonte | Versão Verificada (1.21.1) | Dependências Obrigatórias |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mundo & Sobrevivência** | TerraFirmaCraft | `tfc` | Modrinth | `4.2.12` | `patchouli` |
| **Magia Central** | Ars Nouveau | `ars_nouveau` | Modrinth | `5.13.3` | `curios`, `geckolib`, `patchouli` |
| **Magia Central** | Iron's Spells 'n Spellbooks | `irons_spellbooks` | Modrinth | `1.21.1-3.16.3` | `curios`, `geckolib`, `caelus`, `playeranimator` |
| **Add-ons Mágicos** | Ars Elemental / Elemancy | `ars_elemental` / `ars_elemancy` | CurseForge / Modrinth | `1.17` | `ars_nouveau`, `sauce` |
| **Add-ons Mágicos** | Ars Creo | `ars_creo` | Modrinth | `5.4.0` | `ars_nouveau`, `create` |
| **Tecnologia** | Create | `create` | Modrinth | `6.0.10+mc1.21.1` | *(Flywheel embutido)* |
| **Acessórios & Relíquias** | Relics + Artifacts | `relics` / `artifacts` | Modrinth | `0.12.9` / `13.2.5` | `curios`, `octolib`, `architectury` |
| **Progressão RPG** | Pufferfish's Skills | `puffish_skills` | Modrinth | `0.19.2` | `puffish_attributes` (`0.8.3`) |
| **Dificuldade & Reforja** | Apotheosis | `apotheosis` | Modrinth | `1.21.1-8.9.0` | `placebo`, `apothic_attributes`, `apothic_spawners`, `apothic_enchanting` |
| **Zonas Seguras** | Pylons | `pylons` | Modrinth | `5.4.2` | — |
| **Sociedade & Vilas** | Millénaire Reborn | `millenaire` | Direto (millenaire.org) | `9.0.3` | `architectury` |
| **Eventos Lunares** | Enhanced Celestials | `enhancedcelestials` | Modrinth | `6.0.2.6` | `corgilib`, `dataanchor` |
| **Transporte** | Waystones | `waystones` | Modrinth | `21.1.46` | `balm` |
| **Dungeons & Chefes** | L_Ender's Cataclysm + When Dungeons Arise | `cataclysm` / `dungeons_arise` | Modrinth | `3.33` / `2.1.68` | `lionfishapi`, `curios` |
| **Dimensões** | The Undergarden + The Aether | `undergarden` / `aether` | Modrinth | `0.9.6` / `1.5.10` | `curios` |
| **Engenharia do Pack** | KubeJS + EMI + JEI + Jade | `kubejs` | Modrinth | `2101.7.2-build.377` | `rhino`, `architectury` |

---

## 3. Como Baixar os Mods & Sincronizar

Para baixar e atualizar automaticamente todos os mods e metadados Packwiz:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\sync-packwiz.ps1
```

---

## 4. Engenharia & Modelos de IA (Pair Programming)

O desenvolvimento deste modpack é realizado em cooperação direta entre o desenvolvedor humano (**Vinagre**) e a suíte de agentes de IA **Google Antigravity**:

| Versões | Modelo de IA Utilizado | Escopo & Entregas Principais |
| :--- | :--- | :--- |
| **v1.0.0 – v1.0.4** | **Gemini 4 Argon (Medium)** | Criação da base do modpack, scripts KubeJS (knapping, balanceamento fogo/água), árvores de habilidades Puffish, resolução de crash de NBT (`CrucibleBlockEntity`), implementação do Patchouli Book em disco (`patchouli_books/guia_arcanum`) e substituição/integração completa do Millénaire Reborn 9.0.3 com TFC e mercadores de mods. |
| **v1.0.5 – v1.0.6** | **Gemini 3.8 Flash (High)** | Otimizações de desempenho e TPS, análise de telemetria com Spark/Observable, balanceamento fino de economia entre civilizações e integração de novos conteúdos. |
| **v1.1.0 – v1.1.4** | **Gemini 3.8 Flash (High)** | Grande Atualização: Tom's Storage, Sophisticated Backpacks, Born in Chaos, The Graveyard, Better Combat, Mob Grinding Utils, Corail Tombstone, árvore canônica dos 6 Atos (FTB Quests), santuários automáticos de proteção de vilas (Waystone + Pylons), proteção anti-exploit TFC e menu principal Full HD personalizado em ardósia/ouro antigo via FancyMenu. |
