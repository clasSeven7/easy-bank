import './newsletter.css';

export function Newsletter() {
  return (
    <div className="newsletter">
      <section>
        <form action="">
          <h3>receber boletim informativo</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
            quidem sed recusandae sequi est libero!
          </p>
          <div className="flex">
            <input type="text" placeholder="digite seu e-mail" maxLength={30} />
            <input type="submit" value="inscrever-se" />
          </div>
        </form>
      </section>
    </div>
  );
}
