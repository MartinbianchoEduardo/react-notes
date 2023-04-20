import { Link } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventsPage = () => {
  const EVENTS = [
    {
      id: "e1",
      title: "A dummy event",
      date: "2023-02-22",
      image:
        "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
      description:
        "Join this amazing event and connect with fellow developers.",
    },
  ];

  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((e) => {
          return (
            <li key={e.id}>
              <Link to={`/events/${e.id}`}>{e.title}</Link>
              <p>Date: {e.date}</p>
              <img src={e.image} alt="event" />
              <p>{e.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

/* <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((e) => (
          <EventItem event={e} />
        ))}
      </ul>
    </> */

export default EventsPage;
