function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
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
