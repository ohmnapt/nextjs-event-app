import Link from 'next/link';
import Image from 'next/image';
import style from './EventCard.module.css';
import Button from './ui/Button';

const EventCard = (props: {
  title: string;
  image: string;
  date: Date;
  location: string;
  id: string;
}) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={style.item}>
      <Image src={'/' + image} alt={title} width={250} height={80} />
      <div className={style.content}>
        <div>
          <div className={style.summary}>
            <h2>{title}</h2>
            <div className={style.date}>
              <time>{humanReadableDate}</time>
            </div>
          </div>
          <div className={style.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={style.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};
export default EventCard;
