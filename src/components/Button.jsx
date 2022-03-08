import styled from 'styled-components/macro';

export const Button = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  color: var(--gray);
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  transition: all 0.3s ease;
  border: none;

  &:before {
    content: '';
    background-color: var(--main-color);
    font-weight: 700;
    width: 4px;
    height: 24px;
    display: inline-block;
    margin-right: 1rem;
  }

  &:hover {
    color: var(--main-color);
    transition: all 0.3s ease;
  }
`;

export const SmallButton = styled(Button)`
  font-size: 1.25rem;
  color: var(--black);
`;

export default Button;
