// Shared.jsx — Componentes reutilizáveis globais
// DEVE ser carregado ANTES de todos os outros JSX.

/* ---- Lucide icon (inline SVG, stroke 1.5) ---- */
const LUCIDE = {
  'chevron-down':   'M6 9l6 6 6-6',
  'chevron-up':     'M18 15l-6-6-6 6',
  'copy':           'M8 4v12a2 2 0 002 2h8a2 2 0 002-2V7.242a2 2 0 00-.602-1.43L16.083 2.57A2 2 0 0014.685 2H10a2 2 0 00-2 2zm0 0H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2v-1',
  'check':          'M20 6L9 17l-5-5',
  'phone':          'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.38 2 2 0 013.6 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.58 8.08a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z',
  'mail':           'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm18 2l-10 7L2 6',
  'map-pin':        'M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0zm-9 3a3 3 0 100-6 3 3 0 000 6z',
  'external-link':  'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6m-11 5L21 3',
  'clock':          'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2',
};

function LucideIcon({ name, size = 20, color = 'currentColor' }) {
  const d = LUCIDE[name];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{verticalAlign:'middle', flexShrink:0}} aria-hidden="true">
      <path d={d}/>
    </svg>
  );
}

/* ---- Instagram icon ---- */
function IgIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{flexShrink:0}}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

/* ---- WhatsApp icon — verde oficial #25D366 em círculo ---- */
function WaIcon({ size = 20 }) {
  return (
    <span className="wa-circle" style={{width:size, height:size}} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="white" style={{width:size*0.6, height:size*0.6}}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </span>
  );
}

/* ---- WaBtn — botão WhatsApp com ícone verde ---- */
function WaBtn({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener" className={'wa-btn ' + className}>
      <WaIcon size={24}/>
      <span>{children}</span>
    </a>
  );
}

/* ---- EdFig — moldura editorial padrão para todas as fotos ---- */
function EdFig({ src, alt, caption, orientation = 'landscape', className = '' }) {
  return (
    <figure className={'ed-fig ed-fig--' + orientation + (className ? ' ' + className : '')}>
      <div className="ed-fig-frame">
        <img src={src} alt={alt} loading="lazy"/>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

Object.assign(window, { LucideIcon, IgIcon, WaIcon, WaBtn, EdFig });
