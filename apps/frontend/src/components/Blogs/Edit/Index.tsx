import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../../api';
import { HeaderBasic } from '../../HeaderBasic/HeaderBasic';
import { IBlog } from '../../types';
import './styles.css';

export function BlogEdit(): JSX.Element {
  const { id, blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();

  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    const loadBlog = async () => {
      if (!id) return;
      try {
        const response = await api.get<IBlog>(`/blogs/${id}/`);
        console.log(response);

        setTitle(response.data.title);
        setContent(response.data.content);
        setData(response.data.data); // Preenche o campo 'data' com o valor existente
        setUser(response.data.user); // Preenche o campo 'user' com o valor existente
        setCurrentImage(response.data.image_blog);
      } catch (error) {
        console.error('Erro ao buscar detalhes do blog:', error);
      }
    };

    loadBlog();
  }, [id]);

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

      // Envia a nova imagem apenas se o usuário selecionou uma
      if (image) {
        formData.append('image', image);
      }

      if (id) {
        await api.put(`/blogs/${id}/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Blog atualizado com sucesso!');
      } else {
        await api.post(`/blogs/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Blog criado com sucesso!');
      }
      navigate('/blogs');
    } catch (error) {
      console.error('Erro ao salvar blog:', error);
      alert('Erro ao salvar blog. Tente novamente.');
    }
  };

  return (
    <>
      <HeaderBasic />
      <div className="edit-blog-container">
        <h1>{id ? 'Editar Blog' : 'Criar Novo Blog'}</h1>
        <form onSubmit={handleSubmit}>
          <div>
            {currentImage && (
              <img
                src={currentImage}
                alt="Imagem do Blog"
                className="blog-image"
              />
            )}
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required // Adiciona required para validação
          />
          <input
            type="text"
            placeholder="Autor"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required // Adiciona required para validação
          />
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <Link to="/blogs">
            <button type="button" className="back-button">
              Voltar para Listagem
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
