import Card, { CardProps } from '../card/Card';
import './cardlist.css';

interface ReduxCardListProps {
  planetValue: CardProps[];
}

function ReduxCardList({ planetValue }: ReduxCardListProps) {
  console.log('Received planetValue:', planetValue);

  return (
    <div className="body__container">
      <>
        {Array.isArray(planetValue) && planetValue.length > 0 ? (
          planetValue.map((item: CardProps, index: number) => (
            <Card
              key={index}
              name={item.name}
              climate={item.climate}
              terrain={item.terrain}
              population={item.population}
              url={item.url}
            />
          ))
        ) : (
          <p>No data available</p>
        )}
      </>
    </div>
  );
}

export default ReduxCardList;
