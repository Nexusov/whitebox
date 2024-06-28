import Text from '../../text/Text';
import s from './News.module.scss';

const NewsCard = () => {
  return (
    <div className={s.cardItem}>
      <img className={s.preview} src="https://media.discordapp.net/attachments/561591566045544449/1256041441831030876/Rectangle_4351.png?ex=667f533f&is=667e01bf&hm=592ced9c64d17b7fdae42a7283532c5a8f01bf8e87d1ac79a74de3d590acfd4c&=&quality=lossless" alt="Card image" />
      <div className={s.descriptionContainer}>
        <div className={s.cardTitle}>
          <Text type='default' theme='light'>19.12.2014</Text>
          <Text type='subtitle' theme='light'>Update</Text>
        </div>
        <div className={s.description}>
          <Text type='description' theme='light'>Если расставить ноты в правильном порядке, получится музыка. А это обновление для тех, кто любит порядок в плейлистах</Text>
        </div>
      </div>
      <img className={s.overlayImg} src="https://media.discordapp.net/attachments/561591566045544449/1256041441831030876/Rectangle_4351.png?ex=667f533f&is=667e01bf&hm=592ced9c64d17b7fdae42a7283532c5a8f01bf8e87d1ac79a74de3d590acfd4c&=&quality=lossless" alt="Card image" />
    </div>
  )
}

export default NewsCard