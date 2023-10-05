import queryString from 'query-string';
import { PostInterface, PostGetQueryInterface } from 'interfaces/post';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPosts = async (query?: PostGetQueryInterface): Promise<PaginatedInterface<PostInterface>> => {
  return fetcher('/api/posts', {}, query);
};

export const createPost = async (post: PostInterface) => {
  return fetcher('/api/posts', { method: 'POST', body: JSON.stringify(post) });
};

export const updatePostById = async (id: string, post: PostInterface) => {
  return fetcher(`/api/posts/${id}`, { method: 'PUT', body: JSON.stringify(post) });
};

export const getPostById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/posts/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deletePostById = async (id: string) => {
  return fetcher(`/api/posts/${id}`, { method: 'DELETE' });
};
