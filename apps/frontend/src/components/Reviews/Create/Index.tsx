import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../api';
import './styles.css';

export function CommentCreate(): JSX.Element {
  const navigate = useNavigate();

  const [icon, setIcon] = useState<File | null>(null);
  const [star, setStar] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [currentIcon, setCurrentIcon] = useState<string>('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIcon(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('content', content);
      formData.append('star', star);

      if (icon) {
        formData.append('icon', icon);
      }

      await api.post(`/comments/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Comentário criado com sucesso!');
      navigate('/comments');
    } catch (error) {
      console.error('Erro ao criar Comentário:', error);
      alert('Erro ao criar Comentário. Tente novamente.');
    }
  };

  return (
    <div className="create-comment-container">
      <h1>Criar Novo Comentário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <input
          type="text"
          placeholder="Autor"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Estrelas"
          value={star}
          onChange={(e) => setStar(e.target.value)}
          required
        />
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button className="save-button" type="submit">
          Criar
        </button>
        <Link to="/comments">
          <button type="button" className="back-button">
            Voltar para Listagem
          </button>
        </Link>
      </form>
    </div>
  );
}
