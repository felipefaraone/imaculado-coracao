// Divider.jsx — Separadores ornamentais
function Divider({ variant = 'simple' }) {
  if (variant === 'fleuron')  return <div className="div-fleuron">❦</div>;
  if (variant === 'triple')   return <div className="div-triple" aria-hidden="true"></div>;
  return <hr className="div-plain"/>;
}
window.Divider = Divider;
