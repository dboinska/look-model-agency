import { v4 as uuidv4 } from 'uuid';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export const blog = [
  {
    id: uuidv4(),
    photo: '/photos/blog2s.jpg',
    category: 'studio',
    heading: 'fashion week',
    urlFb: 'https://www.facebook.com',
    iconFb: <FaFacebook />,
    urlTwitter: 'https://www.twitter.com',
    iconTwitter: <FaTwitter />,
    urlIg: 'https://www.instagram.com',
    iconIg: <FaInstagram />,
    date: '11 Mar 2022',
    // social: [
    //   {
    //     urlFb: 'https://www.facebook.com',
    //     iconFb: <FaFacebook />,
    //     urlTwitter: 'https://www.twitter.com',
    //     iconTwitter: <FaTwitter />,
    //     urlIg: 'https://www.instagram.com',
    //     iconIg: <FaInstagram />,
    //   },
    // ],
  },
  {
    id: uuidv4(),
    photo: '/photos/blog1s.jpg',
    category: 'fashion',
    heading: 'photo shoot for Vogue',
    urlFb: 'https://www.facebook.com',
    iconFb: <FaFacebook />,
    urlTwitter: 'https://www.twitter.com',
    iconTwitter: <FaTwitter />,
    urlIg: 'https://www.instagram.com',
    iconIg: <FaInstagram />,
    date: '03 Jan 2022',
    // social: [
    //   {
    //     urlFb: 'https://www.facebook.com',
    //     iconFb: <FaFacebook />,
    //     urlTwitter: 'https://www.twitter.com',
    //     iconTwitter: <FaTwitter />,
    //     urlIg: 'https://www.instagram.com',
    //     iconIg: <FaInstagram />,
    //   },
    // ],
  },
  {
    id: uuidv4(),
    photo: '/photos/blog3s.jpg',
    category: 'world news',
    heading: 'fashion week in Dubai 11-13 nov 2021',
    urlFb: 'https://www.facebook.com',
    iconFb: <FaFacebook />,
    urlTwitter: 'https://www.twitter.com',
    iconTwitter: <FaTwitter />,
    urlIg: 'https://www.instagram.com',
    iconIg: <FaInstagram />,
    date: '14 Nov 2021',
    // social: [
    //   {
    //     urlFb: 'https://www.facebook.com',
    //     iconFb: <FaFacebook />,
    //     urlTwitter: 'https://www.twitter.com',
    //     iconTwitter: <FaTwitter />,
    //     urlIg: 'https://www.instagram.com',
    //     iconIg: <FaInstagram />,
    //   },
    // ],
  },
];
