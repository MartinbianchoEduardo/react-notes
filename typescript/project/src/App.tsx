import Todos from "./components/Todos";

const todos = ["Learn React", "Learn TypeScript"];

function App() {
  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
