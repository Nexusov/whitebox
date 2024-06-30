import axios, { AxiosResponse } from 'axios';
import { proxyUrl } from '../config';

const apiClient = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.post(proxyUrl, { url });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default apiClient;
