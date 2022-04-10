import Navbar from './Navbar';
import Footer from './Footer';
import SocialIcons from './SocialIcons';

const Layout = ({ footerHidden = false, children }) => {
  return (
    <>
      <Navbar socialIcons={() => <SocialIcons />} />
      <main>
        {children}
        {!footerHidden && (
          <Footer
            socialIcons={() => (
              <SocialIcons
                display="flex"
                justifyContent="left"
                variant="gray"
              />
            )}
          />
        )}
      </main>
    </>
  );
};

export default Layout;
