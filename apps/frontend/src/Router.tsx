import { useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { BlogEdit } from './components/Blogs/BlogEdit/BlogEdit';
import { BlogList } from './components/Blogs/BlogList/BlogList';
import { HomePage } from './components/HomePage/HomePage';
import { Login } from './components/Login/Login';

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
            authenticated ? <BlogEdit /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}
