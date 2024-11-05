import { useEffect } from 'react';
import './header.css';

export function Header(): JSX.Element {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token
    window.location.reload(); // Recarrega a página
  };
  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement;
    const navbar = document.querySelector(
      '.header .flex .navbar'
    ) as HTMLElement;
    const menuBtn = document.getElementById('menu-btn') as HTMLElement;

    const handleMenuClick = () => {
      navbar.classList.toggle('fa-xmark');
      navbar.classList.toggle('active');
    };

    const handleScroll = () => {
      navbar.classList.remove('fa-xmark');
      navbar.classList.remove('active');

      if (window.scrollY > 0) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    };

    menuBtn.addEventListener('click', handleMenuClick);
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      menuBtn.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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

        {/* <a href="#" className="btn">
          Começar
        </a> */}

        <button onClick={handleLogout} className="btn">
          Sair
        </button>

        <div id="menu-btn" className="fas fa-bars-staggered"></div>
      </section>
    </header>
  );
}

export default Header;
