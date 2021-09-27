import { Method } from '@type/index.types';
import 'regenerator-runtime';

export async function callApi<Type>(
  url: string,
  options?: {
    method?: Method;
    headers?: Record<string, string>;
    body?: BodyInit;
  }
): Promise<Type> {
  const response = await fetch(`${process.env.API_URL}${url}`, {
    method: Method.GET,
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (response.ok) {
    const data = await response.json();
    return data.payload as Type;
  }
  const error = await response.text();
  throw new Error(error);
}
