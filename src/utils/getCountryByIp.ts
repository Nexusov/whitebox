import axios from 'axios';

export const getCountryByIP = async (): Promise<string> => {
  try {
    const ipResponse = await axios.get<{ ip: string }>('https://api64.ipify.org?format=json');
    const ip = ipResponse.data.ip;

    const countryResponse = await axios.get<{ country: string }>(`https://api.country.is/${ip}`);
    return countryResponse.data.country;
  } catch (error) {
    console.error('Error fetching country:', error);
    return '';
  }
};