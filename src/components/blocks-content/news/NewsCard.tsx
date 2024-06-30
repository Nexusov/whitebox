import Text from '../../text/Text';
import s from './News.module.scss';

const NewsCard = () => {
  return (
    <div className={s.cardItem}>
      <img className={s.preview} src="https://media.discordapp.net/attachments/561591566045544449/1256041441831030876/Rectangle_4351.png?ex=66829eff&is=66814d7f&hm=9784f803d3a52ee37bce5df88fb6d73c90b3be0f8bebdb84f6e040ad8d209227&=&quality=lossless" alt="Card image" />
      <div className={s.descriptionContainer}>
        <div className={s.cardTitle}>
          <Text type='default' theme='light'>19.12.2014</Text>
          <Text type='subtitle' theme='light'>Update</Text>
        </div>
        <div className={s.description}>
          <Text type='description' theme='light'>Если расставить ноты в правильном порядке, получится музыка. А это обновление для тех, кто любит порядок в плейлистах</Text>
        </div>
      </div>
      <img className={s.overlayImg} src="https://media.discordapp.net/attachments/561591566045544449/1256041441831030876/Rectangle_4351.png?ex=66829eff&is=66814d7f&hm=9784f803d3a52ee37bce5df88fb6d73c90b3be0f8bebdb84f6e040ad8d209227&=&quality=lossless" alt="Card image" />
    </div>
  )
}

export default NewsCard