# 13 · Teleporte por Mana (/home, /tpa)

Script: `server_scripts/13_mana_teleport_system.js`

Sistema de teleporte que custa **50 de Mana** (Iron's Spells ou Ars Nouveau). Se você ainda não tem barra de mana, o custo é cobrado como **2 níveis de XP**. Não há receitas.

## Comandos

| Comando | Custo | Efeito |
|---|---|---|
| `/sethome [nome]` | grátis | Salva a posição atual (padrão: `home`) |
| `/home [nome]` | 50 Mana | Teleporta para a home salva (inclusive em outra dimensão) |
| `/homes` | grátis | Lista as homes salvas |
| `/delhome <nome>` | grátis | Apaga uma home |
| `/tpa <jogador>` | 50 Mana (quem pede) | Pede para ir até o jogador |
| `/tpahere <jogador>` | 50 Mana (quem pede) | Pede que o jogador venha até você |
| `/tpaccept` | — | Aceita o pedido pendente (expira em 60 s) |
| `/tpdeny` | — | Recusa o pedido pendente |

## Ordem de cobrança

| Prioridade | Fonte |
|---|---|
| 1 | Mana do Iron's Spells & Spellbooks |
| 2 | Mana do Ars Nouveau |
| 3 | 2 níveis de XP (reserva arcana) |
