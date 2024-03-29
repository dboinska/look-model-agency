import { v4 as uuidv4 } from 'uuid';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const social = [
  {
    id: uuidv4(),
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: uuidv4(),
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: uuidv4(),
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: uuidv4(),
    url: 'https://www.behance.com',
    icon: <FaBehance />,
  },
];
