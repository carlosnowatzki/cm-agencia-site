# CM Agência · Site

Site de uma página (HTML + CSS + JS puros, **sem build**) com a mesma estrutura do carrossel:
capa → projetos reais → identidades → diferenciais → chamada final.
Pronto para GitHub + Vercel.

## Publicar (GitHub + Vercel)

1. Crie um repositório vazio no GitHub (ex.: `cm-agencia-site`).
2. Suba o conteúdo desta pasta:

   ```bash
   git init
   git add .
   git commit -m "Site CM Agência"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/cm-agencia-site.git
   git push -u origin main
   ```

3. Em [vercel.com/new](https://vercel.com/new), clique em **Import** no repositório.
   - Framework Preset: **Other**
   - Build Command: **(vazio)** · Output Directory: **(vazio / raiz)**
   - Clique em **Deploy**.
4. (Opcional) Em **Settings → Domains**, ligue o domínio próprio.

## Depois de publicar: troque o endereço do site

No `<head>` do `index.html` existem 3 ocorrências de
`https://SEU-DOMINIO.vercel.app` (`canonical`, `og:url` e `og:image`).
Procure por `SEU-DOMINIO` e troque pelo endereço final. Isso faz o link aparecer com a imagem certa no WhatsApp,
Instagram e Google.

## Trocar contatos

Busque e substitua em **todo o projeto** (`index.html` e `js/main.js`):

| Dado            | Procure por         |
| --------------- | ------------------- |
| WhatsApp (link) | `5551985705174`     |
| WhatsApp (texto)| `(51) 98570-5174`   |
| Instagram       | `cm4gencia`         |

## Adicionar ou trocar um projeto

1. Salve o print do site (largura ~1400 px) em `assets/img/sites/` como
   `nome-1400.webp` e `nome-800.webp` (use [squoosh.app](https://squoosh.app) ou `cwebp`).
2. No `index.html`, copie um bloco `<a class="proj rv" …>` da seção `#projetos`,
   troque `href`, `data-seg` (`saude`, `construcao`, `alimentacao`, `auto`, `servicos`),
   nome, legenda, `src`/`srcset`, `width`/`height` e o texto da barra do navegador.
3. Se o número de sites mudar, atualize o "31" (busque por `31` na capa e no cartão
   verde no fim da grade de projetos).

## Estrutura

```
index.html          página única
css/styles.css      identidade visual (cores e fontes no :root)
js/main.js          menu, filtro de projetos, animações, formulário → WhatsApp
assets/fonts/       Unbounded, Manrope, JetBrains Mono (locais, sem Google Fonts)
assets/img/sites/   prints dos sites em WebP (800 e 1400 px)
assets/img/og-cover.jpg   imagem de compartilhamento (1200×630)
favicon.svg · robots.txt · vercel.json
```

## Observações

- O formulário não precisa de servidor: ele monta a mensagem e abre o WhatsApp
  (`wa.me`) já preenchida.
- Os mockups de **celular** na capa e no final são um recorte do print desktop
  (não há prints mobile). Para um celular fiel, troque a imagem dentro de `.phone-screen`.
- Cores: `--ink #06080D`, `--paper #F3F1EA`, `--lime #D4FF3F`, `--cyan #5CE1FF`.
- Funciona sem JavaScript (as animações só ativam quando o JS carrega) e respeita
  `prefers-reduced-motion`.
