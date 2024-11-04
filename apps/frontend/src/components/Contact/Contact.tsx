import './contact.css';

export function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="row">
        <form className="form">
          <div className="box">
            <h3>entre em contato</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="qual seu nome"
                className="input"
              />
              <input
                type="number"
                placeholder="qual seu telefone"
                className="input"
              />
              <input
                type="email"
                placeholder="qual seu email"
                className="input"
              />
              <input
                type="text"
                placeholder="qual seu endereço"
                className="input"
              />
            </div>
            <textarea name="" placeholder="sua mensagem"></textarea>
            <input type="submit" value="enviar mensagem" className="btn" />
          </div>
        </form>
        <div className="image">
          <img src="./src/assets/contact-img.png" />
        </div>
      </div>
    </div>
  );
}
