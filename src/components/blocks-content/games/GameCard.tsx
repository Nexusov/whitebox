import Button from '../../button/Button';
import Text from '../../text/Text';
import s from './Games.module.scss';

type GameCardProps = {
  game: TransformedGameData;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const handlePlayClick = () => {
    window.location.href = `steam://launch/${game.steam_appid}`;
  };

  return (
    <div className={s.cardItem}>
      <img className={s.poster} src={game.header_image} alt={`${game.name}'s poster`} />
      <div className={s.infoContainer}>
        <div className={s.mainInfo}>
          <Text type='subtitle' theme='dark'>{game.name}</Text>
          <Text type='default' theme='dark'>{game.formated_release_date}</Text>
        </div>
        <div className={s.raitingContainer}>
          <div className={s.rating}>
            <Text type='description' theme='dark'>Mostly positive</Text>
            <div className={s.ratingCount}><Text type='count' theme='dark'>80</Text></div>
          </div>
        </div>
      </div>
      <div className={s.buttonsContainer}>
        <Button text={game.formated_price_overview} variant='buy'/>
        <Button text='PLAY' variant='play' onClick={handlePlayClick}/>
      </div>
    </div>
  )
}

export default GameCard;