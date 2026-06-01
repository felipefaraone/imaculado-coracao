// MassSchedule.jsx — Rubrica de horários (pergaminho)
function MassSchedule({ compact = false }) {
  /* EDITAR: horários de missa — confirmar com a bio do @paroquiaimaculadosp antes de publicar */
  const schedule = [
    { day: 'Domingo',         times: '7h30 · 9h30 · 11h · 18h · 19h30' },
    { day: 'Segunda a sexta', times: '6h30 · 18h' },
    { day: 'Sábado',          times: '8h · 16h' },
  ];
  return (
    <section className={"rubric " + (compact ? "rubric-compact" : "")}>
      <div className="rubric-top">
        <div className="eyebrow eyebrow-gold">§ I · Liturgia</div>
        <h2>Horários de missa</h2>
      </div>
      <dl className="schedule">
        {schedule.map(row => (
          <div className="sch-row" key={row.day}>
            <dt>{row.day}</dt>
            <dd>{row.times}</dd>
          </div>
        ))}
      </dl>
      <p className="rubric-foot">
        Confissões antes de toda Missa. Para urgências pastorais, chame pelo WhatsApp (11) 95928-7365.
      </p>
    </section>
  );
}
window.MassSchedule = MassSchedule;
