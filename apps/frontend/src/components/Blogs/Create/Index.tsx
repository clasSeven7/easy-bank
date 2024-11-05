import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../api';
import './styles.css';

export function BlogCreate(): JSX.Element {
  const navigate = useNavigate();

  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('data', data);
      formData.append('user', user);
      formData.append('title', title);
      formData.append('content', content);

      if (image) {
        formData.append('image', image);
      }

      await api.post(`/blogs/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Blog criado com sucesso!');
      navigate('/blogs');
    } catch (error) {
      console.error('Erro ao criar blog:', error);
      alert('Erro ao criar blog. Tente novamente.');
    }
  };

  return (
    <div className="create-blog-container">
      <h1>Criar Novo Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Autor"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
        <Link to="/blogs">
          <button type="button" className="back-button">
            Voltar para Listagem
          </button>
        </Link>
      </form>
    </div>
  );
}
