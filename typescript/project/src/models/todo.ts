//ts (no tsx) because this is not a component

class Todo {
  id: string;
  text: string;

  //add a constructor to make sure these properties receive a value
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
