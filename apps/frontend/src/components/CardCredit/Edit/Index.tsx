import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../../api';
import { ICardCredit } from '../../types';
import './styles.css';

export function CardCreditEdit(): JSX.Element {
  const { id, cardId } = useParams<{ cardId: string }>();
  const navigate = useNavigate();

  const [cardImage, setCardImage] = useState<File | null>(null);
  const [name, setName] = useState<string>('');
  const [accepted, setAccepted] = useState<string>('');
  const [validIn, setValidIn] = useState<string>('');
  const [transaction, setTransaction] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [currentCardImage, setCurrentCardImage] = useState<string>('');

  useEffect(() => {
    const loadCard = async () => {
      if (!id) return;
      try {
        const response = await api.get<ICardCredit>(`/cardcredits/${id}/`);
        console.log(response);

        setName(response.data.name);
        setAccepted(response.data.accepted);
        setValidIn(response.data.valid_in);
        setTransaction(response.data.transaction);
        setContent(response.data.content);
        setCurrentCardImage(response.data.card_image);
      } catch (error) {
        console.error('Erro ao buscar detalhes do Cartão de Crédito:', error);
      }
    };

    loadCard();
  }, [id]);

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

      // Envia a nova imagem apenas se o usuário selecionou uma
      if (cardImage) {
        formData.append('cardimage', cardImage);
      }

      if (id) {
        await api.put(`/cardcredits/${id}/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Cartão de Crédito atualizado com sucesso!');
      } else {
        await api.post(`/cardcredits/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Cartão de Crédito criado com sucesso!');
      }
      navigate('/cardcredits');
    } catch (error) {
      console.error('Erro ao salvar Cartão de Crédito:', error);
      alert('Erro ao salvar Cartão de Crédito. Tente novamente.');
    }
  };

  return (
    <div className="edit-card-container">
      <h1>
        {id ? 'Editar Cartão de Crédito' : 'Criar Novo Cartão de Crédito'}
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          {currentCardImage && (
            <img
              src={currentCardImage}
              alt="Imagem do Cartão de Crédito"
              className="card-image"
            />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required // Adiciona required para validação
        />
        <input
          type="text"
          placeholder="Aceito em"
          value={accepted}
          onChange={(e) => setAccepted(e.target.value)}
          required // Adiciona required para validação
        />
        <input
          type="text"
          placeholder="Válido em"
          value={validIn}
          onChange={(e) => setValidIn(e.target.value)}
          required // Adiciona required para validação
        />
        <input
          type="text"
          placeholder="Transação"
          value={transaction}
          onChange={(e) => setTransaction(e.target.value)}
          required // Adiciona required para validação
        />
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required // Adiciona required para validação
        />
        <button className="save-button" type="submit">
          {id ? 'Salvar' : 'Criar'}
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
