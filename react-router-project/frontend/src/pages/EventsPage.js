import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  if (data.isError) {
    // return <p>{data.message}</p>;
  }
  //events will be the returned value from the loader function in the App

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  //this function executes in the browser
  //even though it looks like backend code and we can use cokies, localStorage, etc
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "could not fetch events" };
    throw new Response(JSON.stringify({ message: "could not fetch events" }), {
      status: 500,
    });
  } else {
    return response;
    //the returned data can be a Response
    //meaning we dont need to extract data from the response
  }
  //react router makes the returned data available in the
  //rendered component and in any component that needs it
  //this is made with useLoaderData inside the component
  //this data can be used by siblings and children elements
}
