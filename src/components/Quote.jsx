import styled from 'styled-components/macro';
import Paragraph from './Paragraph';

export const SingleQuote = ({ quote }) => {
  return (
    <div>
      <StyledQuote>
        <blockquote>
          <i>
            <Paragraph>{quote.quote}</Paragraph>
          </i>
        </blockquote>
        <figcaption>
          <span>{quote.author}</span>
          {quote.employee} of {quote.company}
        </figcaption>
      </StyledQuote>
    </div>
  );
};

const Quote = ({ quotes }) => {
  return quotes.map(quote => (
    <div>
      <StyledQuote key={quote.id}>
        <blockquote>
          <i>
            <Paragraph>{quote.quote}</Paragraph>
          </i>
        </blockquote>
        <figcaption>
          <span>{quote.author}</span>
          {quote.employee} of {quote.company}
        </figcaption>
      </StyledQuote>
    </div>
  ));
};

const StyledQuote = styled.figure`
  width: 100%;
  padding: 0;
  margin: 0;
  figcaption {
    padding: 2rem 0;
    span {
      font-weight: 700;
      font-size: 1.2rem;
      padding-right: 1rem;
    }
  }
`;

export default Quote;
