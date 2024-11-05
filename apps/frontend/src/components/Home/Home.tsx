import './home.css';

export function Home() {
  return (
    <div className="home" id="home">
      <section className="flex">
        <div className="content">
          <h3>
            a melhor escolha para pagamento online com
            <span> cartão de crédito</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            minus eligendi reiciendis accusamus expedita culpa!
          </p>
          <a href="#" className="btn">
            inscreva-se agora
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="image">
          <img src="./src/assets/home-image-card-1.png" />
        </div>
      </section>
    </div>
  );
}
