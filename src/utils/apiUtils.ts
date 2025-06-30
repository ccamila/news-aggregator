import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

/**
 * Creates a configured axios instance with common settings
 * @param baseURL - The base URL for the API
 * @param config - Optional Axios request configuration
 * @returns Configured Axios instance
 */
export function createApiClient(baseURL: string, config: AxiosRequestConfig = {}): AxiosInstance {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
    ...config,
  });
  return instance;
}

export async function handleApiCall<T>(
  request: () => Promise<AxiosResponse<T>>
): Promise<T> {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    console.error('Error in handleApiCall:', (error as AxiosError).response?.data);
    throw new Error(`Error: ${error}`);
  }
}
