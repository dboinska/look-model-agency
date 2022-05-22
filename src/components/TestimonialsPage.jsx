import Hero from './Hero';
import heroPhoto from '../photos/testimonialsImg.png';
import Layout from './Layout';
import TestimonialsSubpage from './Testimonials';

const TestimonialsPage = () => {
  return (
    <Layout>
      <Hero
        backgroundColor="var(--second-color)"
        imageUrl={heroPhoto}
        subHeading="let's see"
        heading="testimonials"
        description="Quisque pulvinar pharetra erat nec rutrum. Donec malesuada nisi at molestie elementum. Duis vel interdum eros. Vestibulum nibh sem, ornare egestas ultricies vitae, laoreet id. "
        link="\"
        linkLabel="back to main page"
      ></Hero>
      <TestimonialsSubpage />
    </Layout>
  );
};
export default TestimonialsPage;
