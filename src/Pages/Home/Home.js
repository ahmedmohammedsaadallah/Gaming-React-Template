import "./Home.css";
import { Hero, MostPopular, GamingLibrary } from "../../sections/index.js";
const Home = () => {
  return (
    <div>
      <>
        <Hero />
        <MostPopular />
        <GamingLibrary />
      </>
    </div>
  );
};
export default Home;
