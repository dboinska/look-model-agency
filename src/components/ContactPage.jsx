import Hero from './Hero';
import {
  FeatureSectionMotion,
  DivImg,
  DivTxt,
  cardVariantsRight,
  cardVariantsLeft,
} from './FeatureSection';
import Layout from './Layout';

import heroPhoto from '../photos/map.png';

import { FormValidationSchema } from './ContactForm';

const ContactPage = () => {
  return (
    <Layout>
      <FeatureSectionMotion
        padding="0"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <DivImg
          colorx="var(--light-gray)"
          // width="80%"

          variants={cardVariantsLeft}
        >
          <Hero
            margin="0 auto"
            flexDirection="column"
            padding="0"
            width="80%"
            className="heroImgSmall"
            imageUrl={heroPhoto}
            subHeading="get in touch &"
            heading="contact us"
            description="If you can't find the information or you want to ask a question, write to us or visit us at our headquarters"
            link="/location"
            linkLabel="see locations"
            backgroundColor="var(--light-gray)"
          ></Hero>
        </DivImg>
        <DivTxt margin="4rem 0 0 0" variants={cardVariantsRight}>
          <FormValidationSchema />
        </DivTxt>
      </FeatureSectionMotion>
    </Layout>
  );
};

export default ContactPage;
