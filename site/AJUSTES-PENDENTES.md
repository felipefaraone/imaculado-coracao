# Ajustes pendentes — Site Paróquia ICM

## PRIORIDADE 1 — Converter para HTML puro

O site atualmente usa componentes React (.jsx). O objetivo final é HTML+CSS puro, sem React runtime. Converter todos os componentes para HTML estático em páginas separadas:

- [ ] index.html (Home)
- [ ] a-paroquia.html
- [ ] missas.html
- [ ] sacramentos.html
- [ ] os-claretianos.html
- [ ] contribua.html
- [ ] contato.html

Cada página é autocontida: inclui o header, o conteúdo, e o footer. CSS compartilhado em site.css. JS mínimo em animations.js.

## PRIORIDADE 2 — Estrutura da Home

- [ ] Hero: fachada-externa.jpg + copy REDUZIDA (máximo 2 linhas de parágrafo) + CTAs
- [ ] Hero: overlay gradient (mais transparente no centro, mais escuro em cima e embaixo): background: linear-gradient(to bottom, rgba(43,24,16,0.55) 0%, rgba(43,24,16,0.35) 40%, rgba(43,24,16,0.50) 100%)
- [ ] Hero: letra capitular "E" grande, carmim sólido (#8B2E1F), sem fade, contraste forte
- [ ] Faixa de horários logo abaixo do hero: grid 3 colunas (Dias úteis / Sábado / Domingo), horários em Fraunces grande (32-40px), labels em versalete, separadores hairline, ornamento sutil
- [ ] "Por onde quer começar": nova copy sem "Orientação pastoral". Título: "Por onde quer começar". Subtítulo: "Este é um lugar para tudo que a vida cristã precisa. Escolha o que te trouxe aqui." 7 intenções com numeração romana I-VII
- [ ] Sacramentos em resumo: 3 destaques (Batismo, Matrimônio, Confissão) + link
- [ ] Claretianos em resumo: parágrafo curto + foto + link
- [ ] Acompanhe o dia a dia: card editorial único com "Instagram: @paroquiaimaculadosp" e "WhatsApp (11) 95928-7365" (labels explícitos)
- [ ] Dízimo & Ofertas: convite breve + botão "Contribuir via Pix →"
- [ ] Remover seções de liturgia/doutrina/FAQ da home

## PRIORIDADE 3 — Página A paróquia

- [ ] Hero: fachada-sepia-historica.jpg
- [ ] Seção 1: "Uma casa-mãe na Vila Buarque, 1897" (história da fundação)
- [ ] Respiro visual: interior-nave.jpg (Categoria A: max-width 1000px)
- [ ] Arquitetura e arte: grid de fotos Categoria C (max 400px cada): interior-galerias, capelas-laterais, orgao-frances, cupula-central, vitrais-cor-maria. Legendas em versalete ouro.
- [ ] Linha do tempo VISUAL VERTICAL com trilho central: linha 1px, círculos 8px nos marcos, ano em Fraunces grande, descrição em Inter. Marcos: 1895, 1896, 1897, 1899, 1906, 1929-1934, 1965, 1993, 2025.
- [ ] Tombamento: texto + anjos-fachada.jpg (Categoria B)
- [ ] Visite a igreja: horários + botão WhatsApp verde

## PRIORIDADE 4 — Página Os Claretianos

- [ ] Hero: altar-mor-imaculado-coracao.jpg
- [ ] Seção "O que é uma congregação religiosa" (texto didático)
- [ ] Santo Antônio Maria Claret: texto + foto santo-antonio-claret.jpg (Categoria B, ao lado do texto)
- [ ] Citação do fundador: regra de quote atualizada (linha vertical só no texto)
- [ ] Chegada ao Brasil
- [ ] Relação com a paróquia
- [ ] Pe. Wellington: foto paroco-wellington.jpg ESPELHADA (transform: scaleX(-1)), rosto virado pra dentro. Se espelhar ficar estranho, reverter. Alinhar altura da foto com texto.
- [ ] Links: claretianos.com.br e claretians.org

## PRIORIDADE 5 — Página Missas

- [ ] Horários em versão editorial sofisticada: grid 3 colunas, Fraunces grande (36-44px), versalete carmim nos labels, hairlines, ornamento
- [ ] Adoração Eucarística: capela-santissimo.jpg + texto placeholder
- [ ] Ano litúrgico didático: cards com barra lateral colorida 8px. Cores: roxo #6B4B8A, branco-ouro #E8DCC4, carmim #8B2E1F, verde #5A7A4F, rosa #C98B85
- [ ] Confissão NÃO fica nesta página (vai pra Sacramentos)

## PRIORIDADE 6 — Página Sacramentos

- [ ] Introdução curta
- [ ] Grid 2 colunas com 7 sacramentos em ACCORDION (expand/collapse inline, um por vez)
- [ ] Card fechado: numeral romano ouro + nome Fraunces + chevron
- [ ] Card aberto: descrição + citação CIC + foto (quando houver) + botão WhatsApp verde
- [ ] IV. Confissão: incluir confessionario.jpg + texto pastoral acolhedor + CIC §1422
- [ ] V. Matrimônio: bloco expandido com requisitos e processo + CIC §1601
- [ ] Espaço vago (8º slot): anjos-fachada.jpg decorativa
- [ ] RICA: card separado abaixo do grid. SEM afirmar turmas ativas.

## PRIORIDADE 7 — Página Contribua (redesenho completo)

- [ ] Hero: "Sustentar esta casa."
- [ ] Bloco PIX protagonista: 5 botões de valor (R$10, R$20, R$50, R$100, Outro valor)
- [ ] Botões: 120x60px, borda dourada 1px, Fraunces 24px. Hover: fundo creme, borda carmim. Ativo: fundo carmim, texto creme.
- [ ] Ao selecionar valor: QR Code placeholder 280x280px + código copia-e-cola + botão copiar
- [ ] JS vanilla (~20 linhas) pra trocar QR/código conforme valor selecionado
- [ ] Dízimo presencial + Transferência bancária (cards secundários)
- [ ] CTA WhatsApp final
- [ ] Citação 2 Coríntios 9,7

## PRIORIDADE 8 — Página Contato (redesenho)

- [ ] Hero: "Como falar conosco"
- [ ] WhatsApp destacado grande (card primário com ícone verde 60px)
- [ ] Grid 3 colunas: Telefones, Email, Instagram (com labels explícitos)
- [ ] Endereço + horários secretaria

## PRIORIDADE 9 — Footer (todas as páginas)

- [ ] 4 colunas: Endereço, Telefones, Digital, Pastoral
- [ ] "Instagram: @paroquiaimaculadosp" (label explícito)
- [x] Ícone WhatsApp no footer — monocromático carmim (`.site-footer .wa-circle { background: var(--ink-carmine) }`)
      Decisão revisada: botão WhatsApp do Contato e footer agora usam
      carmim monocromático (.wa-btn--mono), igual ao resto do site.
      Regra anterior ("verde #25D366 exclusivo no Contato e footer")
      foi abandonada por consistência visual. .wa-btn--green permanece
      em site.css como CSS orphan — pendente limpeza futura.
- [x] Bloco monumental Contato: background é --ink-parchment (#EBE1D0). Carmim é
      cor de acento no site, não de background massivo. Tipografia dos canais volta
      ao padrão ink-deep + eyebrows ouro/carmim, idêntico ao resto do site.
      Botão WhatsApp usa .wa-btn--mono padrão.
      Classes/vars removidas: --ink-carmine-deep, .wa-btn--on-dark.
      CSS orphan restante: .wa-btn--green (pendente limpeza futura).
- [ ] "Administrada pelos Missionários Claretianos desde 1897."
- [ ] Link claretianos.com.br
- [ ] "In cordibus Iesu et Mariae." em itálico
- [ ] Logo 60px

## PRIORIDADE 10 — Animações

- [ ] Scroll suave: html { scroll-behavior: smooth }
- [ ] Fade-in on scroll: IntersectionObserver, translateY 20px→0, opacity 0→1, 600ms
- [ ] Underline progressivo no menu: ::after scaleX 0→1, 300ms
- [ ] Hover elevation em cards: translateY(-4px) + sombra, 250ms
- [ ] prefers-reduced-motion respeitado

## PRIORIDADE 11 — Botão Contribua no menu

- [ ] Visualmente diferenciado: fundo carmim #8B2E1F, texto creme, border-radius 2px
- [ ] Último item do menu
- [ ] Hover: escurece 10%
