import queryString from 'query-string';
import { LikeInterface, LikeGetQueryInterface } from 'interfaces/like';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLikes = async (query?: LikeGetQueryInterface): Promise<PaginatedInterface<LikeInterface>> => {
  return fetcher('/api/likes', {}, query);
};

export const createLike = async (like: LikeInterface) => {
  return fetcher('/api/likes', { method: 'POST', body: JSON.stringify(like) });
};

export const updateLikeById = async (id: string, like: LikeInterface) => {
  return fetcher(`/api/likes/${id}`, { method: 'PUT', body: JSON.stringify(like) });
};

export const getLikeById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/likes/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteLikeById = async (id: string) => {
  return fetcher(`/api/likes/${id}`, { method: 'DELETE' });
};
