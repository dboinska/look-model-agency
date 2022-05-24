import Hero from './Hero';
import {
  FeatureSectionMotion,
  DivImg,
  DivTxt,
  cardVariantsRight,
  cardVariantsLeft,
} from './FeatureSection';
import Layout from './Layout';

import { FormValidationSchema } from './ContactForm';

const ContactPage = () => {
  return (
    <Layout>
      <FeatureSectionMotion
        padding="0"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <DivImg
          colorx="var(--light-gray)"
          // width="80%"
          variants={cardVariantsLeft}
        >
          <Hero
            margin="0 auto"
            padding="2rem"
            width="80%"
            imageUrl=""
            subHeading="get in touch &"
            heading="contact us"
            description="If you can't find the information or you want to ask a question, write to us or visit us at our headquarters"
            link="/contact/location"
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
