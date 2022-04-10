import styled from 'styled-components';
import FeatureSection from './FeatureSection';
import { H3 } from './Headers';
import Logo from './Logo';
import Paragraph from './Paragraph';
import Container from './Container';
import { contactUs } from '../data/contactUs';
import { blog } from '../data/blog';
import { MdSend, MdCopyright } from 'react-icons/md';
import ColumnSection from './ColumnSection';

const Footer = ({ socialIcons: SocialIcons }) => {
  const news = blog.slice(0, 2);
  return (
    <>
      <FeatureSection
        variant="dark"
        flexWrap="wrap"
        flexDirection="row"
        margin="0"
        padding="0 4rem"
        backgroundColor="var(--dark-gray)"
        backgroundImage="url(./photos/model2.png)"
      >
        <Container>
          <Logo variant="light" />
          <Paragraph>
            Nulla tempor justo vel nisl dictum sagittis. Sed vel nisi eros. Nam
            euismod gravida tortor id tincidunt. Proin eget ultricies quam. Nunc
            dapibus, diam faucibus feugiat sagittis, sem magna accumsan.{' '}
          </Paragraph>
        </Container>
        <Container>
          <H3Footer>Contact us</H3Footer>
          <div>
            {contactUs.map(contact => {
              const { id, icon, data } = contact;
              return (
                <ContactItem key={id}>
                  <span>{icon}</span>
                  <span>{data}</span>
                </ContactItem>
              );
            })}
          </div>
        </Container>
        <Container>
          <H3Footer>Recent news</H3Footer>
          <News>
            {news.map(post => {
              const { id, heading, photo, date } = post;
              return (
                <div key={id}>
                  <ImgFooter src={photo} alt={heading}></ImgFooter>
                  <div className="column">
                    <a href="/">{heading}</a>
                    <span>{date}</span>
                  </div>
                </div>
              );
            })}
          </News>
        </Container>
        <Container>
          <H3Footer>Newsletter</H3Footer>
          <Paragraph>
            Don't forget to subscribe to receive the latest news from us! Fill
            out the form below.{' '}
          </Paragraph>
          {/* <form action="" method="get" name="newsletter"> */}
          <FormNewsletter>
            <label form="email"> email:</label>
            <div>
              <input type="email" name="email" id="email"></input>

              <button type="submit">
                <MdSend />
              </button>
            </div>
          </FormNewsletter>
          <SocialIcons />
        </Container>
      </FeatureSection>
      <ColumnSection
        backgroundColor="var(--black)"
        color="var(--white)"
        minHeight="0px"
      >
        <span>
          <MdCopyright />
          {new Date().getFullYear()}, Look Model Agency
        </span>
      </ColumnSection>
    </>
  );
};

const ContactItem = styled.div`
  padding: 1rem 0;

  svg {
    color: var(--white);
    margin-right: 0.5rem;
  }
`;

const FormNewsletter = styled.form`
  div {
    display: flex;
  }
`;

const H3Footer = styled(H3)`
  color: var(--white);
  font-size: 16px;
`;

const News = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  div {
    display: flex;
    margin: 1rem 0;

    & .column {
      flex-direction: column;
      padding-left: 1rem;
      margin: 0;
    }
  }

  a {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--medium-gray);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: var(--main-color);
    font-weight: 700;
  }
`;

const ImgFooter = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
`;
export default Footer;
