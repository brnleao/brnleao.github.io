# Portfólio — Bruno Carneiro Leão

Site de currículo/portfólio em HTML, CSS e JavaScript puros (sem build, sem frameworks).
Bilíngue (PT/EN), com tema claro/escuro, cor de destaque configurável, fundo interativo,
cursor em lente, seção de consulta SQL sobre o currículo e painel de configurações.

## Estrutura

```
index.html          página (estrutura e painel de configurações)
css/styles.css      estilos, temas e animações
js/data.js          TODO o conteúdo em PT e EN (edite aqui)
js/app.js           idiomas, configurações e efeitos
assets/foto.png     foto do perfil
assets/Bruno_Carneiro_Leao_CV_EN.pdf   currículo para download
```

## Ver localmente

Abra um servidor estático na pasta (o arquivo direto `file://` funciona, mas as fontes e o
download do PDF se comportam melhor via servidor):

```powershell
python -m http.server 5173
```

Depois acesse `http://localhost:5173`.

## Editar o conteúdo

Tudo que aparece na tela está em `js/data.js`, separado em `pt` e `en`:
textos do topo, sobre, experiências, habilidades (com níveis 1 a 3), consultas SQL,
projetos, formação, contato e os rótulos do painel de configurações.

- Para trocar a foto, substitua `assets/foto.png` (quadrada funciona melhor).
- Para trocar o currículo, substitua o PDF em `assets/` e ajuste `meta.cv` em `js/data.js`.
- Para adicionar uma cor de destaque, inclua um item em `accents` (em `js/data.js`)
  e um bloco `:root[data-accent="id"]` em `css/styles.css`.

## Publicar

- GitHub Pages: suba a pasta em um repositório e ative Pages na branch principal.
- Netlify ou Vercel: arraste a pasta no painel ou conecte o repositório. Não há etapa de build.

## Observações

- Telefone e endereço residencial não aparecem no site, por ser público. O currículo em PDF
  disponível para download é a versão em inglês (a mais atual); a versão em português do PDF
  foi deixada de fora por estar desatualizada e conter o endereço.
- As preferências do visitante (idioma, tema, cor, efeitos, tamanho do texto) ficam salvas em
  `localStorage` com a chave `bl.settings`.
- Quem usa "reduzir movimento" no sistema recebe os efeitos desligados por padrão, mas pode
  ligá-los no painel.
