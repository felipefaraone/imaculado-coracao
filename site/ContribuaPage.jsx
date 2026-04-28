// ContribuaPage.jsx — Redesenho completo com seletor PIX

const PIX_OPTS = [
  { label: 'R$ 10',      value: 10,  code: 'PLACEHOLDER-PIX-10-REAIS' },
  { label: 'R$ 20',      value: 20,  code: 'PLACEHOLDER-PIX-20-REAIS' },
  { label: 'R$ 50',      value: 50,  code: 'PLACEHOLDER-PIX-50-REAIS' },
  { label: 'R$ 100',     value: 100, code: 'PLACEHOLDER-PIX-100-REAIS' },
  { label: 'Outro valor',value: 0,   code: 'PLACEHOLDER-PIX-ESTATICO' },
];

function PixArea({ opt, onBack }) {
  const [copied, setCopied] = React.useState(false);
  function handleCopy() {
    navigator.clipboard && navigator.clipboard.writeText(opt.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  const qr = 'https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=' + encodeURIComponent(opt.code) + '&bgcolor=F5EFE6&color=2B1810&format=png';
  return (
    <div className="pix-area">
      <div className="eyebrow eyebrow-gold">{opt.label !== 'Outro valor' ? opt.label + ' via Pix' : 'Pix — qualquer valor'}</div>
      {/* ⚠ PLACEHOLDER — Substituir QR Code e código Pix por dados reais após confirmação com a secretaria. */}
      <img src={qr} alt={'QR Code Pix ' + opt.label} className="pix-qr" width="280" height="280"/>
      <p style={{fontFamily:'var(--font-ui)', fontSize:13, color:'var(--ink-mute)', margin:'0 0 8px'}}>Escaneie o QR Code ou copie o código:</p>
      <div className="pix-copy-row">
        <span className="pix-copy-code">{opt.code}</span>
        <button className={'pix-copy-btn' + (copied ? ' ok' : '')} onClick={handleCopy} aria-label="Copiar código Pix">
          {copied
            ? <LucideIcon name="check" size={16} color="var(--ink-gold)"/>
            : <LucideIcon name="copy" size={16}/>}
        </button>
      </div>
      <button className="btn-ghost pix-back" onClick={onBack}>← Escolher outro valor</button>
    </div>
  );
}

function ContribuaPage() {
  const [selected, setSelected] = React.useState(null);
  const waUrl = 'https://wa.me/5511959287365?text=' + encodeURIComponent('Olá, gostaria de conversar sobre contribuição, dízimo ou ofertas.');

  return (
    <div>
      <div className="eyebrow eyebrow-gold">Dízimo & Ofertas</div>
      <h1 className="page-title">Sustentar esta casa.</h1>
      <p className="page-lead">
        Sua contribuição sustenta a celebração diária da Missa, a restauração continuada desta Igreja tombada e os trabalhos pastorais e sociais que nascem daqui.
      </p>

      <Divider variant="plain"/>

      {/* PIX */}
      <section className="pix-block fade-in">
        <div className="eyebrow eyebrow-gold">Imediato e seguro</div>
        <h2>Pix</h2>
        {selected ? (
          <PixArea opt={selected} onBack={() => setSelected(null)}/>
        ) : (
          <div className="pix-selector">
            <p className="pix-selector-label">Escolha um valor</p>
            <div className="pix-val-grid">
              {PIX_OPTS.map(opt => (
                <button key={opt.label} className="pix-val-btn" onClick={() => setSelected(opt)}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      <Divider variant="plain"/>

      {/* Outras formas */}
      <section className="fade-in">
        <h2>Outras formas de contribuir</h2>
        <div className="contribua-outras-grid">
          <article className="contribua-card">
            <div className="eyebrow">Dízimo presencial</div>
            <h3>Na Missa</h3>
            <p>Na Missa dominical, o ofertório é o momento tradicional da contribuição. Também é possível entregar o dízimo na secretaria durante o horário de atendimento.</p>
            <div className="contribua-sch">
              <div><span>Segunda a sexta</span><span>8h–12h · 13h30–19h30</span></div>
              <div><span>Sábado</span><span>7h30–11h30 · 12h30–15h45</span></div>
            </div>
          </article>
          <article className="contribua-card">
            {/* ⚠ PLACEHOLDER — Confirmar dados bancários com a secretaria. */}
            <div className="eyebrow">Transferência bancária</div>
            <h3>Dados bancários</h3>
            <div className="contribua-sch">
              <div><span>Banco</span><span>[a confirmar]</span></div>
              <div><span>Agência</span><span>[a confirmar]</span></div>
              <div><span>Conta</span><span>[a confirmar]</span></div>
              <div><span>CNPJ</span><span>[a confirmar]</span></div>
            </div>
            <p className="rubric-foot" style={{marginTop:12}}>Confirmar com a secretaria antes de publicar.</p>
          </article>
        </div>
      </section>

      <Divider variant="plain"/>

      <section className="contribua-fala fade-in">
        <p>Tem dúvidas ou quer conversar sobre contribuição, ofertas significativas ou legados? Fale com a paróquia.</p>
        <WaBtn href={waUrl}>Falar sobre contribuição</WaBtn>
      </section>

      <Divider variant="fleuron"/>

      <DoctrineQuote source="2 Coríntios 9,7">
        "Cada um dê segundo a disposição do seu coração, não de modo forçado, pois Deus ama quem dá com alegria."
      </DoctrineQuote>
    </div>
  );
}

window.ContribuaPage = ContribuaPage;
window.PixArea = PixArea;
