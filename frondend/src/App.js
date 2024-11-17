import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" varient="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand href="#home" className="brand text-white">Min Amazon</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>

        <footer className="bg-dark text-white py-3">
          <Container>
          <div className="text-center">
            <p>�� 2022 Dizzling Store. All rights reserved.</p>
          </div>
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
