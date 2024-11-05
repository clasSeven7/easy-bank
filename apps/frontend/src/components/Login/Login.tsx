import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { HeaderBasic } from '../HeaderBasic/HeaderBasic';
import './Login.css';

interface LoginProps {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Login({ setAuthenticated }: LoginProps): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post<{ access: string }>('/token/', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.access);
      setAuthenticated(true); // Atualiza o estado de autenticação
      navigate('/'); // Redireciona para a página principal
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <>
      <HeaderBasic />
      <div className="login-container">
        <h1>
          <i className="fa-solid fa-user"></i>
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}
