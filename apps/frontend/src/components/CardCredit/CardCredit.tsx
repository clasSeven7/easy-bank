import './cardcredit.css';

export function CardCredit() {
  return (
    <div className="options" id="options">
      <section>
        <div className="heading">
          opções de <span>cartão de crédito</span>
        </div>
        <div className="box-container">
          <div className="box">
            <img src="./src/assets/card-1.png" />
            <h3>Green</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
              sint?
            </p>
            <div className="info">
              <p>
                aceita : <span>R$</span>
              </p>
              <p>
                válido em : <span>seu país</span>
              </p>
              <p>
                transação : <span>ilimitado</span>
              </p>
            </div>
            <a href="#" className="btn">
              começar
            </a>
          </div>

          <div className="box">
            <img src="./src/assets/card-2.png" />
            <h3>Silver</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
              sint?
            </p>
            <div className="info">
              <p>
                aceita : <span>R$ | $</span>
              </p>
              <p>
                válido em : <span>50 países</span>
              </p>
              <p>
                transação : <span>ilimitado</span>
              </p>
            </div>
            <a href="#" className="btn">
              começar
            </a>
          </div>

          <div className="box">
            <img src="./src/assets/card-3.png" />
            <h3>Black</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
              sint?
            </p>
            <div className="info">
              <p>
                aceita : <span>todas as moedas</span>
              </p>
              <p>
                válido em : <span>todos os país</span>
              </p>
              <p>
                transação : <span>ilimitado</span>
              </p>
            </div>
            <a href="#" className="btn">
              começar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
