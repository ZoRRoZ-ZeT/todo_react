import 'regenerator-runtime';

import { Method } from '@type/index.types';

export async function callApi<Type>(
  url: string,
  options?: {
    method?: Method;
    headers?: Record<string, string>;
    // eslint-disable-next-line @typescript-eslint/ban-types
    body?: {};
    isRetry?: boolean;
  }
): Promise<Type> {
  const response = await fetch(`${process.env.API_URL}${url}`, {
    method: Method.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    ...options,
    ...(options?.body && { body: JSON.stringify(options.body) }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.payload as Type;
  }

  const error = await response.json();
  if (error.statusCode === 401 && !options?.isRetry) {
    const refreshResponse = await fetch(`${process.env.API_URL}/refresh`, {
      credentials: 'include',
    });
    const data = await refreshResponse.json();
    window.localStorage.setItem('token', data.payload);
    return await callApi(url, { ...options, isRetry: true });
  }

  console.log(error);
  throw error;
}
