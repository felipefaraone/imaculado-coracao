// DoctrineQuote.jsx — Citação doutrinária com linha carmim só no texto, atribuição fora

function DoctrineQuote({ children, source }) {
  return (
    <figure className="doctrine fade-in">
      <div className="doctrine-text">
        <blockquote>{children}</blockquote>
      </div>
      <figcaption>{source}</figcaption>
    </figure>
  );
}
window.DoctrineQuote = DoctrineQuote;

// IntentionJourney — 7 intenções de chegada
function IntentionJourney({ onChoose }) {
  const intentions = [
    { id: 'assistir',   roman: 'I',   label: 'Quero assistir à Missa',     sub: 'Ver horários e como chegar' },
    { id: 'confessar',  roman: 'II',  label: 'Quero me confessar',         sub: 'Sacramentos, antes das Missas' },
    { id: 'batizar',    roman: 'III', label: 'Quero batizar meu filho',    sub: 'Inscrição para pais e padrinhos' },
    { id: 'casar',      roman: 'IV',  label: 'Quero casar nesta Igreja',   sub: 'Procure-nos com 12 meses de antecedência' },
    { id: 'converter',  roman: 'V',   label: 'Quero me tornar católico',   sub: 'RICA — Iniciação Cristã para adultos' },
    { id: 'conhecer',   roman: 'VI',  label: 'Quero conhecer a Igreja',    sub: 'A paróquia: história e visita' },
    { id: 'contribuir', roman: 'VII', label: 'Quero contribuir',           sub: 'Dízimo, Pix e ofertas' },
  ];
  return (
    <section className="intentions fade-in">
      <div className="eyebrow">Por onde quer começar</div>
      <p className="intentions-lead">
        Este é um lugar para tudo que a vida cristã precisa.<br/>
        Escolha o que te trouxe aqui.
      </p>
      <ol className="int-list">
        {intentions.map(it => (
          <li key={it.id} onClick={() => onChoose && onChoose(it.id)}>
            <span className="int-num">{it.roman}</span>
            <span className="int-label">{it.label}</span>
            <span className="int-sub">{it.sub}</span>
            <span className="int-arrow" aria-hidden="true">→</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
window.IntentionJourney = IntentionJourney;
