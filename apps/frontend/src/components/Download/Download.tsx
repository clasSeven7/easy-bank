import './download.css';

export function Download() {
  return (
    <section className="download">
      <div className="heading">
        <span>baixe</span> agora!
      </div>
      <div className="row">
        <div className="box-container">
          <div className="box">
            <i className="fab fa-windows icon"></i>
            <h3>para windows</h3>
            <a href="#" className="btn-2">
              baixe agora
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="box">
            <i className="fab fa-apple icon"></i>
            <h3>para mac</h3>
            <a href="#" className="btn-2">
              baixe agora
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="box">
            <i className="fab fa-app-store-ios icon"></i>
            <h3>para celular</h3>
            <a href="#" className="btn-2">
              baixe agora
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="box">
            <i className="fab fa-google-play icon"></i>
            <h3>para android</h3>
            <a href="#" className="btn-2">
              baixe agora
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="content">
          <h3>
            solução bancária que funciona ao seu redor de
            <span> maneira fácil</span>
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos at itaque sint? Nostrum, sit excepturi. Culpa voluptate
            ratione illo quaerat!
          </p>
          <a href="#" className="btn">
            leia mais <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
