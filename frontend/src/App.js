import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Hello</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
