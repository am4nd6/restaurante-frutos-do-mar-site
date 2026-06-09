# Restaurante Frutos do Mar

Landing page premium para um restaurante especializado em frutos do mar, desenvolvida para apresentar a marca com uma experiência visual elegante, responsiva e orientada à conversão.

O projeto combina uma interface rica em detalhes, navegação fluida, conteúdo institucional e uma base técnica preparada para evolução futura com reservas, integrações, cardápio dinâmico e serviços de backend.

## Destaques

- Experiência visual imersiva para valorização da marca.
- Layout responsivo para desktop, tablets e dispositivos móveis.
- Seções comerciais pensadas para retenção e conversão.
- Galeria, especialidades, cardápio, localização e chamada para reserva.
- Base frontend moderna com React, TanStack Start, Vite e TypeScript.
- Backend independente preparado para APIs, integrações e regras privadas.
- Estrutura organizada para crescimento sem acoplamento entre cliente e servidor.

## Experiência da Página

A landing page foi estruturada para conduzir o visitante por uma narrativa clara:

1. Apresentação inicial com impacto visual.
2. Reforço da identidade e história do restaurante.
3. Destaque das especialidades da casa.
4. Prova visual por meio de galeria e pratos selecionados.
5. Cardápio apresentado de forma simples e atrativa.
6. Depoimentos para reforço de confiança.
7. Chamada para reserva.
8. Localização e informações finais de contato.

## Tecnologias

- React 19
- TanStack Start
- TanStack Router
- Vite
- TypeScript
- Tailwind CSS
- Radix UI
- Framer Motion
- Hono
- Node.js

## Estrutura do Projeto

```text
.
├── frontend/   # Aplicação web, interface, rotas, estilos e assets
├── backend/    # API independente, CORS e serviços privados
├── shared/     # Tipos, contratos e utilitários puros compartilhados
├── .gitignore
└── README.md
```

## Execução Local

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Disponível em:

```text
http://localhost:5173
```

### Backend

```bash
cd backend
npm install
npm run dev
```

Disponível em:

```text
http://localhost:3001
```

Health check:

```text
GET http://localhost:3001/health
```

## Build

```bash
cd frontend
npm run build
```

```bash
cd backend
npm run build
```

## Variáveis de Ambiente

### Frontend

Use apenas variáveis públicas, por exemplo:

```env
VITE_API_URL=http://localhost:3001
```

### Backend

```env
PORT=3001
FRONTEND_ORIGIN=http://localhost:5173
```

Credenciais, tokens, chaves privadas e segredos de autenticação devem permanecer exclusivamente no backend.

## Scripts

### Frontend

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

### Backend

```bash
npm run dev
npm run build
npm run start
```

## Qualidade e Manutenção

O projeto foi organizado para preservar fronteiras claras entre interface, servidor e código compartilhado. O frontend não importa código do backend, o backend não depende do frontend e qualquer contrato comum deve ser mantido em `shared`.

Essa separação facilita deploys independentes, evolução incremental, integração com banco de dados, criação de endpoints reais e implementação futura de fluxos como reservas online, contato comercial e gestão de cardápio.

## Roadmap Sugerido

- Integrar formulário de reserva com endpoint real.
- Persistir solicitações em banco de dados.
- Adicionar envio de e-mail ou integração com WhatsApp.
- Tornar o cardápio dinâmico via API.
- Criar painel administrativo para atualização de pratos e imagens.
- Adicionar testes automatizados para componentes críticos e rotas da API.
- Configurar pipeline de deploy para frontend e backend.

## Status

Projeto em base funcional, com frontend e backend construindo de forma independente.

## Licença

Projeto privado.
