const mapping: Record<string, string> = {
  businesses: 'business',
  comments: 'comment',
  follows: 'follow',
  likes: 'like',
  posts: 'post',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
