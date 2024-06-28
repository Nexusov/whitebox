import Container from "../../container/Container"
import GamesIcon from "../../icons/games/GamesIcon";
import Text from "../../text/Text";
import s from './Games.module.scss';
import GamesList from "./GamesList";

const GamesSection = () => {
  return (
    <Container>
      <div className={s.headerContainer}>
        <div className={s.titleContainer}>
          <GamesIcon />
          <Text type='title' theme="dark">Games</Text>
        </div>
      </div>
      <GamesList />
    </Container>
  )
}

export default GamesSection