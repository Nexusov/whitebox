import axios, { AxiosResponse } from 'axios';
import { baseUrl, isDev } from '../config';

const apiClient = axios.create({
  baseURL: `${baseUrl}`,
  headers: { 'Content-Type': 'application/json' },
});

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.get(url);
    isDev && console.log(response.data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      switch (error.response.status) {
        case 400:
          console.error(`Bad Request: Please check the request parameters and try again. Code: ${error.response.status}`);
          break;
        case 401:
          console.error(`Unauthorized: Please check your authentication credentials. Code: ${error.response.status}`);
          break;
        case 403:
          console.error(`Forbidden: You do not have permission to access this resource. Code: ${error.response.status}`);
          break;
        case 404:
          console.error(`Not Found: The requested resource could not be found. Code: ${error.response.status}`);
          break;
        case 500:
          console.error(`Internal Server Error: Please try again later. Code: ${error.response.status}`);
          break;
        default:
          console.error(`Error fetching data: ${error.response.status}`);
      }
    } else {
      console.error('Error fetching data:', error);
    }
    throw error;
  }
};

export default fetchData;
