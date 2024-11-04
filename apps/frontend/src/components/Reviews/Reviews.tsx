import { useState } from 'react';
import './reviews.css';

export function Reviews(): JSX.Element {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium commodi rerum voluptates molestiae quas quo quae sapiente consequuntur nisi odio.',
      imgSrc: './src/assets/pic-1.png',
      userName: 'jhon deo',
      stars: 4.5,
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium commodi rerum voluptates molestiae quas quo quae sapiente consequuntur nisi odio.',
      imgSrc: './src/assets/pic-4.png',
      userName: 'jhon deo',
      stars: 5,
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium commodi rerum voluptates molestiae quas quo quae sapiente consequuntur nisi odio.',
      imgSrc: './src/assets/pic-2.png',
      userName: 'jhon deo',
      stars: 4,
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium commodi rerum voluptates molestiae quas quo quae sapiente consequuntur nisi odio.',
      imgSrc: './src/assets/pic-5.png',
      userName: 'jhon deo',
      stars: 4,
    },
  ];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
  return (
    <div className="reviews">
      <section className="row">
        <div className="content">
          <h3>o que os usuários dizem sobre nossos serviços</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            rerum quam facilis veniam asperiores maxime!
          </p>
        </div>
        <div className="slider-container">
          <div className="slider">
            {slides.map((slide, i) => (
              <div key={i} className={`slide ${i === index ? 'active' : ''}`}>
                <p>{slide.text}</p>
                <div className="user">
                  <img src={slide.imgSrc} />
                  <div>
                    <h3>{slide.userName}</h3>
                    <div className="stars">
                      {Array.from({ length: 5 }, (_, starIndex) => (
                        <i
                          key={starIndex}
                          className={`fas ${
                            starIndex < Math.floor(slide.stars)
                              ? 'fa-star'
                              : starIndex < slide.stars
                              ? 'fa-star-half-stroke'
                              : 'far fa-star'
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            ))}
          </div>
          <div className="controls">
            <div
              id="prev"
              onClick={prevSlide}
              className="fas fa-angle-left"
            ></div>
            <div
              id="next"
              onClick={nextSlide}
              className="fas fa-angle-right"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
