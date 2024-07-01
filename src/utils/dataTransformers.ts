export const transformGame = (games: GameData[]): TransformedGameData[] => {

  return games.map(game => ({
    type: game.type,
    name: game.name,
    steam_appid: game.steam_appid,
    required_age: game.required_age,
    is_free: game.is_free,
    controller_support: game.controller_support,
    detailed_description: game.detailed_description,
    about_the_game: game.about_the_game,
    short_description: game.short_description,
    supported_languages: game.supported_languages,
    header_image: game.header_image,
    capsule_image: game.capsule_image,
    capsule_imagev5: game.capsule_imagev5,
    website: game.website,
    pc_requirements: game.pc_requirements,
    mac_requirements: game.mac_requirements,
    linux_requirements: game.linux_requirements,
    legal_notice: game.legal_notice,
    developers: game.developers,
    publishers: game.publishers,
    price_overview: game.price_overview, 
    formated_price_overview: transformGamePrice(game) || '',
    packages: game.packages,
    package_groups: game.package_groups,
    platforms: game.platforms,
    categories: game.categories,
    genres: game.genres,
    screenshots: game.screenshots,
    movies: game.movies,
    recommendations: game.recommendations,
    achievements: game.achievements,
    release_date: game.release_date,
    formated_release_date: transformGameReleaseDate(game.release_date),
    support_info: game.support_info,
    background: game.background,
    background_raw: game.background_raw,
    content_descriptors: game.content_descriptors,
    ratings: game.ratings,
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

export const transformReview = (review: ReviewData[]): TransformedReviewData[] => {

  return review.map(review => ({
    game_rating: transformGameRating(review),
    num_reviews: review.query_summary.num_reviews,
    review_score: review.query_summary.review_score,
    review_score_desc: review.query_summary.review_score_desc,
    total_positive: review.query_summary.total_positive,
    total_negative: review.query_summary.total_negative,
    total_reviews: review.query_summary.total_reviews,
  }));
};

function transformGameRating(reviewResult: ReviewData): GameRating {
  const totalPositive = reviewResult.query_summary.total_positive;
  const totalReviews = reviewResult.query_summary.total_reviews;
  const reviewScoreDesc = reviewResult.query_summary.review_score_desc;

  const ratingPercentage = Math.floor(totalPositive / (totalReviews / 100));

  return {
    rating_count: ratingPercentage,
    rating_text: reviewScoreDesc
  };
}