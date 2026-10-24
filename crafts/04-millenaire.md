# 04 · Consagração de Vilas (Waystones)

Script: `server_scripts/04_millenaire_features.js`

Comandos que o próprio jogador usa para colocar uma Waystone aos seus pés (por exemplo, em uma vila Millénaire). Não há receitas.

## Comandos

| Comando | Permissão | Efeito |
|---|---|---|
| `/consagrar` | todos (nível 0) | Coloca uma `waystones:waystone` na posição do jogador ("Santuário de &lt;nome&gt;") com som de beacon |
| `/proteger_vila` | todos (nível 0) | Igual, nomeada "Vila de &lt;nome&gt;" |

> [!WARNING]
> No script atual as linhas de `setblock` estão com as coordenadas ausentes (template literal quebrado), então os comandos podem apenas exibir a mensagem sem colocar o bloco.
