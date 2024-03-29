import styled from 'styled-components/macro';

const List = ({ items }) => {
  return (
    <StyledList>
      {items.map(item => (
        <ListItem key={item.id}>{item.label}</ListItem>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  margin: 0 1rem;
  padding: 0;

  @media (min-width: 992px) {
    padding: 0 2rem;
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  display: block;
  margin: 0.8rem;

  &::before {
    content: '';
    background-color: var(--main-color);
    font-weight: bold;
    width: 8px;
    height: 8px;
    display: inline-block;
    margin-right: 1rem;
  }
`;

export default List;
