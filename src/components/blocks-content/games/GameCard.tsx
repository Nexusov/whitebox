import { useMediaQuery } from 'react-responsive';
import Button from '../../button/Button';
import Text from '../../text/Text';
import GameRating from './GameRating';
import s from './Games.module.scss';

type GameCardProps = {
  game: TransformedGameData;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const handlePlayClick = () => {
    window.location.href = `steam://launch/${game.steam_appid}`;
  };

  const handleSteamPageClick = () => {
    window.open(`https://store.steampowered.com/app/${game.steam_appid}/`, '_blank');
  };

  return (
    <div className={s.cardItem}>
      <img className={s.poster} src={game.header_image} alt={`${game.name}'s poster`} />
      <div className={s.infoContainer}>
        <div className={s.mainInfo}>
          <Text type='subtitle' theme='dark'>{game.name}</Text>
          <Text type='default' theme='dark'>{game.formated_release_date}</Text>
        </div>
        <GameRating rating_text={game.formated_game_rating.rating_text} rating_count={game.formated_game_rating.rating_count} />
      </div>
      <div className={s.buttonsContainer}>
        <Button text={game.formated_price_overview} variant='buy' onClick={handleSteamPageClick} />
        {!isMobile && <Button text='PLAY' variant='play' onClick={handlePlayClick} />}
      </div>
    </div>
  )
}

export default GameCard;