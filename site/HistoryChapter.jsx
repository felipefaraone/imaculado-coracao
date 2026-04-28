// HistoryChapter.jsx — Página "A Paróquia" com timeline vertical e fotos

const TIMELINE = [
  ['1895', 'Claretianos chegam a São Paulo. Instalação provisória na Igreja da Ordem Terceira Franciscana.'],
  ['1896', 'Desabamento da Capela do Páteo do Colégio, marco da fundação de São Paulo.'],
  ['1897', 'Lançamento da pedra fundamental, 13 de março.'],
  ['1899', 'Abertura ao culto público, 2 de fevereiro.'],
  ['1906', 'Instalação do órgão de 1.170 tubos, fabricado na França.'],
  ['1929–1934', 'Decoração artística de Arnaldo e Vicente Mecozzi, pintores italianos.'],
  ['1965', 'Fundação canônica da Paróquia, 31 de maio.'],
  ['1993', 'Início do processo de restauração, em andamento.'],
  ['2025', '130 anos da Comunidade Claretiana de São Paulo, 19 de novembro.'],
];

function HistoryChapter() {
  const waVisita = 'https://wa.me/5511959287365?text=' + encodeURIComponent('Olá, gostaria de informações sobre visitas guiadas à Igreja.');
  return (
    <article>
      {/* Hero */}
      <div className="chapter-head fade-in">
        <div className="eyebrow">A paróquia</div>
        <h1 className="page-title">
          Uma casa-mãe<br/>na Vila Buarque, desde 1897.
        </h1>
      </div>

      {/* Seção 1 — Origens */}
      <div className="chapter-body fade-in">
        <div className="chapter-main">
          <EdFig src="assets/fachada-sepia-historica.jpg" alt="Fachada da paróquia, início do século XX" caption="A fachada, começo do séc. XX." orientation="portrait-float"/>
          <p className="dropcap">
            Em 1896, a antiga Igreja do Colégio Jesuítico, no Páteo do Colégio, desabou após forte chuva. O bispo Dom Joaquim Arcoverde decidiu fundar uma nova Igreja em substituição. Na mesma época chegavam à cidade os primeiros Missionários Claretianos, vindos da Espanha, que se instalavam na Vila Buarque.
          </p>
          <p>
            Decidiu-se construir a nova Igreja junto à casa-mãe da Congregação, que seria o primeiro lar dos Claretianos no Brasil. O terreno foi cedido por José Nogueira Jaguaribe, que deu nome à rua onde a Igreja se encontra até hoje. A pedra fundamental foi lançada em 13 de março de 1897; a abertura ao culto ocorreu em 2 de fevereiro de 1899.
          </p>
        </div>
        <aside className="chapter-margin">
          <div className="eyebrow eyebrow-gold">Marginália</div>
          <p><strong>Dom Joaquim Arcoverde.</strong> Primeiro bispo diocesano de São Paulo.</p>
          <hr className="margin-hr"/>
          <p><strong>José Nogueira Jaguaribe.</strong> Cedeu o terreno onde a Igreja foi erguida.</p>
          <hr className="margin-hr"/>
          <p><strong>Tiziano Zuchetta.</strong> Arquiteto do templo.</p>
          <hr className="margin-hr"/>
          <p><strong>Arnaldo e Vicente Mecozzi.</strong> Pintores italianos. Afrescos de 1929–1934.</p>
        </aside>
      </div>

      {/* Respiro visual */}
      <div className="history-break fade-in">
        <EdFig src="assets/interior-nave.jpg" alt="Interior da nave em direção ao altar-mor" caption="A nave central, com os afrescos dos Mecozzi e o órgão francês de 1906." orientation="landscape-full"/>
      </div>

      {/* Arquitetura e arte */}
      <section className="chapter-arq fade-in">
        <div className="eyebrow">Patrimônio</div>
        <h2>Arquitetura e arte</h2>
        <div className="arq-grid">
          <div className="arq-text">
            <p>O projeto de Tiziano Zuchetta segue o estilo neo-renascentista com influências lombarda, clássica e romano-eclética. A planta é em cruz latina com duas galerias paralelas à nave central e seis capelas laterais, com altares em mármore italiano.</p>
            <p>Entre 1929 e 1934, os pintores italianos Arnaldo e Vicente Mecozzi executaram a decoração artística, com afrescos que retratam os primórdios da evangelização de São Paulo e o Batismo do índio Tibiriçá. O órgão de 1.170 tubos, fabricado na França, chegou em 1906. Os vitrais soletram o nome da paróquia: <em>Cor Mariae, Santa Maria</em>.</p>
            <p>Na fachada: <em>"Rogae pro nobis"</em> e, na entrada: <em>"Refúgio dos Pecadores"</em>. Na Capela do Santíssimo Sacramento, o hino gregoriano <em>Adoro te Devote</em> de São Tomás de Aquino.</p>
          </div>
          <div className="arq-photos">
            <EdFig src="assets/interior-galerias.jpg" alt="Galerias superiores" caption="As galerias paralelas à nave central." orientation="landscape"/>
            <EdFig src="assets/capelas-laterais.jpg" alt="Capelas laterais" caption="Seis capelas laterais com altares em mármore italiano." orientation="landscape"/>
            <EdFig src="assets/orgao-frances.jpg" alt="Órgão de 1.170 tubos" caption="O órgão francês de 1.170 tubos, instalado em 1906." orientation="landscape"/>
            <EdFig src="assets/cupula-central.jpg" alt="Cúpula central decorada" caption="A cúpula central, afrescos dos Mecozzi (1929–1934)." orientation="landscape"/>
            <EdFig src="assets/vitrais-cor-maria.jpg" alt="Vitrais Cor Mariae Santa Maria" caption="Os vitrais soletram o nome da paróquia: Cor Maria, Santa Maria." orientation="landscape"/>
          </div>
        </div>
      </section>

      <Divider variant="plain"/>

      {/* Timeline vertical */}
      <section className="tl-section fade-in">
        <div className="eyebrow">Cronologia</div>
        <h2>Linha do tempo</h2>
        <ol className="tl-list" aria-label="Linha do tempo da paróquia">
          {TIMELINE.map(([year, event]) => (
            <li key={year} className="tl-item">
              <span className="tl-year">{year}</span>
              <span className="tl-dot" aria-hidden="true"/>
              <span className="tl-event">{event}</span>
            </li>
          ))}
        </ol>
      </section>

      <Divider variant="plain"/>

      {/* Tombamento */}
      <section className="tombamento fade-in">
        <div className="tombamento-col">
          <div className="eyebrow">Preservação</div>
          <h2>Tombamento e restauração</h2>
          <p>Esta Igreja é tombada pelo CONDEPHAAT, que reconhece a riqueza arquitetônica, escultórica e pictórica do conjunto. Um programa contínuo de restauração, em andamento desde 1993, mantém vivo o patrimônio.</p>
        </div>
        <EdFig src="assets/anjos-fachada.jpg" alt="Anjos de pedra com trombetas na fachada" caption="Anjos de pedra que o tombamento protege." orientation="landscape"/>
      </section>

      <Divider variant="fleuron"/>

      {/* Visite */}
      <section className="visita-block fade-in">
        <div className="eyebrow eyebrow-gold">Patrimônio aberto</div>
        <h2>Visite a Igreja</h2>
        <p className="visita-lead">Esta é uma Igreja ativa e aberta.</p>
        <p>Você pode entrar durante qualquer celebração ou no período em que a secretaria está aberta. Pedimos respeito pelo silêncio de quem reza.</p>
        <div className="visita-horarios">
          <div className="eyebrow eyebrow-mute" style={{marginBottom:10}}>Aberta ao público</div>
          <ul>
            <li>Durante todas as Missas (ver horários)</li>
            <li>Segunda a sexta: 8h–12h e 13h30–19h30</li>
            <li>Sábados: 7h30–11h30 e 12h30–15h45</li>
          </ul>
        </div>
        <p>Para visitas guiadas em grupo, com explicação sobre arte, história e acervo, fale com a secretaria.</p>
        <WaBtn href={waVisita}>Falar sobre visitas guiadas</WaBtn>
      </section>
    </article>
  );
}
window.HistoryChapter = HistoryChapter;
