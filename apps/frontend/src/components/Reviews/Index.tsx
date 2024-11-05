import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchComments } from '../../services/commentService';
import './styles.css';

interface Comment {
  id: number;
  icon_user: string;
  content: string;
  username: string;
  star: string;
}

export function Reviews(): JSX.Element {
  const [index, setIndex] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadComments = async () => {
      try {
        const commentsData = await fetchComments();
        setComments(commentsData.results);
        console.log(commentsData);
      } catch (error: any) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          // Se o erro for de não autorizado (token expirado)
          setError('Sua sessão expirou. Por favor, faça login novamente.');
          // Redireciona para a página de login
          navigate('/login');
        } else {
          setError('Erro ao carregar blogs.'); // Outros erros
        }
      }
    };

    loadComments();
  }, [navigate]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
    );
  };
  return (
    <div className="reviews">
      <section className="row">
        <div className="content">
          <h3>O que os usuários dizem sobre nossos serviços</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            rerum quam facilis veniam asperiores maxime!
          </p>
        </div>
        <div className="slider-container">
          <div className="slider">
            {comments.map((comment, i) => (
              <div key={i} className={`slide ${i === index ? 'active' : ''}`}>
                <p>{comment.content}</p>
                <div className="user">
                  <img src={comment.icon_user} />
                  <div>
                    <h3>{comment.username}</h3>
                    <div className="stars">
                      {Array.from({ length: 5 }, (_, starIndex) => (
                        <i
                          key={starIndex}
                          className={`fas ${
                            starIndex < Math.floor(Number(comment.star))
                              ? 'fa-star'
                              : starIndex < Number(comment.star)
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
