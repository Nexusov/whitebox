import GamesSection from "../../components/blocks-content/games/GamesSection";
import NewsContainer from "../../components/blocks-content/news/NewsSection";
import PageLayout from "../../components/pageLayout/PageLayout"


const Home = () => {
  return (
    <PageLayout>
      <NewsContainer />
      <GamesSection />
    </PageLayout>
  )
}

export default Home