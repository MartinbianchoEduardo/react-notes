import Todos from "./components/Todos";
import Todo from "./models/todo";

const todos = [new Todo("Learn React"), new Todo("Learn JavaScript")];

function App() {
  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
