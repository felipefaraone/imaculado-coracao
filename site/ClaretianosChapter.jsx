// ClaretianosChapter.jsx — Santo Antônio com foto, pároco espelhado

function ClaretianosChapter() {
  return (
    <article>
      {/* Hero */}
      <div className="fade-in">
        <EdFig src="assets/altar-mor-imaculado-coracao.jpg" alt="Altar-mor com o Imaculado Coração de Maria" caption="O Imaculado Coração de Maria, no altar-mor. O nome da paróquia, em pedra." orientation="hero-page"/>
      </div>

      <div className="chapter-head" style={{marginTop:56}}>
        <div className="eyebrow">A Congregação</div>
        <h1 className="page-title">Os Missionários Claretianos.</h1>
      </div>

      {/* Seção 1 — O que é uma congregação */}
      <section className="claret-section fade-in">
        <div className="chapter-body">
          <div className="chapter-main">
            <h2>O que é uma congregação religiosa?</h2>
            <p className="dropcap">
              Dentro da Igreja Católica existem diferentes formas de viver a vocação religiosa. Padres paroquiais comuns são chamados "diocesanos" e servem à diocese onde foram ordenados. Já as congregações religiosas são comunidades que seguem um carisma específico, uma forma particular de viver o Evangelho, fundadas por alguém que teve uma inspiração concreta.
            </p>
            <p>Os Missionários Claretianos são uma dessas congregações. Seu carisma central é a evangelização missionária: anunciar o Evangelho com urgência, ardor e alegria, especialmente onde ele mais precisa ser ouvido.</p>
          </div>
          <aside className="chapter-margin">
            <div className="eyebrow eyebrow-gold">Marginália</div>
            <p><strong>Nome oficial.</strong> Missionários Filhos do Imaculado Coração de Maria, CMF.</p>
            <hr className="margin-hr"/>
            <p><strong>Fundação.</strong> 16 de julho de 1849, em Vic, Catalunha, Espanha.</p>
            <hr className="margin-hr"/>
            <p><strong>Presença.</strong> Mais de 70 países.</p>
          </aside>
        </div>
      </section>

      <Divider variant="plain"/>

      {/* Seção 2 — O fundador */}
      <section className="claret-section fade-in">
        <div className="eyebrow">O fundador</div>
        <h2>Santo Antônio Maria Claret</h2>
        <div className="claret-founder-grid">
          <div className="claret-founder-text">
            <p>Nascido em Sallent, Catalunha, em 1807. Sacerdote, missionário, arcebispo de Santiago de Cuba, confessor da Rainha Isabel II da Espanha. Escritor prolífico, com mais de 140 obras publicadas. Sofreu atentados, exílios e calúnias por defender os pobres e pregar a reforma da vida cristã.</p>
            <p>Fundou a Congregação dos Missionários Filhos do Imaculado Coração de Maria em 16 de julho de 1849, na cidade de Vic. O nome expressa o centro da espiritualidade claretiana: entregar-se ao Coração de Maria, para que Ele forme em nós o Coração de Cristo.</p>
            <p>Canonizado em 7 de maio de 1950, pelo Papa Pio XII.</p>
          </div>
          <figure className="claret-founder-photo">
            <div className="ed-fig-frame">
              <img src="assets/santo-antonio-claret.jpg" alt="Santo Antônio Maria Claret, 1807–1870" loading="lazy"/>
            </div>
            <figcaption className="ed-fig-cap eyebrow-gold">Santo Antônio Maria Claret, 1807–1870.</figcaption>
          </figure>
        </div>
      </section>

      {/* Citação */}
      <section className="fade-in" style={{padding:'32px 0 48px'}}>
        <DoctrineQuote source="Santo Antônio Maria Claret · Autobiografia">
          "Um filho do Imaculado Coração de Maria é um homem que arde em caridade e abrasa por onde passa. Deseja eficazmente e procura por todos os meios inflamar o mundo no fogo do divino amor."
        </DoctrineQuote>
      </section>

      <Divider variant="plain"/>

      {/* Chegada ao Brasil */}
      <section className="claret-section fade-in">
        <div className="eyebrow">A missão no Brasil</div>
        <h2>Chegada ao Brasil, 1895</h2>
        <div className="chapter-body">
          <div className="chapter-main">
            <p className="dropcap">
              Os Claretianos chegaram ao Brasil em 1895, vindos da Espanha. São Paulo era uma cidade pequena, com cerca de 50 mil habitantes. Instalaram-se provisoriamente na Igreja da Ordem Terceira Franciscana enquanto buscavam terreno para fundar a primeira casa da Congregação no país.
            </p>
            <p>O terreno cedido por José Nogueira Jaguaribe tornou-se a casa-mãe da Congregação no Brasil. Esta paróquia é o marco zero da presença claretiana no território brasileiro. Estamos aqui há mais de 128 anos.</p>
            <p>Em 19 de novembro de 2025, a Comunidade Claretiana de São Paulo celebrou 130 anos de presença.</p>
          </div>
          <aside className="chapter-margin">
            <div className="eyebrow eyebrow-gold">Marginália</div>
            <p><strong>1895.</strong> Chegada a São Paulo.</p>
            <hr className="margin-hr"/>
            <p><strong>Casa-mãe.</strong> Esta Igreja é o primeiro lar da Congregação no Brasil.</p>
            <hr className="margin-hr"/>
            <p><strong>19/11/2025.</strong> 130 anos da Comunidade de São Paulo.</p>
          </aside>
        </div>
      </section>

      <Divider variant="plain"/>

      {/* Relação com a paróquia */}
      <section className="claret-section fade-in">
        <h2>A relação com a paróquia</h2>
        <p>Muitas paróquias são administradas por congregações religiosas, mas a relação pode ser mais ou menos profunda. Aqui, os Claretianos são a identidade espiritual do lugar, não apenas seus gestores. O pároco, os vigários, a espiritualidade vivida nas Missas e nos Sacramentos: tudo vem da mesma fonte claretiana.</p>
        <p>Na prática, quem entra nesta Igreja encontra um estilo particular: missionário, mariano, inflamado pelo anúncio, acolhedor com quem chega de longe.</p>
      </section>

      <Divider variant="fleuron"/>

      {/* Pároco */}
      <section className="paroco fade-in">
        <div className="paroco-text">
          <div className="eyebrow">Pároco</div>
          <h2>Pe. Wellington Cardoso Brandão, <em>CMF</em>.</h2>
          <p>Missionário Claretiano ordenado em 26 de janeiro de 1991, Pe. Wellington fez profissão religiosa em 1984. Chegou a esta casa com décadas de missão: paróquias em Goiânia e 18 anos servindo na Basílica de Nossa Senhora de Lourdes, em Belo Horizonte.</p>
          <p>Hoje é pároco desta comunidade e Vice-Superior da Comunidade Claretiana de São Paulo. Atua também como Assessor Eclesiástico da Região Episcopal da Sé, que reúne cerca de 60 paróquias da Arquidiocese de São Paulo. É autor de obras sobre vida paroquial publicadas pela Editora Ave Maria.</p>
          <p className="paroco-note">Para marcar uma conversa ou pedir orientação espiritual, procure a secretaria — telefones e WhatsApp no rodapé.</p>
        </div>
        <figure className="paroco-photo">
          {/* transform: scaleX(-1) vira o rosto para o lado do texto */}
          <div className="ed-fig-frame" style={{transform:'scaleX(-1)'}}>
            <img src="assets/paroco-wellington.jpg" alt="Pe. Wellington Cardoso Brandão, CMF, pároco" loading="lazy" style={{transform:'scaleX(-1)'}}/>
          </div>
          <figcaption className="ed-fig-cap">Pe. Wellington · pároco · Missionários Claretianos.</figcaption>
        </figure>
      </section>

      <Divider variant="plain"/>

      <section className="claret-links fade-in">
        <div className="eyebrow eyebrow-mute">Saiba mais</div>
        <p><a href="https://www.claretianos.com.br" target="_blank" rel="noopener" className="claret-extlink">Província Claretiana do Brasil — claretianos.com.br →</a></p>
        <p><a href="https://www.claretians.org" target="_blank" rel="noopener" className="claret-extlink">Claretianos no mundo — claretians.org →</a></p>
      </section>
    </article>
  );
}
window.ClaretianosChapter = ClaretianosChapter;
