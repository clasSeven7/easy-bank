import { ICardCredit as CardCredit } from '../components/types';
import api from './api';

export const fetchCardCredits = async (): Promise<CardCredit[]> => {
  const response = await api.get<CardCredit[]>('/cardcredits/');
  return response.data;
};
