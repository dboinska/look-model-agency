import Hero from './Hero';
import heroPhoto from '../photos/applyModel2.png';

const NotFoundPage = () => {
  return (
    <>
      <Hero
        imageUrl={heroPhoto}
        subHeading="page not found"
        heading="Error 404"
        description="The resource requested could not be found on this server"
        link="\"
        linkLabel="back to main page"
      ></Hero>
    </>
  );
};
export default NotFoundPage;
