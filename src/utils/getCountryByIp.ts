import axios from 'axios';

export const getCountryByIP = async (): Promise<string> => {
  try {
    const ipResponse = await axios.get<{ ip: string }>('https://api64.ipify.org?format=json');
    const ip = ipResponse.data.ip;

    const countryResponse = await axios.get<{ countryCode: string }>(`http://ip-api.com/json/${ip}`);
    console.log(countryResponse.data.countryCode)
    return countryResponse.data.countryCode;
  } catch (error) {
    console.error('Error fetching country:', error);
    return '';
  }
};