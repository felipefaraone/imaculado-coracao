// SiteHeader.jsx — Contribua como botão carmim destacado

function SiteHeader({ active = 'home', onNav }) {
  const navItems = [
    { id: 'paroquia',    label: 'A paróquia' },
    { id: 'missas',      label: 'Missas' },
    { id: 'sacramentos', label: 'Sacramentos' },
    { id: 'claretianos', label: 'Os Claretianos' },
    { id: 'contato',     label: 'Contato' },
  ];
  return (
    <header className="site-header">
      <a className="brand-logo" onClick={() => onNav && onNav('home')} aria-label="Paróquia Imaculado Coração de Maria">
        <img src="assets/logo-paroquia.png" alt=""/>
        <span className="brand-wordmark">
          <span className="brand-wordmark-sup">Paróquia</span>
          <span className="brand-wordmark-main">Imaculado Coração de Maria</span>
        </span>
      </a>
      <nav>
        <ul>
          {navItems.map(it => (
            <li key={it.id}>
              <a
                className={active === it.id ? 'active' : ''}
                onClick={() => onNav && onNav(it.id)}
              >{it.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="nav-contribua" onClick={() => onNav && onNav('contribua')}>
        Contribua
      </button>
    </header>
  );
}
window.SiteHeader = SiteHeader;
