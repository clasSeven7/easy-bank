import { useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { BlogCreate } from './components/Blogs/BlogCreate/BlogCreate';
import { BlogEdit } from './components/Blogs/BlogEdit/BlogEdit';
import { BlogList } from './components/Blogs/BlogList/BlogList';
import { BlogRead } from './components/Blogs/BlogRead/BlogRead';
import { HomePage } from './components/HomePage/HomePage';
import { Login } from './components/Login/Login';
import { CommentCreate } from './components/Reviews/CommentCreate/CommentCreate';
import { CommentEdit } from './components/Reviews/CommentEdit/CommentEdit';
import { CommentList } from './components/Reviews/CommentList/CommentList';
import { CommentRead } from './components/Reviews/CommentRead/CommentRead';

const isAuthenticated = () => !!localStorage.getItem('token');

export function AppRouter(): JSX.Element {
  const [authenticated, setAuthenticated] = useState(isAuthenticated);

  useEffect(() => {
    const handleStorageChange = () => setAuthenticated(isAuthenticated());
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            authenticated ? <HomePage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/login"
          element={
            authenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Login setAuthenticated={setAuthenticated} />
            )
          }
        />
        <Route
          path="/blogs"
          element={
            authenticated ? <BlogList /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/blogs/create"
          element={
            authenticated ? <BlogCreate /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/blogs/:id/edit"
          element={
            authenticated ? <BlogEdit /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/blogs/:id/"
          element={
            authenticated ? <BlogRead /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/comments"
          element={
            authenticated ? <CommentList /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/comments/create"
          element={
            authenticated ? <CommentCreate /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/comments/:id/edit"
          element={
            authenticated ? <CommentEdit /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/comments/:id/"
          element={
            authenticated ? <CommentRead /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}
