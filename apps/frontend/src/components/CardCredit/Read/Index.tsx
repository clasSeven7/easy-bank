import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../../api';
import { ICardCredit } from '../../types';
import './styles.css';

export function CardCreditRead(): JSX.Element {
  const { cardId } = useParams<{ cardId: string }>();

  const [name, setName] = useState<string>('');
  const [accepted, setAccepted] = useState<string>('');
  const [valid_in, setValidIn] = useState<string>('');
  const [transaction, setTransaction] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [cardImage, setCardImage] = useState<string>('');

  useEffect(() => {
    api
      .get<ICardCredit>(`/cardcredits/${cardId}/`)
      .then((response) => {
        setContent(response.data.content);
        setName(response.data.name);
        setAccepted(response.data.accepted);
        setValidIn(response.data.valid_in);
        setTransaction(response.data.transaction);
        setCardImage(response.data.card_image);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do Cartão de Crédito:', error);
      });
  }, [cardId]);

  return (
    <div className="read-card-container">
      <h1>Detalhes do Cartão de Crédito</h1>
      <Link to="/cardcredits">
        <button type="button" className="back-button">
          Voltar para Listagem
        </button>
      </Link>

      {cardImage && (
        <img
          src={cardImage}
          alt="Imagem do CArtão de Crédito"
          className="card-image"
        />
      )}
      <h3>{name}</h3>
      <h2>{accepted}</h2>
      <h2>{valid_in}</h2>
      <h2>{transaction}</h2>
      <p>{content}</p>
    </div>
  );
}
