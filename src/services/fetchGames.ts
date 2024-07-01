import apiClient from "../api/apiClient";
import { gameIds, steamDetailsApiUrl } from "../config";
import { useStore } from "../store/store";
import { transformGame } from "../utils/dataTransformers";

type ApiResponse = {
  success: boolean;
  data: GameData;
}

const fetchGames = async (): Promise<void> => {
  try {
    const requests = gameIds.map(id => 
      apiClient<Record<string, ApiResponse>>(`${steamDetailsApiUrl}?appids=${id}&cc=`).then(r => r[id])
    );
    const responses = await Promise.all(requests);
    const data: GameData[] = responses.map(response => {
      const apiResponse = response as ApiResponse;
      if (apiResponse && apiResponse.success && apiResponse.data) {
        return apiResponse.data;
      } else {
        throw new Error('Unexpected error');
      }
    });
    const setGames = useStore.getState().setGames;
    setGames(transformGame(data));
  } catch (error) {
    const typedError = error as Error;
    console.error('Error fetching games:', typedError.message);
  }
};

export default fetchGames;