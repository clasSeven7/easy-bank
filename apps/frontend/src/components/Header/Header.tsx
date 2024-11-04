import './header.css';

export function Header() {
  return (
    <header className="header">
      <section className="flex">
        <a href="#" className="logo">
          <i className="fas fa-credit-card"></i>
          EasyBank
        </a>

        <nav className="navbar">
          <a href="#home">início</a>
          <a href="#about">sobre</a>
          <a href="#options">opções</a>
          <a href="#contact">contado</a>
          <a href="#blogs">blogs</a>
        </nav>

        <a href="#" className="btn">
          Começar
        </a>

        <div id="menu-btn" className="fas fa-bars-staggered"></div>
      </section>
    </header>
  );
}

export default Header;
