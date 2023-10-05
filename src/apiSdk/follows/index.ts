import queryString from 'query-string';
import { FollowInterface, FollowGetQueryInterface } from 'interfaces/follow';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFollows = async (query?: FollowGetQueryInterface): Promise<PaginatedInterface<FollowInterface>> => {
  return fetcher('/api/follows', {}, query);
};

export const createFollow = async (follow: FollowInterface) => {
  return fetcher('/api/follows', { method: 'POST', body: JSON.stringify(follow) });
};

export const updateFollowById = async (id: string, follow: FollowInterface) => {
  return fetcher(`/api/follows/${id}`, { method: 'PUT', body: JSON.stringify(follow) });
};

export const getFollowById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/follows/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteFollowById = async (id: string) => {
  return fetcher(`/api/follows/${id}`, { method: 'DELETE' });
};
