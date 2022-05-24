import styled from 'styled-components/macro';

const ListItem = styled.li`
  list-style-type: none;
  display: block;

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

export default ListItem;
