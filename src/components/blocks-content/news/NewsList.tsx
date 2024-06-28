import NewsCard from './NewsCard';
import s from './News.module.scss';

const NewsList = () => {
  return (
    <div className={s.newsContainer}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  )
}

export default NewsList