import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  //events will be the returned value from the loader function in the App

  return <EventsList events={events} />;
}

export default EventsPage;
