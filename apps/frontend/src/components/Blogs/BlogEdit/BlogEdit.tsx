import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../../api';
import { IBlog } from '../../types';
import './BlogEdit.css';

export function BlogEdit(): JSX.Element {
  const { blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    if (!blogId) return;

    api
      .get<IBlog>(`/blogs/${blogId}/`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setImage(null); // Assuming you don't want to keep the newly selected image on edit
        setCurrentImage(response.data.image_blog);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do blog:', error);
      });
  }, [blogId]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      if (image && image.name !== currentImage) {
        formData.append('image', image);
      }

      if (blogId) {
        await api.put(`/blogs/${blogId}/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Blog atualizado com sucesso!');
      } else {
        await api.post(`/blog/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      navigate('/blogs');
    } catch (error) {
      console.error('Erro ao salvar blog:', error);
    }
  };

  return (
    <div className="edit-blog-container">
      <h1>{blogId ? 'Editar Blog' : 'Criar Novo Blog'}</h1>
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
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="save-button" type="submit">
          {blogId ? 'Salvar' : 'Criar'}
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
