import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//describe the test to group all related tests in "suites"
describe("Greeting component", () => {
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

  test("renders good to see you text if button was NOT clicked", () => {
    render(<Greeting />);
    const textElement = screen.getByText("Good to see you", { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test("renders changed text if the button was clicked", () => {
    //arrange
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement); //simulate a click in this element

    //assert
    const outputElement = screen.getByText("GREAT to see you");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if button is clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("Good to see you");
    //use query by text so this will return null and the test will work
    expect(outputElement).not.toBeInTheDocument();
  });
});
