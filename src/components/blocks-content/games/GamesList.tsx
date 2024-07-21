import { useEffect, useState } from 'react';
import { useStore } from '../../../store/store';
import GameCard from './GameCard';
import s from './Games.module.scss';
import CustomSkeleton from '../../custom-skeleton/CustomSkeleton';

const GamesList = () => {
  const games = useStore(state => state.games);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (games.length > 0) {
      setIsLoading(false);
    }
  }, [games]);


  return (
    <div className={s.gamesContainer}>
      {isLoading ? (
        <CustomSkeleton type='games' />
      ) : (
        games.map((game) => (
          <GameCard key={game.steam_appid} game={game} />
        ))
      )}
    </div>
  );
};

export default GamesList