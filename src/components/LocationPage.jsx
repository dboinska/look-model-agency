import Hero from './Hero';
import {
  FeatureSectionMotion,
  DivImg,
  DivTxt,
  cardVariantsRight,
  cardVariantsLeft,
} from './FeatureSection';
import Heading from './Heading';
import { H2 } from './Headers';
import Layout from './Layout';

import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
});

const ContactPage = () => {
  return (
    <Layout>
      <FeatureSectionMotion
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        padding="0"
      >
        <DivImg
          className="onBig--order2"
          colorx="var(--light-gray)"
          width="auto"
          variants={cardVariantsRight}
        >
          <Hero
            width="80%"
            margin="0 auto"
            padding="2rem"
            subHeading="get in touch &"
            heading="visit us"
            description="Visit us at Jackson Street 567, San Diego, California, United States"
            link="/contact"
            linkLabel="write to us"
            backgroundColor="var(--light-gray)"
          ></Hero>
        </DivImg>
        <DivTxt
          className="onBig--order1"
          padding="6rem 2rem 2rem 2rem"
          variants={cardVariantsLeft}
        >
          <Heading heading="Our location">
            <H2>visit us</H2>
          </Heading>
          <div id="map">
            <MapWithNoSSR />
          </div>
        </DivTxt>
      </FeatureSectionMotion>
    </Layout>
  );
};

export default ContactPage;
