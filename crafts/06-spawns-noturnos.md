# 06 · Criaturas Hostis Noturnas na Superfície

Script: `server_scripts/06_surface_hostile_spawns.js`

À noite (tempo 13000–23000) no Overworld, a cada 10 s, cada jogador na superfície (Y ≥ 60) tem **30%** de chance de atrair um monstro temático a 24–36 blocos, em local escuro (luz ≤ 7). **Não ocorre** a até 40 blocos de aldeões do Millénaire — viver em vila protege.

## Tabela de spawns

| Criatura | ID | Chance |
|---|---|---|
| Zumbi em Decomposição | `born_in_chaos_v1:decaying_zombie` | 20% |
| Esqueleto Decrépito | `born_in_chaos_v1:decrepit_skeleton` | 15% |
| Carniçal | `graveyard:ghoul` | 13% |
| Espectro | `graveyard:wraith` | 12% |
| Revenant | `graveyard:revenant` | 12% |
| Cão do Pavor | `born_in_chaos_v1:dread_hound` | 10% |
| Wilden Stalker | `ars_nouveau:wilden_stalker` | 8% |
| Necromante | `irons_spellbooks:necromancer` | 6% |
| Koboleton | `cataclysm:koboleton` | 4% |
