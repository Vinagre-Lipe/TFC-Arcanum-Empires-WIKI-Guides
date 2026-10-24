# 04 · Consagração de Vilas & Waystones Místicas

Script: `kubejs/server_scripts/04_millenaire_features.js`

Permite ao jogador consagrar novos assentamentos, vilas descobertas do Millénaire ou bases distantes canalizando uma **Waystone sagrada** diretamente aos seus pés mediante custo místico de Mana.

---

## 🔮 Comandos de Consagração

| Comando | Permissão | Custo Místico | Efeito & Ponto de Transporte |
|---|---|---|---|
| `/consagrar` | Todos (nível 0) | **100 de Mana** *(ou 4 níveis de XP)* | Canaliza uma `waystones:waystone` consagrada ("Santuário de &lt;nome&gt;") aos seus pés com efeitos de Totem e Beacon. |
| `/proteger_vila` | Todos (nível 0) | **100 de Mana** *(ou 4 níveis de XP)* | Igual ao anterior, identificada como "Vila de &lt;nome&gt;". |

> [!NOTE]
> - **Integração Mágica Orgânica:** Detecta automaticamente as reservas de mana do **Iron's Spells 'n Spellbooks**.
> - **Fallback Justo de Early Game:** Caso o jogador ainda não tenha desbloqueado o sistema de magia, o ritual consome **4 níveis de experiência (XP)** como energia vital substituta.
> - **Proteção contra Spam:** Possui cooldown de segurança de 15 segundos entre consagrações consecutivas para evitar gastos acidentais de mana.
