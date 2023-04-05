//generally a Card component is a container with rounded corners, box-shadow...
//now we have a card container component to go around all components that need box-shadow and border radius
//in order to be able to wrap other elements inside the Card component
//is needed to add props.children in the content
//props.children will always be the content between the opening and closing tags

import "./Card.css";

function Card(props) {
  //to make this component support a class name:
  const classes = "card " + props.className; //note the space "card "
  //any calue set in the className prop will be stored in the classes const
  //and will be set inside the card below
  return <div className={classes}>{props.children}</div>;
}

export default Card;
