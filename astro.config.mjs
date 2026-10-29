import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://vinagre-lipe.github.io',
  base: '/TFC-Arcanum-Empires-WIKI-Guides',
  integrations: [
    starlight({
      title: 'TFC: Arcanum & Empires',
      description: 'Wiki oficial de sobrevivência, mecânicas, crafts e lore do modpack TFC: Arcanum & Empires (Minecraft 1.21.1 NeoForge).',
      logo: { src: './src/assets/arcanum-mark.png', alt: 'Selo de TFC: Arcanum & Empires', replacesTitle: false },
      defaultLocale: 'root',
      locales: { root: { label: 'Português', lang: 'pt-BR' } },
      customCss: ['./src/styles/global.css'],
      social: [
        {
          icon: 'github',
          label: 'Repositório GitHub',
          href: 'https://github.com/Vinagre-Lipe/TFC-Arcanum-Empires-WIKI-Guides',
        },
      ],
      head: [
        {
          tag: 'script',
          content: `
            if (window.location.hash && window.location.hash.startsWith('#/')) {
              var p = window.location.hash.slice(2).replace(/\\.md$/, '').replace(/^\\/+/, '');
              var base = '/TFC-Arcanum-Empires-WIKI-Guides/';
              if (p && p !== '/') {
                window.location.replace(base + p + '/');
              } else {
                window.location.replace(base);
              }
            }
            document.addEventListener('click', function(e) {
              var a = e.target.closest('a');
              if (!a) return;
              var href = a.getAttribute('href');
              if (href && href.startsWith('/') && !href.startsWith('/TFC-Arcanum-Empires-WIKI-Guides') && !href.startsWith('//')) {
                e.preventDefault();
                window.location.href = '/TFC-Arcanum-Empires-WIKI-Guides' + href;
              }
            }, true);
          `,
        },
        {
          tag: 'script',
          attrs: {
            src: '/TFC-Arcanum-Empires-WIKI-Guides/assets/jei-modal.js',
            defer: true,
          },
        },
        {
          tag: 'script',
          attrs: {
            type: 'module',
          },
          content: `
            import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
            mermaid.initialize({ startOnLoad: false, theme: 'dark' });
            async function renderMermaid() {
              const els = document.querySelectorAll('pre[data-language="mermaid"], pre.mermaid, code.language-mermaid');
              for (const el of els) {
                const pre = el.tagName === 'CODE' ? el.parentElement : el;
                if (pre.dataset.mermaidProcessed) continue;
                pre.dataset.mermaidProcessed = 'true';
                const code = el.textContent;
                const container = document.createElement('div');
                container.className = 'mermaid-container';
                const id = 'mermaid-' + Math.random().toString(36).substring(2, 9);
                try {
                  const { svg } = await mermaid.render(id, code);
                  container.innerHTML = svg;
                  pre.replaceWith(container);
                } catch (err) {
                  console.error('Mermaid render error:', err);
                }
              }
            }
            document.addEventListener('DOMContentLoaded', renderMermaid);
            document.addEventListener('astro:page-load', renderMermaid);
          `,
        },
      ],
      sidebar: [
        {
          label: 'Comece sua Jornada',
          items: [
            { label: '🏠 Portal da Wiki', link: '/' },
            { label: '🌲 Primeiros Minutos no TFC', link: '/guias/01-primeiros-passos/' },
            { label: '⚙️ Mecânicas Gerais & Fisiologia', link: '/guias/mecanicas-do-modpack/' },
            { label: '🌍 Mundo, Vigas & Trocas (World Gen)', link: '/guias/worldgen-vigas-trocas/' },
            { label: '🔮 Árvore de Habilidades', link: '/guias/01-arvore-habilidades/' },
            { label: '🗺️ Progressão: Os 6 Atos', link: '/guias/progressao-6-atos/' },
          ],
        },
        {
          label: 'Ofícios, Forjas & Catálogo JEI',
          items: [
            { label: '🌟 Todos os Crafts (Painel JEI)', link: '/crafts/todos-os-crafts/' },
            { label: '⚗️ Alquimia Wixie & Drusa (Tabela)', link: '/crafts/26-alquimia-wixie-e-drusa-ametista/' },
            { label: '🏗️ Estruturas Multiblocos', link: '/crafts/estruturas-multiblocos/' },
            { label: '🔨 Processos Físicos & Forjas', link: '/crafts/processos-fisicos/' },
            { label: '🔥 Fornalhas & Multiblocos', link: '/crafts/forjas-multiblocos-processos/' },
            { label: '🍳 Cozinha, Gastronomia & Culinária', link: '/crafts/cozinha-culinaria/' },
            { label: '🪙 Itens Comerciais & Millénaire', link: '/crafts/itens-comerciais/' },
            { label: '✈️ Aviação, Vassouras & Arcaria (v1.3.0)', link: '/crafts/22-expansao-v130-aviacao-arcaria-vassouras/' },
            { label: '📋 Planilha Mestra de Portabilidade', link: '/crafts/portabilidade-viabilidade/' },
          ],
        },
        {
          label: 'Sobrevivência Primitiva (Guias)',
          collapsed: true,
          items: [
            { label: 'Talhando Pedras (Knapping)', link: '/guias/02-knapping-ferramentas/' },
            { label: 'Padrões de Knapping', link: '/guias/02-padroes-knapping/' },
            { label: 'Palha, Fogueira & Comida', link: '/guias/03-palha-fogo/' },
            { label: 'Água Doce & Sede', link: '/guias/04-agua-sede/' },
            { label: '🌋 Clima, Vestimentas & Vulcões', link: '/guias/05-clima-imersao-e-vulcoes/' },
            { label: 'Ferramentas de Pedra', link: '/guias/01-ferramentas-pedra/' },
            { label: 'Fogo & Tochas', link: '/guias/03-fogo-e-tochas/' },
            { label: 'Argila & Pit Kiln', link: '/guias/01-argila-pitkiln/' },
            { label: 'Cerâmica & Pit Kiln (Passo a Passo)', link: '/guias/04-estruturas-primitivas/' },
            { label: 'Armazenamento & Cavernas', link: '/guias/02-armazenamento-fisica/' },
          ],
        },
        {
          label: 'Magia & Impérios',
          collapsed: true,
          items: [
            { label: 'Catalisador Arcano & Pilões', link: '/guias/02-magia-piloes/' },
            { label: '⚗️ Alquimia da Wixie & Drusa Geológica', link: '/crafts/26-alquimia-wixie-e-drusa-ametista/' },
            { label: 'Civilizações do Millénaire', link: '/guias/01-vilas-millenaire/' },
            { label: 'Consagração de Vilas (Waystones)', link: '/crafts/04-millenaire/' },
            { label: 'Millager & Exércitos Mercenários', link: '/crafts/15-millager-exercitos/' },
            { label: 'Teleporte por Mana (/home, /tpa)', link: '/crafts/13-teleporte-mana/' },
          ],
        },
        {
          label: 'Chefes & Expedições',
          items: [
            { label: '⚔️ Chefes Essenciais & Lendários', link: '/guias/chefes-essenciais-progresso/' },
          ],
        },
        {
          label: 'História & Crônicas',
          collapsed: true,
          items: [
            { label: 'I. A Criação e o Selo Primordial', link: '/historia/01-a-era-primordial/' },
            { label: 'II. A Fratura e a Lua de Sangue', link: '/historia/02-o-rompimento-do-selo/' },
            { label: 'III. Os Pilões e os Seis Atos', link: '/historia/03-os-seis-atos/' },
            { label: 'IV. O Chaos Guardian', link: '/historia/04-o-chaos-guardian/' },
          ],
        },
        {
          label: 'Integrações & Scripts KubeJS',
          collapsed: true,
          items: [
            { label: 'Visão Geral das Integrações', link: '/crafts/' },
            { label: '01 — Knapping, Cerâmica & Millénaire', link: '/crafts/01-knapping/' },
            { label: '02 — Kit Inicial e Guia', link: '/crafts/02-kit-inicial/' },
            { label: '05 — Vulcões Vivos', link: '/crafts/05-vulcoes/' },
            { label: '06 — Criaturas Noturnas & Safezones', link: '/crafts/06-spawns-noturnos/' },
            { label: '07 — Integração TFC ➔ Vanilla', link: '/crafts/07-tfc-vanilla/' },
            { label: '08 — Expansão, Farms & Alquimia', link: '/crafts/08-expansao/' },
            { label: '09 — Grande Integração', link: '/crafts/09-grande-integracao/' },
            { label: '10 — Fauna, Pesca e Culinária', link: '/crafts/10-fauna/' },
            { label: '11 — Chaos Guardian e Endgame (Ato VI)', link: '/crafts/11-chaos-guardian/' },
            { label: '12 — Sculk Fossilizado e Warden', link: '/crafts/12-sculk-warden/' },
            { label: '14 — Utilidades Vanilla & Redstone', link: '/crafts/14-utilidades-vanilla/' },
            { label: '14b — Otimizações de Cliente', link: '/crafts/14-cliente/' },
            { label: '16 — Pente Fino & Tooltips', link: '/crafts/16-cliente-tooltips/' },
            { label: '19 — Alquimia Proibida & Metais do Eclipse', link: '/crafts/19-alquimia-proibida/' },
            { label: '20 — Transmutação de Restos em XP', link: '/crafts/20-transmutacao-xp-expedicao/' },
            { label: '21 — Fogueira Vanilla & Avanços FTB', link: '/crafts/21-fogueira-coccao-avancos/' },
          ],
        },
        {
          label: 'Documentação Técnica',
          items: [
            { label: 'Visão Geral & Mods por Categoria', link: '/documentacao/arquitetura/' },
            { label: 'Catálogo A–Z (126 Mods) & Requisitos', link: '/documentacao/mods-compatibilidade/' },
            { label: '📦 Distribuição AutoModpack & Mods Client-Side', link: '/documentacao/distribuicao-automodpack-e-mods-client/' },
          ],
        },
      ],
    }),
  ],
});
