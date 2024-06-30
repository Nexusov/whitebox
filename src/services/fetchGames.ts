import apiClient from "../api/apiClient";
import { gameIds, steamDetailsApiUrl } from "../config";

const fetchGames = async () => {
  try {
    const requests = gameIds.map(id => 
      apiClient(`${steamDetailsApiUrl}?appids=${id}&cc=`)
    );
    const responses = await Promise.all(requests);
    return responses;
  } catch (error) {
    const typedError = error as Error;
    console.error('Error fetching games:', typedError.message);
    return { error: true, message: typedError.message };
  }
};

export default fetchGames;