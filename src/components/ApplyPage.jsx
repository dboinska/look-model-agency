import Hero from './Hero';
import heroPhoto from '../photos/applyModel2.png';
import {
  FeatureSectionMotion,
  DivImg,
  DivTxt,
  cardVariantsRight,
  cardVariantsLeft,
} from './FeatureSection';
import Heading from './Heading';
import { H2 } from './Headers';
import Paragraph from './Paragraph';
import List from './List';
import { ourRequirements } from '../data/ourRequirements';
import modelB from '../photos/modelB.jpg';
import modelS from '../photos/modelS.jpg';
import { FormValidationSchema } from './ApplyForm';
import Layout from './Layout';

const ApplyPage = () => {
  return (
    <Layout>
      <Hero
        imageUrl={heroPhoto}
        subHeading="get to know us &"
        heading="APPLY NOW"
        description="If you would like to model with our agency, please fill out the form to contact us. Send us recent photos taken with a cell phone on a neutral background, without makeup or filters. Our agency will contact you."
        link="/testimonials"
        linkLabel="Read More"
      ></Hero>
      <FeatureSectionMotion
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <DivTxt variants={cardVariantsLeft}>
          <Heading heading="requirements">
            <H2>Become an elite model</H2>
          </Heading>
          <Paragraph>
            We are open for new collaborations. If you meet the following
            requirements, please submit your application via the form and expect
            to be contacted.
          </Paragraph>
          <List items={ourRequirements}></List>
          <Paragraph>
            We reserve the right to contact selected persons.
          </Paragraph>
        </DivTxt>
        <DivImg variants={cardVariantsRight}>
          <picture>
            <source media="(min-width:577px)" srcSet={modelB} />
            <img src={modelS} alt="model with afro hair" />
          </picture>
        </DivImg>
      </FeatureSectionMotion>
      <FormValidationSchema />
    </Layout>
  );
};
export default ApplyPage;
