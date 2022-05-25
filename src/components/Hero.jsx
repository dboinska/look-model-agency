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
      <div className="heroMax">
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
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  background-color: ${props => props.backgroundColor || 'var(--main-color)'};
  margin: 0 auto;

  &.heroImgSmall {
    img {
      width: 460px;
      object-fit: contain;
      transform: translateY(0px);
    }
  }
  &.heroImgSmallEmail {
    img {
      width: 160px;
      object-fit: contain;
      transform: translateY(-8px);
    }
  }

  .heroMax {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 60px;
    height: calc(100vh - 50px);
    /* height: 100vh; */
    width: 100%;
    min-height: 744px;
    overflow: hidden;
    max-width: 1500px;
    margin: 0 auto;

    & .main__mainText {
      text-align: center;
      margin: 2rem;
      text-transform: uppercase;
      padding: 0 1rem;
      width: 80%;
      margin: 0 auto;
    }

    @media screen and (min-width: 576px) {
      width: 100vw;
      margin: 0;
    }

    @media screen and (min-width: 992px) {
      width: 100%;
    }

    @media screen and (min-width: 1200px) {
      padding-top: 120px;
      flex-direction: ${props => props.flexDirection || 'row-reverse'};

      .main__mainText {
        max-width: 860px;
        margin: ${props => props.margin || '50px 100px 50px 50px'};
        padding: ${props => props.paddingHero || '0'};
        width: ${props => props.width || 'auto'};
      }
    }
  }
`;

const Subheading = styled.p`
  position: relative;
  font-size: 1.2rem;

  @media screen and (min-width: 576px) {
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

  @media screen and (min-width: 576px) {
    font-size: 4rem;
    margin-bottom: 30px;
    font-size: 2.8rem;

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
    font-size: 3.8rem;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 50px;
  }
`;

const Paragraph = styled.p`
  text-transform: none;
  font-size: 1rem;

  @media screen and (min-width: 620px) {
    margin: 20px;
    padding-top: 2rem;
  }

  @media screen and (min-width: 1200px) {
    /* margin: 90px 0 60px 0; */
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
    transform: translateY(16px);
    @media screen and (min-width: 576px) {
      transform: translateY(60px);
    }

    @media screen and (min-width: 1200px) {
      height: 100%;
      width: ${props => props.imgWidth || 'auto'};
      display: flex;
      margin: 0 auto;
      transform: translateY(50px);
    }
  }

  @media screen and (min-width: 992px) {
    width: 40%;
    max-width: 400px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 630px;
    height: auto;
    margin-bottom: 0;
    width: ${props => props.imgFigure || 'auto'};
  }
`;

export default Hero;
