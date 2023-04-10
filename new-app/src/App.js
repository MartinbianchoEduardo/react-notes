import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: "e1",
    title: "car insurance",
    amount: 294.78,
    date: new Date(),
  },
  {
    id: "e2",
    title: "car oil",
    amount: 120.99,
    date: new Date(),
  },
  {
    id: "e3",
    title: "car wash",
    amount: 94.78,
    date: new Date(),
  },
  {
    id: "e4",
    title: "car ",
    amount: 1094.78,
    date: new Date(),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

// React works in a declarative way
// we could write in a imperative way, giving clear instructions but we dont have to
// we could write
// const p = document.createElement("p");
// p.textContent = "a text for the paragraph";
// document.querySelector("#root").append(p);
// this works
// but with react we can simply write the final state of the page
// which is a page with just this <p> element
// and react will figure out how to do it (we dont need to pass instructions like done above)
// we can simply write <p>a text for the paragraph<p> and it will do what is needed
