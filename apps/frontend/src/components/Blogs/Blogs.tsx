import { useEffect, useState } from 'react';
import { api } from '../../api';
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
  useEffect(() => {
    api
      .get('/blog')
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        nossos <span>blogs</span>
      </div>
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
