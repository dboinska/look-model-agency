import styled from 'styled-components/macro';

export const ModelStyled = styled.div`
  height: 400px;
  width: 300px;
  padding-top: 2rem;

  img {
    object-fit: cover;
    max-width: 250px;
    height: 100%;

    @media screen and (min-width: 1200px) {
      max-width: none;
      width: 100%;
    }
  }
`;

export const ModelData = styled.div`
  width: 300px;
  height: 80px;
  border-left: 4px solid var(--main-color);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;

  h4 {
    margin: 0;
    text-transform: uppercase;
  }
  span {
    text-transform: uppercase;
  }
`;

// export const Model = ({ imgSmallSize, name, employee }) => (
//   <div>
//     {/* <ModelStyled>
//       <picture>
//         <source srcSet={oneSmall} media="(min-width: 800px)">
//           <img srcSet={oneBig} alt="model" />
//         </source>
//       </picture>
//     </ModelStyled> */}
//     <ModelStyled>
//       <img src={imgSmallSize} alt={name} />
//     </ModelStyled>
//     <ModelData>
//       <h4>{name}</h4>
//       <span>{employee}</span>
//     </ModelData>
//   </div>
// );

export const ModelImg = ({ img, name }) => (
  <ModelStyled>
    <img src={img} alt={name} />
  </ModelStyled>
);

export const ModelTxt = ({ name, employee }) => (
  <ModelData>
    <h4>{name}</h4>
    <span>{employee}</span>
  </ModelData>
);
