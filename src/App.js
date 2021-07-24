import NavBar from './components/NavBar.js';
import CardProducto from './components/CardProducto.js';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container >
      <NavBar/>
      <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quis nesciunt quas! Dicta earum temporibus quae harum delectus, mollitia nam ipsam perspiciatis corrupti esse sint officiis. Culpa laborum fugiat eaque.</p>  
      <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quis nesciunt quas! Dicta earum temporibus quae harum delectus, mollitia nam ipsam perspiciatis corrupti esse sint officiis. Culpa laborum fugiat eaque.</p>  
      <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quis nesciunt quas! Dicta earum temporibus quae harum delectus, mollitia nam ipsam perspiciatis corrupti esse sint officiis. Culpa laborum fugiat eaque.</p>  
      <CardProducto/>
    </Container>
  );
}

export default App;
