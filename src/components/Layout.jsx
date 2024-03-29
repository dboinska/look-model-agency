import Navbar from './Navbar';
import Footer from './Footer';
import SocialIcons from './SocialIcons';
import { motion } from 'framer-motion';
import GoToTop from './GoToTop';

const Layout = ({ footerHidden = false, children }) => {
  return (
    <>
      <GoToTop />
      <motion.div
        key="layout"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    </>
  );
};

export default Layout;
