---
title: "Distribuição AutoModpack & Mods Client-Side no Servidor"
description: "Diretrizes e arquitetura de distribuição automática de mods clientes através do servidor dedicado EnxadaHost"
---

# Distribuição AutoModpack & Mods Client-Side no Servidor

Este guia documenta como o **TFC: Arcanum & Empires** gerencia a sincronização automática de arquivos e por que determinados mods **100% Client-Side** residem na pasta do servidor dedicado.

---

## 1. O Papel do AutoModpack na Hospedagem

No nosso servidor dedicado (**EnxadaHost**), o mod **AutoModpack** atua como distribuidor oficial do pacote de jogo para os clientes:

* O servidor lê a pasta `/mods/*.jar` e `/kubejs/**`.
* Ao logar no servidor, qualquer jogador com o inicializador recebe o download e atualização instantânea de todos os arquivos necessários.
* Para que os jogadores recebam automaticamente os mods de **áudio imersivo, passos realistas, gotas dinâmicas e HUD**, os `.jar` desses mods precisam estar na pasta `/mods/` do servidor.

---

## 2. Impacto Técnico no Servidor Dedicado

Uma dúvida comum ao gerenciar servidores é: *colocar mods de áudio e visual no servidor causa lag ou risco de crash?*

### A. Consumo de Processamento (CPU / Tick)
* **Zero impacto:** O servidor roda em modo *headless* (sem placa gráfica e sem motor OpenAL de áudio).
* Esses mods não executam nenhum cálculo durante a rotina de tick do servidor (`ServerTickEvent`); eles permanecem dormentes até detectarem um cliente com dispositivo de áudio ativo.

### B. Proteção contra Falhas de Boot
Nem todos os mods clientes podem ficar no servidor. Se um mod mal construído chamar `net.minecraft.client.Minecraft` durante a inicialização do servidor, ocorrerá erro de classe não encontrada.

Os mods de áudio selecionados para o pacote foram auditados e possuem declarações seguras no `META-INF/neoforge.mods.toml`:

| Mod | Declaração no NeoForge | Comportamento no Servidor | Comportamento no Cliente |
| :--- | :--- | :--- | :--- |
| **Sound Physics Remastered** | `displayTest = "IGNORE_ALL_VERSION"`, `side = "BOTH"` | Neutro. Não crasha o servidor. | Reverberação física, oclusão através de paredes e eco em cavernas/minas TFC. |
| **CreativeCore** | `side = "BOTH"` | Biblioteca segura universal. | Fornece infraestrutura para o AmbientSounds. |
| **AmbientSounds 6** | `side = "BOTH"` | Neutro. Não processa áudio. | Paisagens sonoras dinâmicas por bioma, altitude e estações. |
| **Presence Footsteps** | `side = "CLIENT"` | Ignorado no servidor dedicado. | Sons acústicos de passos em cada tipo de rocha e solo TFC. |
| **Drip Sounds** | `side = "CLIENT"`, `displayTest = "IGNORE_ALL_VERSION"` | Ignorado no servidor sem crash. | Sons dinâmicos de impacto de gotas d'água e lava em cavernas. |

---

## 3. Diretriz para Colaboradores

Ao adicionar novos mods no repositório:
1. Sempre verifique o lado do mod com o script:
   ```bash
   python scripts/analyze_mod_sides.py
   ```
2. Se um mod for puramente de cliente e tiver chamadas perigosas de inicialização, cadastre seu nome na lista `client_only_blacklist` em `scripts/build-server-export.py`.
3. Se for um mod de imersão de áudio ou cosmético seguro, mantenha seu `.jar` na pasta `mods/` para que o AutoModpack o distribua para todos os jogadores do servidor.
