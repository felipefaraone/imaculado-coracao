// MissasPage.jsx — Sem Confissão (vai para Sacramentos). Adoração + Ano Litúrgico.

const LIT_COLORS = {
  Advento:       { hex: '#6B4B8A', nome: 'roxo' },
  Natal:         { hex: '#E8DCC4', nome: 'branco', dark: true },
  Quaresma:      { hex: '#6B4B8A', nome: 'roxo' },
  'Tríduo Pascal': { bicolor: ['#E8DCC4', '#8B2E1F'], nome: 'branco e vermelho' },
  Páscoa:        { hex: '#E8DCC4', nome: 'branco', dark: true },
  Pentecostes:   { hex: '#8B2E1F', nome: 'vermelho' },
  'Tempo Comum': { hex: '#5A7A4F', nome: 'verde' },
};

const LIT_CARDS = [
  { tempo: 'Advento',        desc: 'Os quatro domingos antes do Natal. Tempo de espera pela vinda de Cristo.' },
  { tempo: 'Natal',          desc: 'Do 24 de dezembro ao Batismo do Senhor. Celebramos a Encarnação.' },
  { tempo: 'Quaresma',       desc: 'Os 40 dias antes da Páscoa, começando na Quarta-feira de Cinzas. Penitência e preparação.' },
  { tempo: 'Tríduo Pascal',  desc: 'Quinta (branco), Sexta (vermelho), Sábado e Vigília (branco). Os três dias mais sagrados.' },
  { tempo: 'Páscoa',         desc: 'Os 50 dias após a Ressurreição. Tempo de alegria pascal.' },
  { tempo: 'Pentecostes',    desc: 'A festa do Espírito Santo. Início da missão da Igreja no mundo.' },
  { tempo: 'Tempo Comum',    desc: 'O tempo mais longo do ano. A Igreja caminha em esperança no ritmo cotidiano.' },
];

function MissasPage() {
  return (
    <div>
      {/* Horários */}
      <div className="eyebrow">Liturgia</div>
      <h1 className="page-title">Horários de Missa</h1>
      <p className="page-lead">Celebramos a Santa Missa todos os dias.</p>

      <section className="missa-horario-block fade-in">
        <div className="missa-horario-orn" aria-hidden="true">❦</div>
        <div className="missa-horario-cols">
          <div className="missa-col">
            <div className="missa-col-label">Domingo</div>
            {['7h30','9h30','11h','18h','19h30'].map(h => (
              <div key={h} className="missa-col-time">{h}</div>
            ))}
          </div>
          <div className="missa-col-sep"/>
          <div className="missa-col">
            <div className="missa-col-label">Dias úteis</div>
            {['6h30','18h'].map(h => (
              <div key={h} className="missa-col-time">{h}</div>
            ))}
          </div>
          <div className="missa-col-sep"/>
          <div className="missa-col">
            <div className="missa-col-label">Sábado</div>
            {['8h','16h'].map(h => (
              <div key={h} className="missa-col-time">{h}</div>
            ))}
          </div>
        </div>
        <p className="missa-horario-note">
          {/* EDITAR: confirmar com @paroquiaimaculadosp antes de publicar */}
          Confissões antes das Missas. Detalhes na página <a href="#sacramentos" style={{color:'var(--ink-carmine)'}}>Sacramentos</a>.
        </p>
      </section>

      <Divider variant="plain"/>

      {/* Adoração Eucarística */}
      <section className="adoracao-block fade-in">
        <div className="adoracao-text">
          <div className="eyebrow eyebrow-gold">Diante do Santíssimo</div>
          <h2>Adoração Eucarística</h2>
          {/* ⚠ PLACEHOLDER — Confirmar dia e horário com a secretaria antes de publicar. */}
          <p>Adoração ao Santíssimo Sacramento acontece em <em>[dia e horário a confirmar com a secretaria]</em>.</p>
          <p>Tempo de oração silenciosa diante da Eucaristia exposta, aberto a todos os fiéis.</p>
        </div>
        <EdFig
          src="assets/capela-santissimo.jpg"
          alt="A Capela do Santíssimo Sacramento"
          caption="A Capela do Santíssimo, com o hino 'Adoro te Devote' de São Tomás de Aquino nas inscrições."
          orientation="portrait"
        />
      </section>

      <Divider variant="fleuron"/>

      {/* Ano Litúrgico */}
      <section className="lit-section fade-in">
        <div className="eyebrow">Calendário da fé</div>
        <h2 className="lit-title">O ano litúrgico</h2>
        <p className="lit-intro">A vida cristã não é uma linha reta, é um ciclo. Todo ano, a Igreja percorre os grandes mistérios de Cristo: sua espera, seu nascimento, sua Paixão, sua Ressurreição.</p>
        <p className="lit-intro">Cada tempo tem uma cor. Se você prestar atenção à estola do padre e aos paramentos do altar, vai ver que mudam conforme o tempo litúrgico. É uma pregação silenciosa, visual, que atravessa os séculos.</p>

        <div className="lit-grid">
          {LIT_CARDS.map(({ tempo, desc }) => {
            const cfg = LIT_COLORS[tempo];
            let barStyle = {};
            if (cfg.bicolor) {
              barStyle = { background: `linear-gradient(to bottom, ${cfg.bicolor[0]} 50%, ${cfg.bicolor[1]} 50%)` };
            } else {
              barStyle = { background: cfg.hex };
            }
            return (
              <div key={tempo} className="lit-card">
                <div className="lit-card-bar" style={barStyle} aria-hidden="true"/>
                <div className="lit-card-body">
                  <div className="lit-card-tempo">{tempo}</div>
                  <div className="lit-card-cor eyebrow eyebrow-mute" style={{margin:'4px 0 8px'}}>{cfg.nome}</div>
                  <p className="lit-card-desc">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="lit-note">
          Em dois domingos especiais, <em>Gaudete</em> no Advento e <em>Laetare</em> na Quaresma, o padre usa rosa. É a Igreja dizendo, no meio da penitência: alegrem-se, a festa está próxima.
        </p>
      </section>
    </div>
  );
}
window.MissasPage = MissasPage;
