import Hero from './Hero';
import heroPhoto from '../photos/notFoundPage.png';
import Layout from './Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <Hero
        backgroundColor="var(--salmon)"
        imageUrl={heroPhoto}
        subHeading="page not found"
        heading="Error 404"
        description="The resource requested could not be found on this server"
        link="\"
        linkLabel="back to main page"
      ></Hero>
    </Layout>
  );
};
export default NotFoundPage;
