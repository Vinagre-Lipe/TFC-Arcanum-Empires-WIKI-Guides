# TFC: Arcanum & Empires — Protótipo da Wiki

Protótipo visual independente feito com Astro e Starlight. Serve para revisar navegação, identidade visual e páginas de exemplo antes de qualquer migração. Não substitui nem altera o site Docsify atual.

## Testar localmente

Requisitos: Node.js 22 e pnpm 11. Abra um terminal na pasta `prototipo-starlight` extraída do pacote e execute:

```sh
pnpm install
pnpm exec astro dev --host 127.0.0.1 --port 4321
```

Abra `http://localhost:4321` no navegador. Para encerrar o servidor, volte ao terminal e pressione `Ctrl+C`. Esses comandos executam o protótipo somente na sua máquina; não publicam o site nem enviam alterações ao GitHub.

Se o comando `pnpm` não existir, instale/ative o pnpm 11.25.0 com Corepack (`corepack enable` e `corepack prepare pnpm@11.25.0 --activate`) ou com npm (`npm install --global pnpm@11.25.0`). Depois repita os comandos acima.

## Verificação e build

```sh
pnpm check
pnpm build
```

As páginas demonstrativas ficam em `src/content/docs/`; a navegação lateral, em `astro.config.mjs`; e o tema, em `src/styles/global.css`.

## Sobre o conteúdo

O esboço contém páginas representativas de sobrevivência, mecânicas, progressão, receitas, forjas, multiblocos e história. O modpack está em beta fechado: confira receitas, requisitos e balanceamento na build correspondente antes de considerar os exemplos documentação definitiva. As fontes estão em [`SOURCES.md`](SOURCES.md).

## Publicação

Este é apenas um protótipo para revisão. Ainda não foi publicado no GitHub Pages e não altera o repositório oficial. A migração completa e a estratégia de publicação devem ser decididas depois da revisão visual.
