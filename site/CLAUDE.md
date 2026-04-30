# Paróquia Imaculado Coração de Maria — Site

## O que é este projeto
Site oficial da Paróquia Imaculado Coração de Maria, Vila Buarque, São Paulo. Administrada pelos Missionários Claretianos (CMF) desde 1897.

## Arquitetura
- HTML + CSS puro, arquivo único por página
- Zero frameworks
- JavaScript apenas para: IntersectionObserver (fade-in), accordion em Sacramentos, sistema PIX em Contribua
- Editável por voluntário com conhecimento básico de HTML

## Estado atual
O site foi parcialmente gerado pelo Claude Design usando componentes React (.jsx). Esses componentes precisam ser compilados em HTML puro (sem React runtime). O index.html atual importa os .jsx via tags script, mas o objetivo final é HTML estático puro.

## Paleta de cores
- Creme (fundo): #F5EFE6
- Parchment (alt): #EBE1D0
- Deep ink (texto): #2B1810
- Carmim (acento): #8B2E1F
- Ouro (devocional): #B8863E
- Rule (filete): #D4C4A8
- Roxo litúrgico: #6B4B8A
- Verde litúrgico: #5A7A4F
- Rosa litúrgico: #C98B85
- WhatsApp verde: #25D366

## Tipografia
- Display/títulos: Fraunces (Google Fonts), opsz 96, SOFT 50
- Corpo: Inter (Google Fonts), weight 400/500 apenas (nunca 600+)
- Versalete: Inter uppercase, letter-spacing 0.12em, font-size menor

## Ícones
- Biblioteca: Lucide (lucide.dev)
- Stroke: 1.5
- Tamanho padrão: 20px
- Cor: currentColor (herda do texto)
- Exceção: ícone WhatsApp sempre verde #25D366

## Fotos (pasta assets/)
- altar-mor-imaculado-coracao.jpg — altar-mor
- anjos-fachada.jpg — anjos de pedra na fachada
- capela-santissimo.jpg — Capela do Santíssimo
- capelas-laterais.jpg — capelas laterais com crucifixo
- confessionario.jpg — confessionário em madeira
- cupula-central.jpg — cúpula decorada
- fachada-externa.jpg — frontão com "ROGAE POR NOS" (hero da Home)
- fachada-sepia-historica.jpg — fachada histórica sépia
- interior-galerias.jpg — galerias superiores com arcos
- interior-nave.jpg — nave em direção ao altar-mor
- logo-paroquia.png — logo da paróquia
- orgao-frances.jpg — órgão francês de 1.170 tubos
- paroco-wellington.jpg — Pe. Wellington
- santo-antonio-claret.jpg — Santo Antônio Maria Claret
- vitrais-cor-maria.jpg — vitrais "Cor Maria / Santa Maria"

## Dimensionamento de imagens
- Hero de página: max-width 1000px, max-height 70vh, object-fit cover
- Editorial em seção: max-width 720px, max-height 480px
- Grid de detalhes: max-width 400px, em grids de 2-3 colunas
- Mobile (<768px): hero max-height 50vh, editorial 100% com padding 24px, grid vira 1 coluna

## Moldura editorial (TODAS as fotos)
- border: 1px solid #D4C4A8
- padding: 8px (passe-partout)
- background do passe-partout: #F5EFE6
- box-shadow: 0 2px 12px rgba(43, 24, 16, 0.08)

## Regras de vocabulário católico
- "Missa" (padrão), "Santa Missa" (tom solene)
- "celebrar" a Missa, "receber" a Eucaristia, "participar" da Missa
- "igreja" (prédio minúsculo), "Igreja" (instituição maiúsculo)
- "ofertas" não "ofertórios" (como categoria de doação)
- "fiéis", "paroquianos" não "membros"
- "igreja" não "templo"
- Evitar travessões (—) em excesso; preferir vírgulas

