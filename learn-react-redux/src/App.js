import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import { Button, Container, Navbar } from "react-bootstrap";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      margin:20px;
      width:100px;
    }
    
    `}
      </style>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">
            Simple React Counter Using React Redux
          </Navbar.Brand>
        </Navbar>
        <h1>Counter {counter}</h1>

        <Button
          variant="primary"
          size="xxl"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>

        <Button
          variant="danger"
          size="xxl"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>

        {isLogged ? <h3>Valuable info I shouldnt see</h3> : ""}
      </Container>
    </div>
  );
}

export default App;
