# 🚀 Como ativar o Deploy Automático via GitHub Actions

Se você desejar que o GitHub compile e publique a Wiki automaticamente a cada `git push` na branch `main`:

### Passo a passo rápido:
1. Acesse o repositório no GitHub: [TFC-Arcanum-Empires-WIKI-Guides](https://github.com/Vinagre-Lipe/TFC-Arcanum-Empires-WIKI-Guides)
2. Clique em **Add file** ➔ **Create new file**
3. No campo do caminho/nome do arquivo, digite:
   ```text
   .github/workflows/deploy.yml
   ```
4. Cole o seguinte conteúdo:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 12

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Build with Astro
        run: pnpm build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
5. Clique em **Commit changes...** ➔ **Commit changes**.
6. Vá em **Settings** ➔ **Pages** no GitHub e garanta que a opção **Source** está definida como **GitHub Actions**.

---

### Opção Alternativa (Deploy Direto via Branch `gh-pages`):
O build estático já compilado (`dist/`) foi enviado para a branch `gh-pages`!
Para usá-lo sem precisar de GitHub Actions:
1. Vá em **Settings** ➔ **Pages**
2. Em **Source**, selecione **Deploy from a branch**
3. Escolha a branch **gh-pages** e a pasta **/ (root)** ➔ Clique em **Save**.
