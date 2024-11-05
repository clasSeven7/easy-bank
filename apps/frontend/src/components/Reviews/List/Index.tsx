import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteComment, fetchComments } from '../../../services/commentService';
import './styles.css';

interface Comment {
  id: number;
  icon_user: string;
  content: string;
  username: string;
  star: string;
}

export function CommentList(): JSX.Element {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleDelete = async (commentId: number) => {
    try {
      await deleteComment(commentId);
      const updatedComments = comments.filter(
        (comment) => comment.id !== commentId
      );
      setComments(updatedComments);
    } catch (error) {
      console.error('Erro ao deletar comentário:', error);
    }
  };

  useEffect(() => {
    const loadComments = async () => {
      try {
        const commentsData = await fetchComments();
        setComments(commentsData.results);
        console.log(commentsData);
      } catch (error) {
        console.error(error);
      }
    };

    loadComments();
  }, []);

  return (
    <div className="comment-list-container">
      <div className="header">
        <h1>Lista de comments</h1>
        <Link to="/comments/create" className="create-button">
          Criar Novo comment
        </Link>
      </div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <Link
              to={`/comments/${comment.id}/detail`}
              className="comment-link-name"
            >
              {comment.username}
            </Link>
            <div className="actions">
              <Link
                to={`/comments/${comment.id}/edit`}
                className="comment-link"
              >
                Editar
              </Link>
              <button
                onClick={() => handleDelete(comment.id)}
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
