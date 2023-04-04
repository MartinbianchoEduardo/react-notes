import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
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
