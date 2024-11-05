import { IComment as Comment } from '../components/types';
import api from './api';

export const fetchComments = async (): Promise<Comment[]> => {
  const response = await api.get<Comment[]>('/comments/');
  return response.data;
};
