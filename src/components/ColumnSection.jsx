import styled from 'styled-components/macro';

const ColumnSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${props => props.padding || '2rem'};
  text-align: center;
  color: ${props => props.color || 'var(--black)'};
  background-color: ${props => props.backgroundColor || 'var(--white)'};
  justify-content: ${props => props.justifyContent || 'auto'};
  background-image: ${props => props.backgroundImage || 'none'};
  min-height: ${props => props.minHeight || '380px'};
  background-position: center;
  background-repeat: repeat;

  .div__center {
    @media screen and (min-width: 992px) {
      margin: 0 auto;
      width: 60%;
      min-width: 350px;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default ColumnSection;
