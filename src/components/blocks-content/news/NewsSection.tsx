import Button from "../../button/Button";
import Section from "../../section/Section"
import ExclamationIcon from "../../icons/exclamation/ExclamationIcon";
import Text from "../../text/Text";
import s from './News.module.scss';
import NewsList from "./NewsList";

const NewsSection = () => {
  return (
    <Section>
      <div className={s.headerContainer}>
        <div className={s.titleContainer}>
          <ExclamationIcon />
          <Text type='title' theme="dark">News</Text>
        </div>
        <Button text="see more" />
      </div>
      <NewsList />
    </Section>
  )
}

export default NewsSection