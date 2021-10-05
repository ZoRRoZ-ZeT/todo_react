import { Method } from '@type/index.types';
import 'regenerator-runtime';

export async function callApi<Type>(
  url: string,
  options?: {
    method?: Method;
    headers?: Record<string, string>;
    // eslint-disable-next-line @typescript-eslint/ban-types
    body?: {};
  }
): Promise<Type> {
  const response = await fetch(`${process.env.API_URL}${url}`, {
    method: Method.GET,
    headers: { 'Content-Type': 'application/json' },
    ...options,
    ...(options?.body && { body: JSON.stringify(options.body) }),
  });
  if (response.ok) {
    const data = await response.json();
    return data.payload as Type;
  }
  const error = await response.json();
  console.log(error);
  throw error;
}
