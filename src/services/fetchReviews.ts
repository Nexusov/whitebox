import apiClient from "../api/apiClient";
import { gameIds, steamReviewsApiUrl } from "../config";

const fetchReviews = async () => {
  try {
    const requests = gameIds.map(id => 
      apiClient(`${steamReviewsApiUrl}${id}?json=1&filter=updated&language=all&review_type=all&purchase_type=all&num_per_page=0&filter_offtopic_activity=0`)
    );
    const responses = await Promise.all(requests);
    return responses;
  } catch (error) {
    const typedError = error as Error;
    console.error('Error fetching reviews:', typedError.message);
    return { error: true, message: typedError.message };
  }
};

export default fetchReviews;