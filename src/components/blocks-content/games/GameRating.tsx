import Text from '../../text/Text';
import s from './Games.module.scss';

const GameRating: React.FC<GameRating> = ({ rating_text, rating_count }) => {
  const isRatingUnknown = rating_count === '??';

  return (
    <div className={s.ratingContainer}>
      <Text type='description' theme='dark'>{rating_text}</Text>
      <div className={isRatingUnknown ? `${s.ratingCount} ${s['ratingCount--noRating']}` : s.ratingCount}>
        <Text type='count' theme='dark'>{rating_count}</Text>
      </div>
    </div>
  );
};

export default GameRating