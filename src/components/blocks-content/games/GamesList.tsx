import { useStore } from '../../../store/store';
import GameCard from './GameCard';
import s from './Games.module.scss';

const GamesList = () => {
  const games = useStore(state => state.games);
  const reviews = useStore(state => state.reviews);


  console.log(games)
  console.log(reviews)

  return (
    <div className={s.gamesContainer}>
      {games.map((game) => (
        <GameCard key={game.steam_appid} game={game} />
      ))}
    </div>
  );
};

export default GamesList