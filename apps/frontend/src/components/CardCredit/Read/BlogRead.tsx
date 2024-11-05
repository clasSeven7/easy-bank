import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../../api';
import { IBlog } from '../../types';
import './BlogRead.css';

export function BlogRead(): JSX.Element {
  const { blogId } = useParams<{ blogId: string }>();

  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    api
      .get<IBlog>(`/blogs/${blogId}/`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setImage(response.data.image_blog);
        setUser(response.data.user);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do blog:', error);
      });
  }, [blogId]);

  return (
    <div className="read-blog-container">
      <h1>Detalhes do Post</h1>
      <Link to="/blogs">
        <button type="button" className="back-button">
          Voltar para Listagem
        </button>
      </Link>

      {image && <img src={image} alt="Imagem do Post" className="post-image" />}
      <h3>{data}</h3>
      <h2>{user}</h2>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
