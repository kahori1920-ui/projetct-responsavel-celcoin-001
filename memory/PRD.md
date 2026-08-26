# PRD — Home Celcoin (Web App)

## Problema original
Reaproveitar a home exportada da Celcoin (HTML/Elementor via SingleFile) como página inicial do web app, removendo todos os links externos, e a partir dela crescer para outras páginas (banking, credit, payments, contato).

## Arquitetura
- A home é o próprio arquivo HTML enviado pelo usuário, processado e servido diretamente como `/app/frontend/public/index.html` (sem wrapper React, sem iframe)
- Assets re-hospedados: `/app/frontend/public/assets/home/` (31 imagens locais)
- Título e favicon da aba do navegador são os originais do arquivo
- Backend: FastAPI (porta 8001) + MongoDB — reservado para Fase 4 (formulário de leads)

## O que foi feito (26/08/2026)
- Arquivo .htm enviado pelo usuário baixado e processado
- Todas as 31 imagens baixadas para `public/assets/home/` e URLs reescritas para caminhos locais
- Links externos neutralizados: hrefs → `#`, canonical/og:meta/script de schema removidos, comentário SingleFile removido
- 0 URLs externas restantes no HTML (exceto namespaces w3.org/schema.org em SVG)
- React App.js simplificado para servir a home em iframe sem bordas
- Verificado: curl 200 em `/`, `/home.html`, assets; screenshots do topo, meio e rodapé renderizando corretamente

## Atualização (26/08/2026, 18:12)
- A pedido do usuário, a home passou a ser somente o arquivo enviado: `public/index.html` agora É o HTML processado (sem iframe/wrapper React)
- `home.html` duplicado removido; título e favicon da aba agora são os do arquivo original
- Verificado: aba mostra título original; página renderiza idêntica ao arquivo; assets 200

## Atualização (26/08/2026, 20:19)
- Home substituída pelo novo export (v3), que veio com o modal "Entrar" capturado aberto (seletor de painéis: cel_bricks, cel_credit escrow, Gateway de Pagamentos + links Fale com um especialista / Cadastre-se)
- Mesmo pipeline aplicado: 31 imagens locais, zero links externos, marquee CSS, setas de dropdown ocultas
- Modal ligado via CSS puro (`:target`): botão Entrar (href=#bdt-modal-4269d6e) abre; botão X (href="#fechar") fecha; oculto por padrão
- Verificado no navegador: modal oculto no load, abre ao clicar Entrar (display:block), fecha no X; marquee continua animando

## Atualização (26/08/2026, 20:12)
- Usuário decidiu: menu sem mega menu — só os títulos, sem ação no hover
- Novo export (celcoin_v2.htm) analisado: painéis dos dropdowns continuam vazios no HTML (conteúdo montado via JS no site original); descartado
- Removido o CSS de hover que revelava painéis vazios; setas de dropdown escondidas (`.e-n-menu-dropdown-icon{display:none}`)
- Verificado no navegador: hover em Soluções e Desenvolvedores não abre nada; marquee de clientes continua animando

## Atualização (26/08/2026, 18:22)

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
