import GameCard from './GameCard';
import s from './Games.module.scss';

const GamesList = () => {
  return (
    <div className={s.gamesContainer}>
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  )
}

export default GamesList