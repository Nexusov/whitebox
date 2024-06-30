import { useStore } from "../store/store";
import { getCountryByIP } from "../utils/getCountryByIp";

export const fetchCountryCode = async () => {
  const setCountryCode = useStore.getState().setCountryCode;
  const countryCode = await getCountryByIP();
  setCountryCode(countryCode);
};

export default fetchCountryCode