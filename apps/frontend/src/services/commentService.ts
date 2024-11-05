import api from './api';

export const fetchComments = async (): Promise<Comment[]> => {
  const response = await api.get<Comment[]>('/comments/');
  return response.data;
};

export const deleteComment = async (commentId: number): Promise<void> => {
  await api.delete(`/comments/${commentId}/`);
};
