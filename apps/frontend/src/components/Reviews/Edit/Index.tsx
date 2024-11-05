import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../../api';
import { IComment } from '../../types';
import './styles.css';

export function CommentEdit(): JSX.Element {
  const { id, commentId } = useParams<{ commentId: string }>();
  const navigate = useNavigate();

  const [icon, setIcon] = useState<File | null>(null);
  const [star, setStar] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [currentIcon, setCurrentIcon] = useState<string>('');

  useEffect(() => {
    const loadComment = async () => {
      if (!id) return;
      try {
        const response = await api.get<IComment>(`/comments/${id}/`);
        console.log(response);

        setStar(response.data.star);
        setContent(response.data.content);
        setUsername(response.data.username);
        setCurrentIcon(response.data.icon_user);
        setIcon(response.data.icon_user);
      } catch (error) {
        console.error('Erro ao buscar detalhes do blog:', error);
      }
    };

    loadComment();
  }, [id]);

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

      // Envia a nova imagem apenas se o usuário selecionou uma
      if (icon) {
        formData.append('icon', icon);
      }

      if (id) {
        await api.put(`/comments/${id}/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Comentário atualizado com sucesso!');
      } else {
        await api.post(`/comments/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Comentário criado com sucesso!');
      }
      navigate('/comments');
    } catch (error) {
      console.error('Erro ao salvar Comentário:', error);
      alert('Erro ao salvar Comentário. Tente novamente.');
    }
  };

  return (
    <div className="edit-comment-container">
      <h1>{id ? 'Editar Comentário' : 'Criar Novo Comentário'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {currentIcon && (
            <img
              src={currentIcon}
              alt="Imagem do Comentário"
              className="comment-image"
            />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <input
          type="text"
          placeholder="Nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required // Adiciona required para validação
        />
        <input
          type="text"
          placeholder="Estrela"
          value={star}
          onChange={(e) => setStar(e.target.value)}
          required // Adiciona required para validação
        />
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required // Adiciona required para validação
        />
        <button className="save-button" type="submit">
          {id ? 'Salvar' : 'Criar'}
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
