import { ICardCredit as CardCredit } from '../components/types';
import api from './api';

export const fetchCardCredits = async (): Promise<CardCredit[]> => {
  const response = await api.get<CardCredit[]>('/cardcredits/');
  return response.data;
};

export const deleteCardCredits = async (
  CardCreditId: number
): Promise<void> => {
  await api.delete(`/cardcredits/${CardCreditId}/`);
};
