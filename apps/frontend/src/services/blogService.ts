import { IBlog as Blog } from '../components/types';
import api from './api';

export const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await api.get<Blog[]>('/blogs/');
  return response.data;
};

export const deleteBlog = async (BlogId: number): Promise<void> => {
  await api.delete(`/blogs/${BlogId}/`);
};
