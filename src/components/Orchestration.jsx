import { useRef } from 'react';
import { motion } from 'framer-motion';

const Orchestration = ({ isSmall, links }) => {
  const list = {
    visible: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.3 },
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const linksRef = useRef(null);

  return (
    <motion.ul
      initial={isSmall && 'hidden'}
      animate="visible"
      variants={list}
      className="links list"
      ref={linksRef}
    >
      {links.map(link => {
        const { id, url, text } = link;
        return (
          <motion.li variants={item} key={id}>
            <a href={url}>{text}</a>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default Orchestration;
