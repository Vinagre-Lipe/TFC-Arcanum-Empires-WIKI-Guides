# 05 · Vulcões Vivos

Script: `server_scripts/05_volcano_dynamics.js`

Minerar rochas vulcânicas pode abrir uma fissura pressurizada: explosão sonora, partículas, e o bloco quebrado vira **lava**. Em troca, pode cair material raro.

## Gatilho de erupção

| Bloco quebrado | Chance | Observações |
|---|---|---|
| Bloco de Magma `minecraft:magma_block` | 20% | Modo sobrevivência apenas |
| Basalto `minecraft:basalt` / `minecraft:smooth_basalt` | 7% | |
| Basalto, Riolito, Dacito TFC `tfc:rock/raw/basalt*`, `rhyolite*`, `dacite*` | 7% | |

## Drops bônus (quando há erupção)

| Item | ID | Chance |
|---|---|---|
| Essência de Cinzas | `irons_spellbooks:cinder_essence` | 35% |
| Pó de Fundente | `tfc:powder/flux` | 25% |

## Ambiente

| Evento | Frequência | Efeito |
|---|---|---|
| Fumarolas | a cada 6 s | Jogadores em biomas "volcanic" veem fumaça e chamas ao redor |
