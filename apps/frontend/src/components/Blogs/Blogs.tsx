import './blogs.css';

export function Blogs(): JSX.Element {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        nossos <span>blogs</span>
      </div>

      <div className="box-container">
        <div className="box">
          <img src="./src/assets/blog-1.png" />
          <div className="info">
            <a href="#">
              <i className="far fa-calendar"></i>
              <span>1st jan, 2024</span>
            </a>
            <a href="#">
              <i className="far fa-user"></i>
              <span> por administrador</span>
            </a>
          </div>
          <h3>título do blog 01</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            sequi et quos rerum, minima vitae.
          </p>
          <a href="#" className="btn-2">
            leia mais
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="box">
          <img src="./src/assets/blog-2.png" />
          <div className="info">
            <a href="#">
              <i className="far fa-calendar"></i>
              <span>1st jan, 2024</span>
            </a>
            <a href="#">
              <i className="far fa-user"></i>
              <span> por administrador</span>
            </a>
          </div>
          <h3>título do blog 02</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            sequi et quos rerum, minima vitae.
          </p>
          <a href="#" className="btn-2">
            leia mais
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="box">
          <img src="./src/assets/blog-3.png" />
          <div className="info">
            <a href="#">
              <i className="far fa-calendar"></i>
              <span>1st jan, 2024</span>
            </a>
            <a href="#">
              <i className="far fa-user"></i>
              <span> por administrador</span>
            </a>
          </div>
          <h3>título do blog 03</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            sequi et quos rerum, minima vitae.
          </p>
          <a href="#" className="btn-2">
            leia mais
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
