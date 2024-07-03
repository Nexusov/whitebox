import fetchGames from "../services/fetchGames"

const onStartup = async () => {
  await fetchGames()
}

export default onStartup