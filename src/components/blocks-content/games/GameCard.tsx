import Button from '../../button/Button';
import Text from '../../text/Text';
import s from './Games.module.scss';

const GameCard = () => {
  return (
    <div className={s.cardItem}>
      <img className={s.poster} src="https://media.discordapp.net/attachments/561591566045544449/1256061757030531182/Rectangle_4351.png?ex=6682b1eb&is=6681606b&hm=ec66adef835949a2c3fe5ebeac9109da78835b16d1aa96d49c4b3e25ca970277&=&quality=lossless" alt="Game poster" />
      <div className={s.infoContainer}>
        <div className={s.mainInfo}>
          <Text type='subtitle' theme='dark'>House of Decay</Text>
          <Text type='default' theme='dark'>DEC 27, 2019</Text>
        </div>
        <div className={s.raitingContainer}>
          <div className={s.achievments}>
            <Text type='description' theme='dark'>Achievements</Text>
            <div className={s.achievmentsCount}><Text type='count' theme='light'>12/64</Text></div>
          </div>
          <div className={s.rating}>
            <Text type='description' theme='dark'>Moslty positive</Text>
            <div className={s.ratingCount}><Text type='count' theme='dark'>80</Text></div>
          </div>
        </div>
      </div>
      <div className={s.buttonsContainer}>
        <Button text='BUY 4.99$'/>
        <Button text='PLAY'/>
      </div>
    </div>
  )
}

export default GameCard