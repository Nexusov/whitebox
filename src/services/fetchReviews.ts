import apiClient from "../api/apiClient";
import { gameIds, steamReviewsApiUrl } from "../config";
import { useStore } from "../store/store";
import { transformReview } from "../utils/dataTransformers";

const fetchReviews = async (): Promise<void> => {
  try {
    const requests = gameIds.map(id => 
      apiClient<Record<string, ReviewData>>(`${steamReviewsApiUrl}${id}?json=1&filter=updated&language=all&review_type=all&purchase_type=all&num_per_page=0&filter_offtopic_activity=0`).then(r => r[id])
    );
    const responses = await Promise.all(requests);
    const data: ReviewData[] = responses.map(response => {
      if (response && response.success) {
        return response;
      } else {
        throw new Error('Unexpected error');
      }
    });

    const setReviews = useStore.getState().setReviews;
    setReviews(transformReview(data));
  } catch (error) {
    const typedError = error as Error;
    console.error('Error fetching reviews:', typedError.message);
  }
};

export default fetchReviews;