## Regras de citações (quotes)
- Linha vertical carmim 2px cobre APENAS o texto citado
- Atribuição (ex: "Catecismo §1422") fica FORA da linha, com espaço
- Atribuição em versalete ouro

## Botões WhatsApp
- Ícone: sempre verde #25D366, dentro de círculo 20px
- Texto do botão: cor da paleta (carmim ou marrom)
- target="_blank"

## Tom
Acolhedor sem ser condescendente. Formal sem ser burocrático. Carisma claretiano: evangelização apaixonada que move sem constranger. Abundância, nunca proibição.

## Dados de contato
- Endereço: Rua Jaguaribe, 735, Vila Buarque, São Paulo, SP, CEP 01224-001
- Telefones: (11) 3666-0756 / (11) 3661-4077
- WhatsApp: (11) 95928-7365
- Email: pascom.imaculadosp@gmail.com
- Instagram: @paroquiaimaculadosp

## Horários de Missa
- Domingo: 7h30, 9h30, 11h, 18h, 19h30
- Segunda a sexta: 6h30 e 18h
- Sábado: 8h e 16h

## Secretaria
- Segunda a sexta: 8h-12h e 13h30-19h30
- Sábado: 7h30-11h30 e 12h30-15h45

## Lightbox de fotos

Fotos do site são maximizáveis ao clicar (CSS puro com :target, zero JavaScript). Para adicionar uma nova foto com zoom:
1. Envolver o `<img>` com `<a href="#zoom-NOME">`
2. Adicionar classe `photo-zoomable` no `<img>`
3. Adicionar um `<div class="photo-lightbox" id="zoom-NOME">` antes do `</body>` com esta estrutura:
   ```html
   <div id="zoom-NOME" class="photo-lightbox">
     <a href="#_" class="photo-lightbox-backdrop" aria-label="Fechar"></a>
     <a href="#_" class="photo-lightbox-close" aria-label="Fechar">Fechar</a>
     <img src="assets/foto.jpg" alt="Descrição — vista ampliada"/>
     <div class="photo-lightbox-caption">Legenda em Fraunces itálico.</div>
   </div>
   ```
4. O `photo-lightbox-backdrop` é um link transparente que cobre o fundo escuro — clicar fora da foto fecha o lightbox

Todos os links "fechar" usam `href="#_"` (remove o fragment sem rolar para o topo). Ver exemplos em a-paroquia.html.

## Placeholders
Quando informação precisa ser confirmada com a secretaria, usar comentário HTML:
<!-- ⚠ PLACEHOLDER — Confirmar com a secretaria antes de publicar. -->

## URLs WhatsApp pré-preenchidas
- Batismo: https://wa.me/5511959287365?text=Olá, gostaria de informações sobre o agendamento do Batismo.
- Catequese: https://wa.me/5511959287365?text=Olá, gostaria de informações sobre a Catequese e a Primeira Comunhão.
- Crisma: https://wa.me/5511959287365?text=Olá, gostaria de informações sobre a Crisma.
- Confissão: https://wa.me/5511959287365?text=Olá, gostaria de informações sobre a Confissão.
- Matrimônio: https://wa.me/5511959287365?text=Olá, gostaria de informações sobre o Curso de Noivos e agendamento do Matrimônio.
- Unção: https://wa.me/5511959287365?text=Olá, preciso chamar o padre para Unção dos Enfermos.
- Ordem: https://wa.me/5511959287365?text=Olá, gostaria de conversar sobre vocação sacerdotal e religiosa.
- RICA: https://wa.me/5511959287365?text=Olá, gostaria de informações sobre o processo de iniciação cristã para adultos (RICA).
- Contribuição: https://wa.me/5511959287365?text=Olá, gostaria de conversar sobre dízimo e ofertas.
- Visitas: https://wa.me/5511959287365?text=Olá, gostaria de informações sobre visitas guiadas à igreja.
