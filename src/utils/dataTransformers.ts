export const transformGame = (games: GameData[]): TransformedGameData[] => {

  return games.map(game => ({
    ...game,
    formated_price_overview: transformGamePrice(game) || '',
    formated_release_date: transformGameReleaseDate(game.release_date),
    formated_game_rating: transformGameRating(game.reviews),
  }));
};

const transformGamePrice = (game: GameData): string => {
  if (game.release_date.coming_soon) {
    return "Coming soon"
  } else if (game.price_overview) {
    return `BUY ${game.price_overview.final_formatted}`
  } else {
    return "Play for free"
  }
};

const transformGameReleaseDate = (releaseDate: { coming_soon: boolean; date: string }): string => {
  return releaseDate.coming_soon ? releaseDate.date : releaseDate.date.replace(',', '').toUpperCase();
}
function transformGameRating(reviewResult: Reviews): GameRating {
  const totalPositive = reviewResult.total_positive;
  const totalReviews = reviewResult.total_reviews;
  const reviewScoreDesc = reviewResult.review_score_desc;

  const ratingPercentage = (!totalPositive || !totalReviews) ? "??" : Math.floor(totalPositive / (totalReviews / 100));

  return {
    rating_count: ratingPercentage,
    rating_text: reviewScoreDesc
  };
}