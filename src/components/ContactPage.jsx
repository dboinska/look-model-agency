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
          width="auto"
          variants={cardVariantsLeft}
        >
          <Hero
            margin="0 auto"
            imageUrl=""
            subHeading="get in touch &"
            heading="contact us"
            description="If you can't find the information or you want to ask a question, write to us or visit us at our headquarters"
            link="/contact/location"
            linkLabel="see locations"
            backgroundColor="var(--light-gray)"
          ></Hero>
        </DivImg>
        <DivTxt padding="6rem 2rem 2rem 2rem" variants={cardVariantsRight}>
          <FormValidationSchema />
        </DivTxt>
      </FeatureSectionMotion>
    </Layout>
  );
};

export default ContactPage;
