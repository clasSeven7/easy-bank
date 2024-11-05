import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../api';
import './styles.css';

export function CardCreditCreate(): JSX.Element {
  const navigate = useNavigate();

  const [cardImage, setCardImage] = useState<File | null>(null);
  const [name, setName] = useState<string>('');
  const [accepted, setAccepted] = useState<string>('');
  const [validIn, setValidIn] = useState<string>('');
  const [transaction, setTransaction] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCardImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('accepted', accepted);
      formData.append('valid_in', validIn);
      formData.append('transaction', transaction);
      formData.append('content', content);

      if (cardImage) {
        formData.append('cardimage', cardImage);
      }

      await api.post(`/cardcredits/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Cartão de Crédito criado com sucesso!');
      navigate('/cardcredits');
    } catch (error) {
      console.error('Erro ao criar Cartão de Crédito:', error);
      alert('Erro ao criar Cartão de Crédito. Tente novamente.');
    }
  };

  return (
    <div className="create-card-container">
      <h1>Criar Novo Cartão de Crédito</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Aceito em"
          value={accepted}
          onChange={(e) => setAccepted(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Válido em"
          value={validIn}
          onChange={(e) => setValidIn(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Transação"
          value={transaction}
          onChange={(e) => setTransaction(e.target.value)}
          required
        />
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button className="save-button" type="submit">
          Criar
        </button>
        <Link to="/cardcredits">
          <button type="button" className="back-button">
            Voltar para Listagem
          </button>
        </Link>
      </form>
    </div>
  );
}
