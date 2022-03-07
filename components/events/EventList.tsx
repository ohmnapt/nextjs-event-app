import EventCard from './EventCard';
import style from './EventList.module.css';

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={style.list}>
      {items.map(
        (event: {
          title: string;
          image: string;
          date: Date;
          location: string;
          id: string;
        }) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        )
      )}
    </ul>
  );
};
export default EventList;
