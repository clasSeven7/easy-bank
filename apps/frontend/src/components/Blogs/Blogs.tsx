import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchBlogs } from '../../services/blogService';
import './Blogs.css';

interface Blog {
  id: number;
  image_blog: string;
  data: string;
  user: string;
  title: string;
  content: string;
}

export function Blogs(): JSX.Element {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null); // Estado para gerenciar erros
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogsData = await fetchBlogs();
        setBlogs(blogsData.results);
        console.log(blogsData);
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

    loadBlogs();
  }, [navigate]);

  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        nossos <span>blogs</span>
      </div>
      {error && <div className="error-message">{error}</div>}{' '}
      {/* Exibe a mensagem de erro se houver */}
      <div className="box-container">
        {blogs.map((blog) => (
          <div className="box" key={blog.id}>
            <img src={blog.image_blog} alt={blog.title} />
            <div className="info">
              <a href="#">
                <i className="far fa-calendar"></i>
                <span>{new Date(blog.data).toLocaleDateString()}</span>
              </a>
              <a href="#">
                <i className="far fa-user"></i>
                <span> por {blog.user}</span>
              </a>
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <a href="#" className="btn-2">
              leia mais
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
