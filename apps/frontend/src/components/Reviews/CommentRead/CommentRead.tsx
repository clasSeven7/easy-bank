import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../../api';
import { IComment } from '../../types';
import './CommentRead.css';

export function CommentRead(): JSX.Element {
  const { commentId } = useParams<{ commentId: string }>();

  const [content, setContent] = useState<string>('');
  const [icon, setIcon] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [star, setStar] = useState<string>('');

  useEffect(() => {
    api
      .get<IComment>(`/comments/${commentId}/`)
      .then((response) => {
        setContent(response.data.content);
        setIcon(response.data.icon_user);
        setUsername(response.data.username);
        setStar(response.data.star);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do post:', error);
      });
  }, [commentId]);

  return (
    <div className="read-comment-container">
      <h1>Detalhes do Comentário</h1>
      <Link to="/comments">
        <button type="button" className="back-button">
          Voltar para Listagem
        </button>
      </Link>
      <h2>{username}</h2>
      <h3>{star}</h3>
      <p>{content}</p>
      {icon && (
        <img src={icon} alt="Imagem do Comentário" className="comment-image" />
      )}
    </div>
  );
}
