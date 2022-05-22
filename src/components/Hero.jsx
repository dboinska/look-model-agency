import MyLink from './MyLink';
import styled from 'styled-components/macro';

const Hero = ({
  imageUrl,
  subHeading,
  heading,
  description,
  linkLabel,
  link,
  style,
  ...rest
}) => {
  const hasImage = Boolean(imageUrl);

  return (
    <HeroSection className="main" {...rest}>
      <div className="main__mainText">
        <Subheading>{subHeading}</Subheading>
        <Heading>{heading}</Heading>
        <Paragraph>{description}</Paragraph>
        <MyLink to={link}>{linkLabel}</MyLink>
      </div>
      {hasImage && (
        <HeroPhoto>
          <img src={imageUrl} alt=""></img>
        </HeroPhoto>
      )}
    </HeroSection>
  );
};

const HeroSection = styled.div`
  background-color: ${props => props.backgroundColor || 'var(--main-color)'};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 120px;
  height: 100vh;
  width: 100%;
  min-height: 744px;
  overflow: hidden;
  & .main__mainText {
    text-align: center;
    margin: 2rem;
    text-transform: uppercase;
    /* padding: 380px 20px 20px 20px;
    min-height: 100vh; */
    /* max-width: 80%; */

    padding: 0 2rem;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: ${props => props.flexDirection || 'row-reverse'};
    .main__mainText {
      /* margin: 0 auto; */

      margin: ${props => props.margin || '50px 100px 0 0'};
      /* width: 60%; */
      padding: ${props => props.paddingHero || '0'};
      width: ${props => props.width || 'auto'};
    }
  }
`;

const Subheading = styled.p`
  position: relative;
  font-size: 1.2rem;

  @media screen and (min-width: 700px) {
    display: flex;
    align-items: center;
    gap: 1rem;

    &::after,
    &::before {
      content: '';
      height: 1px;
      background: var(--black);
      flex: 1 1 auto;
    }

    &::before {
      left: 730px;
    }
  }
`;

const Heading = styled.h1`
  margin: 0;
  position: relative;
  font-size: 2.8rem;

  @media screen and (min-width: 700px) {
    font-size: 4rem;
    margin-bottom: 30px;

    &::before {
      content: '';
      position: absolute;
      bottom: -40px;
      left: 0;
      right: 0;
      height: 1rem;
      border-top: 1px solid black;
    }
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 50px;
  }
`;

const Paragraph = styled.p`
  text-transform: none;
  font-size: 1rem;

  @media screen and (min-width: 700px) {
    margin: 50px;
  }

  @media screen and (min-width: 1200px) {
    margin: 90px 0 60px 0;
    line-height: 2;
  }
`;

const HeroPhoto = styled.figure`
  display: flex;
  justify-content: center;
  width: 230px;

  height: 290px;
  margin: 0 auto;
  & img {
    height: 100%;
    object-fit: cover;
    display: flex;
    transform: translateY(13%);
  }

  @media screen and (min-width: 992px) {
    /* height: 30%; */
    width: 40%;
    max-width: 500px;

    /* height: auto;
    margin-bottom: 0;
    & img {
      height: 100%;
      width: auto;
      display: flex;
      margin: 0 auto;

      transform: translateY(50px);
    } */
  }
  @media screen and (min-width: 1200px) {
    max-width: 630px;
    height: auto;
    margin-bottom: 0;
    & img {
      height: 100%;
      width: auto;
      display: flex;
      margin: 0 auto;

      transform: translateY(50px);
    }
  }
`;

export default Hero;
