# PRD — Home Celcoin (Web App)

## Problema original
Reaproveitar a home exportada da Celcoin (HTML/Elementor via SingleFile) como página inicial do web app, removendo todos os links externos, e a partir dela crescer para outras páginas (banking, credit, payments, contato).

## Arquitetura
- Frontend: React (porta 3000) — App.js renderiza a home processada em iframe full-screen (`/home.html`)
- Home estática: `/app/frontend/public/home.html` (HTML original processado, CSS e fontes Urbanist inline em base64)
- Assets re-hospedados: `/app/frontend/public/assets/home/` (31 imagens baixadas localmente)
- Backend: FastAPI (porta 8001) + MongoDB — reservado para Fase 4 (formulário de leads)

## O que foi feito (26/08/2026)
- Arquivo .htm enviado pelo usuário baixado e processado
- Todas as 31 imagens baixadas para `public/assets/home/` e URLs reescritas para caminhos locais
- Links externos neutralizados: hrefs → `#`, canonical/og:meta/script de schema removidos, comentário SingleFile removido
- 0 URLs externas restantes no HTML (exceto namespaces w3.org/schema.org em SVG)
- React App.js simplificado para servir a home em iframe sem bordas
- Verificado: curl 200 em `/`, `/home.html`, assets; screenshots do topo, meio e rodapé renderizando corretamente

## Backlog priorizado
- P0: Refatorar home em componentes React limpos (Fase 2) — hero, módulos, marquee, accordion, stats, CTA
- P1: Rotas e páginas internas (banking, credit, payments, contato) com header/footer compartilhados (Fase 3)
- P1: Formulário "Fale com um especialista" funcional com FastAPI + MongoDB (Fase 4)
- P2: Design system extraído do layout (cores, Urbanist, botões)
- P2: Menu mobile e interações do Elementor que dependiam de JS externo

## Observações
- Links do menu apontam para `#` até as páginas internas existirem
- Widget de chat e scripts de tracking foram removidos junto com os links externos
- Sem autenticação/credenciais nesta fase
