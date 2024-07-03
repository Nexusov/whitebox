import { getCountryByIP } from "../utils/getCountryByIp";

export const fetchCountryCode = async () => {
  const countryCode = await getCountryByIP();
  return countryCode
};

export default fetchCountryCode