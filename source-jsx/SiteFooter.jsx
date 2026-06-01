// SiteFooter.jsx — Rodapé institucional

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="foot-grid">
        <div>
          <div className="eyebrow">Endereço</div>
          <address className="foot-address">
            Rua Jaguaribe, 735<br/>
            Vila Buarque<br/>
            São Paulo, SP — CEP 01224-001
          </address>
        </div>
        <div>
          <div className="eyebrow">Telefones</div>
          <p>
            <a href="tel:+551136660756" className="foot-link foot-link--row">
              <LucideIcon name="phone" size={16}/> (11) 3666-0756
            </a>
            <a href="tel:+551136614077" className="foot-link foot-link--row">
              <LucideIcon name="phone" size={16}/> (11) 3661-4077
            </a>
          </p>
        </div>
        <div>
          <div className="eyebrow">Digital</div>
          <p>
            <a href="https://wa.me/5511959287365" className="foot-link foot-link--row" target="_blank" rel="noopener">
              <WaIcon size={18}/> (11) 95928-7365
            </a>
            <a href="mailto:pascom.imaculadosp@gmail.com" className="foot-link foot-link--row">
              <LucideIcon name="mail" size={16}/> pascom.imaculadosp@gmail.com
            </a>
            <a href="https://instagram.com/paroquiaimaculadosp" className="foot-link foot-link--row" target="_blank" rel="noopener">
              <IgIcon size={16}/> @paroquiaimaculadosp
            </a>
          </p>
        </div>
        <div>
          <div className="eyebrow eyebrow-gold">Pastoral</div>
          <p className="foot-pastoral">
            Administrada pelos<br/>
            Missionários Claretianos<br/>
            desde 1897.
          </p>
          <a href="https://www.claretianos.com.br" className="foot-link" target="_blank" rel="noopener" style={{display:'block', marginTop:10, fontSize:12}}>
            Província Claretiana do Brasil →
          </a>
          <img src="assets/logo-paroquia.png" alt="" className="foot-logo"/>
        </div>
      </div>
      <div className="foot-divider" aria-hidden="true">❦</div>
      <div className="foot-mini">
        <span>Paróquia Imaculado Coração de Maria · Tombada pelo CONDEPHAAT</span>
        <span className="latin">In cordibus Iesu et Mariae.</span>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
