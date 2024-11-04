import './about.css';

export function About() {
  return (
    <section className="about" id="about">
      <div className="heading">
        por que nos <span>escolher</span>?
      </div>
      <div className="row">
        <div className="image">
          <img src="./src/assets/about-image.png" />
        </div>
        <div className="content">
          <h3>
            personalize e controle seu próprio <span>cartão de crédito</span>
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            unde harum amet officia facere numquam.
          </p>
          <a href="#" className="btn">
            inscreva-se agora
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className="box-container">
        <div className="box">
          <div className="info">
            <img src="./src/assets/info-1.png" />
            <h3>certificado</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn-2">
            saber mais <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="box">
          <div className="info">
            <img src="./src/assets/info-2.png" />
            <h3>transparência</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn-2">
            saber mais <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="box">
          <div className="info">
            <img src="./src/assets/info-3.png" />
            <h3>aplicação rápida</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn-2">
            saber mais <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="box">
          <div className="info">
            <img src="./src/assets/info-4.png" />
            <h3>24/7 atendimento</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn-2">
            saber mais <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
