import Slider from 'react-slick';
import { SingleQuote } from './Quote';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SETTINGS = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
};

const Testimonials = ({ quotes }) => {
  return (
    <div>
      <Slider {...SETTINGS}>
        {quotes.map(quote => (
          <SingleQuote key={quote.id} quote={quote} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
