import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  //events will be the returned value from the loader function in the App

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.events;
  }
  //react router makes the returned data available in the
  //rendered component and in any component that needs it
  //this is made with useLoaderData inside the component
  //this data can be used by siblings and children elements
}
