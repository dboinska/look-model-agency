import Link from './Link';
import styled from 'styled-components/macro';

const Hero = ({
  imageUrl,
  subHeading,
  heading,
  description,
  linkLabel,
  link,
  ...rest
}) => {
  return (
    <HeroSection className="main" {...rest}>
      <div className="main__mainText">
        <Subheading>{subHeading}</Subheading>
        <Heading>{heading}</Heading>
        <Paragraph>{description}</Paragraph>
        <Link href={link}>{linkLabel}</Link>
      </div>
      <HeroPhoto>
        <img src={imageUrl} alt=""></img>
      </HeroPhoto>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  background-color: var(--main-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 120px;
  height: 100vh;
  overflow: hidden;

  & .main__mainText {
    text-align: center;
    text-transform: uppercase;
    padding: 580px 20px 20px 20px;
    min-height: 100vh;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row-reverse;
    .main__mainText {
      margin: 50px 100px 0 0;
      width: 60%;
      padding: 0;
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
    margin: 0 50px 20px 50px;
  }

  @media screen and (min-width: 1200px) {
    margin: 90px 0 60px 0;
    line-height: 2;
  }
`;

const HeroPhoto = styled.figure`
  display: flex;
  justify-content: center;
  & img {
    height: 40%;
    display: flex;
    transform: translateY(50px);
  }

  @media screen and (min-width: 1200px) {
    width: 40%;
    margin-bottom: 0;
    & img {
      height: 100%;
      width: auto;
      display: flex;
      margin: 0 auto;
    }
  }
`;

export default Hero;
