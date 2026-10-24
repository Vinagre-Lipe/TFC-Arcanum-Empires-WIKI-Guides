# 💡 Scripts de Cliente, Tooltips Educativos & Ocultação JEI/EMI (Script 16)

Scripts: `kubejs/client_scripts/02_early_game_tooltips.js`, `kubejs/client_scripts/draconic_pruning.js`

> [!NOTE]
> Estes scripts operam puramente no lado do cliente: exibem tooltips educativos e alertas sobre mecânicas de sobrevivência e progressão geológica diretamente no inventário do jogador, além de limpar o catálogo do JEI/EMI de itens desativados ou quebrados.

---

## 🏷️ 1. Tooltips Educativos do Early Game

| Item / Categoria | Alerta Exibido na Tooltip | Utilidade para o Jogador |
|---|---|---|
| `#minecraft:logs` | 🪵 *Machado de pedra rende 2 tábuas ou 1 viga; Serra de metal rende até 8 tábuas.* | Orienta a economia de madeira |
| `tfc:firestarter` | 🔥 *Feito com gravetos e faca; 100% de chance de ignição ao segurar clique direito.* | Evita frustração com fogo |
| `tfc:firepit` | 🍳 *Cozinha alimentos, queima cerâmica e aceita grelhas de metal e potes de sopa.* | Base culinária primitiva |
| `tfc:ceramic/vessel` | 🏺 *Comporta até 40 minérios/pepitas. Funde cobre, bronze e ouro diretamente na fogueira.* | Metalurgia Tier 1 sem forja |
| `#tfc:support_beams` | 🏗️ *Vigas de suporte evitam desmoronamentos causados por mineração e ondas do Warden.* | Segurança subterrânea |
| `tfc:straw` | 🌾 *Corte grama alta com faca de pedra; combustível primário para fogueiras e Pit Kiln.* | Acendalha vital |
| `#tfc:hammers` | 🔨 *Usado em bigornas; na bancada mói grãos em farinha e tritura rochas em areia.* | Moagem e britagem |
| `tfc:*_raw_hide` | 🪓 *Corte com faca na bancada para tiras rápidas ou use a Drawknife para rendimento máximo.* | Processamento de peles |
| `minecraft:clay_ball` | 🥣 *Molde itens na bancada ou segure 5 argilas na mão secundária para Knapping 5×5.* | Moldagem de cerâmica |
| `#tfc:lumber` | 🪚 *Fabrique baús, barris e portas na bancada; serras produzem o dobro de tábuas.* | Carpintaria progressiva |
| `minecraft:ender_pearl` | 🔮 *Obtida caçando Endermen à noite ou sintetizada com Enxofre, Ametista e Cola TFC.* | Waystones e teleporte |

---

## 🚫 2. Itens Ocultados do JEI / EMI (Anti-Poluição Visual)

Para evitar que os jogadores fiquem confusos com itens que não funcionam ou desequilibram a proposta do modpack, os seguintes itens foram permanentemente ocultados dos catálogos de busca:

- **Draconic Evolution (Tecnologia Sci-Fi / RF):**
  - Armaduras Draconic e Chaotic (com escudos infinitos de energia).
  - Reatores Nucleares de Caos e Pilões de Energia RF.
  - Injetores de Fusão, Flow Gates e Geradores.
  - *Mantido exclusivamente:* Combate contra o Chaos Guardian e obtenção de Shards do Caos.
- **Ferramentas e Armas Vanilla Substituídas:**
  - Espadas, picaretas, pás, machados e enxadas de madeira, pedra, ferro, ouro, diamante e netherite (substituídas pela forja do TFC).
- **Armaduras Vanilla:**
  - Conjuntos de ferro, ouro, diamante e netherite (substituídas pelas armaduras de placas e malhas do TFC e Epic Knights).
