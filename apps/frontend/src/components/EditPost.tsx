import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import api from '../api'
import '../styles/EditPost.css'
import { IPost } from './types'

function EditPost(): JSX.Element {
  const { postId } = useParams<{ postId: string }>()
  const navigate = useNavigate()

  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [image, setImage] = useState<File | null>(null)
  const [currentImage, setCurrentImage] = useState<string>('')

  useEffect(() => {
    if (!postId) return

    api.get<IPost>(`/posts/${postId}/`)
      .then(response => {
        setTitle(response.data.title)
        setContent(response.data.content)
        setImage(null) // Assuming you don't want to keep the newly selected image on edit
        setCurrentImage(response.data.image)
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes do post:', error)
      })
  }, [postId])

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('content', content)
      if (image && image.name !== currentImage) {
        formData.append('image', image);
      }

      if (postId) {
        await api.put(`/posts/${postId}/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        alert('Post atualizado com sucesso!')
      } else {
        await api.post(`/posts/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      }
      navigate('/posts')
    } catch (error) {
      console.error('Erro ao salvar post:', error)
    }
  }

  return (
    <div className="edit-post-container">
      <h1>{postId ? 'Editar Post' : 'Criar Novo Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {currentImage && <img src={currentImage} alt="Imagem do Post" className="post-image" />}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Conteúdo" value={content} onChange={(e) => setContent(e.target.value)} />
        <button className="save-button" type="submit">{postId ? 'Salvar' : 'Criar'}</button>
        <Link to="/posts">
          <button type="button" className="back-button">Voltar para Listagem</button>
        </Link>
      </form>
    </div>
  )
}

export default EditPost