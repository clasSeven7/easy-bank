import './footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <section>
        <div className="flex">
          <a href="#" className="logo">
            <i className="fas fa-credit-card"></i>
            EasyBank
          </a>
          <nav className="links">
            <a href="#home">início</a>
            <a href="#about">sobre</a>
            <a href="#options">opções</a>
            <a href="#contact">contado</a>
            <a href="#blogs">blogs</a>
          </nav>

          <a href="#" className="extra-link">
            inscreva-se agora
          </a>
        </div>
        <div className="credit">
          <p>
            &copy; 2024 - <span>easybank</span> | todos os direitos reservados!
          </p>

          <div className="share">
            <a href="#" className="fab fa-youtube"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-whatsapp"></a>
            <a href="#" className="fab fa-pinterest"></a>
          </div>
        </div>
      </section>
    </footer>
  );
}
