// HomeSections.jsx — Todas as seções da Home (exceto Hero)

/* ---- Faixa de horários de Missa ---- */
function ScheduleStrip({ onVerMais }) {
  return (
    <section className="sch-strip fade-in">
      <div className="sch-strip-orn" aria-hidden="true">❦</div>
      <div className="eyebrow eyebrow-gold sch-strip-eyebrow">Horários de Missa</div>
      <div className="sch-strip-cols">
        <div className="sch-strip-col">
          <div className="sch-day">Dias úteis</div>
          <div className="sch-times">6h30<br/>18h</div>
        </div>
        <div className="sch-strip-sep" aria-hidden="true"/>
        <div className="sch-strip-col">
          <div className="sch-day">Sábado</div>
          <div className="sch-times">8h<br/>16h</div>
        </div>
        <div className="sch-strip-sep" aria-hidden="true"/>
        <div className="sch-strip-col">
          <div className="sch-day">Domingo</div>
          <div className="sch-times">7h30<br/>9h30<br/>11h<br/>18h<br/>19h30</div>
        </div>
      </div>
      <button className="btn-ghost sch-strip-link" onClick={onVerMais}>
        Ver Confissões, Adoração e Ano Litúrgico →
      </button>
    </section>
  );
}

/* ---- 3 Sacramentos em destaque ---- */
function HomeSacramentos3({ onVerTodos }) {
  const wa = t => 'https://wa.me/5511959287365?text=' + encodeURIComponent(t);
  const destaques = [
    { title: 'Batismo',    blurb: 'O nascimento para a vida da graça. Para bebês, crianças e adultos.', href: wa('Olá, gostaria de informações sobre o Batismo.') },
    { title: 'Matrimônio', blurb: 'Celebre seu casamento nesta Igreja. Procure-nos com pelo menos 12 meses de antecedência.', href: wa('Olá, gostaria de informações sobre o Curso de Noivos e Matrimônio.') },
    { title: 'Confissão',  blurb: 'A misericórdia concreta da Igreja. Se faz anos, pode voltar, sem reservas.', href: wa('Olá, gostaria de informações sobre a Confissão.') },
  ];
  return (
    <section className="home-sac3 fade-in">
      <div className="home-sac3-hdr">
        <div>
          <div className="eyebrow">Sacramentos</div>
          <h2>Sete sinais da graça de Cristo</h2>
        </div>
        <button className="btn-ghost" onClick={onVerTodos}>Ver todos os Sacramentos →</button>
      </div>
      <div className="home-sac3-grid">
        {destaques.map(s => (
          <article key={s.title} className="home-sac3-card">
            <h3>{s.title}</h3>
            <p>{s.blurb}</p>
            <WaBtn href={s.href}>Falar no WhatsApp</WaBtn>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---- Os Claretianos em resumo ---- */
function HomeClaretianos({ onSaberMais }) {
  return (
    <section className="home-claret fade-in">
      <div className="home-claret-photo">
        <EdFig
          src="assets/altar-mor-imaculado-coracao.jpg"
          alt="Altar-mor com a imagem do Imaculado Coração de Maria"
          orientation="portrait"
        />
      </div>
      <div className="home-claret-text">
        <div className="eyebrow">A Congregação</div>
        <h2>Os Missionários Claretianos</h2>
        <p>Esta paróquia é a casa-mãe dos Missionários Claretianos no Brasil. Uma congregação religiosa nascida na Catalunha em 1849, com um carisma simples e exigente: anunciar o Evangelho com urgência e amor.</p>
        <p>Estamos aqui há mais de 128 anos.</p>
        <button className="btn-ghost" onClick={onSaberMais}>Conhecer os Missionários Claretianos →</button>
      </div>
    </section>
  );
}

/* ---- Presença digital ---- */
function RedesSociais() {
  return (
    <section className="redes fade-in">
      <div className="redes-card-wrap">
        <div className="eyebrow eyebrow-mute">Presença digital</div>
        <h2>Acompanhe a vida da paróquia.</h2>
        <p>Avisos de celebrações especiais, momentos da comunidade e o dia a dia desta casa.</p>
        <div className="redes-links">
          <a href="https://instagram.com/paroquiaimaculadosp" className="redes-link" target="_blank" rel="noopener">
            <IgIcon size={18}/> @paroquiaimaculadosp →
          </a>
          <a href="https://wa.me/5511959287365" className="redes-link redes-link--wa" target="_blank" rel="noopener">
            <WaIcon size={24}/> (11) 95928-7365
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---- Dízimo — convite breve ---- */
function DizimoCta({ onContribua }) {
  return (
    <section className="dizimo-home fade-in">
      <div>
        <div className="eyebrow eyebrow-gold">Dízimo & Ofertas</div>
        <h2>Sustentar esta casa.</h2>
        <p>Cada contribuição sustenta a celebração diária da Missa, a restauração continuada desta Igreja tombada e os trabalhos pastorais e sociais que nascem daqui.</p>
      </div>
      <button className="btn-secondary" onClick={onContribua}>Contribuir via Pix →</button>
    </section>
  );
}

Object.assign(window, { ScheduleStrip, HomeSacramentos3, HomeClaretianos, RedesSociais, DizimoCta });
