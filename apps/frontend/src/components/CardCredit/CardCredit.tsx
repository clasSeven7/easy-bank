import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCardCredits } from '../../services/cardCreditService';
import './CardCredit.css';

interface Card {
  id: number;
  card_image: string;
  name: string;
  content: string;
  accepted: string;
  valid_in: string;
  transaction: string;
}

export function CardCredit() {
  const [cards, setCards] = useState<Card[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCard = async () => {
      try {
        const cardData = await fetchCardCredits();
        setCards(cardData.results);
        console.log(cardData);
      } catch (error: any) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          // Se o erro for de não autorizado (token expirado)
          setError('Sua sessão expirou. Por favor, faça login novamente.');
          // Redireciona para a página de login
          navigate('/login');
        } else {
          setError('Erro ao carregar blogs.'); // Outros erros
        }
      }
    };

    loadCard();
  }, [navigate]);

  return (
    <div className="options" id="options">
      <section>
        <div className="heading">
          opções de <span>cartão de crédito</span>
        </div>
        <div className="box-container">
          {cards.map((card) => (
            <div className="box" key={card.id}>
              <img
                src={card.card_image}
                alt={`Imagem do cartão ${card.name}`}
              />
              <h3>{card.name}</h3>
              <p>{card.content}</p>
              <div className="info">
                <p>
                  aceita: <span>{card.accepted}</span>
                </p>
                <p>
                  válido em: <span>{card.valid_in}</span>
                </p>
                <p>
                  transação: <span>{card.transaction}</span>
                </p>
              </div>
              <a href="#" className="btn">
                começar
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
