import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  deleteCardCredits,
  fetchCardCredits,
} from '../../../services/cardCreditService';
import './styles.css';

interface Card {
  id: number;
  card_image: string;
  name: string;
  content: string;
  accepted: string;
  valid_in: string;
  transaction: string;
}

export function CardCreditList(): JSX.Element {
  const [cards, setCards] = useState<Card[]>([]);

  const handleDelete = async (cardId: number) => {
    try {
      await deleteCardCredits(cardId);
      const updatedCards = cards.filter((card) => card.id !== cardId);
      setCards(updatedCards);
    } catch (error) {
      console.error('Erro ao deletar Blog:', error);
    }
  };

  useEffect(() => {
    const loadCards = async () => {
      try {
        const cardsData = await fetchCardCredits();
        setCards(cardsData.results);
        console.log(cardsData);
      } catch (error) {
        console.error(error);
      }
    };

    loadCards();
  }, []);

  return (
    <div className="card-list-container">
      <div className="header">
        <h1>Lista de Cartões de Créditos</h1>
        <Link to="/cardcredits/create" className="create-button">
          Criar Novo Cartão de Crédito
        </Link>
      </div>
      <ul>
        {cards.map((card) => (
          <li key={card.id} className="card-item">
            <Link
              to={`/cardcredits/${card.id}/detail`}
              className="card-link-name"
            >
              {card.name}
            </Link>
            <div className="actions">
              <Link to={`/cardcredits/${card.id}/edit`} className="card-link">
                Editar
              </Link>
              <button
                onClick={() => handleDelete(card.id)}
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
