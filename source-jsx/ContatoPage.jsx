// ContatoPage.jsx — Redesenho completo

function ContatoPage() {
  const waUrl = 'https://wa.me/5511959287365?text=' + encodeURIComponent('Olá, gostaria de falar com a paróquia.');
  return (
    <div>
      <div className="eyebrow">Contato</div>
      <h1 className="page-title">Como falar conosco</h1>
      <p className="page-lead">O WhatsApp é nosso canal mais rápido. Para outras vias, veja abaixo.</p>

      {/* Canal primário */}
      <section className="contato-wa-destaque fade-in">
        <div className="contato-wa-icon-wrap">
          <WaIcon size={60}/>
        </div>
        <div>
          <div className="eyebrow eyebrow-gold">Canal principal</div>
          <h2 className="contato-wa-title">WhatsApp</h2>
          <p className="contato-wa-num">(11) 95928-7365</p>
          <p className="rubric-foot" style={{margin:'4px 0 16px'}}>24 horas para urgências pastorais.</p>
          <WaBtn href={waUrl}>Iniciar conversa</WaBtn>
        </div>
      </section>

      <Divider variant="plain"/>

      {/* Canais complementares */}
      <section className="contato-grid fade-in">
        <div>
          <div className="eyebrow eyebrow-gold">Telefones</div>
          <p>
            <a href="tel:+551136660756" className="contato-link contato-link--row">
              <LucideIcon name="phone" size={16}/> (11) 3666-0756
            </a>
            <a href="tel:+551136614077" className="contato-link contato-link--row">
              <LucideIcon name="phone" size={16}/> (11) 3661-4077
            </a>
          </p>
        </div>
        <div>
          <div className="eyebrow eyebrow-gold">Email</div>
          <a href="mailto:pascom.imaculadosp@gmail.com" className="contato-link contato-link--row">
            <LucideIcon name="mail" size={16}/> pascom.imaculadosp@gmail.com
          </a>
        </div>
        <div>
          <div className="eyebrow eyebrow-gold">Instagram</div>
          <a href="https://instagram.com/paroquiaimaculadosp" className="contato-link contato-link--row" target="_blank" rel="noopener">
            <IgIcon size={16}/> @paroquiaimaculadosp
          </a>
        </div>
      </section>

      <Divider variant="plain"/>

      {/* Endereço + horários */}
      <section className="contato-end-grid fade-in">
        <div>
          <div className="eyebrow eyebrow-gold">Endereço</div>
          <address className="contato-address">
            Rua Jaguaribe, 735<br/>
            Vila Buarque, São Paulo, SP<br/>
            CEP 01224-001
          </address>
        </div>
        <div>
          <div className="eyebrow eyebrow-gold">Horários da secretaria</div>
          <div className="contato-sch">
            <div><span>Segunda a sexta</span><span>8h–12h · 13h30–19h30</span></div>
            <div><span>Sábado</span><span>7h30–11h30 · 12h30–15h45</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
window.ContatoPage = ContatoPage;
