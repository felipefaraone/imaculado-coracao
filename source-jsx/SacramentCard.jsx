// SacramentCard.jsx — Accordion 7 sacramentos + slot foto + RICA

const SACRAMENTOS_DATA = [
  {
    id: 'batismo', n: 'I', title: 'Batismo',
    /* ⚠ PLACEHOLDER — Pe. Wellington vai fornecer texto específico. */
    text: 'O Batismo é a porta que abre o acesso aos demais Sacramentos. Marca o início da vida cristã. Para bebês, crianças e adultos.',
    quote: 'O Batismo é o fundamento de toda a vida cristã, o pórtico da vida no Espírito e a porta que abre o acesso aos outros Sacramentos.',
    source: 'Catecismo da Igreja Católica, §1213',
    cta: 'Informações sobre Batismo',
    wa: 'Olá, gostaria de informações sobre o agendamento do Batismo.',
  },
  {
    id: 'eucaristia', n: 'II', title: 'Eucaristia e Primeira Comunhão',
    text: 'A Eucaristia é o centro da vida cristã, recebida em cada Missa por todo católico em estado de graça. A Catequese prepara crianças (por volta de 7–10 anos) para receber a Primeira Comunhão, em processo de um ano ou mais.',
    quote: 'A Eucaristia é fonte e ápice de toda a vida cristã.',
    source: 'Lumen Gentium, §11',
    cta: 'Informações sobre Catequese',
    wa: 'Olá, gostaria de informações sobre a Catequese e a Primeira Comunhão.',
  },
  {
    id: 'crisma', n: 'III', title: 'Crisma',
    /* ⚠ PLACEHOLDER — Pe. Wellington vai fornecer texto específico. */
    text: 'A Crisma completa a graça batismal e sela o fiel com o Espírito Santo, tornando-o adulto na fé. Não é um rito de saída da Igreja; é uma entrada mais profunda.',
    quote: 'Com a Crisma, os batizados são mais perfeitamente vinculados à Igreja e enriquecidos com especial força do Espírito Santo.',
    source: 'Catecismo da Igreja Católica, §1285',
    cta: 'Informações sobre Crisma',
    wa: 'Olá, gostaria de informações sobre a Crisma.',
  },
  {
    id: 'confissao', n: 'IV', title: 'Confissão',
    /* ⚠ PLACEHOLDER — Confirmar horários e procedimentos com a secretaria. */
    text: 'Se faz anos que não se confessa, pode voltar sem receio. A Igreja não mede o tempo, mede a disposição de voltar. Se precisar de ajuda para se preparar, avise o padre antes. Em geral, atendemos Confissões antes das Missas. Para horário específico, fale no WhatsApp.',
    quote: 'Àqueles que se aproximam do Sacramento da Penitência, o Pai misericordioso concede o perdão da ofensa feita a Ele e reconcilia-os com a Igreja.',
    source: 'Catecismo da Igreja Católica, §1422',
    photo: { src: 'assets/confessionario.jpg', alt: 'O confessionário', caption: 'O confessionário, onde a Igreja recebe quem volta.' },
    cta: 'Informações sobre Confissão',
    wa: 'Olá, gostaria de informações sobre a Confissão.',
  },
  {
    id: 'matrimonio', n: 'V', title: 'Matrimônio',
    /* ⚠ PLACEHOLDER — Pe. Wellington vai fornecer detalhes do processo. */
    text: 'Celebrar o Matrimônio nesta Igreja é inserir seu casamento na tradição claretiana, uma comunidade que há mais de 128 anos celebra o amor conjugal como sinal do Evangelho.\n\nRequisitos canônicos: ambos os noivos batizados (ao menos um católico), livres para casar, consentimento pleno, participação no Curso de Noivos.\n\nProcure a paróquia com pelo menos 12 meses de antecedência.',
    quote: 'A aliança matrimonial pela qual o homem e a mulher constituem entre si um consórcio de toda a vida... foi elevada por Cristo Nosso Senhor à dignidade de Sacramento entre batizados.',
    source: 'Catecismo da Igreja Católica, §1601',
    cta: 'Curso de Noivos e Matrimônio',
    wa: 'Olá, gostaria de informações sobre o Curso de Noivos e agendamento do Matrimônio.',
  },
  {
    id: 'uncao', n: 'VI', title: 'Unção dos Enfermos',
    text: 'A Unção dos Enfermos é oferecida a quem enfrenta doença grave ou idade avançada. Oferece força, paz e coragem para enfrentar o sofrimento com fé. Para chamar o padre em urgência, WhatsApp 24 horas.',
    quote: 'A santa Unção dos Enfermos não é somente o Sacramento dos que se encontram nos últimos momentos da vida. O tempo oportuno é quando o fiel começa a estar em perigo de morte por doença ou velhice.',
    source: 'Catecismo da Igreja Católica, §1499',
    cta: 'Chamar o padre',
    wa: 'Olá, preciso chamar o padre para Unção dos Enfermos.',
  },
  {
    id: 'ordem', n: 'VII', title: 'Ordem',
    text: 'O Sacramento da Ordem confere uma missão específica: servir ao povo de Deus como diácono, presbítero ou bispo. Se você sente um chamado para a vida sacerdotal ou religiosa, fale com o pároco.',
    quote: 'É ao Sacramento da Ordem que compete o múnus de ensinar, santificar e governar o povo de Deus em nome e na pessoa de Cristo.',
    source: 'Catecismo da Igreja Católica, §1536',
    cta: 'Falar sobre vocação sacerdotal',
    wa: 'Olá, gostaria de conversar sobre vocação sacerdotal e religiosa.',
  },
];

