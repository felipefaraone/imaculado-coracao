// HeroOpening.jsx — Copy reduzida, letra capitular E em carmim
function HeroOpening({ onPrimary, onSecondary }) {
  return (
    <section className="hero-fullbleed">
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-stack">
        <div className="hero-eyebrow">Paróquia · Vila Buarque · desde 1897</div>
        <h1 className="hero-title-light">
          Uma casa de oração,<br/>
          aberta todos os dias.
        </h1>
        <div className="hero-rule-light" aria-hidden="true"></div>
        <p className="hero-lead">
          <span className="hero-dropcap" aria-hidden="true">E</span>sta é a Igrejinha da Higienópolis, casa-mãe dos Missionários Claretianos no Brasil. Celebramos a Missa todos os dias. Pode entrar.
        </p>
        <div className="hero-ctas-light">
          <button className="btn-primary" onClick={onPrimary}>Ver horários de Missa</button>
          <button className="hero-link-light" onClick={onSecondary}>Conhecer a paróquia <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </section>
  );
}
window.HeroOpening = HeroOpening;
