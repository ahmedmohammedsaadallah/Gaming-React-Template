import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "./components/index.js";
import { Header, Footer } from "./sections/index.js";
import { Home, Profile } from "./Pages/index.js";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
