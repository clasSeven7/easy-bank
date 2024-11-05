import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteBlog, fetchBlogs } from '../../../services/blogService';
import './BlogList.css';

interface Blog {
  id: number;
  image_blog: string;
  data: Date;
  user: string;
  title: string;
  content: string;
}

export function BlogList(): JSX.Element {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const handleDelete = async (blogId: number) => {
    try {
      await deleteBlog(blogId);
      const updatedBlogs = blogs.filter((blog) => blog.id !== blogId);
      setBlogs(updatedBlogs);
    } catch (error) {
      console.error('Erro ao deletar Blog:', error);
    }
  };

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogsData = await fetchBlogs();
        setBlogs(blogsData.results);
        console.log(blogsData);
      } catch (error) {
        console.error(error);
      }
    };

    loadBlogs();
  }, []);

  return (
    <div className="blog-list-container">
      <div className="header">
        <h1>Lista de Blogs</h1>
        <Link to="/blogs/create" className="create-button">
          Criar Novo Blog
        </Link>
      </div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="blog-item">
            <Link to={`/blogs/${blog.id}/detail`} className="blog-link-name">
              {blog.title}
            </Link>
            <div className="actions">
              <Link to={`/blogs/${blog.id}/edit`} className="blog-link">
                Editar
              </Link>
              <button
                onClick={() => handleDelete(blog.id)}
                className="delete-button"
              >
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
