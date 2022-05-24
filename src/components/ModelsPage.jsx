import Hero from './Hero';
import heroPhoto from '../photos/fashionShow.png';
import Layout from './Layout';
import ModelsTeam from './ModelsTeam';

const ModelsPage = () => {
  return (
    <Layout>
      <Hero
        backgroundColor="var(--second-color)"
        imageUrl={heroPhoto}
        subHeading="let's meet"
        heading="our models"
        description="Morbi aliquam imperdiet mauris, ut ultrices risus pellentesque non. Nam. Quisque pulvinar pharetra erat nec rutrum. Donec malesuada nisi at molestie elementum. Duis vel interdum eros. Vestibulum nibh sem, ornare egestas ultricies vitae, laoreet id. "
        link="\"
        linkLabel="read more"
      ></Hero>
      <ModelsTeam />
    </Layout>
  );
};
export default ModelsPage;
