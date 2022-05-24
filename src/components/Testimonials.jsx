import styled from 'styled-components';
import Testimonials from './TestimonialsCarousel';
import ColumnSection from './ColumnSection';
import { quotes } from '../data/quotes';
import { VscQuote } from 'react-icons/vsc';
import Heading from './Heading';
import { H2 } from './Headers';
import { Link } from 'react-router-dom';

const TestimonialsSubpage = () => {
  return (
    <ColumnSection
      backgroundColor="var(--main-color)"
      padding="6rem 2rem 5rem 2rem"
    >
      <div className="div__center">
        <VscQuoteStyled />
        <Heading heading="About us" headingPosition="center">
          <Link to="/testimonials">
            <H2>What People say</H2>
          </Link>
        </Heading>
        <Testimonials quotes={quotes} />
      </div>
    </ColumnSection>
  );
};

const VscQuoteStyled = styled(VscQuote)`
  font-size: 48px;
`;
export default TestimonialsSubpage;
