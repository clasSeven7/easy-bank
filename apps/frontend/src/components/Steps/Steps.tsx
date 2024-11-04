import './steps.css';

export function Steps() {
  return (
    <section className="steps">
      <div className="heading">
        como <span>conseguir</span> seu cartão?
      </div>
      <div className="box-container">
        <div className="box">
          <img src="./src/assets/step-1.png" />
          <h3>baixe o aplicativo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            eius fugiat libero vel voluptatem obcaecati.
          </p>
        </div>

        <div className="box">
          <img src="./src/assets/step-2.png" />
          <h3>envie o formulário</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            eius fugiat libero vel voluptatem obcaecati.
          </p>
        </div>

        <div className="box">
          <img src="./src/assets/step-3.png" />
          <h3>espere até ser aprovado</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            eius fugiat libero vel voluptatem obcaecati.
          </p>
        </div>
      </div>
    </section>
  );
}
