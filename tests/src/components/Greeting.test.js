import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

test("renders hello as text", () => {
  //Arrange
  //(setup test data, test conditions and environment)
  render(<Greeting />);

  //Act
  //(run logic that should be tested)
  // nothing in this case

  //Assert
  //compare result with expectations
  const helloElement = screen.getByText("Hello");
  expect(helloElement).toBeInTheDocument();
});
