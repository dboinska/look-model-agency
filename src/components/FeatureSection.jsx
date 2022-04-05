import styled from 'styled-components/macro';

const FeatureSection = styled.section`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  padding: ${props => props.padding || '2rem'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  justify-content: space-evenly;
  color: ${props =>
    props.variant === 'dark' ? 'var(--medium-gray)' : 'var(--black)'};
  background-color: ${props =>
    props.variant === 'dark' ? 'var(--dark-gray)' : 'transparent'};

  .div__img {
    display: flex;
    justify-content: center;
  }
  picture {
    width: 300px;
    margin-top: 1.25rem;

    img {
      object-fit: contain;
      width: 100%;
    }
  }

  @media screen and (min-width: 769px) {
    background-image: ${props => props.backgroundImage || 'none'};
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 992px) {
    flex-direction: ${props => props.flexDirection || 'row'};
    flex-wrap: nowrap;
    padding: ${props => props.padding || '2rem 4rem'};
    margin: ${props => props.margin || '2.5rem 0'};
    margin: 0 auto;

    picture {
      margin-top: 0;
    }

    .div__txt {
      width: 60%;
      padding-right: 2rem;
    }

    .div__img {
      width: 40%;

      &.column {
        flex-direction: column;
      }
    }

    .onBig--order1 {
      order: 1;
    }

    .onBig--order2 {
      order: 2;
    }
  }
`;

export default FeatureSection;
