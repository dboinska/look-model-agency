import './list.scss';
import ListItem from './ListItem';

const List = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id}>{item.label}</ListItem>
      ))}
    </ul>
  );
};

export default List;
