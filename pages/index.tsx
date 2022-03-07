import { getFeaturedEvents } from '../dummy-data';
import type { NextPage } from 'next';
import EventList from '../components/events/EventList';

const featureEvents = getFeaturedEvents();

const Home: NextPage = () => {
  return (
    <div>
      <EventList items={featureEvents} />
    </div>
  );
};

export default Home;
