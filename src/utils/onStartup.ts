import fetchCountryCode from "../services/fetchCountryCode"
import fetchGames from "../services/fetchGames"
import fetchReviews from "../services/fetchReviews"

const onStartup = async () => {
  await fetchGames()
  await fetchReviews()
  await fetchCountryCode()
}

export default onStartup