function SacAccordCard({ sac, isOpen, onToggle }) {
  const waUrl = 'https://wa.me/5511959287365?text=' + encodeURIComponent(sac.wa);
  return (
    <article className={'sac-accord-card' + (isOpen ? ' open' : '')}>
      <button className="sac-accord-header" onClick={onToggle} aria-expanded={isOpen}>
        <span className="sac-accord-num">{sac.n}</span>
        <span className="sac-accord-title">{sac.title}</span>
        <span className="sac-accord-chevron" aria-hidden="true">
          <LucideIcon name={isOpen ? 'chevron-up' : 'chevron-down'} size={20}/>
        </span>
      </button>
      <div className="sac-accord-body">
        <div className="sac-accord-inner">
          {sac.photo && (
            <EdFig src={sac.photo.src} alt={sac.photo.alt} caption={sac.photo.caption} orientation="portrait-inline"/>
          )}
          <div className="sac-accord-text">
            {sac.text.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <DoctrineQuote source={sac.source}>{'"' + sac.quote + '"'}</DoctrineQuote>
          <WaBtn href={waUrl} className="sac-accord-wa">{sac.cta}</WaBtn>
        </div>
      </div>
    </article>
  );
}

function SacramentsAccordion() {
  const [open, setOpen] = React.useState(null);
  const toggle = id => setOpen(open === id ? null : id);

  return (
    <div className="sac-accord-wrap">
      <div className="sac-accord-grid">
        {SACRAMENTOS_DATA.map(sac => (
          <SacAccordCard key={sac.id} sac={sac} isOpen={open === sac.id} onToggle={() => toggle(sac.id)}/>
        ))}
        {/* 8º slot — foto decorativa */}
        <div className="sac-accord-deco">
          <EdFig src="assets/anjos-fachada.jpg" alt="Anjos de pedra na fachada" caption="Detalhe da fachada." orientation="portrait"/>
        </div>
      </div>
    </div>
  );
}

function RicaBlock() {
  const wa = 'https://wa.me/5511959287365?text=' + encodeURIComponent('Olá, gostaria de informações sobre o processo de iniciação cristã para adultos (RICA).');
  return (
    <section className="sac-rica fade-in">
      <div className="eyebrow eyebrow-gold">Para adultos não batizados</div>
      <h3>RICA — Rito de Iniciação Cristã de Adultos</h3>
      <p>Se você nunca foi batizado e deseja se tornar católico, o caminho é o RICA: um processo de catequese e acompanhamento que culmina na Vigília Pascal, quando se recebe Batismo, Crisma e Primeira Eucaristia numa só celebração.</p>
      <p>Fale com a paróquia para saber como começar.</p>
      <WaBtn href={wa}>Começar conversa sobre RICA</WaBtn>
    </section>
  );
}

Object.assign(window, { SacAccordCard, SacramentsAccordion, RicaBlock });
