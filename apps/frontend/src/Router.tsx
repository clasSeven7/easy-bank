import { useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Login } from './components/Login/Login';

import { BlogCreate } from './components/Blogs/Create/Index';
import { BlogEdit } from './components/Blogs/Edit/Index';
import { BlogList } from './components/Blogs/List/Index';
import { BlogRead } from './components/Blogs/Read/Index';

import { CardCreditCreate } from './components/CardCredit/Create/Index';
import { CardCreditEdit } from './components/CardCredit/Edit/Index';
import { CardCreditList } from './components/CardCredit/List/Index';

import { CommentCreate } from './components/Reviews/Create/Index';
import { CommentEdit } from './components/Reviews/Edit/Index';
import { CommentList } from './components/Reviews/List/Index';
import { CommentRead } from './components/Reviews/Read/Index';

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
        <Route
          path="/cardcredits"
          element={
            authenticated ? (
              <CardCreditList />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/cardcredits/create"
          element={
            authenticated ? (
              <CardCreditCreate />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/cardcredits/:id/edit"
          element={
            authenticated ? (
              <CardCreditEdit />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}
