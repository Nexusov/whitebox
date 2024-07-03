import fetchData from "../api/apiClient";
import { useStore } from "../store/store";
import { transformGame } from "../utils/dataTransformers";
import { gameIds } from "../config";
import fetchCountryCode from "./fetchCountryCode";

const fetchGames = async (): Promise<void> => {
  try {
    const ids = gameIds.join(',');
    const countryCode = await fetchCountryCode()
    const combinedData = await fetchData<GameData[]>(`/games?ids=${ids}&cc=${countryCode}`);
    const setGames = useStore.getState().setGames;
    setGames(transformGame(combinedData));
  } catch (error) {
    const typedError = error as Error;
    console.error('Error fetching games:', typedError.message);
  }
};

export default fetchGames;