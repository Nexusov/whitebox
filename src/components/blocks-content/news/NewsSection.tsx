import Button from "../../button/Button";
import Container from "../../container/Container"
import ExclamationIcon from "../../icons/exclamation/ExclamationIcon";
import Text from "../../text/Text";
import s from './News.module.scss';
import NewsList from "./NewsList";

const NewsSection = () => {
  return (
    <Container>
      <div className={s.headerContainer}>
        <div className={s.titleContainer}>
          <ExclamationIcon />
          <Text type='title' theme="dark">News</Text>
        </div>
        <Button text="see more" />
      </div>
      <NewsList />
    </Container>
  )
}

export default NewsSection