// import '../scss/link.scss';

// const Link = ({ children, href }) => {
//   return (
//     <a className="link" href={href}>
//       {children}
//     </a>
//   );
// };

// export default Link;

import styled from 'styled-components/macro';

const Link = styled.a`
  background-color: var(--black);
  font-weight: 500;
  padding: 6px 12px;
  color: var(--white);
  font-size: 1rem;
  text-decoration: none;
  transform: var(--transition);

  &:hover {
    background-color: var(--second-color);
    color: var(--black);
  }

  @media screen and (min-width: 992px) {
    margin-top: 24px;
    padding: 12px 24px;
    font-size: 1.2rem;
  }
`;

export default Link;
