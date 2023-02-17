import "./App.css";
import { Container } from "./components/index.js";
import { Header, Footer, MostPopular, Hero } from "./sections/index.js";
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <MostPopular />
      </Container>
      <Footer />
    </>
  );
};

export default App;
