# PROBLEMA A RESOLVER
Ao atualizar a página (F5 / reload) ou acessar qualquer
URL diretamente no Vercel, o site retorna erro 404.
Isso ocorre porque é uma SPA (Single Page Application)
e o servidor não conhece as rotas do cliente.

## SOLUÇÃO OBRIGATÓRIA — aplicar tudo abaixo

PASSO 1 — Criar vercel.json na RAIZ do projeto
(ou dentro de /frontend se usar monorepo)

Conteúdo exato do arquivo:
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}

IMPORTANTE: usar "rewrites", NÃO "redirects".
Redirects mudam a URL do navegador. Rewrites mantêm a
URL e servem o index.html transparentemente.

PASSO 2 — Verificar se o router usa hash ou history

Se o router usa history mode (URLs limpas: /sobre, /contato):
  → o vercel.json acima resolve completamente.

Se o router usa hash mode (URLs com #: /#/sobre, /#/contato):
  → hash mode não precisa do vercel.json, mas migrar
    para history mode é a prática recomendada.

PASSO 3 — Página de erro 404 personalizada (opcional)

Adicione também ao vercel.json para tratar rotas
que realmente não existem (ex: /pagina-que-nunca-existiu):
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
O próprio React/Vue router vai renderizar o componente
de 404 definido no código — não o 404 padrão do Vercel.

PASSO 4 — Confirmar onde colocar o vercel.json

Se o projeto é uma SPA simples (raiz = frontend):
  /vercel.json  ← aqui

Se o projeto usa monorepo (frontend/ e backend/ separados)
e o Vercel aponta só para /frontend:
  /frontend/vercel.json  ← aqui
  E no painel do Vercel, confirmar que "Root Directory"
  está apontando para "frontend".

PASSO 5 — Testar localmente antes de fazer deploy

Para simular o comportamento do Vercel localmente:
  npx serve dist -s
O flag -s (single page) serve todas as rotas para o index.
Se funcionar com -s, vai funcionar no Vercel.

## CHECKLIST ANTES DO DEPLOY
[ ] vercel.json existe na raiz correta do projeto?
[ ] O campo é "rewrites" e NÃO "redirects"?
[ ] O "destination" aponta para "/index.html"?
[ ] O build gera o index.html na pasta dist/ ou out/?
[ ] O "Root Directory" no painel do Vercel está correto?
[ ] Ao rodar npx serve dist -s, as rotas funcionam?