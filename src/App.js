import styled, {css} from "styled-components";
import Banner from "./components/banner/Banner";
import Navigation from "./components/nav/Navigation";
import Product from "./components/product/Product";


function App() {
  return (
  <>
    <Container>
        <Navigation />
        <Banner />
    </Container>
    <Container>
       <Product />
       <ProductShape />
    </Container>
  </>
  );
}

export default App;
const Container = styled.div`
height: 100vh;
background-color:#faf6f4;
border-radius:10px;
position: relative;
`;

const Shape = css`
   width: 100%;
  height: 100%;
  margin-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  `;

  const ProductShape = styled.div`
  ${Shape}
  margin-top: -50px;
  //clip-path: polygon(54% 0, 100% 0%, 100% 100%, 75% 100%);
  clip-path: inset(0 0 15% 40%);
  background-color: pink;
`;


